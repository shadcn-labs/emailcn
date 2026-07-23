import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export const HeaderEmailShell = ({
  children,
  pageBackgroundColor,
  preview,
  theme,
}: {
  children: ReactNode;
  pageBackgroundColor: string;
  preview: string;
  theme: EmailThemeTokens;
}) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{preview}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">{children}</MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

export const HeaderLogo = ({
  align = "left",
  alt,
  href,
  src,
}: {
  align?: "center" | "left" | "right";
  alt: string;
  href: string;
  src: string;
}) => (
  <MjmlImage
    align={align}
    alt={alt}
    href={href}
    padding="0"
    src={src}
    width="55px"
  />
);
