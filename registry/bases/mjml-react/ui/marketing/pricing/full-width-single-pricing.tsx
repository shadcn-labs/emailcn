import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";

export interface PricingFeature {
  label: string;
  muted?: boolean;
}

export interface FullWidthSinglePricingProps {
  theme?: EmailThemeTokens;
  name?: string;
  price?: string;
  currency?: string;
  period?: string;
  description?: string;
  features?: PricingFeature[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  brandColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const defaultFeatures: PricingFeature[] = [
  { label: "Visual email editor" },
  { label: "Transactional & marketing templates" },
  { label: "Team collaboration (up to 3 users)", muted: true },
  { label: "Version control & previews", muted: true },
];

export const FullWidthSinglePricingSection = ({
  name = "Takeoff",
  price = "$19",
  currency = "USD",
  period = "/Month",
  description = "Everything you need to design, build, and ship emails faster.",
  features = defaultFeatures,
  backgroundColor = "#fffffe",
  cardBackgroundColor = "#f9fafb",
  brandColor = "#4f46e5",
}: Omit<FullWidthSinglePricingProps, "theme">) => (
  <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
    <MjmlColumn
      backgroundColor={cardBackgroundColor}
      borderRadius="8px"
      padding="24px"
    >
      <MjmlText
        color={brandColor}
        fontFamily={fontFamily}
        fontSize="24px"
        fontWeight="600"
        lineHeight="32px"
        padding="0"
      >
        {name}
      </MjmlText>
      <MjmlSpacer height="16px" />
      <MjmlText
        color="#030712"
        fontFamily={fontFamily}
        fontSize="60px"
        fontWeight="600"
        lineHeight="60px"
        padding="0"
      >
        {price} · {currency} {period}
      </MjmlText>
      <MjmlSpacer height="16px" />
      <MjmlText
        color="#030712"
        fontFamily={fontFamily}
        fontSize="18px"
        fontWeight="500"
        lineHeight="28px"
        padding="0"
      >
        {description}
      </MjmlText>
      <MjmlSpacer height="36px" />
      {features.map((feature) => (
        <MjmlText
          color={feature.muted ? "#9ca3af" : "#4b5563"}
          fontFamily={fontFamily}
          fontSize="16px"
          key={feature.label}
          lineHeight="24px"
          padding="0 0 16px"
        >
          ✓ &nbsp;{feature.label}
        </MjmlText>
      ))}
    </MjmlColumn>
  </MjmlSection>
);

export const FullWidthSinglePricing = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: FullWidthSinglePricingProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlPreview>Takeoff pricing</MjmlPreview>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <FullWidthSinglePricingSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FullWidthSinglePricing.PreviewProps = {
  theme: defaultTheme,
} satisfies FullWidthSinglePricingProps;
