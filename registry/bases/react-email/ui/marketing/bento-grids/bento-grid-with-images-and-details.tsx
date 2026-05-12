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

export type BentoGridWithImagesAndDetailsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BentoGridWithImagesAndDetailsProps {
  theme?: TailwindConfig;
  heading?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  detailTitle1?: string;
  detailDesc1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  detailTitle2?: string;
  detailDesc2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  detailTitle3?: string;
  detailDesc3?: string;
  variant?: BentoGridWithImagesAndDetailsVariant;
}

export const BentoGridWithImagesAndDetailsSection = ({
  heading = "Features",
  imageSrc1 = "https://via.placeholder.com/400x300",
  imageAlt1 = "",
  detailTitle1 = "Feature One",
  detailDesc1 = "Description for feature one.",
  imageSrc2 = "https://via.placeholder.com/400x300",
  imageAlt2 = "",
  detailTitle2 = "Feature Two",
  detailDesc2 = "Description for feature two.",
  imageSrc3 = "https://via.placeholder.com/400x300",
  imageAlt3 = "",
  detailTitle3 = "Feature Three",
  detailDesc3 = "Description for feature three.",
  variant = "default",
}: Omit<BentoGridWithImagesAndDetailsProps, "theme">) => {
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
          <Text className="m-0 mb-12 text-center font-bold text-heading leading-snug text-foreground">
            {heading}
          </Text>
        ) : null}
        <Row>
          <Column className="w-1/3 px-3 align-top">
            <Img
              src={imageSrc1}
              alt={imageAlt1}
              width="400"
              height="300"
              className="w-full h-auto rounded-lg object-cover"
            />
            <Text className="mt-4 mb-1 text-lg font-medium text-foreground">
              {detailTitle1}
            </Text>
            <Text className="m-0 text-sm leading-snug text-foreground-muted">
              {detailDesc1}
            </Text>
          </Column>
          <Column className="w-1/3 px-3 align-top">
            <Img
              src={imageSrc2}
              alt={imageAlt2}
              width="400"
              height="300"
              className="w-full h-auto rounded-lg object-cover"
            />
            <Text className="mt-4 mb-1 text-lg font-medium text-foreground">
              {detailTitle2}
            </Text>
            <Text className="m-0 text-sm leading-snug text-foreground-muted">
              {detailDesc2}
            </Text>
          </Column>
          <Column className="w-1/3 px-3 align-top">
            <Img
              src={imageSrc3}
              alt={imageAlt3}
              width="400"
              height="300"
              className="w-full h-auto rounded-lg object-cover"
            />
            <Text className="mt-4 mb-1 text-lg font-medium text-foreground">
              {detailTitle3}
            </Text>
            <Text className="m-0 text-sm leading-snug text-foreground-muted">
              {detailDesc3}
            </Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const BentoGridWithImagesAndDetails = ({
  theme = defaultTheme,
  heading = "Features",
  imageSrc1 = "https://via.placeholder.com/400x300",
  imageAlt1 = "",
  detailTitle1 = "Feature One",
  detailDesc1 = "Description for feature one.",
  imageSrc2 = "https://via.placeholder.com/400x300",
  imageAlt2 = "",
  detailTitle2 = "Feature Two",
  detailDesc2 = "Description for feature two.",
  imageSrc3 = "https://via.placeholder.com/400x300",
  imageAlt3 = "",
  detailTitle3 = "Feature Three",
  detailDesc3 = "Description for feature three.",
  variant = "default",
}: BentoGridWithImagesAndDetailsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <BentoGridWithImagesAndDetailsSection
          detailDesc1={detailDesc1}
          detailDesc2={detailDesc2}
          detailDesc3={detailDesc3}
          detailTitle1={detailTitle1}
          detailTitle2={detailTitle2}
          detailTitle3={detailTitle3}
          heading={heading}
          imageAlt1={imageAlt1}
          imageAlt2={imageAlt2}
          imageAlt3={imageAlt3}
          imageSrc1={imageSrc1}
          imageSrc2={imageSrc2}
          imageSrc3={imageSrc3}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

BentoGridWithImagesAndDetails.PreviewProps = {
  detailDesc1: "Drag-and-drop builder for rapid email creation.",
  detailDesc2: "Works flawlessly across all major email clients.",
  detailDesc3: "Real-time collaboration for your team.",
  detailTitle1: "Visual Builder",
  detailTitle2: "Responsive",
  detailTitle3: "Collaboration",
  heading: "Features",
  imageAlt1: "Visual Builder",
  imageAlt2: "Responsive",
  imageAlt3: "Collaboration",
  imageSrc1: "https://via.placeholder.com/400x300",
  imageSrc2: "https://via.placeholder.com/400x300",
  imageSrc3: "https://via.placeholder.com/400x300",
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridWithImagesAndDetailsProps;
