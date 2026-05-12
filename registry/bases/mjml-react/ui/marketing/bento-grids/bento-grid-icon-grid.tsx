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

export type BentoGridIconGridVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface BentoGridIconGridProps {
  theme?: EmailThemeTokens;
  heading?: string;
  items?: { iconUrl?: string; title: string }[];
  variant?: BentoGridIconGridVariant;
}
const BentoGridIconGridSection = ({
  heading,
  items,
  theme,
  variant,
}: {
  heading: string;
  items: BentoGridIconGridProps["items"];
  theme: EmailThemeTokens;
  variant: BentoGridIconGridVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {heading ? (
      <MjmlColumn>
        <MjmlText
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeHeading}
          fontWeight={theme.fontWeightBold}
          paddingBottom={theme.spacingXl ?? "48px"}
        >
          {heading}
        </MjmlText>
      </MjmlColumn>
    ) : null}
    {(items ?? []).slice(0, 6).map((item, i) => (
      <MjmlColumn
        key={item.title + i}
        width="33.33%"
        padding={theme.spacingBase ?? "16px"}
        verticalAlign="middle"
      >
        {item.iconUrl ? (
          <MjmlImage
            align="center"
            alt={item.title}
            src={item.iconUrl}
            width={48}
            paddingBottom={theme.spacingBase ?? "8px"}
          />
        ) : null}
        <MjmlText
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase}
          fontWeight={theme.fontWeightMedium}
        >
          {item.title}
        </MjmlText>
      </MjmlColumn>
    ))}
  </MjmlSection>
);
export const BentoGridIconGrid = ({
  theme = defaultTheme,
  heading = "Technologies",
  items = [
    { title: "React" },
    { title: "TypeScript" },
    { title: "Node.js" },
    { title: "Next.js" },
    { title: "Tailwind" },
    { title: "MJML" },
  ],
  variant = "default",
}: BentoGridIconGridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>bento icon grid</MjmlPreview>
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
        <BentoGridIconGridSection
          heading={heading}
          items={items}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
BentoGridIconGrid.PreviewProps = {
  heading: "Technologies",
  items: [
    { title: "React" },
    { title: "TypeScript" },
    { title: "Node.js" },
    { title: "Next.js" },
    { title: "Tailwind" },
    { title: "MJML" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridIconGridProps;
