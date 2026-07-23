// Subject: {preheader}

import { NewsletterBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";

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
  issueNumber = "1",
  preheader = "Your weekly update",
  articles = [
    { href: "#", summary: "Summary of article 1", title: "Article 1" },
    { href: "#", summary: "Summary of article 2", title: "Article 2" },
    { href: "#", summary: "Summary of article 3", title: "Article 3" },
  ],
  _productName = "Newsletter",
}: Props) => (
  <NewsletterBlock
    articles={articles}
    issueNumber={issueNumber}
    preheader={preheader}
    productName={_productName}
    theme={defaultTheme}
  />
);

NewsletterDefault.PreviewProps = {
  _logoAlt: "Newsletter",
  _logoUrl: "https://static.photos/business/320x80/2",
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
