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
  MjmlSocial,
  MjmlSocialElement,
  MjmlSpacer,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/theme-default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/theme-default";

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

export type HeaderWithLogoAndSocialIconsAlignment = "left" | "center" | "right";

export interface HeaderSocialLink {
  alt: string;
  href: string;
  src: string;
}

export interface HeaderWithLogoAndSocialIconsProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  socials?: HeaderSocialLink[];
  alignment?: HeaderWithLogoAndSocialIconsAlignment;
  pageBackgroundColor?: string;
  backgroundColor?: string;
}

const defaultSocials: HeaderSocialLink[] = [
  {
    alt: "GitHub",
    href: "https://github.com",
    src: "https://emailcn.vercel.app/api/email-assets/icon-github.png",
  },
  {
    alt: "LinkedIn",
    href: "https://linkedin.com",
    src: "https://emailcn.vercel.app/api/email-assets/icon-linkedin.png",
  },
  {
    alt: "X",
    href: "https://x.com",
    src: "https://emailcn.vercel.app/api/email-assets/icon-x.png",
  },
];

export const HeaderWithLogoAndSocialIconsSection = ({
  alignment = "left",
  backgroundColor = "#fffffe",
  logoAlt = "Maizzle",
  logoHref = "https://example.com",
  logoSrc = "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  socials = defaultSocials,
}: Omit<HeaderWithLogoAndSocialIconsProps, "theme">) => {
  const logo = (
    <HeaderLogo align={alignment} alt={logoAlt} href={logoHref} src={logoSrc} />
  );
  const icons = (
    <MjmlSocial align={alignment} iconSize="20px" padding="0">
      {socials.slice(0, 3).map((social) => (
        <MjmlSocialElement
          alt={social.alt}
          href={social.href}
          key={`${social.alt}-${social.href}`}
          name={social.alt}
          src={social.src}
        />
      ))}
    </MjmlSocial>
  );
  if (alignment === "center") {
    return (
      <MjmlSection backgroundColor={backgroundColor} padding="24px">
        <MjmlColumn padding="0">
          {logo}
          <MjmlSpacer height="24px" />
          {icons}
        </MjmlColumn>
      </MjmlSection>
    );
  }
  return (
    <MjmlSection backgroundColor={backgroundColor} padding="24px">
      <MjmlColumn padding="0" verticalAlign="middle" width="50%">
        {alignment === "left" ? logo : icons}
      </MjmlColumn>
      <MjmlColumn padding="0" verticalAlign="middle" width="50%">
        {alignment === "left" ? icons : logo}
      </MjmlColumn>
    </MjmlSection>
  );
};

export const HeaderWithLogoAndSocialIcons = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: HeaderWithLogoAndSocialIconsProps) => (
  <HeaderEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Social links"
    theme={theme}
  >
    <HeaderWithLogoAndSocialIconsSection {...props} />
  </HeaderEmailShell>
);

HeaderWithLogoAndSocialIcons.PreviewProps = {
  alignment: "left",
  theme: defaultTheme,
} satisfies HeaderWithLogoAndSocialIconsProps;
