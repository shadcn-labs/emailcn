/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlDivider,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export interface DividerWithFileTypeProps {
  theme?: EmailThemeTokens;
  fileType?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DividerWithFileTypeSection = ({
  fileType,
  theme,
  variant,
}: {
  fileType: string;
  theme: EmailThemeTokens;
  variant: NonNullable<DividerWithFileTypeProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "center";
  return (
    <MjmlSection padding={`${theme.spacingBase ?? "16px"} 0`}>
      <MjmlColumn>
        <MjmlDivider
          borderColor={theme.colorBorder}
          paddingBottom={theme.spacingBase ?? "16px"}
        />
        <MjmlSection
          backgroundColor={theme.colorBackgroundMuted}
          borderRadius={theme.borderRadius}
          padding="Fourpx 12px"
        >
          <MjmlColumn>
            <MjmlText
              align={alignText}
              color={theme.colorTextMuted}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeSm ?? "12px"}
              fontWeight={theme.fontWeightMedium ?? "500"}
            >
              {fileType}
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlDivider
          borderColor={theme.colorBorder}
          paddingTop={theme.spacingBase ?? "16px"}
        />
      </MjmlColumn>
    </MjmlSection>
  );
};

export const DividerWithFileType = ({
  theme = defaultTheme,
  fileType = "PDF",
  variant = "default",
}: DividerWithFileTypeProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>divider-file</MjmlPreview>
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
        <DividerWithFileTypeSection
          fileType={fileType}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

DividerWithFileType.PreviewProps = {
  fileType: "PDF",
  theme: defaultTheme,
  variant: "default",
} satisfies DividerWithFileTypeProps;
