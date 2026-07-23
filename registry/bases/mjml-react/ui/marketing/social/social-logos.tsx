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

export type SocialLogosVariant =
  | "square-tiles"
  | "squared-box"
  | "circle-tiles"
  | "pill-box"
  | "outlined-square-tiles"
  | "outlined-circle-tiles"
  | "outlined-box"
  | "outlined-pill-box";

export interface SocialLogoItem {
  alt: string;
  href: string;
  src: string;
}

export interface SocialLogosProps {
  theme?: EmailThemeTokens;
  title?: string;
  description?: string;
  items?: SocialLogoItem[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  variant?: SocialLogosVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const defaultItems: SocialLogoItem[] = [
  ["LinkedIn", "icon-linkedin.png"],
  ["X", "icon-x.png"],
  ["YouTube", "icon-youtube.png"],
  ["Instagram", "icon-instagram.png"],
  ["Discord", "icon-discord.png"],
].map(([alt, file]) => ({
  alt,
  href: "https://example.com",
  src: `https://emailcn.vercel.app/api/email-assets/social/${file}`,
}));

export const SocialLogosSection = ({
  title = "Connect with us",
  description = "Stay in the loop by following us across our social channels for updates, news, and behind-the-scenes moments.",
  items = defaultItems,
  backgroundColor = "#fffffe",
  variant = "square-tiles",
}: Omit<SocialLogosProps, "theme">) => {
  const outlined = variant.startsWith("outlined");
  const rounded = variant.includes("circle") || variant.includes("pill");

  return (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 64px">
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
          borderRadius={rounded ? "9999px" : "4px"}
          iconSize="24px"
          padding="0"
        >
          {items.map((item) => (
            <MjmlSocialElement
              alt={item.alt}
              backgroundColor={outlined ? "#fffffe" : "#f3f4f6"}
              borderRadius={rounded ? "9999px" : "4px"}
              href={item.href}
              iconPadding="20px"
              key={`${item.alt}-${item.href}`}
              padding="0 8px"
              src={item.src}
            />
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

export const SocialLogos = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "square-tiles",
  ...props
}: SocialLogosProps) => (
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
        <SocialLogosSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

SocialLogos.PreviewProps = {
  theme: defaultTheme,
  variant: "square-tiles",
} satisfies SocialLogosProps;
