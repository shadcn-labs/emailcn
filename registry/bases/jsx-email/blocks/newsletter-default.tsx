// Subject: {preheader}

import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import { ContentGridSection } from "@/registry/bases/jsx-email/ui/content-grid";

interface Article {
  title: string;
  summary: string;
  href: string;
  imageUrl?: string;
}

interface Props {
  _logoUrl?: string;
  _logoAlt?: string;
  issueNumber?: string;
  preheader?: string;
  articles?: Article[];
  _productName?: string;
}

export const NewsletterDefault = ({
  _logoUrl,
  _logoAlt = "Newsletter",
  issueNumber = "1",
  preheader = "Your weekly update",
  articles = [
    { href: "#", summary: "Summary of article 1", title: "Article 1" },
    { href: "#", summary: "Summary of article 2", title: "Article 2" },
    { href: "#", summary: "Summary of article 3", title: "Article 3" },
  ],
  _productName = "Newsletter",
}: Props) => {
  void _logoUrl;

  const gridColumns = articles.map((article) => ({
    description: article.summary,
    title: article.title,
  }));

  return (
    <Html>
      <Head />
      <Preview>{preheader}</Preview>
      <Tailwind>
        <Body
          style={{
            backgroundColor: defaultTheme.colorBackground,
            fontFamily: defaultTheme.fontFamily,
            margin: 0,
          }}
        >
          <Container
            style={{
              maxWidth: defaultTheme.containerWidth,
              padding: "32px",
              textAlign: "center" as const,
            }}
          >
            <Section style={{ paddingTop: defaultTheme.spacingXl }}>
              <Text
                style={{
                  color: defaultTheme.colorTextMuted,
                  fontSize: defaultTheme.fontSizeSm,
                  marginBottom: "8px",
                }}
              >
                Issue #{issueNumber}
              </Text>
              <Text
                style={{
                  color: defaultTheme.colorText,
                  fontSize: defaultTheme.fontSizeHeading,
                  fontWeight: defaultTheme.fontWeightBold,
                  letterSpacing: "-0.02em",
                  marginBottom: defaultTheme.spacingLg,
                }}
              >
                {_productName}
              </Text>
            </Section>

            <ContentGridSection columnCount={3} columns={gridColumns} />

            <Section style={{ paddingTop: defaultTheme.spacingBase }}>
              <Text
                style={{
                  color: defaultTheme.colorTextMuted,
                  fontSize: defaultTheme.fontSizeSm,
                  marginTop: defaultTheme.spacingLg,
                }}
              >
                <Link
                  href="#"
                  style={{
                    color: defaultTheme.colorTextMuted,
                    marginRight: "16px",
                    textDecoration: "underline",
                  }}
                >
                  View this email online
                </Link>
                <Link
                  href="#"
                  style={{
                    color: defaultTheme.colorTextMuted,
                    textDecoration: "underline",
                  }}
                >
                  Unsubscribe
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

NewsletterDefault.PreviewProps = {
  _logoAlt: "Newsletter",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Acme Newsletter",
  articles: [
    {
      href: "#",
      summary: "How to get the most out of our platform",
      title: "Getting Started",
    },
    {
      href: "#",
      summary: "Check out what we just shipped",
      title: "New Features",
    },
    { href: "#", summary: "Become a power user", title: "Tips & Tricks" },
  ],
  issueNumber: "42",
  preheader: "Your weekly update from Acme",
} satisfies Props;
