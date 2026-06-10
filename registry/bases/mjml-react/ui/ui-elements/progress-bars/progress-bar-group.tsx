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

export interface ProgressBarGroupProps {
  theme?: EmailThemeTokens;
  items?: { label: string; value: number }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const ProgressBarGroupSection = ({
  items,
  theme,
}: {
  items: NonNullable<ProgressBarGroupProps["items"]>;
  theme: EmailThemeTokens;
}) => (
  <MjmlSection padding={`${theme.spacingLg ?? "32px"} 0`}>
    <MjmlColumn>
      {items.map((item) => {
        const clamped = Math.max(0, Math.min(100, item.value));
        return (
          <MjmlSection
            key={item.label}
            padding={`0 0 ${theme.spacingBase ?? "16px"}`}
          >
            <MjmlColumn>
              <MjmlText
                color={theme.colorText}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeSm ?? "12px"}
                paddingBottom={theme.spacingBase ?? "16px"}
              >
                {item.label}
              </MjmlText>
              <MjmlSection
                backgroundColor={theme.colorBackgroundSubtle ?? "#f3f4f6"}
                borderRadius={theme.borderRadius}
                padding="0"
              >
                {clamped > 0 ? (
                  <MjmlColumn
                    backgroundColor={theme.colorPrimary}
                    borderRadius={theme.borderRadius}
                    width={`${clamped}%`}
                    padding="6px 0"
                  >
                    <MjmlText
                      align="center"
                      color={theme.colorPrimaryForeground}
                      fontFamily={theme.fontFamily}
                      fontSize="10px"
                      fontWeight={theme.fontWeightBold ?? "600"}
                      padding="0"
                    >
                      {clamped}%
                    </MjmlText>
                  </MjmlColumn>
                ) : null}
                {clamped < 100 ? (
                  <MjmlColumn width={`${100 - clamped}%`} padding="0" />
                ) : null}
              </MjmlSection>
            </MjmlColumn>
          </MjmlSection>
        );
      })}
    </MjmlColumn>
  </MjmlSection>
);

export const ProgressBarGroup = ({
  theme = defaultTheme,
  items = [
    { label: "Task 1", value: 80 },
    { label: "Task 2", value: 60 },
  ],
  variant = "default",
}: ProgressBarGroupProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>progress-group</MjmlPreview>
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
        <ProgressBarGroupSection items={items} theme={theme} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ProgressBarGroup.PreviewProps = {
  items: [
    { label: "Research", value: 100 },
    { label: "Design", value: 75 },
    { label: "Dev", value: 50 },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies ProgressBarGroupProps;
