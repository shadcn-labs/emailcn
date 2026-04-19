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
  const t = defaultTheme;

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
    viewOnWeb: {
      color: t.colorTextMuted,
      marginRight: "16px",
      textDecoration: "underline",
    } as const,
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
              <Link href="#" style={style.viewOnWeb}>
                View this email online
              </Link>
              <Link href="#">Unsubscribe</Link>
            </Text>
          </Section>
        </Container>
      </Body>
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

export default NewsletterDefault;
