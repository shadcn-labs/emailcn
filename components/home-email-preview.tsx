import {
  BoxIcon,
  BracesIcon,
  ChevronRightIcon,
  PackageCheckIcon,
  SparklesIcon,
  TruckIcon,
} from "lucide-react";
import Image from "next/image";

import { LogoMark } from "@/components/logo";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const homeEmailComponentCatalog = {
  "billing-order-summary": {
    codeName: "BillingOrderSummary",
    description:
      "A structured billing and delivery summary for transactional emails.",
    docsPath: "ecommerce/order-summary/billing-order-summary",
    label: "Billing order summary",
  },
  "call-to-action": {
    codeName: "CallToAction",
    description:
      "A focused call to action with a clear headline, supporting copy, and button.",
    docsPath: "marketing/cta/call-to-action",
    label: "Call to action",
  },
  content: {
    codeName: "Content",
    description:
      "A flexible content section for headings, paragraphs, and supporting messages.",
    docsPath: "marketing/content",
    label: "Content",
  },
  "header-with-logo": {
    codeName: "HeaderWithLogo",
    description:
      "A clean, responsive header that keeps the brand immediately recognizable.",
    docsPath: "marketing/headers/header-with-logo",
    label: "Header with logo",
  },
  "header-with-logo-and-menu": {
    codeName: "HeaderWithLogoAndMenu",
    description:
      "A responsive brand header with a logo and configurable navigation links.",
    docsPath: "marketing/headers/header-with-logo-and-menu",
    label: "Header with logo & menu",
  },
  "image-grid-hero": {
    codeName: "ImageGridHero",
    description:
      "A campaign-ready hero that pairs focused copy with a flexible image grid.",
    docsPath: "marketing/heroes/image-grid-hero",
    label: "Image grid hero",
  },
  "navigation-footer": {
    codeName: "NavigationFooter",
    description:
      "A polished email footer with navigation, brand details, and legal links.",
    docsPath: "marketing/footers/navigation-footer",
    label: "Navigation footer",
  },
  "order-summary-table": {
    codeName: "OrderSummaryTable",
    description:
      "A clear line-item summary with product details, totals, and payment context.",
    docsPath: "ecommerce/order-summary/order-summary-table",
    label: "Order summary table",
  },
  "product-list": {
    codeName: "ProductList",
    description:
      "A structured product list with images, descriptions, pricing, and details.",
    docsPath: "ecommerce/product-list",
    label: "Product list",
  },
  progress: {
    codeName: "Progress",
    description:
      "A visual sequence for onboarding steps, milestones, or delivery progress.",
    docsPath: "ui-elements/progress",
    label: "Progress",
  },
  "utility-footer": {
    codeName: "UtilityFooter",
    description:
      "A compact footer for support, preferences, legal copy, and unsubscribe links.",
    docsPath: "marketing/footers/utility-footer",
    label: "Utility footer",
  },
} as const;

export type ComponentPartId = keyof typeof homeEmailComponentCatalog;
export type EmailRecipeId =
  | "product-drop"
  | "welcome-onboarding"
  | "order-confirmed";
export type CodeOutput = "react" | "html" | "text";
export type HomeEmailBase = "react-email" | "mjml-react" | "jsx-email";

export const homeEmailBases: {
  id: HomeEmailBase;
  label: string;
}[] = [
  { id: "react-email", label: "React Email" },
  { id: "mjml-react", label: "MJML React" },
  { id: "jsx-email", label: "JSX Email" },
];

export const homeEmailCodeOutputs: { id: CodeOutput; label: string }[] = [
  { id: "react", label: "React" },
  { id: "html", label: "HTML" },
  { id: "text", label: "Plain text" },
];

export interface EmailRecipe {
  actionHref: string;
  actionLabel: string;
  componentIds: readonly ComponentPartId[];
  defaultComponentId: ComponentPartId;
  description: string;
  eyebrow: string;
  filename: string;
  heading: string;
  id: EmailRecipeId;
  name: string;
  previewText: string;
}

