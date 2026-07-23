import {
  Body,
  Head,
  Html,
  Preview,
  Heading,
  Text,
  Section,
  Row,
  Column,
  Link,
  Img,
} from "jsx-email";
import type { CSSProperties, ReactNode } from "react";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

const colors = {
  border: "#e5e7eb",
  canvas: "#f1f5f9",
  dark: "#030712",
  light: "#f3f4f6",
  muted: "#4b5563",
  subtle: "#9ca3af",
  surface: "#fffffe",
  surfaceMuted: "#f9fafb",
  white: "#fffffe",
} as const;

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const tableStyle: CSSProperties = {
  borderCollapse: "separate",
  borderSpacing: 0,
  width: "100%",
};

const textBase: CSSProperties = {
  fontFamily,
  margin: 0,
};

export interface FaqItem {
  answer?: string;
  iconAlt?: string;
  iconSrc?: string;
  question: string;
}

const Question = ({ children }: { children: ReactNode }) => (
  <Heading
    style={{
      ...textBase,
      color: colors.dark,
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "20px",
    }}
    as="h3"
  >
    {children}
  </Heading>
);

const Answer = ({
  children,
  marginTop = 8,
}: {
  children: ReactNode;
  marginTop?: number;
}) => (
  <Text
    style={{
      ...textBase,
      color: colors.muted,
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "22px",
      marginTop: `${marginTop}px`,
    }}
  >
    {children}
  </Text>
);

const NumberLabel = ({ index }: { index: number }) => (
  <span
    style={{
      ...textBase,
      color: colors.subtle,
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "20px",
    }}
  >
    {String(index + 1).padStart(2, "0")}
  </span>
);

const ToggleIcon = ({
  expanded = false,
  item,
}: {
  expanded?: boolean;
  item?: FaqItem;
}) =>
  item?.iconSrc ? (
    <Img
      alt={item.iconAlt ?? ""}
      height={20}
      src={item.iconSrc}
      width={20}
      style={{
        border: "none",
        display: "block",
        height: "20px",
        outline: "none",
        textDecoration: "none",
        width: "20px",
      }}
    />
  ) : (
    <span
      style={{
        ...textBase,
        border: `1px solid ${colors.border}`,
        borderRadius: "9999px",
        color: colors.dark,
        display: "inline-block",
        fontSize: "14px",
        fontWeight: 500,
        height: "20px",
        lineHeight: "18px",
        textAlign: "center",
        width: "20px",
      }}
    >
      {expanded ? "−" : "+"}
    </span>
  );

export const FaqHeading = ({ children }: { children: ReactNode }) => (
  <>
    <Heading
      style={{
        ...textBase,
        color: colors.dark,
        fontSize: "28px",
        fontWeight: 600,
        lineHeight: "36px",
        textAlign: "center",
      }}
      as="h2"
    >
      {children}
    </Heading>
    <Section style={{ fontSize: 0, height: "32px", lineHeight: "32px" }}>
      &zwj;
    </Section>
  </>
);

export const ExpandedNumbersContent = ({
  items,
}: {
  items: readonly FaqItem[];
}) => (
  <Section style={tableStyle}>
    <Fragment>
      {items.map((item, index) => (
        <Row key={`${item.question}-${index}`}>
          <Column
            width={40}
            style={{
              borderTop: index === 0 ? undefined : `1px solid ${colors.border}`,
              padding: "20px 16px 20px 0",
              verticalAlign: "top",
              width: "40px",
            }}
          >
            <NumberLabel index={index} />
          </Column>
          <Column
            style={{
              borderTop: index === 0 ? undefined : `1px solid ${colors.border}`,
              padding: "20px 0",
              verticalAlign: "top",
            }}
          >
            <Question>{item.question}</Question>
            {item.answer ? <Answer>{item.answer}</Answer> : null}
          </Column>
        </Row>
      ))}
    </Fragment>
  </Section>
);

export const OffsetAnswersContent = ({
  items,
}: {
  items: readonly FaqItem[];
}) => (
  <Section style={tableStyle}>
    <Fragment>
      {items.map((item, index) => (
        <Row key={`${item.question}-${index}`}>
          <Column
            width="38%"
            style={{
              borderTop: index === 0 ? undefined : `1px solid ${colors.border}`,
              padding: "20px 24px 20px 0",
              verticalAlign: "top",
              width: "38%",
            }}
          >
            <Question>{item.question}</Question>
          </Column>
          <Column
            style={{
              borderTop: index === 0 ? undefined : `1px solid ${colors.border}`,
              padding: "20px 0",
              verticalAlign: "top",
            }}
          >
            {item.answer ? <Answer marginTop={0}>{item.answer}</Answer> : null}
          </Column>
        </Row>
      ))}
    </Fragment>
  </Section>
);

export const BoxedNumberedContent = ({
  items,
}: {
  items: readonly FaqItem[];
}) => (
  <Section
    style={{
      ...tableStyle,
      border: `1px solid ${colors.border}`,
      borderRadius: "8px",
      overflow: "hidden",
    }}
  >
    <Fragment>
      {items.map((item, index) => (
        <Row key={`${item.question}-${index}`}>
          <Column
            width={48}
            style={{
              borderTop: index === 0 ? undefined : `1px solid ${colors.border}`,
              padding: "20px 0 20px 20px",
              verticalAlign: "top",
              width: "48px",
            }}
          >
            <NumberLabel index={index} />
          </Column>
          <Column
            style={{
              borderTop: index === 0 ? undefined : `1px solid ${colors.border}`,
              padding: "20px",
              verticalAlign: "top",
            }}
          >
            <Question>{item.question}</Question>
            {item.answer ? <Answer>{item.answer}</Answer> : null}
          </Column>
        </Row>
      ))}
    </Fragment>
  </Section>
);

