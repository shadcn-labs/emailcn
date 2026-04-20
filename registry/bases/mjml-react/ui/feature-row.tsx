import {
  MjmlColumn,
  MjmlImage,
  MjmlSection,
  MjmlText,
} from "@faire/mjml-react";

import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import type { EmailTheme } from "@/registry/themes/default";
import { theme as defaultTheme } from "@/registry/themes/default";

export interface FeatureRowProps {
  theme?: EmailTheme;
  imageSrc?: string;
  imageAlt?: string;
  heading?: string;
  body?: string;
  imagePosition?: "left" | "right";
}

export const FeatureRow = ({
  theme = defaultTheme,
  imageSrc,
  imageAlt = "Feature",
  heading = "Feature",
  body = "Description of the feature.",
  imagePosition = "left",
}: FeatureRowProps) => {
  const t = resolveEmailTheme(theme);

  const imageCol = imageSrc ? (
    <MjmlColumn width="40%">
      <MjmlImage
        alt={imageAlt}
        borderRadius={t.borderRadius.md}
        src={imageSrc}
        width="100%"
      />
    </MjmlColumn>
  ) : null;

  const textCol = (
    <MjmlColumn width={imageSrc ? "60%" : "100%"}>
      <MjmlText
        color={t.colors.foreground}
        fontFamily={t.fontFamily.sans}
        fontSize={t.fontSize.xl ?? "20px"}
        fontWeight={t.fontWeight.medium ?? "500"}
        paddingBottom={t.spacing.sm}
      >
        {heading}
      </MjmlText>
      <MjmlText
        color={t.colors["foreground-muted"]}
        fontFamily={t.fontFamily.sans}
        fontSize={t.fontSize.base ?? "14px"}
        lineHeight={t.lineHeight.snug}
      >
        {body}
      </MjmlText>
    </MjmlColumn>
  );

  return (
    <MjmlSection padding={`${t.spacing.xl ?? "24px"} 0`}>
      {imagePosition === "left" ? (
        <>
          {imageCol}
          {textCol}
        </>
      ) : (
        <>
          {textCol}
          {imageCol}
        </>
      )}
    </MjmlSection>
  );
};

FeatureRow.PreviewProps = {
  body: "Everything you need to build amazing emails.",
  heading: "Powerful Features",
  imageAlt: "Feature Image",
  imagePosition: "left",
  imageSrc: "https://example.com/feature.png",
  theme: defaultTheme,
} satisfies FeatureRowProps;

export default FeatureRow;
