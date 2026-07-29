import type { ReactElement } from "react";

import type { BaseName } from "@/registry/bases";

interface RenderEmailOptions {
  base: BaseName;
  centerPreview?: boolean;
  height?: number;
  preview: ReactElement;
}

export interface RenderedEmail {
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

export const renderEmail = async ({
  base,
  centerPreview = false,
  height = 640,
  preview,
}: RenderEmailOptions): Promise<RenderedEmail> => {
  let html: string;
  let plainText: string | null;

  if (base === "react-email") {
    const { render, toPlainText } = await import("@react-email/render");
    html = await render(preview, { pretty: true });
    plainText = toPlainText(html);
  } else if (base === "jsx-email") {
    if (process.env.NEXT_RUNTIME) {
      const { render, renderPlainText } = await import("jsx-email");
      [html, plainText] = await Promise.all([
        render(preview, { pretty: true }),
        renderPlainText(preview),
      ]);
    } else {
      // JSX Email's renderer imports Node-only config plugins. Its JSX remains
      // standard React, so the browser uses the React DOM-based email renderer.
      const { render, toPlainText } = await import("@react-email/render");
      html = await render(preview, { pretty: true });
      plainText = toPlainText(html);
    }
  } else {
    const [{ renderToMjml }, { default: mjml2html }] = await Promise.all([
      import("@faire/mjml-react/utils/renderToMjml"),
      import("mjml-browser"),
    ]);
    ({ html } = await mjml2html(renderToMjml(preview), {
      keepComments: false,
      validationLevel: "soft",
    }));
    plainText = null;
  }

  return {
    height,
    html: centerPreview ? centerPreviewDocument(html) : html,
    plainText,
  };
};
