import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlColumn,
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

const colors = {
  background: "#ffffff",
  heading: "#111827",
  muted: "#6b7280",
} as const;

const fontFamily =
  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const columnPadding = [
  { padding: "0 16px 0 0" },
  { padding: "0 0 0 16px" },
] as const;

const ContentColumn = ({
  alt,
  iconSrc,
  index,
  text,
  withIcon,
}: {
  alt: string;
  iconSrc?: string;
  index: 0 | 1;
  text: string;
  withIcon: boolean;
}) => (
  <MjmlColumn
    padding={columnPadding[index].padding}
    verticalAlign="top"
    width="50%"
  >
    {withIcon && iconSrc ? (
      <MjmlImage
        alt={alt}
        height="24px"
        padding="0 0 12px"
        src={iconSrc}
        width="24px"
      />
    ) : null}
    <MjmlText
      align={withIcon ? "center" : "left"}
      color={colors.muted}
      fontFamily={fontFamily}
      fontSize="16px"
      lineHeight="26px"
      padding="0"
    >
      {text}
    </MjmlText>
  </MjmlColumn>
);

export const ContentSection = ({
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
}: Omit<ContentProps, "theme">) => {
  const verticalPadding = padding === "large" ? "64px 0" : "32px 0";

  if (type === "title") {
    return (
      <MjmlSection
        backgroundColor={colors.background}
        padding={verticalPadding}
      >
        <MjmlColumn padding="0">
          <MjmlText
            align="center"
            color={colors.heading}
            fontFamily={fontFamily}
            fontSize="24px"
            fontWeight="700"
            lineHeight="32px"
            padding="0"
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
        backgroundColor={colors.background}
        padding={verticalPadding}
      >
        <ContentColumn
          alt={iconAlt1}
          iconSrc={iconSrc1}
          index={0}
          text={column1}
          withIcon={withIcons}
        />
        <ContentColumn
          alt={iconAlt2}
          iconSrc={iconSrc2}
          index={1}
          text={column2}
          withIcon={withIcons}
        />
      </MjmlSection>
    );
  }

  return (
    <MjmlSection backgroundColor={colors.background} padding={verticalPadding}>
      <MjmlColumn padding="0">
        <MjmlText
          align="center"
          color={colors.muted}
          fontFamily={fontFamily}
          fontSize="16px"
          lineHeight="26px"
          padding="0"
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
  title,
  text,
  column1,
  column2,
  iconSrc1,
  iconAlt1,
  iconSrc2,
  iconAlt2,
}: ContentProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>
        {type === "title" ? (title ?? "Title") : "Content"}
      </MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor={colors.background} width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <ContentSection
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
