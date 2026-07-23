// Subject: Welcome to {_productName} — let's get you started

import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import { linearTheme } from "@/registry/bases/jsx-email/themes/linear";

interface ContentGridProps {
  columnCount?: 2 | 3;
  columns?: {
    iconUrl?: string;
    title: string;
    description: string;
  }[];
}

const ContentGridSection = ({
  columnCount = 2,
  columns = [
    { description: "Description for feature 1", title: "Feature 1" },
    { description: "Description for feature 2", title: "Feature 2" },
  ],
}: Omit<ContentGridProps, "theme">) => (
  <Section style={{ padding: "48px 0" }}>
    <Row>
      {columns.slice(0, columnCount).map((col, index) => (
        <Column
          key={`${col.title}-${index}`}
          style={{ padding: "24px", verticalAlign: "top" }}
        >
          {col.iconUrl ? (
            <Img
              src={col.iconUrl}
              alt={col.title}
              height={48}
              width={48}
              style={{
                marginBottom: "24px",
                objectFit: "contain",
              }}
            />
          ) : null}
          <Text
            style={{
              color: defaultTheme.colorText,
              fontSize: defaultTheme.fontSizeLg,
              fontWeight: defaultTheme.fontWeightMedium,
              marginBottom: "8px",
            }}
          >
            {col.title}
          </Text>
          <Text
            style={{
              color: defaultTheme.colorTextMuted,
              fontSize: defaultTheme.fontSizeBase,
              lineHeight: 1.4,
            }}
          >
            {col.description}
          </Text>
        </Column>
      ))}
    </Row>
  </Section>
);

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "filled" | "outline";
}