export const AlternatingBoxedContent = ({
  items,
}: {
  items: readonly FaqItem[];
}) => (
  <>
    {items.map((item, index) => (
      <Section key={`${item.question}-${index}`}>
        <Section
          style={{
            ...tableStyle,
            backgroundColor:
              index % 2 === 0 ? colors.surfaceMuted : colors.light,
            borderRadius: "8px",
          }}
        >
          <Fragment>
            <Row>
              <Column
                width={48}
                style={{
                  padding: "20px 0 20px 20px",
                  verticalAlign: "top",
                  width: "48px",
                }}
              >
                <NumberLabel index={index} />
              </Column>
              <Column style={{ padding: "20px", verticalAlign: "top" }}>
                <Question>{item.question}</Question>
                {item.answer ? <Answer>{item.answer}</Answer> : null}
              </Column>
            </Row>
          </Fragment>
        </Section>
        {index < items.length - 1 ? (
          <Section style={{ height: "12px", lineHeight: "12px" }}>
            &zwj;
          </Section>
        ) : null}
      </Section>
    ))}
  </>
);

export const CollapsedNumbersContent = ({
  items,
}: {
  items: readonly FaqItem[];
}) => (
  <Section style={tableStyle}>
    <Fragment>
      {items.map((item, index) => (
        <Row key={`${item.question}-${index}`}>
          <Column
            width={40}
            style={{
              borderTop: `1px solid ${colors.border}`,
              padding: "16px 16px 16px 0",
              verticalAlign: "middle",
              width: "40px",
            }}
          >
            <NumberLabel index={index} />
          </Column>
          <Column
            style={{
              borderTop: `1px solid ${colors.border}`,
              padding: "16px 0",
              verticalAlign: "middle",
            }}
          >
            <Question>{item.question}</Question>
          </Column>
          <Column
            width={24}
            style={{
              borderTop: `1px solid ${colors.border}`,
              padding: "16px 0 16px 16px",
              textAlign: "right",
              verticalAlign: "middle",
              width: "24px",
            }}
          >
            <ToggleIcon />
          </Column>
        </Row>
      ))}
    </Fragment>
  </Section>
);

export const CollapsedIconsContent = ({
  items,
}: {
  items: readonly FaqItem[];
}) => (
  <>
    {items.map((item, index) => (
      <Section key={`${item.question}-${index}`}>
        <Section
          style={{
            ...tableStyle,
            backgroundColor: index === 0 ? colors.surfaceMuted : undefined,
            borderRadius: index === 0 ? "8px" : undefined,
          }}
        >
          <Fragment>
            <Row>
              <Column
                width={36}
                style={{
                  borderTop:
                    index > 1 ? `1px solid ${colors.border}` : undefined,
                  padding: "16px 16px 16px 0",
                  verticalAlign: "top",
                  width: "36px",
                }}
              >
                <ToggleIcon expanded={index === 0} item={item} />
              </Column>
              <Column
                style={{
                  borderTop:
                    index > 1 ? `1px solid ${colors.border}` : undefined,
                  padding: "16px 0",
                  verticalAlign: "top",
                }}
              >
                <Question>{item.question}</Question>
                {index === 0 && item.answer ? (
                  <Answer>{item.answer}</Answer>
                ) : null}
              </Column>
            </Row>
          </Fragment>
        </Section>
      </Section>
    ))}
  </>
);

export const CollapsedCtaContent = ({
  ctaHref,
  ctaLabel,
  ctaText,
  items,
}: {
  ctaHref: string;
  ctaLabel: string;
  ctaText: string;
  items: readonly FaqItem[];
}) => (
  <>
    <CollapsedNumbersContent items={items} />
    <Section style={{ height: "24px", lineHeight: "24px" }}>&zwj;</Section>
    <Section
      style={{
        ...tableStyle,
        backgroundColor: colors.surfaceMuted,
        borderRadius: "8px",
      }}
    >
      <Fragment>
        <Row>
          <Column style={{ padding: "16px 20px" }}>
            <span
              style={{
                ...textBase,
                color: colors.muted,
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              {ctaText}
            </span>
          </Column>
          <Column style={{ padding: "16px 20px", textAlign: "right" }}>
            <Link
              href={ctaHref}
              style={{
                ...textBase,
                color: colors.dark,
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "20px",
                textDecoration: "underline",
              }}
            >
              {ctaLabel}
            </Link>
          </Column>
        </Row>
      </Fragment>
    </Section>
  </>
);

export const FaqEmailShell = ({
  children,
  preview,
  theme,
}: {
  children: ReactNode;
  preview: string;
  theme: EmailThemeTokens;
}) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{
          __html: [
            "@media only screen and (max-width: 599px) {",
            "  .faq-content { padding-left: 24px !important; padding-right: 24px !important; }",
            "}",
          ].join("\n"),
        }}
      />
    </Head>
    <Preview>{preview}</Preview>
    <Body style={{ backgroundColor: colors.canvas, fontFamily, margin: 0 }}>
      <Section style={{ ...tableStyle, backgroundColor: colors.canvas }}>
        <Fragment>
          <Row>
            <Column>&zwj;</Column>
            <Column
              className="faq-content"
              width={600}
              style={{
                backgroundColor: colors.surface,
                maxWidth: "100%",
                padding: "44px 64px",
                width: theme.containerWidth,
              }}
            >
              {children}
            </Column>
            <Column>&zwj;</Column>
          </Row>
        </Fragment>
      </Section>
    </Body>
  </Html>
);
