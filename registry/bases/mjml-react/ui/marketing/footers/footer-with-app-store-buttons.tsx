import { MjmlColumn, MjmlImage, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  FooterCopy,
  FooterEmailShell,
  FooterLegal,
} from "@/registry/bases/mjml-react/ui/marketing/footers/footer-shared";

export type FooterWithAppStoreButtonsVariant =
  | "centered"
  | "two-columns"
  | "with-title";

export interface FooterWithAppStoreButtonsProps {
  theme?: EmailThemeTokens;
  variant?: FooterWithAppStoreButtonsVariant;
  title?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  headingColor?: string;
  mutedTextColor?: string;
  unsubscribeHref?: string;
}

const appStore =
  "https://emailcn.vercel.app/api/email-assets/badge-app-store.png";
const googlePlay =
  "https://emailcn.vercel.app/api/email-assets/badge-google-play.png";

const AppButtons = ({ align }: { align: "center" | "left" }) => (
  <>
    <MjmlImage
      align={align}
      alt="Download on the App Store"
      href="https://www.apple.com/app-store/"
      padding="6px 0"
      src={appStore}
      width="120px"
    />
    <MjmlImage
      align={align}
      alt="Get it on Google Play"
      href="https://play.google.com/store/apps"
      padding="6px 0"
      src={googlePlay}
      width="135px"
    />
  </>
);

export const FooterWithAppStoreButtonsSection = ({
  variant = "centered",
  title = "Get the app",
  backgroundColor = "#fffffe",
  textColor = "#6b7280",
  headingColor = "#030712",
  mutedTextColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<FooterWithAppStoreButtonsProps, "theme">) => {
  const centered = variant !== "two-columns";

  return (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 24px 24px">
      <MjmlColumn width={variant === "two-columns" ? "50%" : "100%"}>
        {variant === "with-title" ? (
          <FooterCopy
            align="center"
            color={headingColor}
            fontSize="24px"
            fontWeight="600"
            padding="0 0 16px"
          >
            {title}
          </FooterCopy>
        ) : null}
        <AppButtons align={centered ? "center" : "left"} />
      </MjmlColumn>
      {variant === "two-columns" ? (
        <MjmlColumn width="50%">
          <FooterCopy color={textColor} fontSize="16px">
            © 2026 emailcn
          </FooterCopy>
          <FooterCopy color={textColor}>
            155 Bdv Saint Germain, 75505 Paris
          </FooterCopy>
          <FooterLegal
            copyright="You’re receiving this because you subscribed to updates."
            mutedTextColor={mutedTextColor}
            unsubscribeHref={unsubscribeHref}
          />
        </MjmlColumn>
      ) : (
        <MjmlColumn>
          <FooterLegal
            align="center"
            copyright="© 2026 emailcn · 155 Bdv Saint Germain, 75505 Paris"
            mutedTextColor={mutedTextColor}
            unsubscribeHref={unsubscribeHref}
          />
        </MjmlColumn>
      )}
    </MjmlSection>
  );
};

export const FooterWithAppStoreButtons = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: FooterWithAppStoreButtonsProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <FooterWithAppStoreButtonsSection {...props} />
  </FooterEmailShell>
);

FooterWithAppStoreButtons.PreviewProps = {
  theme: defaultTheme,
  variant: "centered",
} satisfies FooterWithAppStoreButtonsProps;
