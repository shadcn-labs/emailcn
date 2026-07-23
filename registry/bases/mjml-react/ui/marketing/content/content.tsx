import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { CSSProperties } from "react";

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

const paragraphStyle: CSSProperties = {
  color: colors.muted,
  fontFamily,
  fontSize: "16px",
  lineHeight: "26px",
  margin: 0,
};

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
  <td
    className="content-column"
    style={{
      ...columnPadding[index],
      verticalAlign: "top",
      width: "50%",
    }}
    width="50%"
  >
    {withIcon && iconSrc ? (
      <img
        alt={alt}
        height="24"
        src={iconSrc}
        width="24"
        style={{
          display: "block",
          height: "24px",
          margin: "0 auto 12px",
          width: "24px",
        }}
      />
    ) : null}
    <p
      style={{
        ...paragraphStyle,
        textAlign: withIcon ? "center" : "left",
      }}
    >
      {text}
    </p>
  </td>
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
      <div
        style={{
          backgroundColor: colors.background,
          padding: verticalPadding,
        }}
      >
        <p
          style={{
            color: colors.heading,
            fontFamily,
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "32px",
            margin: 0,
            textAlign: "center",
          }}
        >
          {title}
        </p>
      </div>
    );
  }

  if (columns === 2) {
    return (
      <div
        style={{
          backgroundColor: colors.background,
          padding: verticalPadding,
        }}
      >
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          role="presentation"
          style={{ borderCollapse: "collapse", width: "100%" }}
          width="100%"
        >
          <tbody>
            <tr>
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
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: colors.background,
        padding: verticalPadding,
      }}
    >
      <p style={{ ...paragraphStyle, textAlign: "center" }}>{text}</p>
    </div>
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
      <MjmlStyle>{`
        @media only screen and (max-width: 600px) {
          .content-column {
            display: block !important;
            padding: 0 0 24px !important;
            width: 100% !important;
          }
          .content-column:last-child { padding-bottom: 0 !important; }
        }
      `}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor={colors.background} width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <MjmlRaw>
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
        </MjmlRaw>
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
