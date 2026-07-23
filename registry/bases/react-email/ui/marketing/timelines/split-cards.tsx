/* eslint-disable @next/next/no-img-element, complexity, no-nested-ternary */
import type { ReactNode } from "react";
import { Body, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type SplitCardsVariant =
  | "muted"
  | "muted-reverse"
  | "boxed"
  | "boxed-reverse"
  | "accent"
  | "accent-reverse"
  | "image-top"
  | "image-top-reverse"
  | "image-bottom"
  | "image-bottom-reverse";

export interface SplitCardsProps {
  theme?: TailwindConfig;
  variant?: SplitCardsVariant;
  index?: string;
  label?: string;
  date?: string;
  badge?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .split-card-column { display: block !important; width: 100% !important; }
    .split-card-meta { display: table-header-group !important; width: 100% !important; }
    .split-card-copy { display: table-footer-group !important; width: 100% !important; }
    .split-card-mobile-space { display: block !important; line-height: 16px !important; }
  }
`;

const textStyle = {
  fontFamily,
  margin: 0,
} as const;

const SplitShell = ({ children }: { children: ReactNode }) => (
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

const SplitMeta = ({ index, label }: { index: string; label: string }) => (
  <td
    className="split-card-column split-card-meta"
    style={{ padding: "16px 0", verticalAlign: "top", width: "112px" }}
  >
    <div>
      <p
        style={{
          ...textStyle,
          color: "#030712",
          fontSize: "60px",
          fontWeight: 600,
          lineHeight: 1,
        }}
      >
        {index}
      </p>
      <p
        style={{
          ...textStyle,
          color: "#9ca3af",
          fontSize: "12px",
          fontWeight: 600,
          lineHeight: "16px",
        }}
      >
        {label}
      </p>
    </div>
  </td>
);

interface EventCardProps {
  badge: string;
  date: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  title: string;
  variant: SplitCardsVariant;
}

const EventCard = ({
  badge,
  date,
  description,
  imageAlt,
  imageSrc,
  title,
  variant,
}: EventCardProps) => {
  const muted = variant.startsWith("muted");
  const boxed = variant.startsWith("boxed");
  const accent = variant.startsWith("accent");
  const imageTop = variant.startsWith("image-top");
  const imageBottom = variant.startsWith("image-bottom");
  const dark = accent || imageTop || imageBottom;

  const image = (
    <img
      alt={imageAlt}
      src={imageSrc}
      style={{
        borderRadius: "4px",
        maxWidth: "100%",
        verticalAlign: "middle",
      }}
      width="536"
    />
  );

  return (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ width: "100%" }}
    >
      <tbody>
        <tr>
          <td
            style={{
              backgroundColor: dark ? "#030712" : boxed ? "#f9fafb" : undefined,
              borderRadius: muted ? undefined : "8px",
              padding: muted ? 0 : "16px",
            }}
          >
            {imageTop ? (
              <>
                {image}
                <div style={{ lineHeight: "16px" }}>&zwj;</div>
              </>
            ) : null}
            {muted ? (
              <p
                style={{
                  ...textStyle,
                  color: "#374151",
                  fontSize: "12px",
                  lineHeight: "16px",
                }}
              >
                {date}
              </p>
            ) : (
              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                role="presentation"
                style={{ width: "100%" }}
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        role="presentation"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <div
                                style={{
                                  backgroundColor: "#6ee7b7",
                                  borderRadius: "9999px",
                                  height: "12px",
                                  lineHeight: accent ? "10px" : "12px",
                                  textAlign: "center",
                                  width: "12px",
                                }}
                              >
                                {accent ? (
                                  <img
                                    alt=""
                                    src="https://assets.mailviews.com/images/components/timelines/icon-check.png"
                                    style={{ marginBottom: "1px" }}
                                    width="8"
                                  />
                                ) : (
                                  <>&zwj;</>
                                )}
                              </div>
                            </td>
                            <td style={{ width: "8px" }}>&zwj;</td>
                            <td>
                              <p
                                style={{
                                  ...textStyle,
                                  color: dark ? "#e5e7eb" : "#374151",
                                  fontSize: "12px",
                                  lineHeight: "16px",
                                }}
                              >
                                {date}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <span
                        style={{
                          backgroundColor: "#eef2ff",
                          border: "1px solid #c7d2fe",
                          borderRadius: "9999px",
                          color: "#4f46e5",
                          display: "inline-block",
                          fontFamily,
                          fontSize: "12px",
                          fontWeight: 500,
                          lineHeight: "16px",
                          padding: "1px 8px",
                        }}
                      >
                        {badge}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
            <p
              style={{
                ...textStyle,
                color: dark ? "#fffffe" : "#030712",
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "28px",
                marginTop: "4px",
              }}
            >
              {title}
            </p>
            <p
              style={{
                ...textStyle,
                color: dark ? "#d1d5db" : "#4b5563",
                fontSize: "16px",
                lineHeight: "24px",
                marginTop: "4px",
              }}
            >
              {description}
            </p>
            {imageBottom ? (
              <>
                <div style={{ lineHeight: "16px" }}>&zwj;</div>
                {image}
              </>
            ) : null}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const SplitCardsSection = ({
  badge = "Today",
  date = "Monday",
  description = "Description of event",
  imageAlt = "Placeholder image",
  imageSrc = "https://assets.mailviews.com/images/components/timelines/cards.jpg",
  index = "01",
  label = "Miles traveled",
  title = "Miles traveled",
  variant = "muted",
}: Omit<SplitCardsProps, "theme">) => {
  const reverse = variant.endsWith("-reverse");
  const muted = variant.startsWith("muted");
  const meta = <SplitMeta index={index} label={label} />;
  const copy = (
    <td
      className="split-card-column split-card-copy"
      style={{ padding: "16px", verticalAlign: "top" }}
    >
      <EventCard
        badge={badge}
        date={date}
        description={description}
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        title={title}
        variant={variant}
      />
    </td>
  );

  return (
    <SplitShell>
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        style={{ width: "100%" }}
      >
        <tbody>
          <tr>
            <td
              style={{
                padding: muted && !reverse ? "0 24px" : "16px 24px",
              }}
            >
              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                role="presentation"
                style={{ width: "100%" }}
              >
                <tbody>
                  <tr>
                    {reverse ? copy : meta}
                    {reverse ? meta : copy}
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </SplitShell>
  );
};

export const SplitCards = ({
  theme = defaultTheme,
  ...props
}: SplitCardsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Miles traveled</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <SplitCardsSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

SplitCards.PreviewProps = {
  theme: defaultTheme,
  variant: "muted",
} satisfies SplitCardsProps;
