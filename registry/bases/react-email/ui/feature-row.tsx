import {
  Body,
  Column,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface FeatureRowProps {
  theme?: TailwindConfig;
  imageSrc?: string;
  imageAlt?: string;
  heading?: string;
  body?: string;
  imagePosition?: "left" | "right";
}

export const FeatureRowSection = ({
  imageSrc,
  imageAlt = "Feature",
  heading = "Feature",
  body = "Description of the feature.",
  imagePosition = "left",
}: Omit<FeatureRowProps, "theme">) => {
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
  );
};

export const FeatureRow = ({
  theme = defaultTheme,
  imageSrc,
  imageAlt = "Feature",
  heading = "Feature",
  body = "Description of the feature.",
  imagePosition = "left",
}: FeatureRowProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FeatureRowSection
          body={body}
          heading={heading}
          imageAlt={imageAlt}
          imagePosition={imagePosition}
          imageSrc={imageSrc}
        />
      </Body>
    </Tailwind>
  </Html>
);

FeatureRow.PreviewProps = {
  body: "Everything you need to build amazing emails.",
  heading: "Powerful Features",
  imageAlt: "Feature Image",
  imagePosition: "left",
  imageSrc: "https://example.com/feature.png",
  theme: defaultTheme,
} satisfies FeatureRowProps;
