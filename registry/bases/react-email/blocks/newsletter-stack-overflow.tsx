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
} from "react-email";

import { ContentGridSection } from "@/registry/bases/react-email/ui/content-grid";
import { defaultTheme } from "@/registry/themes/default";
import { mergeEmailThemes } from "@/registry/themes/merge";

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

const stackOverflowTheme = mergeEmailThemes(defaultTheme, {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f48024",
          fg: "#ffffff",
          hover: "#e06712",
        },
      },
    },
  },
});

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
  const t = stackOverflowTheme;

  const gridColumns = articles.map((article) => ({
    description: article.summary,
    title: article.title,
  }));

  return (
    <Html>
      <Head />
      <Preview>{preheader}</Preview>
      <Tailwind config={t}>
        <Body className="bg-background font-sans">
          <Container className="mx-auto max-w-container p-8">
            <Section className="py-12">
              <Text className="mb-2 text-sm text-foreground-muted">
                Issue #{issueNumber}
              </Text>
              <Text className="mb-8 text-3xl font-bold tracking-tight text-foreground">
                {_productName}
              </Text>
            </Section>

            <ContentGridSection columnCount={3} columns={gridColumns} />

            <Section className="py-4">
              <Text className="mt-8 text-sm text-foreground-muted">
                <Link href="#" className="text-foreground-muted underline">
                  View this email online
                </Link>
                {" • "}
                <Link href="#" className="text-foreground-muted underline">
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
