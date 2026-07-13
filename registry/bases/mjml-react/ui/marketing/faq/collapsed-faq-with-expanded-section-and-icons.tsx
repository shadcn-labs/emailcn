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
  MjmlStyle,
  MjmlText,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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

const variantClass = (
  variant: CollapsedFaqWithExpandedSectionAndIconsVariant
) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

const iconImg = (src: string, alt: string) => (
  <img
    alt={alt}
    src={src}
    width="20"
    height="20"
    style={{
      display: "inline-block",
      height: "auto",
      marginRight: "8px",
      objectFit: "contain",
      verticalAlign: "middle",
    }}
  />
);

export const CollapsedFaqWithExpandedSectionAndIcons = ({
  theme = defaultTheme,
  heading = "FAQ",
  iconSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-faq-collapsed-faq-with-expanded-section-and-icons-tsx-1&size=20",
  iconAlt1 = "",
  q1 = "What is this product?",
  a1 = "This product helps you build beautiful emails.",
  iconSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-faq-collapsed-faq-with-expanded-section-and-icons-tsx-2&size=20",
  iconAlt2 = "",
  q2 = "How does pricing work?",
  iconSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-faq-collapsed-faq-with-expanded-section-and-icons-tsx-3&size=20",
  iconAlt3 = "",
  q3 = "Is there customer support?",
  variant = "default",
}: CollapsedFaqWithExpandedSectionAndIconsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{heading}</MjmlPreview>
      <MjmlStyle>{`
        .ec-skew-left > div { transform: skewX(-10deg); }
        .ec-skew-right > div { transform: skewX(10deg); }
      `}</MjmlStyle>
      <MjmlAttributes>
        <MjmlAll color={theme.colorText} fontFamily={theme.fontFamily} />
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
        padding="64px 0"
      >
        <MjmlColumn>
          {heading ? (
            <MjmlText
              align="center"
              color={theme.colorText}
              fontSize={theme.fontSizeHeading}
              fontWeight={theme.fontWeightBold}
              paddingBottom="32px"
            >
              {heading}
            </MjmlText>
          ) : null}
          <MjmlText paddingBottom="24px">
            <span
              style={{
                backgroundColor: theme.colorBackgroundMuted,
                borderRadius: theme.borderRadiusLg ?? theme.borderRadius,
                display: "block",
                padding: "16px",
              }}
            >
              <span style={{ display: "block", marginBottom: "8px" }}>
                {iconImg(iconSrc1, iconAlt1)}
                <span
                  style={{
                    color: theme.colorText,
                    fontSize: theme.fontSizeSm,
                    fontWeight: theme.fontWeightBold,
                  }}
                >
                  {q1}
                </span>
              </span>
              <span
                style={{
                  color: theme.colorTextMuted,
                  display: "block",
                  fontSize: theme.fontSizeSm,
                  lineHeight: theme.lineHeightBase,
                  paddingLeft: "28px",
                }}
              >
                {a1}
              </span>
            </span>
          </MjmlText>
          <MjmlText paddingBottom="16px">
            {iconImg(iconSrc2, iconAlt2)}
            <span
              style={{
                color: theme.colorText,
                fontSize: theme.fontSizeSm,
                fontWeight: theme.fontWeightMedium,
              }}
            >
              {q2}
            </span>
          </MjmlText>
          <MjmlText>
            {iconImg(iconSrc3, iconAlt3)}
            <span
              style={{
                color: theme.colorText,
                fontSize: theme.fontSizeSm,
                fontWeight: theme.fontWeightMedium,
              }}
            >
              {q3}
            </span>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);

CollapsedFaqWithExpandedSectionAndIcons.PreviewProps = {
  a1: "This product helps you build beautiful emails.",
  heading: "FAQ",
  iconAlt1: "",
  iconAlt2: "",
  iconAlt3: "",
  iconSrc1:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-faq-collapsed-faq-with-expanded-section-and-icons-tsx-7&size=20",
  iconSrc2:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-faq-collapsed-faq-with-expanded-section-and-icons-tsx-8&size=20",
  iconSrc3:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-faq-collapsed-faq-with-expanded-section-and-icons-tsx-9&size=20",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  theme: defaultTheme,
  variant: "default",
} satisfies CollapsedFaqWithExpandedSectionAndIconsProps;
