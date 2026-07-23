import { renderToMjml } from "@faire/mjml-react/utils/renderToMjml";
import { render as renderReactEmail, toPlainText } from "@react-email/render";
import {
  render as renderJsxEmail,
  renderPlainText as renderJsxEmailPlainText,
} from "jsx-email";
import mjml2html from "mjml-browser";
import type { ComponentType } from "react";

import { ComponentPreviewClient } from "@/components/component-preview-client";
import { ComponentSource } from "@/components/component-source";
import { demos } from "@/examples/__index__";
import type { BaseName } from "@/registry/bases";

interface ComponentPreviewProps {
  base?: BaseName;
  name: string;
  title?: string;
  className?: string;
  hideNav?: boolean;
  hideCode?: boolean;
  height?: number;
}

type PreviewDemo = ComponentType & {
  PreviewHeight?: number;
};

export const ComponentPreview = async ({
  base = "react-email",
  name,
  title,
  className,
  hideNav = false,
  hideCode = false,
  height,
}: ComponentPreviewProps) => {
  const Demo = demos[base][name] as PreviewDemo | undefined;

  let html = "";
  let plainText: string | null = null;

  try {
    if (!Demo) {
      throw new Error(`No demo named "${name}" for base "${base}"`);
    }
    const preview = <Demo />;
    if (base === "react-email") {
      const result = await renderReactEmail(preview, { pretty: true });
      html = result;
      plainText = toPlainText(html);
    } else if (base === "jsx-email") {
      html = await renderJsxEmail(preview, { pretty: true });
      plainText = await renderJsxEmailPlainText(preview);
    } else {
      const result = await mjml2html(renderToMjml(preview), {
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

  return (
    <>
      <ComponentPreviewClient
        className={className}
        height={height ?? Demo?.PreviewHeight ?? 640}
        hideNav={hideNav}
        html={html}
        plainText={plainText}
        title={title}
      />
      {!hideCode && (
        <ComponentSource className="mt-6" base={base} name={name} />
      )}
    </>
  );
};
