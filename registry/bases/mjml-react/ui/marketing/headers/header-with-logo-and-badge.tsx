import {
  MjmlButton,
  MjmlColumn,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  HeaderEmailShell,
  HeaderLogo,
} from "@/registry/bases/mjml-react/ui/marketing/headers/header-shared";

export type HeaderWithLogoAndBadgeAlignment = "left" | "center" | "right";

export interface HeaderWithLogoAndBadgeProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  badgeLabel?: string;
  message?: string;
  alignment?: HeaderWithLogoAndBadgeAlignment;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  badgeBackgroundColor?: string;
  badgeBorderColor?: string;
  badgeColor?: string;
  badgeTextColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const HeaderWithLogoAndBadgeSection = ({
  alignment = "left",
  backgroundColor = "#fffffe",
  badgeBackgroundColor = "#eff6ff",
  badgeBorderColor = "#dbeafe",
  badgeColor = "#2563eb",
  badgeLabel = "FREE SHIPPING",
  badgeTextColor = "#4b5563",
  logoAlt = "Maizzle",
  logoHref = "https://example.com",
  logoSrc = "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  message = "On orders over $65",
}: Omit<HeaderWithLogoAndBadgeProps, "theme">) => {
  const logo = (
    <HeaderLogo align={alignment} alt={logoAlt} href={logoHref} src={logoSrc} />
  );
  const badge = (
    <>
      <MjmlButton
        align={alignment}
        backgroundColor={badgeBackgroundColor}
        border={`1px solid ${badgeBorderColor}`}
        borderRadius="9999px"
        color={badgeColor}
        fontFamily={fontFamily}
        fontSize="12px"
        fontWeight="600"
        innerPadding="5px 10px"
        padding="0"
      >
        {badgeLabel}
      </MjmlButton>
      <MjmlText
        align={alignment}
        color={badgeTextColor}
        fontFamily={fontFamily}
        fontSize="14px"
        lineHeight="20px"
        padding="8px 0 0"
      >
        {message}
      </MjmlText>
    </>
  );

  if (alignment === "center") {
    return (
      <MjmlSection backgroundColor={backgroundColor} padding="24px">
        <MjmlColumn padding="0">
          {logo}
          <MjmlSpacer height="24px" />
          {badge}
        </MjmlColumn>
      </MjmlSection>
    );
  }

  return (
    <MjmlSection backgroundColor={backgroundColor} padding="24px">
      <MjmlColumn padding="0" verticalAlign="middle" width="35%">
        {alignment === "left" ? logo : badge}
      </MjmlColumn>
      <MjmlColumn padding="0" verticalAlign="middle" width="65%">
        {alignment === "left" ? badge : logo}
      </MjmlColumn>
    </MjmlSection>
  );
};

export const HeaderWithLogoAndBadge = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: HeaderWithLogoAndBadgeProps) => (
  <HeaderEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Free shipping on orders over $65"
    theme={theme}
  >
    <HeaderWithLogoAndBadgeSection {...props} />
  </HeaderEmailShell>
);

HeaderWithLogoAndBadge.PreviewProps = {
  alignment: "left",
  theme: defaultTheme,
} satisfies HeaderWithLogoAndBadgeProps;
