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

export type FooterWithBackgroundImageVariant =
  | "bottom-image-content"
  | "bottom-image-2-column-menu"
  | "bottom-image-3-column-menu"
  | "bottom-image-centered"
  | "top-image-content"
  | "top-image-3-column-menu"
  | "top-image-address"
  | "top-image-centered"
  | "top-image-logo-bottom";

export type FooterBackgroundLogoPosition = "left" | "right";

export interface FooterWithBackgroundImageProps {
  theme?: EmailThemeTokens;
  variant?: FooterWithBackgroundImageVariant;
  logoPosition?: FooterBackgroundLogoPosition;
  bottomImageSrc?: string;
  topImageSrc?: string;
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
  { href: "https://instagram.com", label: "Instagram" },
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

const ImageCta = ({
  imageSrc,
  primaryColor,
}: {
  imageSrc: string;
  primaryColor: string;
}) => (
  <MjmlSection
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    backgroundUrl={imageSrc}
    padding="64px 24px"
  >
    <MjmlColumn>
      <FooterCopy
        align="center"
        color="#fffffe"
        fontSize="24px"
        fontWeight="600"
      >
        Let’s build something remarkable
      </FooterCopy>
      <FooterCta
        align="center"
        backgroundColor={primaryColor}
        color="#fffffe"
        href="https://example.com/contact"
        label="Get in touch"
      />
    </MjmlColumn>
  </MjmlSection>
);

const FooterBrandColumn = ({
  address,
  centered,
  logoBottom,
  logoPosition,
  logoSrc,
  singleColumn,
  textColor,
  threeColumns,
}: {
  address: boolean;
  centered: boolean;
  logoBottom: boolean;
  logoPosition: FooterBackgroundLogoPosition;
  logoSrc: string;
  singleColumn: boolean;
  textColor: string;
  threeColumns: boolean;
}) => (
  <MjmlColumn direction="ltr" width={threeColumns ? "25%" : "45%"}>
    {logoBottom ? null : (
      <FooterLogo
        align={centered ? "center" : logoPosition}
        alt="Maizzle"
        href="https://example.com"
        src={logoSrc}
        width={centered ? "64px" : "55px"}
      />
    )}
    {singleColumn ? (
      <FooterCopy
        align={centered ? "center" : logoPosition}
        color={textColor}
        padding="20px 0 0"
      >
        {address ? "emailcn · 155 Bdv Saint Germain · 75505 Paris" : copy}
      </FooterCopy>
    ) : null}
  </MjmlColumn>
);

const FooterContent = ({
  backgroundColor,
  logoPosition,
  logoSrc,
  mutedTextColor,
  textColor,
  unsubscribeHref,
  variant,
}: {
  backgroundColor: string;
  logoPosition: FooterBackgroundLogoPosition;
  logoSrc: string;
  mutedTextColor: string;
  textColor: string;
  unsubscribeHref: string;
  variant: FooterWithBackgroundImageVariant;
}) => {
  const centered = variant.includes("centered");
  const threeColumns = variant.includes("3-column");
  const twoColumns = variant.includes("2-column");
  const address = variant === "top-image-address";
  const logoBottom = variant === "top-image-logo-bottom";
  const singleColumn = !(twoColumns || threeColumns);
  const brand = (
    <FooterBrandColumn
      address={address}
      centered={centered}
      logoBottom={logoBottom}
      logoPosition={logoPosition}
      logoSrc={logoSrc}
      singleColumn={singleColumn}
      textColor={textColor}
      threeColumns={threeColumns}
    />
  );

  return (
    <>
      <MjmlSection backgroundColor={backgroundColor} padding="44px 24px 12px">
        {centered ? (
          <MjmlColumn>
            <FooterLogo
              align="center"
              alt="Maizzle"
              href="https://example.com"
              padding="0 0 28px"
              src={logoSrc}
              width="64px"
            />
            <FooterMenu
              align="center"
              links={quickLinks}
              textColor={textColor}
            />
            <FooterSocials align="center" socials={socials} />
          </MjmlColumn>
        ) : (
          <>
            {logoPosition === "left" ? brand : null}
            {twoColumns || threeColumns ? (
              <MjmlColumn direction="ltr" width={threeColumns ? "25%" : "28%"}>
                <FooterVerticalMenu
                  heading="Quick links"
                  headingColor="#030712"
                  links={quickLinks}
                  textColor={textColor}
                />
              </MjmlColumn>
            ) : null}
            {twoColumns || threeColumns ? (
              <MjmlColumn direction="ltr" width={threeColumns ? "25%" : "28%"}>
                <FooterVerticalMenu
                  heading="Connect"
                  headingColor="#030712"
                  links={connectLinks}
                  textColor={textColor}
                />
              </MjmlColumn>
            ) : null}
            {threeColumns ? (
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
          {logoBottom ? (
            <FooterLogo
              align="center"
              alt="Maizzle"
              href="https://example.com"
              padding="16px 0"
              src={logoSrc}
              width="64px"
            />
          ) : null}
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

export const FooterWithBackgroundImageSection = ({
  variant = "bottom-image-content",
  logoPosition = "left",
  bottomImageSrc = `${iconRoot}/footers/bg-image-1.jpg`,
  topImageSrc = `${iconRoot}/footers/bg-image-2.jpg`,
  logoSrc = `${iconRoot}/maizzle-insignia.png`,
  backgroundColor = "#fffffe",
  primaryColor = "#4f46e5",
  textColor = "#6b7280",
  mutedTextColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<FooterWithBackgroundImageProps, "theme">) => {
  const topImage = variant.startsWith("top-image");
  const image = (
    <ImageCta
      imageSrc={topImage ? topImageSrc : bottomImageSrc}
      primaryColor={primaryColor}
    />
  );
  const content = (
    <FooterContent
      backgroundColor={backgroundColor}
      logoPosition={logoPosition}
      logoSrc={logoSrc}
      mutedTextColor={mutedTextColor}
      textColor={textColor}
      unsubscribeHref={unsubscribeHref}
      variant={variant}
    />
  );

  return (
    <>
      {topImage ? image : content}
      {topImage ? content : image}
    </>
  );
};

export const FooterWithBackgroundImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: FooterWithBackgroundImageProps) => (
  <FooterEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Footer with background image"
    theme={theme}
  >
    <FooterWithBackgroundImageSection {...props} />
  </FooterEmailShell>
);

FooterWithBackgroundImage.PreviewProps = {
  logoPosition: "left",
  theme: defaultTheme,
  variant: "bottom-image-content",
} satisfies FooterWithBackgroundImageProps;
