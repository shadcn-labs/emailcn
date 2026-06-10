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

import { stackOverflowTheme } from "@/registry/bases/jsx-email/themes/stack-overflow";
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

export const NewsletterStackOverflow = ({
  _logoUrl,
  _logoAlt = "Newsletter",
  issueNumber = "1",
  preheader = "Stack Overflow Weekly",
  articles = [
    { href: "#", summary: "Summary of article 1", title: "Article 1" },
    { href: "#", summary: "Summary of article 2", title: "Article 2" },
    { href: "#", summary: "Summary of article 3", title: "Article 3" },
  ],
  _productName = "Stack Overflow",
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
            backgroundColor: stackOverflowTheme.colorBackground,
            fontFamily: stackOverflowTheme.fontFamily,
            margin: 0,
          }}
        >
          <Container
            style={{
              maxWidth: stackOverflowTheme.containerWidth,
              padding: "32px",
              textAlign: "center" as const,
            }}
          >
            <Section style={{ paddingTop: stackOverflowTheme.spacingXl }}>
              <Text
                style={{
                  color: stackOverflowTheme.colorTextMuted,
                  fontSize: stackOverflowTheme.fontSizeSm,
                  marginBottom: "8px",
                }}
              >
                Issue #{issueNumber}
              </Text>
              <Text
                style={{
                  color: stackOverflowTheme.colorText,
                  fontSize: stackOverflowTheme.fontSizeHeading,
                  fontWeight: stackOverflowTheme.fontWeightBold,
                  letterSpacing: "-0.02em",
                  marginBottom: stackOverflowTheme.spacingLg,
                }}
              >
                {_productName}
              </Text>
            </Section>

            <ContentGridSection columnCount={3} columns={gridColumns} />

            <Section style={{ paddingTop: stackOverflowTheme.spacingBase }}>
              <Text
                style={{
                  color: stackOverflowTheme.colorTextMuted,
                  fontSize: stackOverflowTheme.fontSizeSm,
                  marginTop: stackOverflowTheme.spacingLg,
                }}
              >
                <Link
                  href="#"
                  style={{
                    color: stackOverflowTheme.colorTextMuted,
                    textDecoration: "underline",
                  }}
                >
                  View this email online
                </Link>
                {" • "}
                <Link
                  href="#"
                  style={{
                    color: stackOverflowTheme.colorTextMuted,
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

NewsletterStackOverflow.PreviewProps = {
  _logoAlt: "Stack Overflow",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Stack Overflow",
  articles: [
    {
      href: "#",
      summary: "The most voted questions this week",
      title: "Top Questions",
    },
    {
      href: "#",
      summary: "The best answers from the community",
      title: "Best Answers",
    },
    { href: "#", summary: "Popular tags this week", title: "Tags to Watch" },
  ],
  issueNumber: "42",
  preheader: "Stack Overflow Weekly Digest",
} satisfies Props;
