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
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type ContentGridIconRowVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface ContentGridIconRowProps {
  theme?: EmailThemeTokens;
  columns?: { iconUrl?: string; title: string; description: string }[];
  variant?: ContentGridIconRowVariant;
}
const ContentGridIconRowSection = ({
  columns,
  theme,
  variant,
}: {
  columns: ContentGridIconRowProps["columns"];
  theme: EmailThemeTokens;
  variant: ContentGridIconRowVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {(columns ?? []).slice(0, 3).map((col, i) => (
      <MjmlColumn
        key={col.title + i}
        width="33.33%"
        padding={theme.spacingBase ?? "16px"}
        verticalAlign="top"
      >
        {col.iconUrl ? (
          <MjmlImage
            align="center"
            alt={col.title}
            src={col.iconUrl}
            width={48}
            paddingBottom={theme.spacingBase ?? "16px"}
          />
        ) : null}
        <MjmlText
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeLg}
          fontWeight={theme.fontWeightMedium}
          paddingBottom={theme.spacingBase ?? "8px"}
        >
          {col.title}
        </MjmlText>
        <MjmlText
          align="center"
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        >
          {col.description}
        </MjmlText>
      </MjmlColumn>
    ))}
  </MjmlSection>
);
export const Paragraph2ColumnsWithLargePadding = ({
  theme = defaultTheme,
  columns = [
    { description: "Description 1", title: "Feature 1" },
    { description: "Description 2", title: "Feature 2" },
    { description: "Description 3", title: "Feature 3" },
  ],
  variant = "default",
}: ContentGridIconRowProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>content icon row</MjmlPreview>
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
        <ContentGridIconRowSection
          columns={columns}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
Paragraph2ColumnsWithLargePadding.PreviewProps = {
  columns: [
    {
      description: "Lightning-fast performance.",
      iconUrl: "https://placehold.co/48x48?text=⚡",
      title: "Fast",
    },
    {
      description: "Works across all clients.",
      iconUrl: "https://placehold.co/48x48?text=📱",
      title: "Responsive",
    },
    {
      description: "Enterprise-grade security.",
      iconUrl: "https://placehold.co/48x48?text=🔒",
      title: "Secure",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies ContentGridIconRowProps;
