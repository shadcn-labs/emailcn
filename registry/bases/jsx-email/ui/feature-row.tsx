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
} from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

export interface FeatureRowProps {
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
        style={{
          borderRadius: "8px",
          height: "auto",
          maxWidth: "100%",
        }}
      />
    </Column>
  ) : null;

  const content = (
    <Column>
      <Text
        style={{
          color: defaultTheme.colorText,
          fontSize: defaultTheme.fontSizeXl,
          fontWeight: defaultTheme.fontWeightMedium,
          marginBottom: "8px",
        }}
      >
        {heading}
      </Text>
      <Text
        style={{
          color: defaultTheme.colorTextMuted,
          fontSize: defaultTheme.fontSizeBase,
          lineHeight: 1.4,
        }}
      >
        {body}
      </Text>
    </Column>
  );

  return (
    <Section style={{ padding: "48px 0" }}>
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
    <Tailwind>
      <Body
        style={{
          backgroundColor: defaultTheme.colorBackground,
          fontFamily: defaultTheme.fontFamily,
          margin: 0,
        }}
      >
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
} satisfies FeatureRowProps;
