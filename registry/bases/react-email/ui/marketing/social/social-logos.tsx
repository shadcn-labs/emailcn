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

export type SocialLogosVariant = "default" | "slanted-left" | "slanted-right";

export type SocialLogosTile =
  | "square"
  | "circle"
  | "pill"
  | "squared-box"
  | "outlined-box"
  | "outlined-pill"
  | "outlined-square";

export interface SocialLogosProps {
  theme?: TailwindConfig;
  socialSrc1?: string;
  socialAlt1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  socialSrc4?: string;
  socialAlt4?: string;
  variant?: SocialLogosVariant;
  tile?: SocialLogosTile;
}

const TILE_CLASSES = {
  circle: "inline-block rounded-full bg-background-muted p-3",
  "outlined-box": "inline-block border border-border p-3",
  "outlined-pill": "inline-block rounded-full border border-border px-4 py-3",
  "outlined-square": "inline-block rounded-lg border border-border p-3",
  pill: "inline-block rounded-full bg-background-muted px-4 py-3",
  square: "inline-block rounded-lg bg-background-muted p-3",
  "squared-box": "inline-block rounded bg-background-muted p-3",
} as const;

export const SocialLogosSection = ({
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-social-logos-tsx-1&size=24",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-social-logos-tsx-2&size=24",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-social-logos-tsx-3&size=24",
  socialAlt3 = "Instagram",
  socialSrc4 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-social-logos-tsx-4&size=24",
  socialAlt4 = "LinkedIn",
  variant = "default",
  tile = "square",
}: Omit<SocialLogosProps, "theme">) => {
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

  const tileClass = TILE_CLASSES[tile];

  const socials = [
    { alt: socialAlt1, src: socialSrc1 },
    { alt: socialAlt2, src: socialSrc2 },
    { alt: socialAlt3, src: socialSrc3 },
    { alt: socialAlt4, src: socialSrc4 },
  ];

  return (
    <Section className={`bg-background py-8 ${getVariantClass()}`}>
      <Section
        className={`max-w-container mx-auto text-center ${getUnskewClass()}`}
      >
        <Row>
          {socials.map((social) => (
            <Column key={social.alt} className="px-3 text-center align-middle">
              <Section className={tileClass}>
                <Img
                  src={social.src}
                  alt={social.alt}
                  width="24"
                  height="24"
                  className="h-auto object-contain"
                />
              </Section>
            </Column>
          ))}
        </Row>
      </Section>
    </Section>
  );
};

export const SocialLogos = ({
  theme = defaultTheme,
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-social-logos-tsx-5&size=24",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-social-logos-tsx-6&size=24",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-social-logos-tsx-7&size=24",
  socialAlt3 = "Instagram",
  socialSrc4 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-social-logos-tsx-8&size=24",
  socialAlt4 = "LinkedIn",
  variant = "default",
  tile = "square",
}: SocialLogosProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Social</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <SocialLogosSection
          socialAlt1={socialAlt1}
          socialAlt2={socialAlt2}
          socialAlt3={socialAlt3}
          socialAlt4={socialAlt4}
          socialSrc1={socialSrc1}
          socialSrc2={socialSrc2}
          socialSrc3={socialSrc3}
          socialSrc4={socialSrc4}
          tile={tile}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

SocialLogos.PreviewProps = {
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "Instagram",
  socialAlt4: "LinkedIn",
  socialSrc1:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-social-logos-tsx-9&size=24",
  socialSrc2:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-social-logos-tsx-10&size=24",
  socialSrc3:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-social-logos-tsx-11&size=24",
  socialSrc4:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-social-logos-tsx-12&size=24",
  theme: defaultTheme,
  tile: "square",
  variant: "default",
} satisfies SocialLogosProps;
