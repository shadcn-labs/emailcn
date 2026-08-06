import Link from "next/link";

import { BrandContextMenu } from "@/components/brand-context-menu";
import { CommandMenu } from "@/components/command-menu";
import { LogoMark } from "@/components/logo";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { NavItemGithub } from "@/components/nav-item-github";
import { SiteSettings } from "@/components/site-settings";
import { SponsorLink } from "@/components/sponsor-link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";
import { source } from "@/lib/source";

const navItems = [
  { href: ROUTES.DOCS, label: "Docs" },
  { href: ROUTES.DOCS_COMPONENTS, label: "Components" },
  // { href: ROUTES.DOCS_BLOCKS, label: "Blocks" },
];

const shadcnLabsProjects = [
  { href: "https://startercn.vercel.app", name: "startercn" },
  { href: "https://www.skills.sh/shadcn-labs/skills", name: "skills" },
  { href: "https://termcn.dev", name: "termcn" },
  { href: "https://framecn.dev", name: "framecn" },
  { href: "https://ogimagecn.com", name: "ogimagecn" },
  { href: "https://agentcn.run", name: "agentcn" },
  { href: "https://shadcn-cssinjs.com", name: "shadcn-cssinjs" },
  { href: "https://mcpcn.dev", name: "mcpcn" },
  { href: "https://emailcn.run", name: "emailcn" },
];

export const SiteHeader = () => (
  <header
    className="bg-background sticky top-0 z-50 w-full"
    style={{ viewTransitionName: "site-header" }}
  >
    <div className="container-wrapper 3xl:fixed:px-0 px-6">
      <div className="3xl:fixed:container flex h-(--header-height) items-center gap-2">
        <MobileNav
          items={navItems}
          tree={source.pageTree}
          className="flex lg:hidden"
        />
        <div className="flex items-center">
          <BrandContextMenu>
            <Button
              asChild
              variant="ghost"
              size="icon-sm"
              className="items-center justify-center gap-2 rounded-md text-sm font-semibold sm:w-auto sm:px-3"
              sound="click"
            >
              <Link
                href="https://shadcn-labs.com"
                transitionTypes={["nav-back"]}
              >
                <LogoMark className="size-5" />
                <span className="hidden sm:inline">Shadcn Labs</span>
              </Link>
            </Button>
          </BrandContextMenu>
          <span className="text-muted-foreground">/</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1 text-sm">
                {SITE.NAME}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-50"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {shadcnLabsProjects.map((project) => (
                <DropdownMenuItem key={project.name} asChild>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <MainNav items={navItems} className="hidden lg:flex" />
        <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
          <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
            <CommandMenu navItems={navItems} tree={source.pageTree} />
          </div>
          <NavItemGithub />
          <SponsorLink />
          <SiteSettings />
        </div>
      </div>
    </div>
  </header>
);
