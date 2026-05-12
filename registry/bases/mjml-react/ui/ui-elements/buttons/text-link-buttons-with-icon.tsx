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

export interface TextLinkButtonsWithIconProps {
  theme?: EmailThemeTokens;
  label?: string;
  href?: string;
  icon?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const TextLinkButtonsWithIconSection = ({
  label,
  href,
  icon,
  theme,
  variant,
}: {
  label: string;
  href: string;
  icon: string;
  theme: EmailThemeTokens;
  variant: NonNullable<TextLinkButtonsWithIconProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "center";
  return (
    <MjmlSection padding={`${theme.spacingBase ?? "24px"} 0`}>
      <MjmlColumn>
        <MjmlText
          align={alignText}
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
        >
          <a
            href={href}
            style={{
              color: theme.colorPrimary,
              fontFamily: theme.fontFamily,
              textDecoration: "underline",
            }}
          >
            {icon} {label}
          </a>
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
};

export const TextLinkButtonsWithIcon = ({
  theme = defaultTheme,
  label = "Learn More",
  href = "#",
  icon = "\u2192",
  variant = "default",
}: TextLinkButtonsWithIconProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>text-link-icon</MjmlPreview>
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
        <TextLinkButtonsWithIconSection
          label={label}
          href={href}
          icon={icon}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

TextLinkButtonsWithIcon.PreviewProps = {
  href: "#",
  icon: "\u2192",
  label: "View Details",
  theme: defaultTheme,
  variant: "default",
} satisfies TextLinkButtonsWithIconProps;
