import Link from "next/link";

import { isComponentsFolder } from "@/lib/docs";
import type { PageTreeFolder, PageTreePage } from "@/lib/page-tree";
import {
  getCategoryFolders,
  getFolderEntries,
  getFolderPages,
} from "@/lib/page-tree";
import { source } from "@/lib/source";
import { cn } from "@/lib/utils";
import { DEFAULT_BASE } from "@/registry/bases";

const getFolder = (name: string): PageTreeFolder | undefined => {
  for (const node of source.pageTree.children) {
    if (node.type === "folder" && node.name === name) {
      return node;
    }
  }
};

const matchFolder = (
  folders: PageTreeFolder[],
  key: string
): PageTreeFolder | undefined =>
  folders.find(
    (folder) =>
      folder.$id === key ||
      String(folder.$id ?? "").endsWith(`/${key}`) ||
      (typeof folder.name === "string" &&
        (folder.name.toLowerCase() === key.toLowerCase() ||
          folder.name.split(" ").join("-").toLowerCase() === key.toLowerCase()))
  );

const getChildFolders = (folder: PageTreeFolder): PageTreeFolder[] =>
  folder.children.filter((c): c is PageTreeFolder => c.type === "folder");

const ComponentGrid = ({
  className,
  pages,
}: {
  className?: string;
  pages: PageTreePage[];
}) => (
  <div
    className={cn(
      "grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6 xl:gap-x-20",
      className
    )}
  >
    {pages.map((component) => (
      <Link
        key={component.$id}
        href={component.url}
        className="inline-flex items-center gap-2 text-lg font-medium underline-offset-4 hover:underline md:text-base"
        transitionTypes={["nav-forward"]}
      >
        {component.name}
      </Link>
    ))}
  </div>
);

const CategoryGrid = ({
  className,
  categories,
}: {
  className?: string;
  categories: PageTreeFolder[];
}) => (
  <div className={cn("flex flex-col gap-10", className)}>
    {categories.map((cat) => {
      const pages = getFolderEntries(cat);
      if (pages.length === 0) {
        return null;
      }

      return (
        <div key={cat.$id}>
          <h3 className="font-heading mb-4 text-lg font-medium tracking-tight">
            {cat.name}
          </h3>
          <ComponentGrid pages={pages} />
        </div>
      );
    })}
  </div>
);

export const ComponentsList = ({
  folderName = "Components",
  category,
  subcategory,
  base = DEFAULT_BASE,
  className,
}: {
  folderName?: string;
  category?: string;
  subcategory?: string;
  base?: string;
  className?: string;
}) => {
  const folder = getFolder(folderName);
  if (!folder) {
    return null;
  }

  if (!isComponentsFolder(folder)) {
    const pages = getFolderPages(folder, base);
    if (pages.length > 0) {
      return <ComponentGrid className={className} pages={pages} />;
    }
    const allPages = getFolderPages(folder);
    if (allPages.length === 0) {
      return null;
    }
    return <ComponentGrid className={className} pages={allPages} />;
  }

  const categories = getCategoryFolders(folder, base);

  if (category) {
    const match = matchFolder(categories, category);
    if (!match) {
      return null;
    }

    if (subcategory) {
      const subMatch = matchFolder(getChildFolders(match), subcategory);
      if (!subMatch) {
        return null;
      }
      return (
        <ComponentGrid
          className={className}
          pages={getFolderEntries(subMatch)}
        />
      );
    }

    return (
      <ComponentGrid className={className} pages={getFolderEntries(match)} />
    );
  }

  if (categories.length === 0) {
    return null;
  }

  return <CategoryGrid className={className} categories={categories} />;
};
