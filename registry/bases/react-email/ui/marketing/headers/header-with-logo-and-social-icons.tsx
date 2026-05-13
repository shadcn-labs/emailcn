/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type HeaderWithLogoAndSocialIconsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderWithLogoAndSocialIconsProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  socialSrc1?: string;
  socialAlt1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  variant?: HeaderWithLogoAndSocialIconsVariant;
}

export const HeaderWithLogoAndSocialIconsSection = ({
  logoSrc = "https://static.photos/business/120x30/2",
  logoAlt = "Logo",
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-headers-header-with-logo-and-social-icons-tsx-2&size=24",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-headers-header-with-logo-and-social-icons-tsx-3&size=24",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-headers-header-with-logo-and-social-icons-tsx-4&size=24",
  socialAlt3 = "LinkedIn",
  variant = "default",
}: Omit<HeaderWithLogoAndSocialIconsProps, "theme">) => {
  const getVariantClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[-10deg]";
      }
      case "slanted-right": {
        return "skew-x-[10deg]";
      }
      default: {
        return "";
      }
    }
  };

  const getUnskewClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[10deg]";
      }
      case "slanted-right": {
        return "skew-x-[-10deg]";
      }
      default: {
        return "";
      }
    }
  };

  return (
    <Section className={`bg-background py-6 ${getVariantClass()}`}>
      <Section className={`max-w-container mx-auto ${getUnskewClass()}`}>
        <Row>
          <Column className="w-1/2 align-middle">
            <Img
              src={logoSrc}
              alt={logoAlt}
              width="120"
              height="30"
              className="h-auto object-contain"
            />
          </Column>
          <Column className="w-1/2 align-middle text-right">
            <Img
              src={socialSrc1}
              alt={socialAlt1}
              width="24"
              height="24"
              className="inline-block ml-3 h-auto object-contain"
            />
            <Img
              src={socialSrc2}
              alt={socialAlt2}
              width="24"
              height="24"
              className="inline-block ml-3 h-auto object-contain"
            />
            <Img
              src={socialSrc3}
              alt={socialAlt3}
              width="24"
              height="24"
              className="inline-block ml-3 h-auto object-contain"
            />
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const HeaderWithLogoAndSocialIcons = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/6",
  logoAlt = "Logo",
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-headers-header-with-logo-and-social-icons-tsx-6&size=24",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-headers-header-with-logo-and-social-icons-tsx-7&size=24",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-headers-header-with-logo-and-social-icons-tsx-8&size=24",
  socialAlt3 = "LinkedIn",
  variant = "default",
}: HeaderWithLogoAndSocialIconsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Header</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <HeaderWithLogoAndSocialIconsSection
          logoAlt={logoAlt}
          logoSrc={logoSrc}
          socialAlt1={socialAlt1}
          socialAlt2={socialAlt2}
          socialAlt3={socialAlt3}
          socialSrc1={socialSrc1}
          socialSrc2={socialSrc2}
          socialSrc3={socialSrc3}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

HeaderWithLogoAndSocialIcons.PreviewProps = {
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/10",
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "LinkedIn",
  socialSrc1:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-headers-header-with-logo-and-social-icons-tsx-10&size=24",
  socialSrc2:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-headers-header-with-logo-and-social-icons-tsx-11&size=24",
  socialSrc3:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-headers-header-with-logo-and-social-icons-tsx-12&size=24",
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderWithLogoAndSocialIconsProps;
