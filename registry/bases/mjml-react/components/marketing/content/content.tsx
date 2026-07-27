import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlStyle,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
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
  "https://cdn.simpleicons.org/github/111827",
  "https://cdn.simpleicons.org/slack/4A154B",
] as const;

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
    <MjmlColumn
      cssClass="content-column"
      padding={columnPadding}
      verticalAlign="top"
      width="50%"
    >
      {withIcon ? (
        <MjmlImage
          align={alignment}
          alt={alt}
          height="48px"
          padding="0 0 10px"
          src={iconSrc}
          width="48px"
        />
      ) : null}
      <MjmlText
        align={alignment}
        color={colors.muted}
        fontFamily={fontFamily}
        fontSize={fontSize}
        lineHeight={lineHeight}
        padding="0"
      >
        {text}
      </MjmlText>
    </MjmlColumn>
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
  const sectionPadding = `44px ${horizontalPadding}`;

  if (layout === "title") {
    const isLarge = variant === "large";

    return (
      <MjmlSection backgroundColor={colors.background} padding={sectionPadding}>
        <MjmlColumn padding="0">
          <MjmlText
            align={alignment}
            color={colors.heading}
            fontFamily={fontFamily}
            fontSize={isLarge ? "30px" : "24px"}
            fontWeight="600"
            lineHeight={isLarge ? "36px" : "32px"}
            padding="0"
          >
            {title}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    );
  }

  const isBody = variant === "body";
  const fontSize = isBody ? "16px" : "18px";
  const lineHeight = isBody ? "24px" : "28px";

  if (layout === "two-columns" || layout === "two-columns-with-icons") {
    const withIcons = layout === "two-columns-with-icons";

    return (
      <MjmlSection backgroundColor={colors.background} padding={sectionPadding}>
        <ContentColumn
          alignment={alignment}
          alt={iconAlt1}
          fontSize={fontSize}
          iconSrc={iconSrc1}
          index={0}
          lineHeight={lineHeight}
          text={column1}
          withIcon={withIcons}
        />
        <ContentColumn
          alignment={alignment}
          alt={iconAlt2}
          fontSize={fontSize}
          iconSrc={iconSrc2}
          index={1}
          lineHeight={lineHeight}
          text={column2}
          withIcon={withIcons}
        />
      </MjmlSection>
    );
  }

  return (
    <MjmlSection backgroundColor={colors.background} padding={sectionPadding}>
      <MjmlColumn padding="0">
        <MjmlText
          align={alignment}
          color={colors.muted}
          fontFamily={fontFamily}
          fontSize={fontSize}
          lineHeight={lineHeight}
          padding="0"
        >
          {text}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>
        {layout === "title" ? (title ?? "Title") : "Content"}
      </MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>
        {`
          @media only screen and (max-width: 600px) {
            .content-column {
              padding: 0 0 44px !important;
              width: 100% !important;
            }
            .content-column:last-child { padding-bottom: 0 !important; }
          }
        `}
      </MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor={colors.background} width={theme.containerWidth}>
      <MjmlWrapper padding="0">
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
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

Content.PreviewProps = {
  alignment: "center",
  layout: "paragraph",
  padding: "regular",
  theme: defaultTheme,
  variant: "lead",
} satisfies ContentProps;
