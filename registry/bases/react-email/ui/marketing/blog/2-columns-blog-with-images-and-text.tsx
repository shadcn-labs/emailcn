/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
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

export type TwoColumnsBlogWithImagesAndTextVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface TwoColumnsBlogWithImagesAndTextProps {
  theme?: TailwindConfig;
  heading?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  title1?: string;
  excerpt1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  title2?: string;
  excerpt2?: string;
  variant?: TwoColumnsBlogWithImagesAndTextVariant;
}

export const TwoColumnsBlogWithImagesAndTextSection = ({
  heading = "Latest Posts",
  imageSrc1 = "https://via.placeholder.com/200x200",
  imageAlt1 = "",
  title1 = "Post One",
  excerpt1 = "Description for post one.",
  imageSrc2 = "https://via.placeholder.com/200x200",
  imageAlt2 = "",
  title2 = "Post Two",
  excerpt2 = "Description for post two.",
  variant = "default",
}: Omit<TwoColumnsBlogWithImagesAndTextProps, "theme">) => {
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
      <Section className={`max-w-container mx-auto ${getUnskewClass()}`}>
        {heading ? (
          <Text className="m-0 mb-8 text-center text-2xl font-bold text-foreground">
            {heading}
          </Text>
        ) : null}
        <Row className="mb-6">
          <Column className="w-1/3 pr-6 align-middle">
            <Img
              src={imageSrc1}
              alt={imageAlt1}
              width="200"
              height="200"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
          <Column className="w-2/3 align-middle">
            <Text className="m-0 mb-2 text-lg font-medium text-foreground">
              {title1}
            </Text>
            <Text className="m-0 text-sm text-foreground-muted">
              {excerpt1}
            </Text>
          </Column>
        </Row>
        <Row>
          <Column className="w-1/3 pr-6 align-middle">
            <Img
              src={imageSrc2}
              alt={imageAlt2}
              width="200"
              height="200"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
          <Column className="w-2/3 align-middle">
            <Text className="m-0 mb-2 text-lg font-medium text-foreground">
              {title2}
            </Text>
            <Text className="m-0 text-sm text-foreground-muted">
              {excerpt2}
            </Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const TwoColumnsBlogWithImagesAndText = ({
  theme = defaultTheme,
  heading = "Latest Posts",
  imageSrc1 = "https://via.placeholder.com/200x200",
  imageAlt1 = "",
  title1 = "Post One",
  excerpt1 = "Description for post one.",
  imageSrc2 = "https://via.placeholder.com/200x200",
  imageAlt2 = "",
  title2 = "Post Two",
  excerpt2 = "Description for post two.",
  variant = "default",
}: TwoColumnsBlogWithImagesAndTextProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <TwoColumnsBlogWithImagesAndTextSection
          excerpt1={excerpt1}
          excerpt2={excerpt2}
          heading={heading}
          imageAlt1={imageAlt1}
          imageAlt2={imageAlt2}
          imageSrc1={imageSrc1}
          imageSrc2={imageSrc2}
          title1={title1}
          title2={title2}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

TwoColumnsBlogWithImagesAndText.PreviewProps = {
  excerpt1:
    "A step-by-step guide to mastering email design with our powerful editor.",
  excerpt2: "Learn about the strategies that drive engagement and conversions.",
  heading: "Latest Posts",
  imageAlt1: "Post 1",
  imageAlt2: "Post 2",
  imageSrc1: "https://via.placeholder.com/200x200",
  imageSrc2: "https://via.placeholder.com/200x200",
  theme: defaultTheme,
  title1: "Mastering Email Design",
  title2: "Engagement Strategies",
  variant: "default",
} satisfies TwoColumnsBlogWithImagesAndTextProps;
