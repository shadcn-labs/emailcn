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
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type FooterWithSocialIconsAndAddressVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterWithSocialIconsAndAddressProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  address?: string;
  socialSrc1?: string;
  socialAlt1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  socialSrc4?: string;
  socialAlt4?: string;
  variant?: FooterWithSocialIconsAndAddressVariant;
}

export const FooterWithSocialIconsAndAddressSection = ({
  logoSrc = "https://static.photos/business/100x25/2",
  logoAlt = "Logo",
  address = "123 Main Street, San Francisco, CA 94102",
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-2&size=20",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-3&size=20",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-4&size=20",
  socialAlt3 = "Instagram",
  socialSrc4 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-5&size=20",
  socialAlt4 = "LinkedIn",
  variant = "default",
}: Omit<FooterWithSocialIconsAndAddressProps, "theme">) => {
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
    <Section className={`bg-background py-8 ${getVariantClass()}`}>
      <Section
        className={`max-w-container mx-auto text-center ${getUnskewClass()}`}
      >
        <Img
          src={logoSrc}
          alt={logoAlt}
          width="100"
          height="25"
          className="mx-auto mb-4 h-auto object-contain"
        />
        <Text className="m-0 mb-4 text-xs text-foreground-muted">
          {address}
        </Text>
        <Row>
          <Column className="text-center">
            <Img
              src={socialSrc1}
              alt={socialAlt1}
              width="20"
              height="20"
              className="inline-block mx-2 h-auto object-contain"
            />
            <Img
              src={socialSrc2}
              alt={socialAlt2}
              width="20"
              height="20"
              className="inline-block mx-2 h-auto object-contain"
            />
            <Img
              src={socialSrc3}
              alt={socialAlt3}
              width="20"
              height="20"
              className="inline-block mx-2 h-auto object-contain"
            />
            <Img
              src={socialSrc4}
              alt={socialAlt4}
              width="20"
              height="20"
              className="inline-block mx-2 h-auto object-contain"
            />
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const FooterWithSocialIconsAndAddress = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/100x25/7",
  logoAlt = "Logo",
  address = "123 Main Street, San Francisco, CA 94102",
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-7&size=20",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-8&size=20",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-9&size=20",
  socialAlt3 = "Instagram",
  socialSrc4 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-10&size=20",
  socialAlt4 = "LinkedIn",
  variant = "default",
}: FooterWithSocialIconsAndAddressProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Footer</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FooterWithSocialIconsAndAddressSection
          address={address}
          logoAlt={logoAlt}
          logoSrc={logoSrc}
          socialAlt1={socialAlt1}
          socialAlt2={socialAlt2}
          socialAlt3={socialAlt3}
          socialAlt4={socialAlt4}
          socialSrc1={socialSrc1}
          socialSrc2={socialSrc2}
          socialSrc3={socialSrc3}
          socialSrc4={socialSrc4}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

FooterWithSocialIconsAndAddress.PreviewProps = {
  address: "123 Main Street, San Francisco, CA 94102",
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/100x25/12",
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "Instagram",
  socialAlt4: "LinkedIn",
  socialSrc1:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-12&size=20",
  socialSrc2:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-13&size=20",
  socialSrc3:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-14&size=20",
  socialSrc4:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-15&size=20",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterWithSocialIconsAndAddressProps;
