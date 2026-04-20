import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { defaultTheme } from "@/registry/themes/default";
import type { EmailTheme } from "@/registry/themes/define";

export interface ContentGridProps {
  theme?: EmailTheme;
  columnCount?: 2 | 3;
  columns?: {
    iconUrl?: string;
    title: string;
    description: string;
  }[];
}

export const ContentGrid = ({
  theme = defaultTheme,
  columnCount = 2,
  columns = [
    { description: "Description for feature 1", title: "Feature 1" },
    { description: "Description for feature 2", title: "Feature 2" },
  ],
}: ContentGridProps) => {
  const t = resolveEmailTheme(theme);

  const container =
    typeof t.maxWidth.container === "string"
      ? Number.parseInt(String(t.maxWidth.container).replaceAll(/\D/g, ""), 10)
      : 600;
  const width = Number.isFinite(container) && container > 0 ? container : 600;

  const fg = t.colors.foreground ?? "#111827";
  const bg = t.colors.background ?? "#ffffff";
  const sans = t.fontFamily.sans ?? "sans-serif";
  const baseFs = t.fontSize.base ?? "14px";
  const lh = t.lineHeight.snug ?? "1.375";
  const slice = columns.slice(0, columnCount);
  let widthPct = "100%";
  if (columnCount === 2) {
    widthPct = "50%";
  } else if (columnCount === 3) {
    widthPct = `${100 / 3}%`;
  }

  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>content-grid</MjmlPreview>
        <MjmlAttributes>
          <MjmlAll color={fg} fontFamily={sans} />
          <MjmlText fontSize={baseFs} lineHeight={lh} />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody backgroundColor={bg} width={width}>
        <MjmlWrapper padding="0">
          <MjmlSection padding={`${t.spacing.xl ?? "24px"} 0`}>
            {slice.map((col) => (
              <MjmlColumn
                key={col.title}
                width={widthPct}
                padding={t.spacing.md}
              >
                {col.iconUrl ? (
                  <MjmlImage
                    alt={col.title}
                    borderRadius={t.borderRadius.md}
                    height={48}
                    paddingBottom={t.spacing.md}
                    src={col.iconUrl}
                    width={48}
                  />
                ) : null}
                <MjmlText
                  color={t.colors.foreground}
                  fontFamily={t.fontFamily.sans}
                  fontSize={t.fontSize.lg ?? "16px"}
                  fontWeight={t.fontWeight.medium ?? "500"}
                  paddingBottom={t.spacing.sm}
                >
                  {col.title}
                </MjmlText>
                <MjmlText
                  color={t.colors["foreground-muted"]}
                  fontFamily={t.fontFamily.sans}
                  fontSize={t.fontSize.base ?? "14px"}
                  lineHeight={t.lineHeight.snug}
                >
                  {col.description}
                </MjmlText>
              </MjmlColumn>
            ))}
          </MjmlSection>
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

ContentGrid.PreviewProps = {
  columnCount: 2,
  columns: [
    {
      description: "Lightning-fast load times for your emails.",
      iconUrl: "https://example.com/icon1.png",
      title: "Fast Performance",
    },
    {
      description: "Simple API to get started in minutes.",
      iconUrl: "https://example.com/icon2.png",
      title: "Easy Integration",
    },
  ],
  theme: defaultTheme,
} satisfies ContentGridProps;
