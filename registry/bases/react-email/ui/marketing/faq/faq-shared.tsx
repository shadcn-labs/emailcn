/* eslint-disable next/no-img-element */
import type { CSSProperties, ReactNode } from "react";
import { Body, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";

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
  <h3
    style={{
      ...textBase,
      color: colors.dark,
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "20px",
    }}
  >
    {children}
  </h3>
);

const Answer = ({
  children,
  marginTop = 8,
}: {
  children: ReactNode;
  marginTop?: number;
}) => (
  <p
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
  </p>
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
    <img
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
    <h2
      style={{
        ...textBase,
        color: colors.dark,
        fontSize: "28px",
        fontWeight: 600,
        lineHeight: "36px",
        textAlign: "center",
      }}
    >
      {children}
    </h2>
    <div style={{ fontSize: 0, height: "32px", lineHeight: "32px" }}>&zwj;</div>
  </>
);

export const ExpandedNumbersContent = ({
  items,
}: {
  items: readonly FaqItem[];
}) => (
  <table role="presentation" style={tableStyle}>
    <tbody>
      {items.map((item, index) => (
        <tr key={`${item.question}-${index}`}>
          <td
            width={40}
            style={{
              borderTop: index === 0 ? undefined : `1px solid ${colors.border}`,
              padding: "20px 16px 20px 0",
              verticalAlign: "top",
              width: "40px",
            }}
          >
            <NumberLabel index={index} />
          </td>
          <td
            style={{
              borderTop: index === 0 ? undefined : `1px solid ${colors.border}`,
              padding: "20px 0",
              verticalAlign: "top",
            }}
          >
            <Question>{item.question}</Question>
            {item.answer ? <Answer>{item.answer}</Answer> : null}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const OffsetAnswersContent = ({
  items,
}: {
  items: readonly FaqItem[];
}) => (
  <table role="presentation" style={tableStyle}>
    <tbody>
      {items.map((item, index) => (
        <tr key={`${item.question}-${index}`}>
          <td
            width="38%"
            style={{
              borderTop: index === 0 ? undefined : `1px solid ${colors.border}`,
              padding: "20px 24px 20px 0",
              verticalAlign: "top",
              width: "38%",
            }}
          >
            <Question>{item.question}</Question>
          </td>
          <td
            style={{
              borderTop: index === 0 ? undefined : `1px solid ${colors.border}`,
              padding: "20px 0",
              verticalAlign: "top",
            }}
          >
            {item.answer ? <Answer marginTop={0}>{item.answer}</Answer> : null}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const BoxedNumberedContent = ({
  items,
}: {
  items: readonly FaqItem[];
}) => (
  <table
    role="presentation"
    style={{
      ...tableStyle,
      border: `1px solid ${colors.border}`,
      borderRadius: "8px",
      overflow: "hidden",
    }}
  >
    <tbody>
      {items.map((item, index) => (
        <tr key={`${item.question}-${index}`}>
          <td
            width={48}
            style={{
              borderTop: index === 0 ? undefined : `1px solid ${colors.border}`,
              padding: "20px 0 20px 20px",
              verticalAlign: "top",
              width: "48px",
            }}
          >
            <NumberLabel index={index} />
          </td>
          <td
            style={{
              borderTop: index === 0 ? undefined : `1px solid ${colors.border}`,
              padding: "20px",
              verticalAlign: "top",
            }}
          >
            <Question>{item.question}</Question>
            {item.answer ? <Answer>{item.answer}</Answer> : null}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const AlternatingBoxedContent = ({
  items,
}: {
  items: readonly FaqItem[];
}) => (
  <>
    {items.map((item, index) => (
      <div key={`${item.question}-${index}`}>
        <table
          role="presentation"
          style={{
            ...tableStyle,
            backgroundColor:
              index % 2 === 0 ? colors.surfaceMuted : colors.light,
            borderRadius: "8px",
          }}
        >
          <tbody>
            <tr>
              <td
                width={48}
                style={{
                  padding: "20px 0 20px 20px",
                  verticalAlign: "top",
                  width: "48px",
                }}
              >
                <NumberLabel index={index} />
              </td>
              <td style={{ padding: "20px", verticalAlign: "top" }}>
                <Question>{item.question}</Question>
                {item.answer ? <Answer>{item.answer}</Answer> : null}
              </td>
            </tr>
          </tbody>
        </table>
        {index < items.length - 1 ? (
          <div style={{ height: "12px", lineHeight: "12px" }}>&zwj;</div>
        ) : null}
      </div>
    ))}
  </>
);

export const CollapsedNumbersContent = ({
  items,
}: {
  items: readonly FaqItem[];
}) => (
  <table role="presentation" style={tableStyle}>
    <tbody>
      {items.map((item, index) => (
        <tr key={`${item.question}-${index}`}>
          <td
            width={40}
            style={{
              borderTop: `1px solid ${colors.border}`,
              padding: "16px 16px 16px 0",
              verticalAlign: "middle",
              width: "40px",
            }}
          >
            <NumberLabel index={index} />
          </td>
          <td
            style={{
              borderTop: `1px solid ${colors.border}`,
              padding: "16px 0",
              verticalAlign: "middle",
            }}
          >
            <Question>{item.question}</Question>
          </td>
          <td
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
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const CollapsedIconsContent = ({
  items,
}: {
  items: readonly FaqItem[];
}) => (
  <>
    {items.map((item, index) => (
      <div key={`${item.question}-${index}`}>
        <table
          role="presentation"
          style={{
            ...tableStyle,
            backgroundColor: index === 0 ? colors.surfaceMuted : undefined,
            borderRadius: index === 0 ? "8px" : undefined,
          }}
        >
          <tbody>
            <tr>
              <td
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
              </td>
              <td
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
    <div style={{ height: "24px", lineHeight: "24px" }}>&zwj;</div>
    <table
      role="presentation"
      style={{
        ...tableStyle,
        backgroundColor: colors.surfaceMuted,
        borderRadius: "8px",
      }}
    >
      <tbody>
        <tr>
          <td style={{ padding: "16px 20px" }}>
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
          </td>
          <td style={{ padding: "16px 20px", textAlign: "right" }}>
            <a
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
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);

export const FaqEmailShell = ({
  children,
  preview,
  theme,
}: {
  children: ReactNode;
  preview: string;
  theme: TailwindConfig;
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
    <Tailwind config={theme}>
      <Body style={{ backgroundColor: colors.canvas, fontFamily, margin: 0 }}>
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          role="presentation"
          style={{ ...tableStyle, backgroundColor: colors.canvas }}
        >
          <tbody>
            <tr>
              <td>&zwj;</td>
              <td
                className="faq-content"
                width={600}
                style={{
                  backgroundColor: colors.surface,
                  maxWidth: "100%",
                  padding: "44px 64px",
                  width: "600px",
                }}
              >
                {children}
              </td>
              <td>&zwj;</td>
            </tr>
          </tbody>
        </table>
      </Body>
    </Tailwind>
  </Html>
);
