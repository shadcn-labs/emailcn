import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlWrapper,
  MjmlColumn,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { defaultTheme } from "@/registry/themes/default";

export const HeaderEmailShell = ({
  children,
  pageBackgroundColor,
  preview,
  theme,
}: {
  children: ReactNode;
  pageBackgroundColor: string;
  preview: string;
  theme: EmailTheme;
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

export type HeaderWithLogoVariant = "minimal" | "with-text";

export type HeaderWithLogoAlignment = "left" | "center" | "right";

export interface HeaderWithLogoProps {
  theme?: EmailTheme;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  text?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  variant?: HeaderWithLogoVariant;
  alignment?: HeaderWithLogoAlignment;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const HeaderWithLogoSection = ({
  alignment = "left",
  backgroundColor = "#fffffe",
  logoAlt = "Maizzle",
  logoHref = "https://example.com",
  logoSrc = "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  text = "Medium, rare, but mostly well-done\nHTML email components.",
  textColor = "#030712",
  variant = "minimal",
}: Omit<HeaderWithLogoProps, "theme">) => {
  const logo = (
    <HeaderLogo align={alignment} alt={logoAlt} href={logoHref} src={logoSrc} />
  );
  const copy = (
    <MjmlText
      align={alignment}
      color={textColor}
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="500"
      lineHeight="24px"
      padding="0"
    >
      {text.replaceAll("\n", " ")}
    </MjmlText>
  );
  if (variant === "minimal") {
    return (
      <MjmlSection backgroundColor={backgroundColor} padding="24px">
        <MjmlColumn padding="0">{logo}</MjmlColumn>
      </MjmlSection>
    );
  }
  if (alignment === "center") {
    return (
      <MjmlSection backgroundColor={backgroundColor} padding="24px">
        <MjmlColumn padding="0">
          {logo}
          <MjmlSpacer height="24px" />
          {copy}
        </MjmlColumn>
      </MjmlSection>
    );
  }
  return (
    <MjmlSection backgroundColor={backgroundColor} padding="24px">
      <MjmlColumn padding="0" verticalAlign="middle" width="30%">
        {alignment === "left" ? logo : copy}
      </MjmlColumn>
      <MjmlColumn padding="0" verticalAlign="middle" width="70%">
        {alignment === "left" ? copy : logo}
      </MjmlColumn>
    </MjmlSection>
  );
};

export const HeaderWithLogo = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: HeaderWithLogoProps) => (
  <HeaderEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Email header"
    theme={theme}
  >
    <HeaderWithLogoSection {...props} />
  </HeaderEmailShell>
);

HeaderWithLogo.PreviewProps = {
  alignment: "left",
  theme: defaultTheme,
  variant: "minimal",
} satisfies HeaderWithLogoProps;
