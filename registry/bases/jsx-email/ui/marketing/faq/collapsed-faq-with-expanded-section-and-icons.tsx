/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type CollapsedFaqWithExpandedSectionAndIconsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CollapsedFaqWithExpandedSectionAndIconsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  iconSrc1?: string;
  iconAlt1?: string;
  q1?: string;
  a1?: string;
  iconSrc2?: string;
  iconAlt2?: string;
  q2?: string;
  iconSrc3?: string;
  iconAlt3?: string;
  q3?: string;
  variant?: CollapsedFaqWithExpandedSectionAndIconsVariant;
}

export const CollapsedFaqWithExpandedSectionAndIcons = ({
  theme = defaultTheme,
  heading = "FAQ",
  iconSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-faq-collapsed-faq-with-expanded-section-and-icons-tsx-4&size=20",
  iconAlt1 = "",
  q1 = "What is this product?",
  a1 = "This product helps you build beautiful emails.",
  iconSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-faq-collapsed-faq-with-expanded-section-and-icons-tsx-5&size=20",
  iconAlt2 = "",
  q2 = "How does pricing work?",
  iconSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-faq-collapsed-faq-with-expanded-section-and-icons-tsx-6&size=20",
  iconAlt3 = "",
  q3 = "Is there customer support?",
  variant = "default",
}: CollapsedFaqWithExpandedSectionAndIconsProps) => {
  const skew =
    variant === "slanted-left"
      ? "skewX(-10deg)"
      : variant === "slanted-right"
        ? "skewX(10deg)"
        : undefined;
  const unskew =
    variant === "slanted-left"
      ? "skewX(10deg)"
      : variant === "slanted-right"
        ? "skewX(-10deg)"
        : undefined;
  const iconStyle = {
    display: "inline-block",
    height: "auto",
    marginRight: "8px",
    objectFit: "contain",
    verticalAlign: "middle",
  } as const;
  return (
    <Html>
      <Head />
      <Preview>{heading}</Preview>
      <Body
        style={{
          backgroundColor: theme.colorBackground,
          fontFamily: theme.fontFamily,
          margin: 0,
        }}
      >
        <Container style={{ margin: "0 auto", maxWidth: theme.containerWidth }}>
          <Section
            style={{
              backgroundColor: theme.colorBackground,
              padding: "64px 0",
              transform: skew,
            }}
          >
            <Section style={{ transform: unskew }}>
              {heading ? (
                <Text
                  style={{
                    color: theme.colorText,
                    fontSize: theme.fontSizeHeading,
                    fontWeight: theme.fontWeightBold,
                    margin: "0 0 32px",
                    textAlign: "center",
                  }}
                >
                  {heading}
                </Text>
              ) : null}
              <Section
                style={{
                  backgroundColor: theme.colorBackgroundMuted,
                  borderRadius: theme.borderRadiusLg,
                  marginBottom: "24px",
                  padding: "16px",
                }}
              >
                <Section style={{ marginBottom: "8px" }}>
                  <Img
                    src={iconSrc1}
                    alt={iconAlt1}
                    width="20"
                    height="20"
                    style={iconStyle}
                  />
                  <Text
                    style={{
                      color: theme.colorText,
                      display: "inline-block",
                      fontSize: theme.fontSizeSm,
                      fontWeight: theme.fontWeightBold,
                      margin: 0,
                      verticalAlign: "middle",
                    }}
                  >
                    {q1}
                  </Text>
                </Section>
                <Text
                  style={{
                    color: theme.colorTextMuted,
                    fontSize: theme.fontSizeSm,
                    lineHeight: theme.lineHeightBase,
                    margin: "0 0 0 32px",
                  }}
                >
                  {a1}
                </Text>
              </Section>
              <Section style={{ marginBottom: "16px" }}>
                <Img
                  src={iconSrc2}
                  alt={iconAlt2}
                  width="20"
                  height="20"
                  style={iconStyle}
                />
                <Text
                  style={{
                    color: theme.colorText,
                    display: "inline-block",
                    fontSize: theme.fontSizeSm,
                    fontWeight: theme.fontWeightMedium,
                    margin: 0,
                    verticalAlign: "middle",
                  }}
                >
                  {q2}
                </Text>
              </Section>
              <Section>
                <Img
                  src={iconSrc3}
                  alt={iconAlt3}
                  width="20"
                  height="20"
                  style={iconStyle}
                />
                <Text
                  style={{
                    color: theme.colorText,
                    display: "inline-block",
                    fontSize: theme.fontSizeSm,
                    fontWeight: theme.fontWeightMedium,
                    margin: 0,
                    verticalAlign: "middle",
                  }}
                >
                  {q3}
                </Text>
              </Section>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

CollapsedFaqWithExpandedSectionAndIcons.PreviewProps = {
  a1: "This product helps you build beautiful emails quickly and easily.",
  heading: "FAQ",
  iconAlt1: "Q",
  iconAlt2: "Q",
  iconAlt3: "Q",
  iconSrc1:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-faq-collapsed-faq-with-expanded-section-and-icons-tsx-7&size=20",
  iconSrc2:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-faq-collapsed-faq-with-expanded-section-and-icons-tsx-8&size=20",
  iconSrc3:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-faq-collapsed-faq-with-expanded-section-and-icons-tsx-9&size=20",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  theme: defaultTheme,
  variant: "default",
} satisfies CollapsedFaqWithExpandedSectionAndIconsProps;
