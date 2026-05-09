import Link from "next/link";

import { isBlocksFolder, isComponentsFolder } from "@/lib/docs";
import type { PageTreeFolder, PageTreePage } from "@/lib/page-tree";
import { getCategoryFoldersForBase, getPagesFromFolder } from "@/lib/page-tree";
import { source } from "@/lib/source";
import { cn } from "@/lib/utils";
import { DEFAULT_BASE } from "@/registry/bases";

const getFolder = (name: string): PageTreeFolder | undefined => {
  for (const node of source.pageTree.children) {
    if (
      node.type === "folder" &&
      (node.name === name || node.$id === name.toLowerCase())
    ) {
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
      >
        {component.name}
      </Link>
    ))}
  </div>
);

export const ComponentsList = ({
  folderName = "Components",
  category,
  base = DEFAULT_BASE,
  className,
}: {
  folderName?: string;
  category?: string;
  base?: string;
  className?: string;
}) => {
  const folder = getFolder(folderName);
  if (!folder) {
    return null;
  }

  if (!isComponentsFolder(folder) && !isBlocksFolder(folder)) {
    const pages = getPagesFromFolder(folder, { includeIndex: false });
    if (pages.length === 0) {
      return null;
    }
    return <ComponentGrid className={className} pages={pages} />;
  }

  const categories = getCategoryFoldersForBase(folder, base);

  if (category) {
    const match = categories.find(
      (cat) =>
        cat.$id === category ||
        String(cat.$id ?? "").endsWith(`/${category}`) ||
        (typeof cat.name === "string" &&
          cat.name.toLowerCase() === category.toLowerCase())
    );
    if (!match) {
      return null;
    }
    return (
      <ComponentGrid
        className={className}
        pages={getPagesFromFolder(match, { includeIndex: false })}
      />
    );
  }

  if (categories.length === 0) {
    return null;
  }

  const allPages: PageTreePage[] = [];
  for (const cat of categories) {
    allPages.push(...getPagesFromFolder(cat, { includeIndex: false }));
  }

  if (allPages.length === 0) {
    return null;
  }

  return <ComponentGrid className={className} pages={allPages} />;
};
