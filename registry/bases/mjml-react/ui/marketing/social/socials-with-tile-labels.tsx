import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlSocial,
  MjmlSocialElement,
  MjmlSpacer,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";

export type SocialsWithTileLabelsVariant = "stacked" | "inline";

export interface TiledSocialItem {
  alt: string;
  href: string;
  label: string;
  src: string;
}

export interface SocialsWithTileLabelsProps {
  theme?: EmailThemeTokens;
  title?: string;
  description?: string;
  items?: TiledSocialItem[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  tileBackgroundColor?: string;
  variant?: SocialsWithTileLabelsVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const makeItems = (entries: readonly (readonly [string, string])[]) =>
  entries.map(([label, file]) => ({
    alt: label,
    href: "https://example.com",
    label,
    src: `https://emailcn.vercel.app/api/email-assets/social/${file}`,
  }));

const stackedItems = makeItems([
  ["LinkedIn", "icon-linkedin.png"],
  ["X", "icon-x.png"],
  ["YouTube", "icon-youtube.png"],
  ["Instagram", "icon-instagram.png"],
] as const);

const inlineItems = makeItems([
  ["LinkedIn", "icon-linkedin.png"],
  ["Facebook", "icon-facebook.png"],
  ["YouTube", "icon-youtube.png"],
  ["Instagram", "icon-instagram.png"],
] as const);

export const SocialsWithTileLabelsSection = ({
  title = "Connect with us",
  description = "Stay in the loop by following us across our social channels for updates, news, and behind-the-scenes moments.",
  items,
  backgroundColor = "#fffffe",
  tileBackgroundColor = "#f3f4f6",
  variant = "stacked",
}: Omit<SocialsWithTileLabelsProps, "theme">) => {
  const resolvedItems =
    items ?? (variant === "stacked" ? stackedItems : inlineItems);
  const stacked = variant === "stacked";

  return (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
      <MjmlColumn padding="0">
        <MjmlText
          align="center"
          color="#030712"
          fontFamily={fontFamily}
          fontSize="20px"
          fontWeight="600"
          lineHeight="28px"
          padding="0"
        >
          {title}
        </MjmlText>
        <MjmlSpacer height="36px" />
        <MjmlSocial
          align="center"
          color="#6b7280"
          fontFamily={fontFamily}
          fontSize="16px"
          fontWeight="500"
          iconSize={stacked ? "24px" : "16px"}
          padding="0"
          textPadding={stacked ? "4px 10px 0" : "0 10px 0 6px"}
        >
          {resolvedItems.map((item) => (
            <MjmlSocialElement
              alt={item.alt}
              backgroundColor={tileBackgroundColor}
              borderRadius="4px"
              href={item.href}
              iconPadding="16px"
              key={`${item.label}-${item.href}`}
              src={item.src}
            >
              {item.label}
            </MjmlSocialElement>
          ))}
        </MjmlSocial>
        <MjmlSpacer height="36px" />
        <MjmlText
          align="center"
          color="#4b5563"
          fontFamily={fontFamily}
          fontSize="16px"
          fontWeight="300"
          lineHeight="24px"
          padding="0"
        >
          {description}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
};

export const SocialsWithTileLabels = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "stacked",
  ...props
}: SocialsWithTileLabelsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlPreview>Connect with us</MjmlPreview>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <SocialsWithTileLabelsSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

SocialsWithTileLabels.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked",
} satisfies SocialsWithTileLabelsProps;
