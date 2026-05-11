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

export interface TestimonialProps {
  avatarUrl?: string;
  name?: string;
  role?: string;
  quote?: string;
  companyLogoUrl?: string;
}

export const TestimonialSection = ({
  avatarUrl,
  name = "John Doe",
  role = "CEO, Acme",
  quote = "This product has transformed how we work.",
  companyLogoUrl,
}: Omit<TestimonialProps, "theme">) => (
  <Section
    style={{
      backgroundColor: defaultTheme.colorBackgroundMuted,
      border: `1px solid ${defaultTheme.colorBorder}`,
      borderRadius: "8px",
      padding: "32px",
    }}
  >
    <Text
      style={{
        color: defaultTheme.colorText,
        fontSize: defaultTheme.fontSizeLg,
        fontStyle: "italic",
        lineHeight: 1.4,
      }}
    >
      &ldquo;{quote}&rdquo;
    </Text>
    <Row style={{ marginTop: "24px" }}>
      <Column>
        {avatarUrl ? (
          <Img
            src={avatarUrl}
            alt={name}
            height={56}
            width={56}
            style={{
              borderRadius: "9999px",
              objectFit: "cover",
            }}
          />
        ) : null}
      </Column>
      <Column style={{ paddingLeft: "24px" }}>
        <Text
          style={{
            color: defaultTheme.colorText,
            fontSize: defaultTheme.fontSizeBase,
            fontWeight: defaultTheme.fontWeightMedium,
            marginBottom: "4px",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            color: defaultTheme.colorTextMuted,
            fontSize: defaultTheme.fontSizeSm,
          }}
        >
          {role}
        </Text>
      </Column>
    </Row>
    {companyLogoUrl ? (
      <Img
        src={companyLogoUrl}
        alt="Company"
        style={{
          height: "auto",
          marginTop: "24px",
          maxWidth: "80px",
        }}
      />
    ) : null}
  </Section>
);

export const Testimonial = ({
  avatarUrl,
  name = "John Doe",
  role = "CEO, Acme",
  quote = "This product has transformed how we work.",
  companyLogoUrl,
}: TestimonialProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{quote.slice(0, 80)}</Preview>
    <Tailwind>
      <Body
        style={{
          backgroundColor: defaultTheme.colorBackground,
          fontFamily: defaultTheme.fontFamily,
          margin: 0,
        }}
      >
        <TestimonialSection
          avatarUrl={avatarUrl}
          companyLogoUrl={companyLogoUrl}
          name={name}
          quote={quote}
          role={role}
        />
      </Body>
    </Tailwind>
  </Html>
);

Testimonial.PreviewProps = {
  avatarUrl: "https://example.com/avatar.jpg",
  companyLogoUrl: "https://example.com/company.png",
  name: "Sarah Smith",
  quote:
    "This tool has saved us countless hours and made our team more productive.",
  role: "Product Manager, TechCorp",
} satisfies TestimonialProps;
