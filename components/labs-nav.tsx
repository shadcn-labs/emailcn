"use client";

import { ChevronDownIcon } from "lucide-react";
import { useCallback, useRef, useState } from "react";

import type { ArrowUpRightIconHandle } from "@/components/animated-icons/arrow-up-right";
import { ArrowUpRightIcon } from "@/components/animated-icons/arrow-up-right";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LABS_NAV_SECTIONS } from "@/constants/nav";
import type { LabsNavLink } from "@/constants/nav";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

const SECTION_WIDTH: Record<string, string> = {
  registries: "w-40",
  skills: "w-72",
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-muted-foreground text-sm font-medium">{children}</div>
);

const ExternalLinkLabel = ({
  name,
  iconRef,
  size = 16,
  iconClassName,
}: {
  name: string;
  iconRef: React.RefObject<ArrowUpRightIconHandle | null>;
  size?: number;
  iconClassName?: string;
}) => (
  <>
    {name}
    <ArrowUpRightIcon
      ref={iconRef}
      size={size}
      className={cn("inline-flex shrink-0", iconClassName)}
    />
  </>
);

/** Full-width row hit target — matches Chat SDK mega-menu outlines. */
const desktopLinkClassName =
  "flex w-full flex-row items-center gap-1 whitespace-nowrap rounded-none bg-transparent p-0 text-base font-normal leading-normal underline-offset-4 decoration-muted-foreground/50 decoration-1 hover:bg-transparent hover:underline focus:bg-transparent focus:underline data-[active=true]:bg-transparent";

const DesktopNavLink = ({ item }: { item: LabsNavLink }) => {
  const iconRef = useRef<ArrowUpRightIconHandle>(null);

  const handleMouseEnter = useCallback(() => {
    iconRef.current?.startAnimation();
  }, []);

  const handleMouseLeave = useCallback(() => {
    iconRef.current?.stopAnimation();
  }, []);

  return (
    <NavigationMenuLink
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={desktopLinkClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ExternalLinkLabel name={item.name} iconRef={iconRef} size={16} />
    </NavigationMenuLink>
  );
};

const MobileNavLink = ({
  item,
  onNavigate,
}: {
  item: LabsNavLink;
  onNavigate: () => void;
}) => {
  const iconRef = useRef<ArrowUpRightIconHandle>(null);

  const handleMouseEnter = useCallback(() => {
    iconRef.current?.startAnimation();
  }, []);

  const handleMouseLeave = useCallback(() => {
    iconRef.current?.stopAnimation();
  }, []);

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onNavigate}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="inline-flex items-center gap-1 text-2xl font-medium"
    >
      <ExternalLinkLabel name={item.name} iconRef={iconRef} size={24} />
    </a>
  );
};

const DesktopSection = ({
  title,
  items,
  className,
}: {
  title: string;
  items: readonly LabsNavLink[];
  className?: string;
}) => (
  <div className={cn("flex flex-col gap-3", className)}>
    <SectionTitle>{title}</SectionTitle>
    <ul className="flex flex-col gap-1">
      {items.map((item) => (
        <li key={item.href} className="w-full">
          <DesktopNavLink item={item} />
        </li>
      ))}
    </ul>
  </div>
);

const LabsNavMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1 text-base hover:bg-transparent focus-visible:bg-transparent data-[state=open]:bg-transparent dark:hover:bg-transparent"
        >
          {SITE.NAME}
          <ChevronDownIcon
            className={cn(
              "size-3 transition-transform duration-200",
              open && "rotate-180"
            )}
            strokeWidth={2.5}
          />
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
          {LABS_NAV_SECTIONS.map((section) => (
            <div key={section.id} className="flex flex-col gap-4">
              <SectionTitle>{section.title}</SectionTitle>
              <div className="flex flex-col gap-3">
                {section.items.map((item) => (
                  <MobileNavLink
                    key={item.href}
                    item={item}
                    onNavigate={() => setOpen(false)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

const LabsNavDesktop = () => {
  const [value, setValue] = useState("");

  return (
    <>
      {value ? (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-x-0 top-(--header-height) bottom-0 z-20 cursor-default bg-background/60"
          onClick={() => setValue("")}
        />
      ) : null}
      <NavigationMenu
        value={value}
        onValueChange={setValue}
        viewport={false}
        delayDuration={0}
        className="z-50 max-w-none justify-start"
      >
        <NavigationMenuList className="justify-start">
          <NavigationMenuItem value="labs">
            <NavigationMenuTrigger className="h-auto gap-1 bg-transparent px-3 py-1.5 text-base font-medium hover:bg-transparent hover:text-foreground focus:bg-transparent focus:text-foreground data-[state=open]:bg-transparent data-[state=open]:text-foreground data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent">
              {SITE.NAME}
            </NavigationMenuTrigger>
            {/* Chat SDK-style fixed panel: flush under header, hover bridge, no zoom. */}
            <NavigationMenuContent className="fixed inset-x-0 top-(--header-height) z-30 w-screen bg-background p-0 shadow-[0_1px_0_0_var(--border)] before:absolute before:inset-x-0 before:-top-3 before:h-3 before:content-[''] data-[motion^=from-]:animate-none data-[motion^=to-]:animate-none data-[state=closed]:hidden md:fixed md:w-screen dark:bg-black">
              {/* Match header shell + brand button sm:px-3 so Registries aligns with Shadcn Labs. */}
              <div className="container-wrapper 3xl:fixed:px-0 px-6">
                <div className="3xl:fixed:container flex w-fit gap-8 py-4 pl-3">
                  {LABS_NAV_SECTIONS.map((section) => (
                    <DesktopSection
                      key={section.id}
                      title={section.title}
                      items={section.items}
                      className={SECTION_WIDTH[section.id] ?? "w-44"}
                    />
                  ))}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export const LabsNav = () => (
  <>
    <div className="lg:hidden">
      <LabsNavMobile />
    </div>
    <div className="hidden lg:block">
      <LabsNavDesktop />
    </div>
  </>
);
