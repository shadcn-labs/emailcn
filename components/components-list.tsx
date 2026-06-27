import Link from "next/link";

import { isComponentsFolder } from "@/lib/docs";
import type { PageTreeFolder, PageTreePage } from "@/lib/page-tree";
import {
  childFolders,
  findChildFolder,
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
    const fallback = pages.length > 0 ? pages : getFolderPages(folder);
    if (fallback.length === 0) {
      return null;
    }
    return <ComponentGrid className={className} pages={fallback} />;
  }

  const baseFolder = findChildFolder(folder, base);
  if (!baseFolder) {
    return null;
  }

  if (category) {
    const categoryFolder = findChildFolder(baseFolder, category);
    if (!categoryFolder) {
      return null;
    }

    const target = subcategory
      ? findChildFolder(categoryFolder, subcategory)
      : categoryFolder;
    if (!target) {
      return null;
    }

    return (
      <ComponentGrid className={className} pages={getFolderEntries(target)} />
    );
  }

  const categories = childFolders(baseFolder);
  if (categories.length === 0) {
    return null;
  }

  return <CategoryGrid className={className} categories={categories} />;
};
