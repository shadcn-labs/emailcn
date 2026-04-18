import { Column, Img, Row, Section, Text } from "react-email";

import type { EmailTheme } from "../themes/default";
import { theme as defaultTheme } from "../themes/default";

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
  const style = {
    body: {
      color: theme.colorTextMuted,
      fontSize: theme.fontSizeBase,
      lineHeight: theme.lineHeightBase,
    },
    heading: {
      color: theme.colorText,
      fontSize: theme.fontSizeXl,
      fontWeight: theme.fontWeightMedium,
      marginBottom: "8px",
    },
    image: {
      borderRadius: theme.borderRadius,
      height: "auto",
      maxWidth: "100%",
    } as const,
    section: {
      padding: `${theme.spacingXl} 0`,
    },
  };

  const leftImage = (
    <Column>
      {imageSrc && <Img src={imageSrc} alt={imageAlt} style={style.image} />}
    </Column>
  );
  const rightImage = (
    <Column>
      {imageSrc && <Img src={imageSrc} alt={imageAlt} style={style.image} />}
    </Column>
  );
  const content = (
    <Column>
      <Text style={style.heading}>{heading}</Text>
      <Text style={style.body}>{body}</Text>
    </Column>
  );

  return (
    <Section style={style.section}>
      <Row>
        {imagePosition === "left" ? (
          <>
            {leftImage}
            {content}
          </>
        ) : (
          <>
            {content}
            {rightImage}
          </>
        )}
      </Row>
    </Section>
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
