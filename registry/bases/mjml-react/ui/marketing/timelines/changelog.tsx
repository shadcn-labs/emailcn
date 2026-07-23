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
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type ChangelogVariant =
  | "muted-left"
  | "muted-right"
  | "basic-left"
  | "basic-right"
  | "accent-left"
  | "accent-right";

export type ChangelogLayout = "line" | "boxed";

export interface ChangelogProps {
  theme?: EmailThemeTokens;
  variant?: ChangelogVariant;
  layout?: ChangelogLayout;
  version?: string;
  date?: string;
  category?: string;
  title?: string;
  description?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  .changelog-mobile { display: none; }
  @media only screen and (max-width: 599px) {
    .changelog-meta { width: 96px !important; }
  }
  @media only screen and (max-width: 430px) {
    .changelog-meta, .changelog-gap { display: none !important; }
    .changelog-mobile { display: block !important; }
    .changelog-content { width: 100% !important; }
    .changelog-copy { text-align: left !important; }
  }
`;

const textStyle = {
  fontFamily,
  margin: 0,
} as const;

const ChangelogShell = ({ children }: { children: ReactNode }) => (
  <>
    <style>{responsiveStyles}</style>
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ backgroundColor: "#f1f5f9", width: "100%" }}
    >
      <tbody>
        <tr>
          <td>&zwj;</td>
          <td
            style={{
              backgroundColor: "#fffffe",
              maxWidth: "100%",
              width: "600px",
            }}
          >
            {children}
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
  </>
);

interface BadgeProps {
  muted: boolean;
  version: string;
}

const VersionBadge = ({ muted, version }: BadgeProps) => (
  <span
    style={{
      backgroundColor: muted ? "#f9fafb" : "#eef2ff",
      border: `1px solid ${muted ? "#d1d5db" : "#a5b4fc"}`,
      borderRadius: "9999px",
      color: muted ? "#4b5563" : "#4f46e5",
      display: "inline-block",
      fontFamily,
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16px",
      padding: "2px 8px",
    }}
  >
    {version}
  </span>
);

interface MetaProps {
  category: string;
  date: string;
  muted: boolean;
  right: boolean;
  version: string;
}

const ChangelogMeta = ({
  category,
  date,
  muted,
  right,
  version,
}: MetaProps) => (
  <td
    className="changelog-meta"
    style={{
      textAlign: right ? "left" : "right",
      verticalAlign: "top",
      width: "136px",
    }}
  >
    <div style={{ lineHeight: "6px" }}>&zwj;</div>
    <VersionBadge muted={muted} version={version} />
    <p
      style={{
        ...textStyle,
        color: "#030712",
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "24px",
        marginTop: "8px",
      }}
    >
      {date}
    </p>
    <p
      style={{
        ...textStyle,
        color: "#6b7280",
        fontSize: "12px",
        fontWeight: 600,
        lineHeight: "16px",
        marginTop: "8px",
      }}
    >
      {category}
    </p>
  </td>
);

const ChangelogRail = ({
  muted,
  accent,
}: {
  accent: boolean;
  muted: boolean;
}) => (
  <td style={{ verticalAlign: "top", width: "12px" }}>
    <div
      style={{
        backgroundColor: muted ? undefined : "#4f46e5",
        border: muted ? "2px solid #d1d5db" : undefined,
        borderRadius: "9999px",
        height: muted ? "8px" : "12px",
        margin: muted ? "8px 2px 0" : "6px 0 0",
        width: muted ? "8px" : "12px",
      }}
    >
      &zwj;
    </div>
    <div
      style={{
        backgroundColor: accent ? "#030712" : "#d1d5db",
        height: "104px",
        margin: "0 auto",
        width: "2px",
      }}
    >
      &zwj;
    </div>
  </td>
);

interface CopyProps {
  boxed: boolean;
  dark: boolean;
  description: string;
  title: string;
}

const ChangelogCopy = ({ boxed, dark, description, title }: CopyProps) =>
  boxed ? (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{
        backgroundColor: dark ? "#030712" : "#f9fafb",
        borderRadius: "8px",
        width: "100%",
      }}
    >
      <tbody>
        <tr>
          <td style={{ padding: "24px 24px 0" }}>
            <p
              style={{
                ...textStyle,
                color: dark ? "#fffffe" : "#030712",
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "24px",
              }}
            >
              {title}
            </p>
          </td>
        </tr>
        <tr>
          <td style={{ padding: "16px 24px 24px" }}>
            <p
              style={{
                ...textStyle,
                color: dark ? "#d1d5db" : "#4b5563",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              {description}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  ) : (
    <>
      <p
        style={{
          ...textStyle,
          color: "#030712",
          fontSize: "18px",
          fontWeight: 600,
          lineHeight: "24px",
        }}
      >
        {title}
      </p>
      <div style={{ lineHeight: "16px" }}>&zwj;</div>
      <p
        style={{
          ...textStyle,
          color: "#4b5563",
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        {description}
      </p>
    </>
  );

interface ContentProps {
  accent: boolean;
  boxed: boolean;
  category: string;
  date: string;
  description: string;
  muted: boolean;
  right: boolean;
  title: string;
  version: string;
}

const ChangelogContent = ({
  accent,
  boxed,
  category,
  date,
  description,
  muted,
  right,
  title,
  version,
}: ContentProps) => {
  const copy = (
    <td
      className="changelog-copy"
      style={{ paddingBottom: "80px", textAlign: right ? "right" : "left" }}
    >
      <div className="changelog-mobile">
        <VersionBadge muted={muted} version={version} />
        <p
          style={{
            ...textStyle,
            color: "#030712",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "24px",
            marginTop: "8px",
          }}
        >
          {date}
        </p>
        <p
          style={{
            ...textStyle,
            color: "#6b7280",
            fontSize: "12px",
            fontWeight: 600,
            lineHeight: "16px",
            marginTop: "8px",
          }}
        >
          {category}
        </p>
        <div style={{ lineHeight: "24px" }}>&zwj;</div>
      </div>
      <ChangelogCopy
        boxed={boxed}
        dark={boxed && accent}
        description={description}
        title={title}
      />
    </td>
  );

  return (
    <td className="changelog-content" style={{ verticalAlign: "top" }}>
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        style={{ width: "100%" }}
      >
        <tbody>
          <tr>
            {right ? (
              <>
                {copy}
                <td style={{ width: "16px" }}>&zwj;</td>
                <ChangelogRail accent={accent} muted={muted} />
              </>
            ) : (
              <>
                <ChangelogRail accent={accent} muted={muted} />
                <td style={{ width: "16px" }}>&zwj;</td>
                {copy}
              </>
            )}
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export const ChangelogSection = ({
  category = "Refactoring",
  date = "19 Jan",
  description = "Introduced a new timeline pattern to clearly represent ordered states and progression, improving clarity across step-based and time-based flows.",
  layout = "line",
  title = "Refined layouts",
  variant = "muted-left",
  version = "v1.0.9",
}: Omit<ChangelogProps, "theme">) => {
  const boxed = layout === "boxed";
  const right = variant.endsWith("-right");
  const muted = variant.startsWith("muted");
  const accent = variant.startsWith("accent");
  const meta = (
    <ChangelogMeta
      category={category}
      date={date}
      muted={muted}
      right={right}
      version={version}
    />
  );
  const content = (
    <ChangelogContent
      accent={accent}
      boxed={boxed}
      category={category}
      date={date}
      description={description}
      muted={muted}
      right={right}
      title={title}
      version={version}
    />
  );

  return (
    <ChangelogShell>
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        style={{ width: "100%" }}
      >
        <tbody>
          <tr>
            <td style={{ padding: "0 24px" }}>
              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                role="presentation"
                style={{ width: "100%" }}
              >
                <tbody>
                  <tr>
                    {right ? content : meta}
                    <td className="changelog-gap" style={{ width: "16px" }}>
                      &zwj;
                    </td>
                    {right ? meta : content}
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </ChangelogShell>
  );
};

export const Changelog = ({
  theme = defaultTheme,
  ...props
}: ChangelogProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Refined layouts</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <div style={{ textAlign: "left" }}>
            <ChangelogSection {...props} />
          </div>
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

Changelog.PreviewProps = {
  layout: "line",
  theme: defaultTheme,
  variant: "muted-left",
} satisfies ChangelogProps;
