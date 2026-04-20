import { Column, Img, Row, Section, Tailwind, Text } from "react-email";

import { defaultTheme } from "@/registry/themes/default";
import type { EmailTheme } from "@/registry/themes/define";

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
  const imageBlock = imageSrc ? (
    <Column>
      <Img
        src={imageSrc}
        alt={imageAlt}
        className="h-auto max-w-full rounded-md"
      />
    </Column>
  ) : null;

  const content = (
    <Column>
      <Text className="mb-2 text-xl font-medium text-foreground">
        {heading}
      </Text>
      <Text className="text-base leading-snug text-foreground-muted">
        {body}
      </Text>
    </Column>
  );

  return (
    <Tailwind config={theme}>
      <Section className="py-12">
        <Row>
          {imagePosition === "left" ? (
            <>
              {imageBlock}
              {content}
            </>
          ) : (
            <>
              {content}
              {imageBlock}
            </>
          )}
        </Row>
      </Section>
    </Tailwind>
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
