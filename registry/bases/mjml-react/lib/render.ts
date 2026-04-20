import { renderToMjml } from "@faire/mjml-react/utils/renderToMjml";
import mjml2html from "mjml-browser";
import type { ReactElement } from "react";

export const renderReactToMjml = (el: ReactElement) =>
  mjml2html(renderToMjml(el), {
    keepComments: false,
    minify: true,
    validationLevel: "soft",
  });
