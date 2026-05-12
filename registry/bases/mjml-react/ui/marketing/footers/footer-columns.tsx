/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type FooterColumnsVariant = "default" | "slanted-left" | "slanted-right";

export interface FooterColumnsProps {
  theme?: EmailThemeTokens;
  companyName?: string;
  columns?: { heading: string; links: { label: string; href: string }[] }[];
  variant?: FooterColumnsVariant;
}

const FooterColumnsSection = ({
  columns,
  companyName,
  theme,
  variant,
}: {
  columns: FooterColumnsProps["columns"];
  companyName: string;
  theme: EmailThemeTokens;
  variant: FooterColumnsVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0 ${theme.spacingBase ?? "24px"} 0`}
  >
    {(columns ?? []).slice(0, 3).map((col, i) => (
      <MjmlColumn
        key={col.heading + i}
        width={`${100 / Math.min((columns ?? []).length, 3)}%`}
        padding={theme.spacingBase ?? "24px"}
        verticalAlign="top"
      >
        <MjmlText
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm ?? "12px"}
          fontWeight={theme.fontWeightMedium}
          paddingBottom={theme.spacingBase ?? "8px"}
        >
          {col.heading}
        </MjmlText>
        {col.links.map((link) => (
          <MjmlText
            key={link.label}
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeSm ?? "11px"}
            paddingBottom={theme.spacingBase ?? "4px"}
          >
            {link.label}
          </MjmlText>
        ))}
      </MjmlColumn>
    ))}
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "11px"}
      >
        &copy; {new Date().getFullYear()} {companyName}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const FooterColumns = ({
  theme = defaultTheme,
  companyName = "Acme Inc.",
  columns = [
    {
      heading: "Product",
      links: [
        { href: "#", label: "Features" },
        { href: "#", label: "Pricing" },
      ],
    },
    {
      heading: "Company",
      links: [
        { href: "#", label: "About" },
        { href: "#", label: "Blog" },
      ],
    },
    {
      heading: "Support",
      links: [
        { href: "#", label: "Docs" },
        { href: "#", label: "Contact" },
      ],
    },
  ],
  variant = "default",
}: FooterColumnsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>footer columns</MjmlPreview>
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
      <MjmlWrapper padding="0">
        <FooterColumnsSection
          columns={columns}
          companyName={companyName}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
FooterColumns.PreviewProps = {
  columns: [
    {
      heading: "Product",
      links: [
        { href: "#", label: "Features" },
        { href: "#", label: "Pricing" },
      ],
    },
    {
      heading: "Company",
      links: [
        { href: "#", label: "About" },
        { href: "#", label: "Blog" },
      ],
    },
    { heading: "Support", links: [{ href: "#", label: "Contact" }] },
  ],
  companyName: "Acme Inc.",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterColumnsProps;
