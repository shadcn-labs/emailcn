"use client";

import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { ROUTES } from "@/constants/routes";
import { EXCLUDED_SECTIONS, isComponentsFolder, PAGES_NEW } from "@/lib/docs";
import type { FolderItem } from "@/lib/page-tree";
import {
  getCategoryFolders,
  getCurrentBase,
  getFolderItems,
} from "@/lib/page-tree";
import type { source } from "@/lib/source";

const TOP_LEVEL_SECTIONS = [
  { href: ROUTES.DOCS, name: "Introduction" },
  { href: ROUTES.DOCS_INSTALLATION, name: "Installation" },
  { href: ROUTES.DOCS_COMPONENTS, name: "Components" },
  // { href: ROUTES.DOCS_BLOCKS, name: "Blocks" },
  { href: ROUTES.DOCS_MCP, name: "MCP" },
  { href: ROUTES.DOCS_REGISTRY, name: "Registry" },
  { href: ROUTES.LLMS, name: "llms.txt" },
  { href: ROUTES.DOCS_CHANGELOG, name: "Changelog" },
];

const MENU_BUTTON_CLS =
  "relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent 3xl:fixed:w-full 3xl:fixed:max-w-48";

const SidebarMenuItemLink = ({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}) => (
  <SidebarMenuItem>
    <SidebarMenuButton asChild className={MENU_BUTTON_CLS} isActive={isActive}>
      <Link href={href}>
        <span className="absolute inset-0 flex w-(--sidebar-menu-width) bg-transparent" />
        {children}
        {PAGES_NEW.includes(href) && (
          <span className="flex size-2 rounded-full bg-blue-500" title="New" />
        )}
      </Link>
    </SidebarMenuButton>
  </SidebarMenuItem>
);

const SidebarFamilyGroup = ({
  group,
  pathname,
}: {
  group: Extract<FolderItem, { type: "group" }>;
  pathname: string;
}) => {
  const containsActive =
    group.index?.url === pathname ||
    group.pages.some((page) => page.url === pathname);
  const [open, setOpen] = useState(containsActive);

  useEffect(() => {
    if (containsActive) {
      setOpen(true);
    }
  }, [containsActive]);

  return (
    <Collapsible
      asChild
      className="group/collapsible"
      onOpenChange={setOpen}
      open={open}
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            className={MENU_BUTTON_CLS}
            isActive={group.index?.url === pathname}
          >
            {group.name}
            <ChevronRightIcon className="size-3 transition-transform group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="mr-0 pr-0">
            {group.pages.map((page) => (
              <SidebarMenuSubItem key={page.url}>
                <SidebarMenuSubButton
                  asChild
                  className="h-auto min-h-7 py-1 text-[0.8rem] whitespace-normal"
                  isActive={page.url === pathname}
                  size="sm"
                >
                  <Link href={page.url}>{page.name}</Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};

const SidebarPageGroup = ({
  label,
  items,
  pathname,
}: {
  label: React.ReactNode;
  items: FolderItem[];
  pathname: string;
}) => {
  if (items.length === 0) {
    return null;
  }
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-muted-foreground font-medium">
        {label}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) =>
            item.type === "page" ? (
              <SidebarMenuItemLink
                key={item.page.url}
                href={item.page.url}
                isActive={item.page.url === pathname}
              >
                {item.page.name}
              </SidebarMenuItemLink>
            ) : (
              <SidebarFamilyGroup
                group={item}
                key={item.$id ?? item.index?.url}
                pathname={pathname}
              />
            )
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export const DocsSidebar = ({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  tree: typeof source.pageTree;
}) => {
  const pathname = usePathname();
  const currentBase = getCurrentBase(pathname);

  return (
    <Sidebar
      className="flex-col text-sidebar-foreground sticky top-[calc(var(--header-height)+0.6rem)] z-30 hidden h-[calc(100svh-10rem)] overscroll-none bg-transparent [--sidebar-menu-width:--spacing(48)] lg:flex"
      collapsible="none"
      {...props}
    >
      <div className="h-9" />
      <div className="absolute top-8 z-10 h-8 w-(--sidebar-menu-width) shrink-0 bg-linear-to-b from-background via-background/80 to-background/50 blur-xs" />
      <div className="absolute top-12 right-2 bottom-0 hidden h-full w-px bg-linear-to-b from-transparent via-border to-transparent lg:flex" />
      <SidebarContent className="mx-auto no-scrollbar w-(--sidebar-menu-width) overflow-x-hidden px-2">
        <SidebarGroup className="pt-6">
          <SidebarGroupLabel className="text-muted-foreground font-medium">
            Sections
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {TOP_LEVEL_SECTIONS.map(({ name, href }) => (
                <SidebarMenuItemLink
                  key={name}
                  href={href}
                  isActive={
                    href === ROUTES.DOCS
                      ? pathname === href
                      : pathname.startsWith(href)
                  }
                >
                  {name}
                </SidebarMenuItemLink>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {tree.children.map((item) => {
          if (item.type !== "folder") {
            return null;
          }
          if (EXCLUDED_SECTIONS.has(item.$id ?? "")) {
            return null;
          }

          if (isComponentsFolder(item)) {
            return getCategoryFolders(item, currentBase).map((category) => (
              <SidebarPageGroup
                key={category.$id}
                label={category.name}
                items={getFolderItems(category)}
                pathname={pathname}
              />
            ));
          }

          return (
            <SidebarPageGroup
              key={item.$id}
              label={item.name}
              items={getFolderItems(item)}
              pathname={pathname}
            />
          );
        })}
        <div className="sticky -bottom-1 z-10 h-16 shrink-0 bg-linear-to-t from-background via-background/80 to-background/50 blur-xs" />
      </SidebarContent>
    </Sidebar>
  );
};
