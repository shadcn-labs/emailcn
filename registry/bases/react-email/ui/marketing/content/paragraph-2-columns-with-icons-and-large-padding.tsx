/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
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

export type Paragraph2ColumnsWithIconsAndLargePaddingVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface Paragraph2ColumnsWithIconsAndLargePaddingProps {
  theme?: TailwindConfig;
  iconSrc1?: string;
  iconAlt1?: string;
  column1?: string;
  iconSrc2?: string;
  iconAlt2?: string;
  column2?: string;
  variant?: Paragraph2ColumnsWithIconsAndLargePaddingVariant;
}

export const Paragraph2ColumnsWithIconsAndLargePaddingSection = ({
  iconSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-content-paragraph-2-columns-with-icons-and-large-padding-tsx-1&size=24",
  iconAlt1 = "Icon 1",
  column1 = "Text for the first column with an icon above.",
  iconSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-content-paragraph-2-columns-with-icons-and-large-padding-tsx-2&size=24",
  iconAlt2 = "Icon 2",
  column2 = "Text for the second column with an icon above.",
  variant = "default",
}: Omit<Paragraph2ColumnsWithIconsAndLargePaddingProps, "theme">) => {
  const getVariantClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[-10deg]";
      }
      case "slanted-right": {
        return "skew-x-[10deg]";
      }
      default: {
        return "";
      }
    }
  };

  const getUnskewClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[10deg]";
      }
      case "slanted-right": {
        return "skew-x-[-10deg]";
      }
      default: {
        return "";
      }
    }
  };

  return (
    <Section className={`bg-background py-16 ${getVariantClass()}`}>
      <Container className={`mx-auto max-w-container ${getUnskewClass()}`}>
        <Row>
          <Column className="w-1/2 pr-4 text-center align-top">
            <Img
              src={iconSrc1}
              alt={iconAlt1}
              width="24"
              height="24"
              className="mx-auto mb-3 h-auto object-contain"
            />
            <Text className="m-0 text-base leading-relaxed text-foreground-muted">
              {column1}
            </Text>
          </Column>
          <Column className="w-1/2 pl-4 text-center align-top">
            <Img
              src={iconSrc2}
              alt={iconAlt2}
              width="24"
              height="24"
              className="mx-auto mb-3 h-auto object-contain"
            />
            <Text className="m-0 text-base leading-relaxed text-foreground-muted">
              {column2}
            </Text>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export const Paragraph2ColumnsWithIconsAndLargePadding = ({
  theme = defaultTheme,
  iconSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-content-paragraph-2-columns-with-icons-and-large-padding-tsx-3&size=24",
  iconAlt1 = "Icon 1",
  column1 = "Text for the first column with an icon above.",
  iconSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-content-paragraph-2-columns-with-icons-and-large-padding-tsx-4&size=24",
  iconAlt2 = "Icon 2",
  column2 = "Text for the second column with an icon above.",
  variant = "default",
}: Paragraph2ColumnsWithIconsAndLargePaddingProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Columns</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <Paragraph2ColumnsWithIconsAndLargePaddingSection
          column1={column1}
          column2={column2}
          iconAlt1={iconAlt1}
          iconAlt2={iconAlt2}
          iconSrc1={iconSrc1}
          iconSrc2={iconSrc2}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

Paragraph2ColumnsWithIconsAndLargePadding.PreviewProps = {
  column1: "Fast and reliable delivery for all your email campaigns.",
  column2: "Beautiful templates that work across every email client.",
  iconAlt1: "Rocket",
  iconAlt2: "Shield",
  iconSrc1:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-content-paragraph-2-columns-with-icons-and-large-padding-tsx-5&size=24",
  iconSrc2:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-content-paragraph-2-columns-with-icons-and-large-padding-tsx-6&size=24",
  theme: defaultTheme,
  variant: "default",
} satisfies Paragraph2ColumnsWithIconsAndLargePaddingProps;
