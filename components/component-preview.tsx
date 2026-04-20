import { renderToMjml } from "@faire/mjml-react/utils/renderToMjml";
import { render as renderReactEmail } from "@react-email/render";
import mjml2html from "mjml-browser";

import { EmailPreviewTabs } from "@/components/code-tabs";
import { ComponentSource } from "@/components/component-source";
import { CopyButton } from "@/components/copy-button";
import { EmailSendButton } from "@/components/email-send-button";
import { Badge } from "@/components/ui/badge";
import { highlightCode } from "@/lib/highlight-code";
import { getDemoSource } from "@/lib/registry";
import { cn } from "@/lib/utils";
import type { BaseName } from "@/registry/bases";

interface ComponentPreviewProps {
  base?: BaseName;
  name: string;
  title?: string;
  badge?: string;
  defaultSubject?: string;
  className?: string;
  hideCode?: boolean;
  height?: number;
}

const loadDemo = async (base: BaseName, name: string) => {
  if (base === "mjml-react") {
    const mod = await import(`@/examples/mjml-react/${name}.tsx`);
    return mod.default;
  }
  const mod = await import(`@/examples/react-email/${name}.tsx`);
  return mod.default;
};

export const ComponentPreview = async ({
  base = "react-email",
  name,
  title,
  badge,
  defaultSubject,
  className,
  hideCode = false,
  height = 640,
}: ComponentPreviewProps) => {
  const Demo = await loadDemo(base, name);
  const result =
    base === "mjml-react"
      ? mjml2html(renderToMjml(<Demo />), {
          keepComments: false,
          minify: true,
          validationLevel: "soft",
        })
      : null;
  const html =
    base === "mjml-react"
      ? (result?.html ?? "")
      : await renderReactEmail(<Demo />, { pretty: true });

  const tsx = (await getDemoSource(name, base)) ?? "";
  const tsxHighlighted = hideCode ? undefined : await highlightCode(tsx, "tsx");
  const htmlHighlighted = hideCode
    ? undefined
    : await highlightCode(html, "html");

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

      <EmailPreviewTabs
        height={height}
        hideCode={hideCode}
        htmlHighlightedHtml={htmlHighlighted}
        iframeTitle={title ?? name}
        previewHtml={html}
        trailing={
          <>
            <CopyButton event="copy_email_html" value={html} />
            <EmailSendButton
              defaultSubject={defaultSubject ?? title ?? name}
              markup={html}
            />
          </>
        }
        tsxHighlightedHtml={tsxHighlighted}
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
