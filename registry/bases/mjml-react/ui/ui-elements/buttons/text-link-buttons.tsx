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

export interface TextLinkButtonsProps {
  theme?: EmailThemeTokens;
  label?: string;
  href?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const TextLinkButtonsSection = ({
  label,
  href,
  theme,
  variant,
}: {
  label: string;
  href: string;
  theme: EmailThemeTokens;
  variant: NonNullable<TextLinkButtonsProps["variant"]>;
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
            {label}
          </a>
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
};

export const TextLinkButtons = ({
  theme = defaultTheme,
  label = "Click Here",
  href = "#",
  variant = "default",
}: TextLinkButtonsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>text-link</MjmlPreview>
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
        <TextLinkButtonsSection
          label={label}
          href={href}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

TextLinkButtons.PreviewProps = {
  href: "#",
  label: "Unsubscribe",
  theme: defaultTheme,
  variant: "default",
} satisfies TextLinkButtonsProps;
