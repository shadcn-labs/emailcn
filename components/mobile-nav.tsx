"use client";

import type { Root as PageTreeRoot } from "fumadocs-core/page-tree";
import type { LinkProps } from "next/link";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TOP_LEVEL_SECTIONS } from "@/constants/nav";
import { ROUTES } from "@/constants/routes";
import { EXCLUDED_SECTIONS, isComponentsFolder } from "@/lib/docs";
import type { FolderItem } from "@/lib/page-tree";
import {
  getCategoryFolders,
  getCurrentBase,
  getFolderItems,
} from "@/lib/page-tree";
import { cn } from "@/lib/utils";

const MobileLink = ({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: LinkProps & {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push(href.toString());
    onOpenChange?.(false);
  }, [router, href, onOpenChange]);

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn("text-2xl font-medium", className)}
      {...props}
    >
      {children}
    </Link>
  );
};

const MobileNavGroup = ({
  label,
  items,
  setOpen,
}: {
  label: React.ReactNode;
  items: FolderItem[];
  setOpen: (open: boolean) => void;
}) => {
  if (items.length === 0) {
    return null;
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="text-muted-foreground text-sm font-medium">{label}</div>
      <div className="flex flex-col gap-3">
        {items.map((item) => {
          if (item.type === "page") {
            return (
              <MobileLink
                key={item.page.url}
                href={item.page.url}
                onOpenChange={setOpen}
              >
                {item.page.name}
              </MobileLink>
            );
          }
          return (
            <div
              className="flex flex-col gap-3"
              key={item.$id ?? item.index?.url}
            >
              {item.index ? (
                <MobileLink href={item.index.url} onOpenChange={setOpen}>
                  {item.name}
                </MobileLink>
              ) : (
                <div className="text-2xl font-medium">{item.name}</div>
              )}
              <div className="flex flex-col gap-2 border-l pl-4">
                {item.pages.map((page) => (
                  <MobileLink
                    className="text-lg"
                    key={page.url}
                    href={page.url}
                    onOpenChange={setOpen}
                  >
                    {page.name}
                  </MobileLink>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const MobileNav = ({
  items,
  tree,
  className,
}: {
  items: { href: string; label: string }[];
  tree: PageTreeRoot;
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const currentBase = getCurrentBase(pathname);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "extend-touch-target size-8 touch-manipulation !p-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent",
            className
          )}
        >
          <div className="relative flex size-8 items-center justify-center">
            <div className="relative size-4">
              <span
                className={cn(
                  "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                  open ? "top-[0.4rem] -rotate-45" : "top-1"
                )}
              />
              <span
                className={cn(
                  "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                  open ? "top-[0.4rem] rotate-45" : "top-2.5"
                )}
              />
            </div>
            <span className="sr-only">Toggle Menu</span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="bg-background/90 no-scrollbar h-(--radix-popper-available-height) w-(--radix-popper-available-width) overflow-y-auto rounded-none border-none p-0 shadow-none backdrop-blur duration-100"
        align="start"
        side="bottom"
        alignOffset={-16}
        sideOffset={14}
      >
        <div className="flex flex-col gap-12 overflow-auto px-6 py-6">
          <div className="flex flex-col gap-3">
            <MobileLink href={ROUTES.HOME} onOpenChange={setOpen}>
              Home
            </MobileLink>
            {items.map((item) => (
              <MobileLink
                key={item.href}
                href={item.href}
                onOpenChange={setOpen}
              >
                {item.label}
              </MobileLink>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-sm font-medium text-muted-foreground">
              Sections
            </div>
            <div className="flex flex-col gap-3">
              {TOP_LEVEL_SECTIONS.map(({ name, href }) => (
                <MobileLink key={name} href={href} onOpenChange={setOpen}>
                  {name}
                </MobileLink>
              ))}
            </div>
          </div>
          {tree.children.map((item) => {
            if (item.type !== "folder") {
              return null;
            }
            if (EXCLUDED_SECTIONS.has(item.$id ?? "")) {
              return null;
            }

            if (isComponentsFolder(item)) {
              return getCategoryFolders(item, currentBase).map((category) => (
                <MobileNavGroup
                  key={category.$id}
                  label={category.name}
                  items={getFolderItems(category)}
                  setOpen={setOpen}
                />
              ));
            }

            return (
              <MobileNavGroup
                key={item.$id}
                label={item.name}
                items={getFolderItems(item)}
                setOpen={setOpen}
              />
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
};
