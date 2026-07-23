import {
  MjmlButton,
  MjmlColumn,
  MjmlDivider,
  MjmlSection,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  FooterCopy,
  FooterEmailShell,
  FooterLegal,
  FooterLogo,
} from "@/registry/bases/mjml-react/ui/marketing/footers/footer-shared";

export interface FooterWithLargeTitleAndButtonsProps {
  theme?: EmailThemeTokens;
  title?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  primaryColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  dividerColor?: string;
  unsubscribeHref?: string;
}

export const FooterWithLargeTitleAndButtonsSection = ({
  title = "Start sending professionally\ndesigned emails today",
  backgroundColor = "#fffffe",
  primaryColor = "#4f46e5",
  textColor = "#6b7280",
  mutedTextColor = "#d1d5db",
  dividerColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<FooterWithLargeTitleAndButtonsProps, "theme">) => (
  <>
    <MjmlSection backgroundColor={backgroundColor} padding="44px 24px 12px">
      <MjmlColumn>
        <FooterLogo
          align="center"
          alt="Maizzle"
          href="https://example.com"
          src="https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png"
          width="64px"
        />
        <FooterCopy
          align="center"
          color="#030712"
          fontSize="30px"
          fontWeight="500"
          lineHeight="36px"
          padding="24px 0"
        >
          {title}
        </FooterCopy>
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection backgroundColor={backgroundColor} padding="0 84px 24px">
      <MjmlColumn width="50%">
        <MjmlButton
          align="center"
          backgroundColor={primaryColor}
          borderRadius="8px"
          color="#f8fafc"
          href="https://example.com/shop"
          innerPadding="14px 24px"
          padding="0 8px"
        >
          Shop with us
        </MjmlButton>
      </MjmlColumn>
      <MjmlColumn width="50%">
        <MjmlButton
          align="center"
          backgroundColor={backgroundColor}
          border={`1px solid ${dividerColor}`}
          borderRadius="8px"
          color="#4b5563"
          href="https://example.com/follow"
          innerPadding="14px 24px"
          padding="0 8px"
        >
          Follow us
        </MjmlButton>
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection backgroundColor={backgroundColor} padding="0 24px 24px">
      <MjmlColumn>
        <MjmlDivider borderColor={dividerColor} padding="12px 0 24px" />
        <FooterCopy align="center" color={textColor}>
          emailcn · 155 Bdv Saint Germain · 75505 Paris
        </FooterCopy>
        <FooterLegal
          align="center"
          copyright="© 2026 emailcn. All rights reserved."
          mutedTextColor={mutedTextColor}
          unsubscribeHref={unsubscribeHref}
        />
      </MjmlColumn>
    </MjmlSection>
  </>
);

export const FooterWithLargeTitleAndButtons = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: FooterWithLargeTitleAndButtonsProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <FooterWithLargeTitleAndButtonsSection {...props} />
  </FooterEmailShell>
);

FooterWithLargeTitleAndButtons.PreviewProps = {
  theme: defaultTheme,
} satisfies FooterWithLargeTitleAndButtonsProps;
