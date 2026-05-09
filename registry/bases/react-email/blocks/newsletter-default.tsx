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

import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import { ContentGridSection } from "@/registry/bases/react-email/ui/content-grid";

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
  const t = defaultTheme;

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
                <Link href="#" className="mr-4 text-foreground-muted underline">
                  View this email online
                </Link>
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
