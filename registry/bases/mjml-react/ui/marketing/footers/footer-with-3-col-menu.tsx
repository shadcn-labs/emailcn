/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlStyle,
  MjmlText,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type FooterWith3ColMenuVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterWith3ColMenuProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  col1Heading?: string;
  col1Link1?: string;
  col1Link1Href?: string;
  col1Link2?: string;
  col1Link2Href?: string;
  col2Heading?: string;
  col2Link1?: string;
  col2Link1Href?: string;
  col2Link2?: string;
  col2Link2Href?: string;
  col3Heading?: string;
  col3Link1?: string;
  col3Link1Href?: string;
  col3Link2?: string;
  col3Link2Href?: string;
  variant?: FooterWith3ColMenuVariant;
}

const variantClass = (variant: FooterWith3ColMenuVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const FooterWith3ColMenu = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/100x25/2",
  logoAlt = "Logo",
  col1Heading = "Product",
  col1Link1 = "Features",
  col1Link1Href = "#",
  col1Link2 = "Pricing",
  col1Link2Href = "#",
  col2Heading = "Company",
  col2Link1 = "About",
  col2Link1Href = "#",
  col2Link2 = "Blog",
  col2Link2Href = "#",
  col3Heading = "Support",
  col3Link1 = "Docs",
  col3Link1Href = "#",
  col3Link2 = "Contact",
  col3Link2Href = "#",
  variant = "default",
}: FooterWith3ColMenuProps) => {
  const columns = [
    {
      heading: col1Heading,
      links: [
        { href: col1Link1Href, label: col1Link1 },
        { href: col1Link2Href, label: col1Link2 },
      ],
    },
    {
      heading: col2Heading,
      links: [
        { href: col2Link1Href, label: col2Link1 },
        { href: col2Link2Href, label: col2Link2 },
      ],
    },
    {
      heading: col3Heading,
      links: [
        { href: col3Link1Href, label: col3Link1 },
        { href: col3Link2Href, label: col3Link2 },
      ],
    },
  ];
  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>Footer</MjmlPreview>
        <MjmlStyle>{`
          .ec-skew-left > div { transform: skewX(-10deg); }
          .ec-skew-right > div { transform: skewX(10deg); }
        `}</MjmlStyle>
        <MjmlAttributes>
          <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
          <MjmlText
            fontSize={theme.fontSizeBase}
            lineHeight={theme.lineHeightBase}
          />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody
        backgroundColor={theme.colorBackground}
        width={theme.containerWidth}
      >
        <MjmlSection
          backgroundColor={theme.colorBackground}
          cssClass={variantClass(variant)}
          paddingBottom="0"
          paddingTop="32px"
        >
          <MjmlColumn>
            <MjmlImage
              align="center"
              alt={logoAlt}
              height={25}
              src={logoSrc}
              width={100}
            />
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection
          backgroundColor={theme.colorBackground}
          cssClass={variantClass(variant)}
          paddingBottom="32px"
          paddingTop="24px"
        >
          {columns.map((column) => (
            <MjmlColumn key={column.heading} verticalAlign="top" width="33%">
              <MjmlText
                align="center"
                color={theme.colorText}
                fontSize={theme.fontSizeSm}
                fontWeight={theme.fontWeightMedium}
                paddingBottom="8px"
              >
                {column.heading}
              </MjmlText>
              {column.links.map((link) => (
                <MjmlText
                  key={link.label}
                  align="center"
                  color={theme.colorTextMuted}
                  fontSize={theme.fontSizeSm}
                  paddingBottom="4px"
                  paddingTop="0"
                >
                  <a
                    href={link.href}
                    style={{
                      color: theme.colorTextMuted,
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </a>
                </MjmlText>
              ))}
            </MjmlColumn>
          ))}
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};

FooterWith3ColMenu.PreviewProps = {
  col1Heading: "Product",
  col1Link1: "Features",
  col1Link1Href: "#",
  col1Link2: "Pricing",
  col1Link2Href: "#",
  col2Heading: "Company",
  col2Link1: "About",
  col2Link1Href: "#",
  col2Link2: "Blog",
  col2Link2Href: "#",
  col3Heading: "Support",
  col3Link1: "Docs",
  col3Link1Href: "#",
  col3Link2: "Contact",
  col3Link2Href: "#",
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/100x25/6",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterWith3ColMenuProps;
