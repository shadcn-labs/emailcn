import { MjmlColumn, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  FooterCopy,
  FooterCta,
  FooterEmailShell,
  FooterLegal,
  FooterLogo,
  FooterMenu,
  FooterSocials,
  FooterVerticalMenu,
} from "@/registry/bases/mjml-react/ui/marketing/footers/footer-shared";

export type FooterWithOverlappedCtaVariant =
  | "content"
  | "2-column-menu"
  | "3-column-menu"
  | "centered-content"
  | "centered-menu"
  | "address"
  | "centered-socials";

export type FooterOverlappedLogoPosition = "left" | "right";

export interface FooterWithOverlappedCtaProps {
  theme?: EmailThemeTokens;
  variant?: FooterWithOverlappedCtaVariant;
  logoPosition?: FooterOverlappedLogoPosition;
  backgroundImageSrc?: string;
  logoSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  primaryColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  unsubscribeHref?: string;
}

const copy =
  "Lorem ipsum dolor sit amet consectetur. Eget aenean sed sit sed in sapien. Vel auctor arcu nulla consectetur sed.";
const quickLinks = [
  { href: "https://example.com/about", label: "About us" },
  { href: "https://example.com/shop", label: "Shop" },
  { href: "https://example.com/faq", label: "FAQs" },
  { href: "https://example.com/contact", label: "Contact us" },
];
const connectLinks = [
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://github.com", label: "GitHub" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://youtube.com", label: "YouTube" },
];
const legalLinks = [
  { href: "https://example.com/privacy", label: "Privacy Policy" },
  { href: "https://example.com/terms", label: "Terms of Service" },
  { href: "https://example.com/returns", label: "Returns" },
];
const iconRoot = "https://emailcn.vercel.app/api/email-assets";
const socials = [
  {
    href: "https://facebook.com",
    iconSrc: `${iconRoot}/icon-facebook.png`,
    label: "Facebook",
  },
  {
    href: "https://github.com",
    iconSrc: `${iconRoot}/icon-github.png`,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com",
    iconSrc: `${iconRoot}/icon-linkedin.png`,
    label: "LinkedIn",
  },
  {
    href: "https://youtube.com",
    iconSrc: `${iconRoot}/icon-youtube.png`,
    label: "YouTube",
  },
  { href: "https://x.com", iconSrc: `${iconRoot}/icon-x.png`, label: "X" },
];

export const FooterWithOverlappedCtaSection = (
  props: Omit<FooterWithOverlappedCtaProps, "theme">
) => {
  const {
    variant,
    logoPosition,
    backgroundImageSrc,
    logoSrc,
    backgroundColor,
    primaryColor,
    textColor,
    mutedTextColor,
    unsubscribeHref,
  } = {
    backgroundColor: "#fffffe",
    backgroundImageSrc: `${iconRoot}/footers/bg-image-3.jpg`,
    logoPosition: "left" as FooterOverlappedLogoPosition,
    logoSrc: `${iconRoot}/maizzle-insignia.png`,
    mutedTextColor: "#d1d5db",
    primaryColor: "#4f46e5",
    textColor: "#6b7280",
    unsubscribeHref: "https://example.com/unsub",
    variant: "content" as FooterWithOverlappedCtaVariant,
    ...props,
  };

  const centered = variant.startsWith("centered");
  let menuColumns = 0;
  if (variant === "2-column-menu") {
    menuColumns = 2;
  } else if (variant === "3-column-menu") {
    menuColumns = 3;
  }
  const brand = (
    <MjmlColumn direction="ltr" width={menuColumns === 3 ? "25%" : "40%"}>
      <FooterLogo
        align={centered ? "center" : logoPosition}
        alt="Maizzle"
        href="https://example.com"
        src={logoSrc}
        width="64px"
      />
      {menuColumns === 0 && variant !== "centered-menu" ? (
        <FooterCopy
          align={centered ? "center" : logoPosition}
          color={textColor}
          padding="20px 0 0"
        >
          {variant === "address"
            ? "emailcn · 155 Bdv Saint Germain · 75505 Paris"
            : copy}
        </FooterCopy>
      ) : null}
    </MjmlColumn>
  );

  return (
    <>
      <MjmlSection
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundUrl={backgroundImageSrc}
        padding="64px 24px"
      >
        <MjmlColumn
          backgroundColor={backgroundColor}
          borderRadius="12px"
          padding="28px"
          width="82%"
        >
          <FooterCopy
            align="center"
            color="#030712"
            fontSize="24px"
            fontWeight="600"
          >
            Ready to create your next campaign?
          </FooterCopy>
          <FooterCta
            align="center"
            backgroundColor={primaryColor}
            color="#fffffe"
            href="https://example.com/start"
            label="Start now"
          />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection backgroundColor={backgroundColor} padding="44px 24px 12px">
        {centered ? (
          <MjmlColumn>
            <FooterLogo
              align="center"
              alt="Maizzle"
              href="https://example.com"
              padding="0 0 24px"
              src={logoSrc}
              width="64px"
            />
            {variant === "centered-menu" ? (
              <FooterMenu
                align="center"
                links={quickLinks}
                textColor={textColor}
              />
            ) : null}
            <FooterSocials align="center" socials={socials} />
          </MjmlColumn>
        ) : (
          <>
            {logoPosition === "left" ? brand : null}
            {menuColumns >= 2 ? (
              <MjmlColumn
                direction="ltr"
                width={menuColumns === 3 ? "25%" : "30%"}
              >
                <FooterVerticalMenu
                  heading="Quick links"
                  headingColor="#030712"
                  links={quickLinks}
                  textColor={textColor}
                />
              </MjmlColumn>
            ) : null}
            {menuColumns >= 2 ? (
              <MjmlColumn
                direction="ltr"
                width={menuColumns === 3 ? "25%" : "30%"}
              >
                <FooterVerticalMenu
                  heading="Connect"
                  headingColor="#030712"
                  links={connectLinks}
                  textColor={textColor}
                />
              </MjmlColumn>
            ) : null}
            {menuColumns === 3 ? (
              <MjmlColumn direction="ltr" width="25%">
                <FooterVerticalMenu
                  heading="Legal"
                  headingColor="#030712"
                  links={legalLinks}
                  textColor={textColor}
                />
              </MjmlColumn>
            ) : null}
            {logoPosition === "right" ? brand : null}
          </>
        )}
      </MjmlSection>
      <MjmlSection backgroundColor={backgroundColor} padding="0 24px 24px">
        <MjmlColumn>
          {centered ? null : <FooterSocials socials={socials} />}
          <FooterLegal
            align={centered ? "center" : "left"}
            copyright="© 2026 emailcn. All rights reserved."
            mutedTextColor={mutedTextColor}
            unsubscribeHref={unsubscribeHref}
          />
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};

export const FooterWithOverlappedCta = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: FooterWithOverlappedCtaProps) => (
  <FooterEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Footer with overlapped CTA"
    theme={theme}
  >
    <FooterWithOverlappedCtaSection {...props} />
  </FooterEmailShell>
);

FooterWithOverlappedCta.PreviewProps = {
  logoPosition: "left",
  theme: defaultTheme,
  variant: "content",
} satisfies FooterWithOverlappedCtaProps;
