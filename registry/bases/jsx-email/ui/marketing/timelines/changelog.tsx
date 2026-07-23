import {
  Body,
  Head,
  Html,
  Preview,
  Section,
  Row,
  Column,
  Text,
} from "jsx-email";
import type { ReactNode } from "react";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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
    <Section style={{ backgroundColor: "#f1f5f9", width: "100%" }}>
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: "#fffffe",
              maxWidth: "100%",
              width: "600px",
            }}
          >
            {children}
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
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
  <Column
    className="changelog-meta"
    style={{
      textAlign: right ? "left" : "right",
      verticalAlign: "top",
      width: "136px",
    }}
  >
    <Section style={{ lineHeight: "6px" }}>&zwj;</Section>
    <VersionBadge muted={muted} version={version} />
    <Text
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
    </Text>
    <Text
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
    </Text>
  </Column>
);

const ChangelogRail = ({
  muted,
  accent,
}: {
  accent: boolean;
  muted: boolean;
}) => (
  <Column style={{ verticalAlign: "top", width: "12px" }}>
    <Section
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
    </Section>
    <Section
      style={{
        backgroundColor: accent ? "#030712" : "#d1d5db",
        height: "104px",
        margin: "0 auto",
        width: "2px",
      }}
    >
      &zwj;
    </Section>
  </Column>
);

interface CopyProps {
  boxed: boolean;
  dark: boolean;
  description: string;
  title: string;
}

const ChangelogCopy = ({ boxed, dark, description, title }: CopyProps) =>
  boxed ? (
    <Section
      style={{
        backgroundColor: dark ? "#030712" : "#f9fafb",
        borderRadius: "8px",
        width: "100%",
      }}
    >
      <Fragment>
        <Row>
          <Column style={{ padding: "24px 24px 0" }}>
            <Text
              style={{
                ...textStyle,
                color: dark ? "#fffffe" : "#030712",
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "24px",
              }}
            >
              {title}
            </Text>
          </Column>
        </Row>
        <Row>
          <Column style={{ padding: "16px 24px 24px" }}>
            <Text
              style={{
                ...textStyle,
                color: dark ? "#d1d5db" : "#4b5563",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              {description}
            </Text>
          </Column>
        </Row>
      </Fragment>
    </Section>
  ) : (
    <>
      <Text
        style={{
          ...textStyle,
          color: "#030712",
          fontSize: "18px",
          fontWeight: 600,
          lineHeight: "24px",
        }}
      >
        {title}
      </Text>
      <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
      <Text
        style={{
          ...textStyle,
          color: "#4b5563",
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        {description}
      </Text>
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
    <Column
      className="changelog-copy"
      style={{ paddingBottom: "80px", textAlign: right ? "right" : "left" }}
    >
      <Section className="changelog-mobile">
        <VersionBadge muted={muted} version={version} />
        <Text
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
        </Text>
        <Text
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
        </Text>
        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
      </Section>
      <ChangelogCopy
        boxed={boxed}
        dark={boxed && accent}
        description={description}
        title={title}
      />
    </Column>
  );

  return (
    <Column className="changelog-content" style={{ verticalAlign: "top" }}>
      <Section style={{ width: "100%" }}>
        <Fragment>
          <Row>
            {right ? (
              <>
                {copy}
                <Column style={{ width: "16px" }}>&zwj;</Column>
                <ChangelogRail accent={accent} muted={muted} />
              </>
            ) : (
              <>
                <ChangelogRail accent={accent} muted={muted} />
                <Column style={{ width: "16px" }}>&zwj;</Column>
                {copy}
              </>
            )}
          </Row>
        </Fragment>
      </Section>
    </Column>
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
      <Section style={{ width: "100%" }}>
        <Fragment>
          <Row>
            <Column style={{ padding: "0 24px" }}>
              <Section style={{ width: "100%" }}>
                <Fragment>
                  <Row>
                    {right ? content : meta}
                    <Column className="changelog-gap" style={{ width: "16px" }}>
                      &zwj;
                    </Column>
                    {right ? meta : content}
                  </Row>
                </Fragment>
              </Section>
            </Column>
          </Row>
        </Fragment>
      </Section>
    </ChangelogShell>
  );
};

export const Changelog = ({
  theme: _theme = defaultTheme,
  ...props
}: ChangelogProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Refined layouts</Preview>
    <Body style={{ margin: 0 }}>
      <ChangelogSection {...props} />
    </Body>
  </Html>
);

Changelog.PreviewProps = {
  layout: "line",
  theme: defaultTheme,
  variant: "muted-left",
} satisfies ChangelogProps;
