// Subject: {preheader}

import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "react-email";

import { ContentGrid } from "../components/content-grid";
import type { EmailTheme } from "../themes/default";
import { theme as defaultTheme } from "../themes/default";

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

const getStackOverflowTheme = (t: EmailTheme): EmailTheme => ({
  ...t,
  button: {
    ...t.button,
    primary: {
      ...t.button.primary,
      backgroundColor: "#f48024",
      color: "#ffffff",
    },
  },
  colorPrimary: "#f48024",
  colorPrimaryForeground: "#ffffff",
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
  const baseTheme = defaultTheme;
  const t = getStackOverflowTheme(baseTheme);

  const style = {
    footer: {
      color: t.colorTextMuted,
      fontSize: t.fontSizeSm,
      marginTop: t.spacingLg,
    },
    heading: {
      color: t.colorText,
      fontSize: t.fontSizeHeading,
      fontWeight: t.fontWeightBold,
      marginBottom: t.spacingLg,
    },
    issueNumber: {
      color: t.colorTextMuted,
      fontSize: t.fontSizeSm,
      marginBottom: "8px",
    },
    section: { padding: `${t.spacingXl} 0` },
  };

  const gridColumns = articles.map((article) => ({
    description: article.summary,
    title: article.title,
  }));

  return (
    <Html>
      <Head />
      <Preview>{preheader}</Preview>
      <Body
        style={{ backgroundColor: t.colorBackground, fontFamily: t.fontFamily }}
      >
        <Container
          style={{
            margin: "0 auto",
            maxWidth: t.containerWidth,
            padding: t.spacingLg,
          }}
        >
          <Section style={style.section}>
            <Text style={style.issueNumber}>Issue #{issueNumber}</Text>
            <Text style={style.heading}>{_productName}</Text>
          </Section>

          <ContentGrid theme={t} columnCount={3} columns={gridColumns} />

          <Section style={{ padding: `${t.spacingBase} 0` }}>
            <Text style={style.footer}>
              <Link href="#">View this email online</Link> •{" "}
              <Link href="#">Unsubscribe</Link>
            </Text>
          </Section>
        </Container>
      </Body>
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

export default NewsletterStackOverflow;
