import { renderToMjml } from "@faire/mjml-react/utils/renderToMjml";
import { render as renderReactEmail, toPlainText } from "@react-email/render";
import mjml2html from "mjml-browser";

import { ComponentPreviewClient } from "@/components/component-preview-client";
import { ComponentSource } from "@/components/component-source";
import { demos } from "@/examples/__index__";
import type { BaseName } from "@/registry/bases";

interface ComponentPreviewProps {
  base?: BaseName;
  name: string;
  title?: string;
  badge?: string;
  className?: string;
  hideNav?: boolean;
  hideCode?: boolean;
  height?: number;
}

export const ComponentPreview = async ({
  base = "react-email",
  name,
  title,
  badge,
  className,
  hideNav = false,
  hideCode = false,
  height = 640,
}: ComponentPreviewProps) => {
  const Demo = demos[base][name];

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
    <>
      <ComponentPreviewClient
        badge={badge}
        className={className}
        height={height}
        hideNav={hideNav}
        html={html}
        plainText={plainText}
        title={title}
      />
      {!hideCode && (
        <ComponentSource
          className="mt-6"
          base={base}
          name={sourceName}
          title={`${sourceName}.tsx`}
        />
      )}
    </>
  );
};
