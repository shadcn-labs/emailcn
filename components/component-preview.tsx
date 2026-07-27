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
import type { DemoName } from "@/examples/__index__";
import type { BaseName } from "@/registry/bases";

interface ComponentPreviewProps {
  base?: BaseName;
  name: DemoName;
  title?: string;
  className?: string;
  centerPreview?: boolean;
  hideNav?: boolean;
  hideCode?: boolean;
  height?: number;
  showTitleBar?: boolean;
}

type PreviewDemo = ComponentType & {
  PreviewHeight?: number;
};

const centeredPreviewStyles = `
  <style data-emailcn-centered-preview>
    html {
      min-height: 100%;
      background: #f1f5f9;
    }

    body {
      box-sizing: border-box;
      min-height: 100vh !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: stretch !important;
      justify-content: safe center !important;
    }

    body > * {
      flex-shrink: 0;
    }
  </style>
`;

const centerPreviewDocument = (html: string) =>
  html.includes("</head>")
    ? html.replace("</head>", `${centeredPreviewStyles}</head>`)
    : `${centeredPreviewStyles}${html}`;

export const ComponentPreview = async ({
  base = "react-email",
  name,
  title,
  className,
  centerPreview = false,
  hideNav = false,
  hideCode = false,
  height,
  showTitleBar = false,
}: ComponentPreviewProps) => {
  const Demo = (demos[base] as Partial<Record<DemoName, PreviewDemo>>)[name];

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
        html={centerPreview ? centerPreviewDocument(html) : html}
        iframeTitle={title ?? name}
        plainText={plainText}
        showTitleBar={showTitleBar}
        title={title}
      />
      {!hideCode && (
        <ComponentSource className="mt-6" base={base} name={name} />
      )}
    </>
  );
};
