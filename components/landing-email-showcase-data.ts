export const componentCatalog = {
  "billing-order-summary": {
    category: "Ecommerce / Order summary",
    codeName: "BillingOrderSummary",
    description:
      "A structured billing and delivery summary for transactional emails.",
    label: "Billing order summary",
  },
  "call-to-action": {
    category: "Marketing / CTA",
    codeName: "CallToAction",
    description:
      "A focused call to action with a clear headline, supporting copy, and button.",
    label: "Call to action",
  },
  content: {
    category: "Marketing / Content",
    codeName: "Content",
    description:
      "A flexible content section for headings, paragraphs, and supporting messages.",
    label: "Content",
  },
  "header-with-logo": {
    category: "Marketing / Header",
    codeName: "HeaderWithLogo",
    description:
      "A clean, responsive header that keeps the brand immediately recognizable.",
    label: "Header with logo",
  },
  "header-with-logo-and-menu": {
    category: "Marketing / Header",
    codeName: "HeaderWithLogoAndMenu",
    description:
      "A responsive brand header with a logo and configurable navigation links.",
    label: "Header with logo & menu",
  },
  "image-grid-hero": {
    category: "Marketing / Hero",
    codeName: "ImageGridHero",
    description:
      "A campaign-ready hero that pairs focused copy with a flexible image grid.",
    label: "Image grid hero",
  },
  "navigation-footer": {
    category: "Marketing / Footer",
    codeName: "NavigationFooter",
    description:
      "A polished email footer with navigation, brand details, and legal links.",
    label: "Navigation footer",
  },
  "order-summary-table": {
    category: "Ecommerce / Order summary",
    codeName: "OrderSummaryTable",
    description:
      "A clear line-item summary with product details, totals, and payment context.",
    label: "Order summary table",
  },
  "product-list": {
    category: "Ecommerce / Product lists",
    codeName: "ProductList",
    description:
      "A structured product list with images, descriptions, pricing, and details.",
    label: "Product list",
  },
  progress: {
    category: "UI elements / Progress",
    codeName: "Progress",
    description:
      "A visual sequence for onboarding steps, milestones, or delivery progress.",
    label: "Progress",
  },
  "utility-footer": {
    category: "Marketing / Footer",
    codeName: "UtilityFooter",
    description:
      "A compact footer for support, preferences, legal copy, and unsubscribe links.",
    label: "Utility footer",
  },
} as const;

export type ComponentPartId = keyof typeof componentCatalog;
export type EmailRecipeId =
  | "product-drop"
  | "welcome-onboarding"
  | "order-confirmed";
export type CodeOutput = "react" | "html" | "text";

export interface EmailRecipe {
  id: EmailRecipeId;
  name: string;
  filename: string;
  kind: string;
  description: string;
  defaultComponentId: ComponentPartId;
  componentIds: readonly ComponentPartId[];
  html: string;
  plainText: string;
}

