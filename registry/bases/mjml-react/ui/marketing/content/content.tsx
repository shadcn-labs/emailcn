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

export interface ContentProps {
  theme?: EmailThemeTokens;
  type?: "title" | "paragraph";
  columns?: 1 | 2;
  withIcons?: boolean;
  padding?: "regular" | "large";
  title?: string;
  text?: string;
  column1?: string;
  column2?: string;
  iconSrc1?: string;
  iconAlt1?: string;
  iconSrc2?: string;
  iconAlt2?: string;
}

const ContentSection = ({
  theme,
  type,
  columns,
  withIcons,
  padding,
  title,
  text,
  column1,
  column2,
  iconSrc1,
  iconAlt1,
  iconSrc2,
  iconAlt2,
}: Omit<ContentProps, "theme"> & { theme: EmailThemeTokens }) => {
  const sectionPadding = padding === "large" ? "64px 0" : "32px 0";

  if (type === "title") {
    return (
      <MjmlSection
        backgroundColor={theme.colorBackground}
        padding={sectionPadding}
      >
        <MjmlColumn>
          <MjmlText
            align="center"
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeHeading}
            fontWeight={theme.fontWeightBold}
          >
            {title}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    );
  }

  if (columns === 2) {
    return (
      <MjmlSection
        backgroundColor={theme.colorBackground}
        padding={sectionPadding}
      >
        <MjmlColumn padding={theme.spacingBase ?? "16px"} verticalAlign="top">
          {withIcons && iconSrc1 ? (
            <MjmlImage
              align="center"
              alt={iconAlt1}
              height="24px"
              padding="0 0 12px"
              src={iconSrc1}
              width="24px"
            />
          ) : null}
          <MjmlText
            align={withIcons ? "center" : "left"}
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase ?? "14px"}
            lineHeight={theme.lineHeightBase}
          >
            {column1}
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn padding={theme.spacingBase ?? "16px"} verticalAlign="top">
          {withIcons && iconSrc2 ? (
            <MjmlImage
              align="center"
              alt={iconAlt2}
              height="24px"
              padding="0 0 12px"
              src={iconSrc2}
              width="24px"
            />
          ) : null}
          <MjmlText
            align={withIcons ? "center" : "left"}
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase ?? "14px"}
            lineHeight={theme.lineHeightBase}
          >
            {column2}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    );
  }

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={sectionPadding}
    >
      <MjmlColumn>
        <MjmlText
          align="center"
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
          lineHeight={theme.lineHeightBase}
        >
          {text}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
};

export const Content = ({
  theme = defaultTheme,
  type = "paragraph",
  columns = 1,
  withIcons = false,
  padding = "regular",
  title = "Section Title",
  text = "This is a paragraph used to present information in a clear and readable way.",
  column1 = "This is the first column of a two-column paragraph layout.",
  column2 = "This is the second column of a two-column paragraph layout.",
  iconSrc1,
  iconAlt1 = "Icon 1",
  iconSrc2,
  iconAlt2 = "Icon 2",
}: ContentProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{type === "title" ? title : "Content"}</MjmlPreview>
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
        <ContentSection
          theme={theme}
          type={type}
          columns={columns}
          withIcons={withIcons}
          padding={padding}
          title={title}
          text={text}
          column1={column1}
          column2={column2}
          iconSrc1={iconSrc1}
          iconAlt1={iconAlt1}
          iconSrc2={iconSrc2}
          iconAlt2={iconAlt2}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

Content.PreviewProps = {
  columns: 1,
  padding: "regular",
  text: "This is a paragraph used to present information in a clear and readable way.",
  theme: defaultTheme,
  type: "paragraph",
  withIcons: false,
} satisfies ContentProps;
