import { Body, Head, Html, Preview } from "jsx-email";
import type { CSSProperties, ReactNode } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type ProgressBarContentVariant =
  | "minimal"
  | "with-title"
  | "with-text"
  | "text-top";

export type ProgressBarPaddedVariant =
  | ProgressBarContentVariant
  | "minimal-padded"
  | "with-title-padded"
  | "with-text-padded"
  | "text-top-padded";

export type ProgressBarColumnsVariant = Exclude<
  ProgressBarPaddedVariant,
  "minimal" | "minimal-padded"
>;

export interface ProgressBarItem {
  color?: string;
  description?: string;
  title: string;
  value: number;
}

const colors = {
  canvas: "#f1f5f9",
  dark: "#030712",
  label: "#4b5563",
  muted: "#6b7280",
  surface: "#fffffe",
  track: "#f3f4f6",
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

const clamp = (value: number) => Math.min(100, Math.max(0, value));

export const getContentVariant = (
  variant: ProgressBarPaddedVariant
): ProgressBarContentVariant =>
  variant.replace("-padded", "") as ProgressBarContentVariant;

export const isPaddedVariant = (variant: ProgressBarPaddedVariant) =>
  variant.endsWith("-padded");

const Spacer = ({ height }: { height: number }) => (
  <div
    style={{
      fontSize: 0,
      height: `${height}px`,
      lineHeight: `${height}px`,
    }}
  >
    &zwj;
  </div>
);

const Heading = ({ children }: { children: ReactNode }) => (
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

const Description = ({
  children,
  marginBottom = 0,
  marginTop = 0,
}: {
  children: ReactNode;
  marginBottom?: number;
  marginTop?: number;
}) => (
  <p
    style={{
      ...textBase,
      color: colors.muted,
      fontSize: "12px",
      lineHeight: "16px",
      marginBottom: `${marginBottom}px`,
      marginTop: `${marginTop}px`,
    }}
  >
    {children}
  </p>
);

const ProgressTrack = ({
  color = "#2dd4bf",
  value,
}: Pick<ProgressBarItem, "color" | "value">) => {
  const progress = clamp(value);

  return (
    <table role="presentation" style={{ ...tableStyle, tableLayout: "fixed" }}>
      <tbody>
        <tr>
          <td
            style={{
              backgroundColor: colors.track,
              borderRadius: "9999px",
              height: "8px",
              lineHeight: "8px",
            }}
          >
            <table
              role="presentation"
              style={{
                borderCollapse: "separate",
                borderSpacing: 0,
                width: `${progress}%`,
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      backgroundColor: color,
                      borderRadius: "9999px",
                      height: "8px",
                      lineHeight: "8px",
                    }}
                  >
                    &zwj;
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td
            width={40}
            style={{
              height: "8px",
              lineHeight: "8px",
              paddingLeft: "8px",
              textAlign: "right",
              width: "40px",
            }}
          >
            <span
              style={{
                ...textBase,
                color: colors.dark,
                fontSize: "12px",
              }}
            >
              {progress}%
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const ItemContent = ({
  item,
  variant,
}: {
  item: ProgressBarItem;
  variant: Exclude<ProgressBarContentVariant, "minimal">;
}) => (
  <>
    <Heading>{item.title}</Heading>
    {variant === "text-top" && item.description ? (
      <Description marginTop={14}>{item.description}</Description>
    ) : null}
    <Spacer height={14} />
    <ProgressTrack color={item.color} value={item.value} />
    {variant === "with-text" && item.description ? (
      <Description marginTop={14}>{item.description}</Description>
    ) : null}
  </>
);

export const FullWidthProgressContent = ({
  description,
  title,
  value,
  variant,
}: {
  description: string;
  title: string;
  value: number;
  variant: ProgressBarContentVariant;
}) => (
  <>
    {variant === "minimal" ? (
      <>
        <Spacer height={14} />
        <ProgressTrack value={value} />
      </>
    ) : (
      <ItemContent item={{ description, title, value }} variant={variant} />
    )}
  </>
);

export const ProgressBarColumnsContent = ({
  items,
  variant,
}: {
  items: readonly [ProgressBarItem, ProgressBarItem];
  variant: ProgressBarColumnsVariant;
}) => {
  const contentVariant = getContentVariant(variant) as Exclude<
    ProgressBarContentVariant,
    "minimal"
  >;

  return (
    <table role="presentation" style={tableStyle}>
      <tbody>
        <tr>
          <td className="progress-column" style={{ verticalAlign: "top" }}>
            <ItemContent item={items[0]} variant={contentVariant} />
          </td>
          <td
            className="progress-column-gap"
            width={44}
            style={{ fontSize: 0, lineHeight: "1px", width: "44px" }}
          >
            &zwj;
          </td>
          <td className="progress-column" style={{ verticalAlign: "top" }}>
            <ItemContent item={items[1]} variant={contentVariant} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const GroupHeading = ({ children }: { children: ReactNode }) => (
  <h3
    style={{
      ...textBase,
      color: colors.dark,
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "28px",
      marginBottom: "24px",
    }}
  >
    {children}
  </h3>
);

const GroupItem = ({ item }: { item: ProgressBarItem }) => (
  <>
    <h3
      style={{
        ...textBase,
        color: colors.label,
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
        marginBottom: "10px",
      }}
    >
      {item.title}
    </h3>
    <ProgressTrack color={item.color} value={item.value} />
  </>
);

export const ProgressBarGroupContent = ({
  description,
  items,
  title,
  variant,
}: {
  description: string;
  items: readonly ProgressBarItem[];
  title: string;
  variant: ProgressBarPaddedVariant;
}) => {
  const contentVariant = getContentVariant(variant);

  return (
    <>
      {contentVariant === "minimal" ? null : (
        <GroupHeading>{title}</GroupHeading>
      )}
      {contentVariant === "text-top" ? (
        <Description marginBottom={24}>{description}</Description>
      ) : null}
      {items.map((item, index) => (
        <div key={`${item.title}-${index}`}>
          <GroupItem item={item} />
          {index < items.length - 1 ? <Spacer height={24} /> : null}
        </div>
      ))}
      {contentVariant === "with-text" ? (
        <Description marginTop={24}>{description}</Description>
      ) : null}
    </>
  );
};

export const ProgressEmailShell = ({
  children,
  horizontalPadding,
  preview,
  theme,
  topSpacer,
}: {
  children: ReactNode;
  horizontalPadding: 24 | 64;
  preview: string;
  theme: EmailThemeTokens;
  topSpacer: 30 | 44;
}) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media only screen and (max-width: 430px) {
              .progress-column { display: block !important; width: 100% !important; }
              .progress-column-gap { display: block !important; width: 100% !important; line-height: 44px !important; }
            }
          `,
        }}
      />
    </Head>
    <Preview>{preview}</Preview>
    <Body style={{ backgroundColor: colors.canvas, fontFamily, margin: 0 }}>
      <table
        role="presentation"
        style={{ ...tableStyle, backgroundColor: colors.canvas }}
      >
        <tbody>
          <tr>
            <td>&zwj;</td>
            <td
              width={600}
              style={{
                backgroundColor: colors.surface,
                maxWidth: "100%",
                paddingBottom: "44px",
                width: theme.containerWidth,
              }}
            >
              <table role="presentation" style={tableStyle}>
                <tbody>
                  <tr>
                    <td>
                      <Spacer height={topSpacer} />
                      <table role="presentation" style={tableStyle}>
                        <tbody>
                          <tr>
                            <td
                              style={{
                                paddingLeft: `${horizontalPadding}px`,
                                paddingRight: `${horizontalPadding}px`,
                              }}
                            >
                              {children}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>&zwj;</td>
          </tr>
        </tbody>
      </table>
    </Body>
  </Html>
);