export const emailRecipes = [
  {
    componentIds: [
      "header-with-logo-and-menu",
      "image-grid-hero",
      "product-list",
      "call-to-action",
      "navigation-footer",
    ],
    defaultComponentId: "image-grid-hero",
    description: "A visual campaign for announcing a new collection.",
    filename: "product-drop-email.tsx",
    html: `<html>
  <body style="background:#f1f5f9">
    <header data-component="header-with-logo-and-menu">
      <strong>emailcn</strong>
      <nav>Components · Examples · Docs</nav>
    </header>
    <section data-component="image-grid-hero">
      <h1>Design emails at component speed.</h1>
      <p>Production-ready sections without the blank canvas.</p>
      <a href="/components">Explore the collection</a>
    </section>
    <section data-component="product-list">
      <h2>This week's building blocks</h2>
      <article>Image Grid Hero</article>
      <article>Product List</article>
    </section>
    <section data-component="call-to-action">
      <h2>Ready to build the next one?</h2>
    </section>
    <footer data-component="navigation-footer">emailcn</footer>
  </body>
</html>`,
    id: "product-drop",
    kind: "Marketing",
    name: "Product drop",
    plainText: `THE COMPONENT DROP · 01

Design emails at component speed.

Production-ready sections for campaigns that look considered, without starting from a blank canvas.

Explore the collection: https://emailcn.run/docs/components

FEATURED
Image Grid Hero — Image-led campaign opening
Product List — Flexible catalog presentation

Ready to build the next one?
Add only the components you need. Own the code, customize every detail, and ship.

emailcn — Beautiful emails, made simple.`,
  },
  {
    componentIds: [
      "header-with-logo",
      "content",
      "progress",
      "call-to-action",
      "utility-footer",
    ],
    defaultComponentId: "content",
    description: "A friendly lifecycle email that guides new users forward.",
    filename: "welcome-onboarding-email.tsx",
    html: `<html>
  <body style="background:#eef2ff">
    <header data-component="header-with-logo"><strong>emailcn</strong></header>
    <section data-component="content">
      <p>WELCOME ABOARD</p>
      <h1>Your email workspace is ready.</h1>
      <p>Start with a component, make it yours, and send confidently.</p>
    </section>
    <section data-component="progress">
      <ol>
        <li>Choose a base</li>
        <li>Add components</li>
        <li>Send your email</li>
      </ol>
    </section>
    <section data-component="call-to-action">
      <a href="/docs/installation">Build your first email</a>
    </section>
    <footer data-component="utility-footer">Need help? Read the docs.</footer>
  </body>
</html>`,
    id: "welcome-onboarding",
    kind: "Lifecycle",
    name: "Welcome aboard",
    plainText: `WELCOME ABOARD

Your email workspace is ready.

Hi Jamie,

Start with a component, make it yours, and send confidently.

1. Choose a base
2. Add components
3. Send your email

Build your first email: https://emailcn.run/docs/installation

Need help? Read the docs or reply to this email.`,
  },
  {
    componentIds: [
      "header-with-logo",
      "content",
      "order-summary-table",
      "billing-order-summary",
      "call-to-action",
      "utility-footer",
    ],
    defaultComponentId: "order-summary-table",
    description: "A detailed transactional receipt with clear next steps.",
    filename: "order-confirmed-email.tsx",
    html: `<html>
  <body style="background:#f8fafc">
    <header data-component="header-with-logo"><strong>Northstar</strong></header>
    <section data-component="content">
      <p>ORDER #ECN-2048</p>
      <h1>Thanks, your order is confirmed.</h1>
    </section>
    <section data-component="order-summary-table">
      <article>Canvas Runner × 1 — $128.00</article>
      <article>Everyday Tee × 1 — $42.00</article>
      <strong>Total — $182.00</strong>
    </section>
    <section data-component="billing-order-summary">
      <p>Shipping: Jamie Chen, Brooklyn NY</p>
      <p>Payment: Visa ending in 4242</p>
    </section>
    <section data-component="call-to-action">
      <a href="/orders/ECN-2048">Track your order</a>
    </section>
    <footer data-component="utility-footer">Questions? Contact support.</footer>
  </body>
</html>`,
    id: "order-confirmed",
    kind: "Transactional",
    name: "Order confirmed",
    plainText: `ORDER #ECN-2048

Thanks, your order is confirmed.

Canvas Runner × 1 — $128.00
Everyday Tee × 1 — $42.00
Shipping — $12.00
Total — $182.00

SHIP TO
Jamie Chen
128 Flushing Avenue
Brooklyn, NY 11205

PAYMENT
Visa ending in 4242

Track your order: https://example.com/orders/ECN-2048

Questions? Contact support.`,
  },
] as const satisfies readonly EmailRecipe[];

export const getReactCode = (recipe: EmailRecipe) => {
  const imports = recipe.componentIds
    .map((id) => {
      const component = componentCatalog[id];
      return `import { ${component.codeName} } from "@/components/email/${id}";`;
    })
    .join("\n");
  const componentLines = recipe.componentIds
    .map((id) => `      <${componentCatalog[id].codeName} />`)
    .join("\n");
  const functionName = recipe.id
    .split("-")
    .map((part) => `${part[0]?.toUpperCase()}${part.slice(1)}`)
    .join("");

  return `${imports}

export function ${functionName}Email() {
  return (
    <>
${componentLines}
    </>
  );
}`;
};

export const getEmailCode = (
  recipe: EmailRecipe,
  output: CodeOutput
): string => {
  if (output === "html") {
    return recipe.html;
  }
  if (output === "text") {
    return recipe.plainText;
  }
  return getReactCode(recipe);
};
