/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
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

export type CTAWithShiftedImagesVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CTAWithShiftedImagesProps {
  theme?: TailwindConfig;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  variant?: CTAWithShiftedImagesVariant;
}

export const CTAWithShiftedImagesSection = ({
  heading = "Creative Team",
  subtext = "Meet the people behind the magic.",
  ctaLabel = "Meet Us",
  ctaHref = "#",
  imageSrc1 = "https://static.photos/city/150x150/2",
  imageAlt1 = "",
  imageSrc2 = "https://static.photos/city/150x150/3",
  imageAlt2 = "",
  imageSrc3 = "https://static.photos/city/150x150/4",
  imageAlt3 = "",
  variant = "default",
}: Omit<CTAWithShiftedImagesProps, "theme">) => {
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
      <Container
        className={`mx-auto max-w-container text-center ${getUnskewClass()}`}
      >
        <Row className="mb-8">
          <Column className="w-1/3 pr-2 align-middle">
            <Img
              src={imageSrc1}
              alt={imageAlt1}
              width="150"
              height="150"
              className="w-full h-auto rounded-full object-cover -translate-y-4"
            />
          </Column>
          <Column className="w-1/3 px-2 align-middle">
            <Img
              src={imageSrc2}
              alt={imageAlt2}
              width="150"
              height="150"
              className="w-full h-auto rounded-full object-cover translate-y-4"
            />
          </Column>
          <Column className="w-1/3 pl-2 align-middle">
            <Img
              src={imageSrc3}
              alt={imageAlt3}
              width="150"
              height="150"
              className="w-full h-auto rounded-full object-cover -translate-y-2"
            />
          </Column>
        </Row>
        <Text className="m-0 text-3xl font-bold text-heading leading-snug text-foreground">
          {heading}
        </Text>
        <Text className="mt-4 mb-8 text-lg text-foreground-muted">
          {subtext}
        </Text>
        {ctaLabel && ctaHref ? (
          <Button
            href={ctaHref}
            className="inline-block rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-fg no-underline"
          >
            {ctaLabel}
          </Button>
        ) : null}
      </Container>
    </Section>
  );
};

export const CTAWithShiftedImages = ({
  theme = defaultTheme,
  heading = "Creative Team",
  subtext = "Meet the people behind the magic.",
  ctaLabel = "Meet Us",
  ctaHref = "#",
  imageSrc1 = "https://static.photos/city/150x150/5",
  imageAlt1 = "",
  imageSrc2 = "https://static.photos/city/150x150/6",
  imageAlt2 = "",
  imageSrc3 = "https://static.photos/city/150x150/7",
  imageAlt3 = "",
  variant = "default",
}: CTAWithShiftedImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <CTAWithShiftedImagesSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          imageAlt1={imageAlt1}
          imageAlt2={imageAlt2}
          imageAlt3={imageAlt3}
          imageSrc1={imageSrc1}
          imageSrc2={imageSrc2}
          imageSrc3={imageSrc3}
          subtext={subtext}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

CTAWithShiftedImages.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Meet Us",
  heading: "Creative Team",
  imageAlt1: "Team 1",
  imageAlt2: "Team 2",
  imageAlt3: "Team 3",
  imageSrc1: "https://static.photos/city/150x150/8",
  imageSrc2: "https://static.photos/city/150x150/9",
  imageSrc3: "https://static.photos/city/150x150/10",
  subtext: "Meet the people behind the magic.",
  theme: defaultTheme,
  variant: "default",
} satisfies CTAWithShiftedImagesProps;