export const homeEmailPreviews = [
  {
    actionHref: "https://emailcn.run/docs/components",
    actionLabel: "Explore the collection",
    componentIds: [
      "header-with-logo-and-menu",
      "image-grid-hero",
      "product-list",
      "call-to-action",
      "navigation-footer",
    ],
    defaultComponentId: "image-grid-hero",
    description:
      "Production-ready sections for campaigns that look considered, without starting from a blank canvas.",
    eyebrow: "The component drop · 01",
    filename: "product-drop-email.tsx",
    heading: "Design emails at component speed.",
    id: "product-drop",
    name: "Product drop",
    previewText: "A new component collection from emailcn",
  },
  {
    actionHref: "https://emailcn.run/docs/installation",
    actionLabel: "Build your first email",
    componentIds: [
      "header-with-logo",
      "content",
      "progress",
      "call-to-action",
      "utility-footer",
    ],
    defaultComponentId: "content",
    description:
      "Start with a component, make it yours, and send confidently. Everything you need is ready.",
    eyebrow: "Welcome aboard",
    filename: "welcome-onboarding-email.tsx",
    heading: "Your email workspace is ready.",
    id: "welcome-onboarding",
    name: "Welcome aboard",
    previewText: "Welcome to your new email workspace",
  },
  {
    actionHref: "https://example.com/orders/ECN-2048",
    actionLabel: "Track your order",
    componentIds: [
      "header-with-logo",
      "content",
      "order-summary-table",
      "billing-order-summary",
      "call-to-action",
      "utility-footer",
    ],
    defaultComponentId: "order-summary-table",
    description:
      "Order ECN-2048 is confirmed and is being prepared for delivery.",
    eyebrow: "Order #ECN-2048",
    filename: "order-confirmed-email.tsx",
    heading: "Thanks, your order is confirmed.",
    id: "order-confirmed",
    name: "Order confirmed",
    previewText: "Your Northstar order is confirmed",
  },
] as const satisfies readonly EmailRecipe[];

export const getHomeEmailSource = (
  recipe: EmailRecipe,
  base: HomeEmailBase
) => {
  const shell =
    base === "mjml-react"
      ? {
          close: "Mjml",
          import: 'import { Mjml } from "@faire/mjml-react";',
          open: "Mjml",
        }
      : {
          close: "Html",
          import: `import { Html } from "${
            base === "jsx-email" ? "jsx-email" : "react-email"
          }";`,
          open: "Html",
        };
  const imports = recipe.componentIds
    .map((id) => {
      const component = homeEmailComponentCatalog[id];
      return `import { ${component.codeName} } from "@/components/email/${id}";`;
    })
    .join("\n");
  const components = recipe.componentIds
    .map((id) => `      <${homeEmailComponentCatalog[id].codeName} />`)
    .join("\n");
  const functionName = recipe.id
    .split("-")
    .map((part) => `${part[0]?.toUpperCase()}${part.slice(1)}`)
    .join("");

  return `${shell.import}
${imports}

export function ${functionName}Email() {
  return (
    <${shell.open}>
${components}
    </${shell.close}>
  );
}`;
};

const productImages = [
  {
    alt: "Red sneaker on a red background",
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=640&h=640&q=85",
  },
  {
    alt: "White t-shirt on a neutral background",
    src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=640&h=640&q=85",
  },
  {
    alt: "Black t-shirt on a dark background",
    src: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=640&h=640&q=85",
  },
] as const;

const SelectableEmailPart = ({
  children,
  id,
  selectedId,
  onSelect,
  className,
}: {
  children: React.ReactNode;
  id: ComponentPartId;
  selectedId: ComponentPartId;
  onSelect: (id: ComponentPartId) => void;
  className?: string;
}) => {
  const isSelected = selectedId === id;

  return (
    <button
      type="button"
      aria-label={`Inspect ${homeEmailComponentCatalog[id].label}`}
      aria-pressed={isSelected}
      className={cn(
        "group/email-part relative block w-full cursor-pointer text-left outline-none transition-[box-shadow] duration-200",
        "hover:z-10 hover:shadow-[inset_0_0_0_2px_rgb(96_165_250)]",
        "focus-visible:z-10 focus-visible:shadow-[inset_0_0_0_3px_rgb(59_130_246)]",
        isSelected && "z-10 shadow-[inset_0_0_0_2px_rgb(59_130_246)]",
        className
      )}
      onClick={() => onSelect(id)}
    >
      {children}
      <Badge
        className={cn(
          "pointer-events-none absolute top-0 right-3 z-20 -translate-y-1/2 bg-blue-600 py-1 text-[9px] leading-none font-semibold tracking-wide text-white uppercase shadow-sm transition-opacity",
          isSelected
            ? "opacity-100"
            : "opacity-0 group-hover/email-part:opacity-100 group-focus-visible/email-part:opacity-100"
        )}
      >
        <BracesIcon className="size-2.5" aria-hidden="true" />
        {id}
      </Badge>
    </button>
  );
};

const ProductDropPreview = ({
  selectedId,
  onSelect,
}: EmailPreviewContentProps) => (
  <div className="w-full bg-background font-sans text-foreground">
    <SelectableEmailPart
      id="header-with-logo-and-menu"
      selectedId={selectedId}
      onSelect={onSelect}
      className="bg-background px-5 py-4 sm:px-7"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <LogoMark className="size-4" />
          </span>
          emailcn
        </div>
        <div className="flex items-center gap-4 text-[10px] font-medium text-muted-foreground sm:gap-6 sm:text-xs">
          <span>Components</span>
          <span>Examples</span>
          <span>Docs</span>
        </div>
      </div>
    </SelectableEmailPart>

    <SelectableEmailPart
      id="image-grid-hero"
      selectedId={selectedId}
      onSelect={onSelect}
      className="bg-muted/50 px-5 py-8 sm:px-8 sm:py-10"
    >
      <div className="mx-auto max-w-md text-center">
        <p className="mb-3 text-[9px] font-bold tracking-[0.24em] text-blue-600 uppercase dark:text-blue-400">
          The component drop · 01
        </p>
        <h3 className="text-[28px] leading-[1.05] font-semibold tracking-[-0.045em] text-balance sm:text-[38px]">
          Design emails at component speed.
        </h3>
        <p className="mx-auto mt-4 max-w-sm text-[11px] leading-5 text-muted-foreground sm:text-[13px]">
          Production-ready sections for campaigns that look considered, without
          starting from a blank canvas.
        </p>
      </div>

      <div className="mt-7 grid grid-cols-[0.85fr_1.15fr_0.85fr] items-center gap-2 sm:gap-3">
        {productImages.map((image, index) => (
          <div
            key={image.src}
            className={cn(
              "relative overflow-hidden rounded-md bg-muted",
              index === 1 ? "aspect-[4/5]" : "aspect-square"
            )}
          >
            <Image
              fill
              alt={image.alt}
              className="object-cover"
              loading={index === 1 ? "eager" : "lazy"}
              sizes="(max-width: 640px) 28vw, 180px"
              src={image.src}
            />
          </div>
        ))}
      </div>

      <div className="mt-7 text-center">
        <span className="inline-flex h-9 items-center rounded-md bg-primary px-5 text-[11px] font-semibold text-primary-foreground">
          Explore the collection
          <ChevronRightIcon className="ml-1.5 size-3" aria-hidden="true" />
        </span>
      </div>
    </SelectableEmailPart>

    <SelectableEmailPart
      id="product-list"
      selectedId={selectedId}
      onSelect={onSelect}
      className="bg-background px-5 py-8 sm:px-8 sm:py-10"
    >
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-[9px] font-bold tracking-[0.18em] text-blue-600 uppercase dark:text-blue-400">
            Featured
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight sm:text-xl">
            This week&apos;s building blocks
          </h3>
        </div>
        <span className="text-[10px] text-muted-foreground">View all →</span>
      </div>

      <div className="divide-y divide-border">
        {[
          {
            description: "Image-led campaign opening",
            gradient: "from-chart-1/20 to-chart-2/30",
            name: "Image Grid Hero",
            tag: "Marketing",
          },
          {
            description: "Flexible catalog presentation",
            gradient: "from-chart-3/20 to-chart-4/30",
            name: "Product List",
            tag: "Ecommerce",
          },
        ].map((product) => (
          <div
            key={product.name}
            className="grid grid-cols-[64px_1fr_auto] items-center gap-3 py-3 sm:grid-cols-[72px_1fr_auto] sm:gap-4"
          >
            <div
              className={cn(
                "flex aspect-square items-center justify-center rounded-lg bg-linear-to-br",
                product.gradient
              )}
            >
              <BoxIcon
                className="size-5 text-foreground/70"
                aria-hidden="true"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold sm:text-sm">
                {product.name}
              </p>
              <p className="mt-1 truncate text-[10px] text-muted-foreground sm:text-[11px]">
                {product.description}
              </p>
            </div>
            <span className="rounded-full border px-2 py-1 text-[9px] font-medium text-muted-foreground">
              {product.tag}
            </span>
          </div>
        ))}
      </div>
    </SelectableEmailPart>

    <SelectableEmailPart
      id="call-to-action"
      selectedId={selectedId}
      onSelect={onSelect}
      className="bg-blue-600 px-5 py-9 text-center text-white sm:px-8 sm:py-10"
    >
      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
        Ready to build the next one?
      </h3>
      <p className="mx-auto mt-2 max-w-sm text-[11px] leading-5 text-blue-100 sm:text-xs">
        Add only the components you need. Own the code, customize every detail,
        and ship.
      </p>
      <span className="mt-5 inline-flex h-9 items-center rounded-md bg-white px-5 text-[11px] font-semibold text-blue-700">
        Browse components
        <ChevronRightIcon className="ml-1.5 size-3" aria-hidden="true" />
      </span>
    </SelectableEmailPart>

    <SelectableEmailPart
      id="navigation-footer"
      selectedId={selectedId}
      onSelect={onSelect}
      className="bg-primary px-5 py-7 text-primary-foreground/60 sm:px-8"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-primary-foreground">
            <LogoMark className="size-4" />
            emailcn
          </div>
          <p className="mt-3 max-w-xs text-[9px] leading-4">
            Beautiful, customizable email components for React Email, MJML
            React, and JSX Email.
          </p>
        </div>
        <div className="flex gap-4 text-[9px] font-medium text-primary-foreground/80">
          <span>Components</span>
          <span>GitHub</span>
          <span>Unsubscribe</span>
        </div>
      </div>
    </SelectableEmailPart>
  </div>
);