const CTABannerSection = ({
  heading = "Get Started",
  subtext = "Join thousands of happy users.",
  ctaLabel = "Get Started",
  ctaHref = "#",
  variant = "filled",
}: Omit<CTABannerProps, "theme">) => {
  const isFilled = variant === "filled";

  return (
    <Section
      style={{
        backgroundColor: isFilled ? defaultTheme.colorPrimary : "transparent",
        border: isFilled ? "none" : `1px solid ${defaultTheme.colorBorder}`,
        borderRadius: defaultTheme.borderRadius,
        padding: "32px",
      }}
    >
      <Container style={{ textAlign: "center" }}>
        <Text
          style={{
            color: isFilled
              ? defaultTheme.colorPrimaryForeground
              : defaultTheme.colorText,
            fontSize: defaultTheme.fontSizeXl,
            fontWeight: defaultTheme.fontWeightMedium,
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          {heading}
        </Text>
        <Text
          style={{
            color: isFilled
              ? defaultTheme.colorPrimaryForeground
              : defaultTheme.colorTextMuted,
            fontSize: defaultTheme.fontSizeBase,
            marginBottom: "24px",
            opacity: isFilled ? 0.9 : 1,
            textAlign: "center",
          }}
        >
          {subtext}
        </Text>
        {ctaLabel && ctaHref ? (
          <Button
            href={ctaHref}
            width={160}
            height={40}
            style={{
              backgroundColor: isFilled
                ? defaultTheme.colorPrimaryForeground
                : defaultTheme.colorPrimary,
              borderRadius: defaultTheme.button.primary.borderRadius,
              color: isFilled
                ? defaultTheme.colorPrimary
                : defaultTheme.colorPrimaryForeground,
              display: "block",
              fontSize: defaultTheme.button.primary.fontSize,
              fontWeight: defaultTheme.button.primary.fontWeight,
              height: "auto",
              paddingBottom: defaultTheme.button.primary.paddingY,
              paddingLeft: defaultTheme.button.primary.paddingX,
              paddingRight: defaultTheme.button.primary.paddingX,
              paddingTop: defaultTheme.button.primary.paddingY,
              textAlign: "center",
              textDecoration: "none",
              width: "auto",
            }}
          >
            {ctaLabel}
          </Button>
        ) : null}
      </Container>
    </Section>
  );
};

interface FooterProps {
  companyName?: string;
  address?: string;
  links?: { label: string; href: string }[];
  unsubscribeHref?: string;
}

const FooterSection = ({
  companyName = "Acme",
  address = "123 Main St, San Francisco, CA",
  links = [
    { href: "#", label: "Privacy" },
    { href: "#", label: "Terms" },
  ],
  unsubscribeHref = "#",
}: Omit<FooterProps, "theme">) => (
  <Section
    style={{
      borderTop: `1px solid ${defaultTheme.colorBorder}`,
      paddingBottom: "24px",
      paddingTop: "48px",
    }}
  >
    <Text
      style={{
        color: defaultTheme.colorTextMuted,
        fontSize: defaultTheme.fontSizeSm,
        lineHeight: 1.5,
        marginBottom: "8px",
      }}
    >
      © {new Date().getFullYear()} {companyName}. All rights reserved.
    </Text>
    {address ? (
      <Text
        style={{
          color: defaultTheme.colorTextMuted,
          fontSize: defaultTheme.fontSizeSm,
          lineHeight: 1.5,
          marginBottom: "8px",
        }}
      >
        {address}
      </Text>
    ) : null}
    <Row>
      {links.map((link) => (
        <Column key={`${link.href}-${link.label}`}>
          <Link
            href={link.href}
            style={{
              color: defaultTheme.colorTextMuted,
              fontSize: defaultTheme.fontSizeSm,
              marginRight: "24px",
              textDecoration: "none",
            }}
          >
            {link.label}
          </Link>
        </Column>
      ))}
    </Row>
    <Text style={{ fontSize: defaultTheme.fontSizeSm, marginTop: "24px" }}>
      <Link
        href={unsubscribeHref}
        style={{
          color: defaultTheme.colorTextMuted,
          textDecoration: "underline",
        }}
      >
        Unsubscribe
      </Link>
    </Text>
  </Section>
);

type HeroVariant = "default" | "slanted-left" | "slanted-right";

interface HeroProps {
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  align?: "left" | "center";
  variant?: HeroVariant;
}

const HeroSection = ({
  align = "center",
  ctaHref = "#",
  ctaLabel = "Get Started",
  heading = "Welcome",
  subheading = "Get started with your account",
  variant = "default",
}: Omit<HeroProps, "theme">) => {
  void variant;
  const alignStyle =
    align === "center"
      ? { textAlign: "center" as const }
      : { textAlign: "left" as const };

  return (
    <Section
      style={{
        backgroundColor: defaultTheme.colorBackground,
        padding: "48px 0",
      }}
    >
      <Container
        style={{ maxWidth: defaultTheme.containerWidth, ...alignStyle }}
      >
        <Text
          style={{
            color: defaultTheme.colorText,
            fontSize: defaultTheme.fontSizeHeading,
            fontWeight: defaultTheme.fontWeightBold,
            lineHeight: 1.3,
            margin: 0,
            ...alignStyle,
          }}
        >
          {heading}
        </Text>
        <Text
          style={{
            color: defaultTheme.colorTextMuted,
            fontSize: defaultTheme.fontSizeLg,
            lineHeight: 1.5,
            marginBottom: "32px",
            marginTop: "24px",
            ...alignStyle,
          }}
        >
          {subheading}
        </Text>
        {ctaLabel && ctaHref ? (
          <Section style={alignStyle}>
            <Button
              href={ctaHref}
              width={160}
              height={40}
              style={{
                backgroundColor: defaultTheme.button.primary.backgroundColor,
                borderRadius: defaultTheme.button.primary.borderRadius,
                color: defaultTheme.button.primary.color,
                display: "inline-block",
                fontSize: defaultTheme.button.primary.fontSize,
                fontWeight: defaultTheme.button.primary.fontWeight,
                height: "auto",
                paddingBottom: defaultTheme.button.primary.paddingY,
                paddingLeft: defaultTheme.button.primary.paddingX,
                paddingRight: defaultTheme.button.primary.paddingX,
                paddingTop: defaultTheme.button.primary.paddingY,
                textDecoration: "none",
                width: "auto",
              }}
            >
              {ctaLabel}
            </Button>
          </Section>
        ) : null}
      </Container>
    </Section>
  );
};

interface LogoHeaderProps {
  logoUrl?: string;
  logoAlt?: string;
  logoWidth?: number;
  links?: { label: string; href: string }[];
}

const LogoHeaderSection = ({
  logoUrl,
  logoAlt = "Logo",
  logoWidth = 120,
  links = [],
}: Omit<LogoHeaderProps, "theme">) => (
  <Section style={{ paddingBottom: "24px", paddingTop: "24px" }}>
    <Row>
      <Column style={{ textAlign: "left" }}>
        {logoUrl ? (
          <Img
            src={logoUrl}
            alt={logoAlt}
            width={logoWidth}
            style={{ display: "block", height: "auto", maxWidth: logoWidth }}
          />
        ) : (
          <Text
            style={{
              color: defaultTheme.colorText,
              fontFamily: defaultTheme.fontFamily,
              fontSize: defaultTheme.fontSizeBase,
              fontWeight: defaultTheme.fontWeightBold,
            }}
          >
            {logoAlt}
          </Text>
        )}
      </Column>
      {links.length > 0 ? (
        <Column style={{ textAlign: "right" }}>
          {links.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              style={{
                color: defaultTheme.colorTextMuted,
                fontSize: defaultTheme.fontSizeSm,
                marginLeft: "16px",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </Column>
      ) : null}
    </Row>
  </Section>
);

interface Props {
  _firstName?: string;
  _productName?: string;
  ctaHref?: string;
  _senderName?: string;
  _senderTitle?: string;
  _senderAvatarUrl?: string;
}

export const OnboardingLinear = ({
  _firstName = "there",
  _productName = "Linear",
  ctaHref = "https://linear.app",
  _senderName = "Linear Team",
  _senderTitle,
  _senderAvatarUrl,
}: Props) => {
  void _senderAvatarUrl;
  void _senderTitle;

  return (
    <Html>
      <Head>
        <DefaultFonts />
      </Head>
      <Preview>
        Welcome to {_productName}, {_firstName}
      </Preview>
      <Tailwind>
        <Body
          style={{
            backgroundColor: linearTheme.colorBackground,
            fontFamily: linearTheme.fontFamily,
            margin: 0,
          }}
        >
          <Container
            style={{ maxWidth: linearTheme.containerWidth, padding: "32px" }}
          >
            <LogoHeaderSection logoAlt={_productName} />

            <HeroSection
              heading={`Welcome, ${_firstName}`}
              subheading={`Track issues, manage sprints, and ship faster.`}
              ctaLabel="Open Linear"
              ctaHref={ctaHref}
              align="left"
            />

            <ContentGridSection
              columnCount={3}
              columns={[
                {
                  description: "Beautiful issue management.",
                  title: "Issue Tracking",
                },
                {
                  description: "Plan and track work in cycles.",
                  title: "Sprints",
                },
                {
                  description: "Automate your team processes.",
                  title: "Workflows",
                },
              ]}
            />

            <CTABannerSection
              heading="Start tracking"
              subtext="Your workspace is ready."
              ctaLabel="Open Workspace"
              ctaHref={ctaHref}
            />

            <Section
              style={{
                paddingBottom: linearTheme.spacingBase,
                paddingTop: linearTheme.spacingBase,
              }}
            >
              <Text
                style={{
                  color: linearTheme.colorTextMuted,
                  fontSize: linearTheme.fontSizeSm,
                }}
              >
                Sent by {_senderName}
              </Text>
            </Section>

            <FooterSection companyName={_productName} />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

OnboardingLinear.PreviewProps = {
  _firstName: "Aniket",
  _productName: "Linear",
  _senderAvatarUrl: "https://example.com/avatar.jpg",
  _senderName: "Linear Team",
  _senderTitle: "Team",
  ctaHref: "https://linear.app",
} satisfies Props;
