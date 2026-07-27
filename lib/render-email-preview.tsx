import { renderToMjml } from "@faire/mjml-react/utils/renderToMjml";
import { render as renderReactEmail, toPlainText } from "@react-email/render";
import {
  render as renderJsxEmail,
  renderPlainText as renderJsxEmailPlainText,
} from "jsx-email";
import mjml2html from "mjml-browser";
import type { ComponentType } from "react";

import { demos } from "@/examples/__index__";
import type { BaseName } from "@/registry/bases";

type PreviewDemo = ComponentType & {
  PreviewHeight?: number;
};

interface RenderEmailPreviewOptions {
  base: BaseName;
  centerPreview?: boolean;
  name: string;
}

export interface RenderedEmailPreview {
  height: number;
  html: string;
  plainText: string | null;
}

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

export const renderEmailPreview = async ({
  base,
  centerPreview = false,
  name,
}: RenderEmailPreviewOptions): Promise<RenderedEmailPreview | null> => {
  const Demo = (demos[base] as Record<string, PreviewDemo | undefined>)[name];

  if (!Demo) {
    return null;
  }

  const preview = <Demo />;
  let html = "";
  let plainText: string | null = null;

  if (base === "react-email") {
    html = await renderReactEmail(preview, { pretty: true });
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

  return {
    height: Demo.PreviewHeight ?? 640,
    html: centerPreview ? centerPreviewDocument(html) : html,
    plainText,
  };
};
