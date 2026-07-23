// Subject: {preheader}

import { NewsletterBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { stackOverflowTheme } from "@/registry/bases/mjml-react/themes/stack-overflow";

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
  issueNumber = "1",
  preheader = "Stack Overflow Weekly",
  articles = [
    { href: "#", summary: "Summary of article 1", title: "Article 1" },
    { href: "#", summary: "Summary of article 2", title: "Article 2" },
    { href: "#", summary: "Summary of article 3", title: "Article 3" },
  ],
  _productName = "Stack Overflow",
}: Props) => (
  <NewsletterBlock
    articles={articles}
    issueNumber={issueNumber}
    preheader={preheader}
    productName={_productName}
    theme={stackOverflowTheme}
  />
);

NewsletterStackOverflow.PreviewProps = {
  _logoAlt: "Stack Overflow",
  _logoUrl: "https://static.photos/business/320x80/2",
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
