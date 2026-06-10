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

export type CTAWithImageStripVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CTAWithImageStripProps {
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
  imageSrc4?: string;
  imageAlt4?: string;
  variant?: CTAWithImageStripVariant;
}

export const CTAWithImageStripSection = ({
  heading = "Featured Brands",
  subtext = "Discover our partner brands.",
  ctaLabel = "Explore",
  ctaHref = "#",
  imageSrc1 = "https://static.photos/city/150x100/2",
  imageAlt1 = "",
  imageSrc2 = "https://static.photos/city/150x100/3",
  imageAlt2 = "",
  imageSrc3 = "https://static.photos/city/150x100/4",
  imageAlt3 = "",
  imageSrc4 = "https://static.photos/city/150x100/5",
  imageAlt4 = "",
  variant = "default",
}: Omit<CTAWithImageStripProps, "theme">) => {
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
          <Column className="w-1/4 px-2 align-middle">
            <Img
              src={imageSrc1}
              alt={imageAlt1}
              width="150"
              height="100"
              className="w-full h-auto rounded object-cover"
            />
          </Column>
          <Column className="w-1/4 px-2 align-middle">
            <Img
              src={imageSrc2}
              alt={imageAlt2}
              width="150"
              height="100"
              className="w-full h-auto rounded object-cover"
            />
          </Column>
          <Column className="w-1/4 px-2 align-middle">
            <Img
              src={imageSrc3}
              alt={imageAlt3}
              width="150"
              height="100"
              className="w-full h-auto rounded object-cover"
            />
          </Column>
          <Column className="w-1/4 px-2 align-middle">
            <Img
              src={imageSrc4}
              alt={imageAlt4}
              width="150"
              height="100"
              className="w-full h-auto rounded object-cover"
            />
          </Column>
        </Row>
        <Text className="m-0 text-2xl font-bold text-heading leading-snug text-foreground">
          {heading}
        </Text>
        <Text className="mt-2 mb-6 text-base text-foreground-muted">
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

export const CTAWithImageStrip = ({
  theme = defaultTheme,
  heading = "Featured Brands",
  subtext = "Discover our partner brands.",
  ctaLabel = "Explore",
  ctaHref = "#",
  imageSrc1 = "https://static.photos/city/150x100/6",
  imageAlt1 = "",
  imageSrc2 = "https://static.photos/city/150x100/7",
  imageAlt2 = "",
  imageSrc3 = "https://static.photos/city/150x100/8",
  imageAlt3 = "",
  imageSrc4 = "https://static.photos/city/150x100/9",
  imageAlt4 = "",
  variant = "default",
}: CTAWithImageStripProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <CTAWithImageStripSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          imageAlt1={imageAlt1}
          imageAlt2={imageAlt2}
          imageAlt3={imageAlt3}
          imageAlt4={imageAlt4}
          imageSrc1={imageSrc1}
          imageSrc2={imageSrc2}
          imageSrc3={imageSrc3}
          imageSrc4={imageSrc4}
          subtext={subtext}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

CTAWithImageStrip.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Explore",
  heading: "Featured Brands",
  imageAlt1: "Brand 1",
  imageAlt2: "Brand 2",
  imageAlt3: "Brand 3",
  imageAlt4: "Brand 4",
  imageSrc1: "https://static.photos/city/150x100/10",
  imageSrc2: "https://static.photos/city/150x100/11",
  imageSrc3: "https://static.photos/city/150x100/12",
  imageSrc4: "https://static.photos/city/150x100/13",
  subtext: "Discover our partner brands.",
  theme: defaultTheme,
  variant: "default",
} satisfies CTAWithImageStripProps;