const WelcomePreview = ({ selectedId, onSelect }: EmailPreviewContentProps) => (
  <div className="w-full bg-background font-sans text-foreground">
    <SelectableEmailPart
      id="header-with-logo"
      selectedId={selectedId}
      onSelect={onSelect}
      className="bg-background px-6 py-5"
    >
      <div className="flex items-center justify-center gap-2 text-sm font-semibold">
        <span className="flex size-7 items-center justify-center rounded-lg bg-blue-600 text-white">
          <LogoMark className="size-4" />
        </span>
        emailcn
      </div>
    </SelectableEmailPart>

    <SelectableEmailPart
      id="content"
      selectedId={selectedId}
      onSelect={onSelect}
      className="bg-linear-to-b from-muted to-background px-6 py-10 text-center sm:px-12 sm:py-14"
    >
      <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
        <SparklesIcon className="size-6" aria-hidden="true" />
      </span>
      <p className="mt-6 text-[9px] font-bold tracking-[0.22em] text-blue-600 uppercase dark:text-blue-400">
        Welcome aboard
      </p>
      <h3 className="mx-auto mt-3 max-w-md text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
        Your email workspace is ready.
      </h3>
      <p className="mx-auto mt-4 max-w-md text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
        Hi Jamie — start with a component, make it yours, and send confidently.
        Everything you need is already waiting.
      </p>
    </SelectableEmailPart>

    <SelectableEmailPart
      id="progress"
      selectedId={selectedId}
      onSelect={onSelect}
      className="bg-background px-6 py-9 sm:px-10"
    >
      <p className="text-center text-[9px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
        Three steps to your first send
      </p>
      <div className="relative mt-7 grid grid-cols-3 gap-2">
        <div className="absolute top-4 right-[16.66%] left-[16.66%] h-px bg-border" />
        {[
          ["01", "Choose a base"],
          ["02", "Add components"],
          ["03", "Send your email"],
        ].map(([number, label], index) => (
          <div key={number} className="relative text-center">
            <span
              className={cn(
                "relative z-10 mx-auto flex size-8 items-center justify-center rounded-full border text-[9px] font-semibold",
                index === 0
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "bg-background text-muted-foreground"
              )}
            >
              {number}
            </span>
            <p className="mt-3 text-[9px] font-medium text-muted-foreground sm:text-[11px]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </SelectableEmailPart>

    <SelectableEmailPart
      id="call-to-action"
      selectedId={selectedId}
      onSelect={onSelect}
      className="bg-primary px-6 py-10 text-center text-primary-foreground"
    >
      <h3 className="text-xl font-semibold tracking-tight">
        Build something people want to open.
      </h3>
      <p className="mx-auto mt-2 max-w-sm text-[11px] leading-5 text-primary-foreground/65">
        Pick your base and add your first component in under a minute.
      </p>
      <span className="mt-5 inline-flex h-9 items-center rounded-md bg-blue-600 px-5 text-[11px] font-semibold text-white">
        Build your first email
        <ChevronRightIcon className="ml-1.5 size-3" aria-hidden="true" />
      </span>
    </SelectableEmailPart>

    <SelectableEmailPart
      id="utility-footer"
      selectedId={selectedId}
      onSelect={onSelect}
      className="bg-muted/50 px-6 py-7 text-center text-muted-foreground"
    >
      <p className="text-[9px] leading-4">
        Need help? Read the docs or reply to this email.
        <br />© 2026 emailcn · Preferences · Unsubscribe
      </p>
    </SelectableEmailPart>
  </div>
);

const OrderConfirmedPreview = ({
  selectedId,
  onSelect,
}: EmailPreviewContentProps) => (
  <div className="w-full bg-background font-sans text-foreground">
    <SelectableEmailPart
      id="header-with-logo"
      selectedId={selectedId}
      onSelect={onSelect}
      className="border-b bg-background px-6 py-5 sm:px-8"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <LogoMark className="size-4" />
          </span>
          Northstar
        </div>
        <span className="text-[10px] text-muted-foreground">
          Order #ECN-2048
        </span>
      </div>
    </SelectableEmailPart>

    <SelectableEmailPart
      id="content"
      selectedId={selectedId}
      onSelect={onSelect}
      className="bg-background px-6 py-9 text-center sm:px-10 sm:py-11"
    >
      <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
        <PackageCheckIcon className="size-6" aria-hidden="true" />
      </span>
      <p className="mt-5 text-[9px] font-bold tracking-[0.2em] text-emerald-600 uppercase dark:text-emerald-400">
        Order confirmed
      </p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        Thanks, Jamie. We&apos;ve got it.
      </h3>
      <p className="mx-auto mt-3 max-w-sm text-[11px] leading-5 text-muted-foreground sm:text-xs">
        We&apos;ll send another update as soon as your order leaves our studio.
      </p>
    </SelectableEmailPart>

    <SelectableEmailPart
      id="order-summary-table"
      selectedId={selectedId}
      onSelect={onSelect}
      className="bg-background px-6 pt-6 pb-9 sm:px-10"
    >
      <div className="rounded-xl border">
        <div className="border-b px-4 py-3">
          <p className="text-[10px] font-semibold">Order summary</p>
        </div>
        <div className="divide-y divide-border px-4">
          {[
            ["Canvas Runner", "Sand / EU 42", "$128.00", productImages[0]],
            ["Everyday Tee", "Natural / M", "$42.00", productImages[1]],
          ].map(([name, detail, price, image]) => (
            <div
              key={name as string}
              className="grid grid-cols-[48px_1fr_auto] items-center gap-3 py-3"
            >
              <div className="relative size-12 overflow-hidden rounded-md bg-muted">
                <Image
                  fill
                  alt={(image as (typeof productImages)[number]).alt}
                  className="object-cover"
                  sizes="48px"
                  src={(image as (typeof productImages)[number]).src}
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold">{name as string}</p>
                <p className="mt-0.5 text-[9px] text-muted-foreground">
                  {detail as string}
                </p>
              </div>
              <p className="text-[10px] font-medium">{price as string}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2 border-t bg-muted/50 px-4 py-3 text-[10px]">
          <div className="flex justify-between text-muted-foreground">
            <span>Shipping</span>
            <span>$12.00</span>
          </div>
          <div className="flex justify-between font-semibold text-foreground">
            <span>Total</span>
            <span>$182.00</span>
          </div>
        </div>
      </div>
    </SelectableEmailPart>

    <SelectableEmailPart
      id="billing-order-summary"
      selectedId={selectedId}
      onSelect={onSelect}
      className="bg-muted/50 px-6 py-8 sm:px-10"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center gap-1.5 text-[9px] font-semibold tracking-wide text-muted-foreground uppercase">
            <TruckIcon className="size-3" aria-hidden="true" />
            Ship to
          </div>
          <p className="mt-2 text-[10px] leading-4 text-muted-foreground">
            Jamie Chen
            <br />
            128 Flushing Ave
            <br />
            Brooklyn, NY 11205
          </p>
        </div>
        <div>
          <p className="text-[9px] font-semibold tracking-wide text-muted-foreground uppercase">
            Payment
          </p>
          <p className="mt-2 text-[10px] leading-4 text-muted-foreground">
            Visa ending in 4242
            <br />
            Billing same as shipping
          </p>
        </div>
      </div>
    </SelectableEmailPart>

    <SelectableEmailPart
      id="call-to-action"
      selectedId={selectedId}
      onSelect={onSelect}
      className="bg-background px-6 py-9 text-center"
    >
      <span className="inline-flex h-9 items-center rounded-md bg-primary px-5 text-[11px] font-semibold text-primary-foreground">
        Track your order
        <ChevronRightIcon className="ml-1.5 size-3" aria-hidden="true" />
      </span>
      <p className="mt-3 text-[9px] text-muted-foreground">
        Estimated delivery: August 3–5
      </p>
    </SelectableEmailPart>

    <SelectableEmailPart
      id="utility-footer"
      selectedId={selectedId}
      onSelect={onSelect}
      className="bg-primary px-6 py-7 text-center text-primary-foreground/60"
    >
      <p className="text-[9px] leading-4">
        Questions about your order? Contact support.
        <br />© 2026 Northstar · Returns · Privacy
      </p>
    </SelectableEmailPart>
  </div>
);

interface EmailPreviewContentProps {
  selectedId: ComponentPartId;
  onSelect: (id: ComponentPartId) => void;
}

export const HomeEmailPreview = ({
  emailId,
  selectedId,
  onSelect,
}: EmailPreviewContentProps & { emailId: EmailRecipeId }) => {
  if (emailId === "welcome-onboarding") {
    return <WelcomePreview selectedId={selectedId} onSelect={onSelect} />;
  }
  if (emailId === "order-confirmed") {
    return (
      <OrderConfirmedPreview selectedId={selectedId} onSelect={onSelect} />
    );
  }
  return <ProductDropPreview selectedId={selectedId} onSelect={onSelect} />;
};
