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

import type { ResolvedEmailTheme } from "@/registry/lib/resolve-theme";
import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { defaultTheme } from "@/registry/themes/default";
import type { EmailTheme } from "@/registry/themes/define";

import { getLayoutTokens } from "../lib/get-layout-tokens";

export interface ContentGridProps {
  theme?: EmailTheme;
  columnCount?: 2 | 3;
  columns?: {
    iconUrl?: string;
    title: string;
    description: string;
  }[];
}

const ContentGridSection = ({
  columnCount,
  columns,
  t,
}: {
  columnCount: 2 | 3;
  columns: ContentGridProps["columns"];
  t: ResolvedEmailTheme;
}) => {
  const slice = (columns ?? []).slice(0, columnCount);
  let widthPct = "100%";
  if (columnCount === 2) {
    widthPct = "50%";
  } else if (columnCount === 3) {
    widthPct = `${100 / 3}%`;
  }

  return (
    <MjmlSection padding={`${t.spacing.xl ?? "24px"} 0`}>
      {slice.map((col) => (
        <MjmlColumn key={col.title} width={widthPct} padding={t.spacing.md}>
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
  );
};

export const ContentGrid = ({
  theme = defaultTheme,
  columnCount = 2,
  columns = [
    { description: "Description for feature 1", title: "Feature 1" },
    { description: "Description for feature 2", title: "Feature 2" },
  ],
}: ContentGridProps) => {
  const t = resolveEmailTheme(theme);
  const { baseFs, bg, fg, lh, sans, width } = getLayoutTokens(t);

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
          <ContentGridSection
            columnCount={columnCount}
            columns={columns}
            t={t}
          />
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
