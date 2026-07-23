import { Body, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import { ReviewsSection } from "@/registry/bases/react-email/ui/ecommerce/reviews/reviews-shared";
import type {
  FullWidthReviewsVariant,
  ReviewItem,
} from "@/registry/bases/react-email/ui/ecommerce/reviews/reviews-shared";

export interface FullWidthReviewsProps {
  reviews?: ReviewItem[];
  theme?: TailwindConfig;
  variant?: FullWidthReviewsVariant;
}

export const FullWidthReviewsSection = ({
  reviews,
  variant = "with-divider",
}: Omit<FullWidthReviewsProps, "theme">) => (
  <ReviewsSection layout="full-width" reviews={reviews} variant={variant} />
);

export const FullWidthReviews = ({
  theme = defaultTheme,
  ...props
}: FullWidthReviewsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Customer review</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FullWidthReviewsSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

FullWidthReviews.PreviewProps = {
  theme: defaultTheme,
  variant: "with-divider",
} satisfies FullWidthReviewsProps;
