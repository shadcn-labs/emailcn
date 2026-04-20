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

export interface FeatureRowProps {
  theme?: EmailTheme;
  imageSrc?: string;
  imageAlt?: string;
  heading?: string;
  body?: string;
  imagePosition?: "left" | "right";
}

const FeatureRowSection = ({
  body,
  heading,
  imageAlt,
  imagePosition,
  imageSrc,
  t,
}: {
  body: string;
  heading: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  imageSrc?: string;
  t: ResolvedEmailTheme;
}) => {
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

export const FeatureRow = ({
  theme = defaultTheme,
  imageSrc,
  imageAlt = "Feature",
  heading = "Feature",
  body = "Description of the feature.",
  imagePosition = "left",
}: FeatureRowProps) => {
  const t = resolveEmailTheme(theme);
  const { baseFs, bg, fg, lh, sans, width } = getLayoutTokens(t);

  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>feature-row</MjmlPreview>
        <MjmlAttributes>
          <MjmlAll color={fg} fontFamily={sans} />
          <MjmlText fontSize={baseFs} lineHeight={lh} />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody backgroundColor={bg} width={width}>
        <MjmlWrapper padding="0">
          <FeatureRowSection
            body={body}
            heading={heading}
            imageAlt={imageAlt}
            imagePosition={imagePosition}
            imageSrc={imageSrc}
            t={t}
          />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
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
