import type { CSSProperties } from "react";
import {
  Body,
  Column,
  Container,
  Head as EmailHead,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { createEmailTailwindConfig } from "@/registry/bases/react-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/react-email/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

export type ContentAlignment = "left" | "center" | "right";
export type ContentLayout =
  | "title"
  | "paragraph"
  | "two-columns"
  | "two-columns-with-icons";
export type ContentPadding = "regular" | "large";
export type ContentVariant = "small" | "large" | "lead" | "body";

export interface ContentProps {
  alignment?: ContentAlignment;
  column1?: string;
  column2?: string;
  iconAlt1?: string;
  iconAlt2?: string;
  iconSrc1?: string;
  iconSrc2?: string;
  layout?: ContentLayout;
  padding?: ContentPadding;
  text?: string;
  theme?: EmailTheme;
  title?: string;
  variant?: ContentVariant;
}

const colors = {
  background: "#fffffe",
  heading: "#030712",
  muted: "#4b5563",
} as const;

const fontFamily =
  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const defaultIconSources = [
  emailAsset("social/icon-github.png"),
  emailAsset("social/icon-slack.png"),
] as const;

const getImageMargin = (alignment: ContentAlignment) => {
  if (alignment === "center") {
    return "0 auto 10px";
  }

  if (alignment === "right") {
    return "0 0 10px auto";
  }

  return "0 auto 10px 0";
};

const getTitleTypography = (variant?: ContentVariant) => {
  if (variant === "large") {
    return { fontSize: "30px", lineHeight: "36px" };
  }

  return { fontSize: "24px", lineHeight: "32px" };
};

const getParagraphTypography = (variant?: ContentVariant) => {
  if (variant === "body") {
    return { fontSize: "16px", lineHeight: "24px" };
  }

  return { fontSize: "18px", lineHeight: "28px" };
};

const ContentColumn = ({
  alignment,
  alt,
  fontSize,
  iconSrc,
  index,
  lineHeight,
  text,
  withIcon,
}: {
  alignment: ContentAlignment;
  alt: string;
  fontSize: string;
  iconSrc: string;
  index: 0 | 1;
  lineHeight: string;
  text: string;
  withIcon: boolean;
}) => {
  const columnPadding = index === 0 ? "0 22px 0 0" : "0 0 0 22px";

  return (
    <Column
      className="content-column"
      style={{
        padding: columnPadding,
        verticalAlign: "top",
        width: "50%",
      }}
      width="50%"
    >
      {withIcon ? (
        <Img
          alt={alt}
          height="48"
          src={iconSrc}
          width="48"
          style={{
            display: "block",
            height: "48px",
            margin: getImageMargin(alignment),
            width: "48px",
          }}
        />
      ) : null}
      <Text
        style={{
          color: colors.muted,
          fontFamily,
          fontSize,
          lineHeight,
          margin: 0,
          textAlign: alignment,
        }}
      >
        {text}
      </Text>
    </Column>
  );
};

export const ContentSection = ({
  alignment = "center",
  column1 = "A brief introduction that highlights the key idea in a clear, engaging way.",
  column2 = "A brief introduction that highlights the key idea in a clear, engaging way.",
  iconAlt1 = "GitHub",
  iconAlt2 = "Slack",
  iconSrc1 = defaultIconSources[0],
  iconSrc2 = defaultIconSources[1],
  layout = "paragraph",
  padding = "regular",
  text = "Lead text introduces the reader to the key message of an email. It sets the tone, provides context, and guides attention toward what matters most.",
  title = "Stay in the loop by following us across our social channels.",
  variant,
}: Omit<ContentProps, "theme">) => {
  const horizontalPadding = padding === "large" ? "64px" : "24px";
  const sectionStyle: CSSProperties = {
    backgroundColor: colors.background,
    padding: `44px ${horizontalPadding}`,
  };

  if (layout === "title") {
    const typography = getTitleTypography(variant);

    return (
      <Section style={sectionStyle}>
        <Text
          style={{
            color: colors.heading,
            fontFamily,
            fontSize: typography.fontSize,
            fontWeight: 600,
            lineHeight: typography.lineHeight,
            margin: 0,
            textAlign: alignment,
          }}
        >
          {title}
        </Text>
      </Section>
    );
  }

  const typography = getParagraphTypography(variant);

  if (layout === "two-columns" || layout === "two-columns-with-icons") {
    const withIcons = layout === "two-columns-with-icons";

    return (
      <Section style={sectionStyle}>
        <Row>
          <ContentColumn
            alignment={alignment}
            alt={iconAlt1}
            fontSize={typography.fontSize}
            iconSrc={iconSrc1}
            index={0}
            lineHeight={typography.lineHeight}
            text={column1}
            withIcon={withIcons}
          />
          <ContentColumn
            alignment={alignment}
            alt={iconAlt2}
            fontSize={typography.fontSize}
            iconSrc={iconSrc2}
            index={1}
            lineHeight={typography.lineHeight}
            text={column2}
            withIcon={withIcons}
          />
        </Row>
      </Section>
    );
  }

  return (
    <Section style={sectionStyle}>
      <Text
        style={{
          color: colors.muted,
          fontFamily,
          fontSize: typography.fontSize,
          lineHeight: typography.lineHeight,
          margin: 0,
          textAlign: alignment,
        }}
      >
        {text}
      </Text>
    </Section>
  );
};

export const Content = ({
  alignment = "center",
  column1,
  column2,
  iconAlt1,
  iconAlt2,
  iconSrc1,
  iconSrc2,
  layout = "paragraph",
  padding = "regular",
  text,
  theme = defaultTheme,
  title,
  variant,
}: ContentProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media only screen and (max-width: 600px) {
              .content-column {
                display: block !important;
                padding: 0 0 44px !important;
                width: 100% !important;
              }
              .content-column:last-child { padding-bottom: 0 !important; }
            }
          `,
        }}
      />
    </EmailHead>
    <Preview>{layout === "title" ? (title ?? "Title") : "Content"}</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body style={{ backgroundColor: colors.background }} className="m-0">
        <Container className="mx-auto max-w-[600px]">
          <ContentSection
            alignment={alignment}
            column1={column1}
            column2={column2}
            iconAlt1={iconAlt1}
            iconAlt2={iconAlt2}
            iconSrc1={iconSrc1}
            iconSrc2={iconSrc2}
            layout={layout}
            padding={padding}
            text={text}
            title={title}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

Content.PreviewProps = {
  alignment: "center",
  layout: "paragraph",
  padding: "regular",
  theme: defaultTheme,
  variant: "lead",
} satisfies ContentProps;
