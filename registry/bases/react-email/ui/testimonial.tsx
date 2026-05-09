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

export interface TestimonialProps {
  theme?: TailwindConfig;
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
  <Section className="rounded-md border border-border bg-background-muted p-8">
    <Text className="text-lg italic leading-snug text-foreground">
      &ldquo;{quote}&rdquo;
    </Text>
    <Row className="mt-6">
      <Column>
        {avatarUrl ? (
          <Img
            src={avatarUrl}
            alt={name}
            height={56}
            width={56}
            className="rounded-full object-cover"
          />
        ) : null}
      </Column>
      <Column className="pl-6">
        <Text className="mb-1 text-base font-medium text-foreground">
          {name}
        </Text>
        <Text className="text-sm text-foreground-muted">{role}</Text>
      </Column>
    </Row>
    {companyLogoUrl ? (
      <Img
        src={companyLogoUrl}
        alt="Company"
        className="mt-6 h-auto max-w-[80px]"
      />
    ) : null}
  </Section>
);

export const Testimonial = ({
  theme = defaultTheme,
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
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
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
  theme: defaultTheme,
} satisfies TestimonialProps;
