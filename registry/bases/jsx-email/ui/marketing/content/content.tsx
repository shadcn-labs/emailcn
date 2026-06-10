/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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
      <Section
        style={{
          backgroundColor: theme.colorBackground,
          padding: sectionPadding,
        }}
      >
        <Row>
          <Column>
            <Text
              style={{
                color: theme.colorText,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeHeading,
                fontWeight: theme.fontWeightBold,
                margin: 0,
                textAlign: "center",
              }}
            >
              {title}
            </Text>
          </Column>
        </Row>
      </Section>
    );
  }

  if (columns === 2) {
    return (
      <Section
        style={{
          backgroundColor: theme.colorBackground,
          padding: sectionPadding,
        }}
      >
        <Row>
          <Column
            style={{
              padding: theme.spacingBase ?? "16px",
              verticalAlign: "top",
            }}
          >
            {withIcons && iconSrc1 ? (
              <Img
                alt={iconAlt1}
                height="24px"
                src={iconSrc1}
                width="24px"
                style={{
                  display: "block",
                  margin: "0 auto",
                  maxWidth: "100%",
                  padding: "0 0 12px",
                }}
              />
            ) : null}
            <Text
              style={{
                color: theme.colorTextMuted,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeBase ?? "14px",
                lineHeight: theme.lineHeightBase,
                margin: 0,
                textAlign: withIcons ? "center" : "left",
              }}
            >
              {column1}
            </Text>
          </Column>
          <Column
            style={{
              padding: theme.spacingBase ?? "16px",
              verticalAlign: "top",
            }}
          >
            {withIcons && iconSrc2 ? (
              <Img
                alt={iconAlt2}
                height="24px"
                src={iconSrc2}
                width="24px"
                style={{
                  display: "block",
                  margin: "0 auto",
                  maxWidth: "100%",
                  padding: "0 0 12px",
                }}
              />
            ) : null}
            <Text
              style={{
                color: theme.colorTextMuted,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeBase ?? "14px",
                lineHeight: theme.lineHeightBase,
                margin: 0,
                textAlign: withIcons ? "center" : "left",
              }}
            >
              {column2}
            </Text>
          </Column>
        </Row>
      </Section>
    );
  }

  return (
    <Section
      style={{
        backgroundColor: theme.colorBackground,
        padding: sectionPadding,
      }}
    >
      <Row>
        <Column>
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeBase ?? "14px",
              lineHeight: theme.lineHeightBase,
              margin: 0,
              textAlign: "center",
            }}
          >
            {text}
          </Text>
        </Column>
      </Row>
    </Section>
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
  <Html>
    <Head />
    <Preview>{type === "title" ? title : "Content"}</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        color: theme.colorTextMuted,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeBase,
        lineHeight: theme.lineHeightBase,
        margin: 0,
      }}
    >
      <Container style={{ maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "0" }}>
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
        </Section>
      </Container>
    </Body>
  </Html>
);

Content.PreviewProps = {
  columns: 1,
  padding: "regular",
  text: "This is a paragraph used to present information in a clear and readable way.",
  theme: defaultTheme,
  type: "paragraph",
  withIcons: false,
} satisfies ContentProps;
