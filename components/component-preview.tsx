import { renderToMjml } from "@faire/mjml-react/utils/renderToMjml";
import { render as renderReactEmail, toPlainText } from "@react-email/render";
import mjml2html from "mjml-browser";

import { ComponentPreviewNav } from "@/components/component-preview-nav";
import { ComponentSource } from "@/components/component-source";
import { Badge } from "@/components/ui/badge";
// import { toPlainText as toPlainTextMjml } from "@/lib/mjml-plain-text";
import { cn } from "@/lib/utils";
import type { BaseName } from "@/registry/bases";

interface ComponentPreviewProps {
  base?: BaseName;
  kind?: "blocks" | "components";
  name: string;
  title?: string;
  badge?: string;
  className?: string;
  hideCode?: boolean;
  height?: number;
}

const toPascalCase = (value: string) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

const loadDemo = async (
  base: BaseName,
  name: string,
  kind: ComponentPreviewProps["kind"]
) => {
  if (kind === "blocks") {
    if (base === "mjml-react") {
      const mod = await import(
        `@/registry/bases/mjml-react/blocks/${name}.tsx`
      );
      return mod.default ?? mod[toPascalCase(name)];
    }
    const mod = await import(`@/registry/bases/react-email/blocks/${name}.tsx`);
    return mod.default ?? mod[toPascalCase(name)];
  }

  if (base === "mjml-react") {
    const mod = await import(`@/examples/mjml-react/${name}.tsx`);
    return mod.default;
  }
  const mod = await import(`@/examples/react-email/${name}.tsx`);
  return mod.default;
};

export const ComponentPreview = async ({
  base = "react-email",
  kind = "components",
  name,
  title,
  badge,
  className,
  hideCode = false,
  height = 640,
}: ComponentPreviewProps) => {
  const Demo = await loadDemo(base, name, kind);

  let html = "";
  let plainText: string | null = null;

  try {
    if (base === "react-email") {
      const result = await renderReactEmail(<Demo />, { pretty: true });
      html = result;
      plainText = toPlainText(html);
    } else {
      const result = await mjml2html(renderToMjml(<Demo />), {
        keepComments: false,
        validationLevel: "soft",
      });
      ({ html } = result);
    }
  } catch (error) {
    html = `<div style="padding: 40px; text-align: center; color: #666;">
      <p>Preview unavailable</p>
      <pre style="font-size: 12px; color: #999;">${error instanceof Error ? error.message : "Unknown error"}</pre>
    </div>`;
  }

  const sourceName = name.replace(/-demo$/, "");

  return (
    <div className={cn("w-full scroll-mt-24", className)}>
      {(title || badge) && (
        <div className="mb-3 flex items-center gap-2">
          {title && (
            <h3 className="text-base font-semibold tracking-tight">{title}</h3>
          )}
          {badge && (
            <Badge className="rounded-md" variant="secondary">
              {badge}
            </Badge>
          )}
        </div>
      )}

      <ComponentPreviewNav
        height={height}
        iframeTitle={title ?? name}
        html={html}
        plainText={plainText}
      />

      {!hideCode && (
        <div className="mt-6">
          <ComponentSource
            base={base}
            name={sourceName}
            title={`${sourceName}.tsx`}
          />
        </div>
      )}
    </div>
  );
};
