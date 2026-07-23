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

export interface SimpleSocialLogoItem {
  alt: string;
  href: string;
  src: string;
}

export interface SimpleSocialLogosRowProps {
  theme?: EmailThemeTokens;
  title?: string;
  description?: string;
  items?: SimpleSocialLogoItem[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const defaultItems: SimpleSocialLogoItem[] = [
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

export const SimpleSocialLogosRowSection = ({
  title = "Connect with us",
  description = "Stay in the loop by following us across our social channels for updates, news, and behind-the-scenes moments.",
  items = defaultItems,
  backgroundColor = "#fffffe",
}: Omit<SimpleSocialLogosRowProps, "theme">) => (
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
      <MjmlSocial align="center" iconSize="24px" padding="0">
        {items.map((item) => (
          <MjmlSocialElement
            alt={item.alt}
            href={item.href}
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

export const SimpleSocialLogosRow = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: SimpleSocialLogosRowProps) => (
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
        <SimpleSocialLogosRowSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

SimpleSocialLogosRow.PreviewProps = {
  theme: defaultTheme,
} satisfies SimpleSocialLogosRowProps;
