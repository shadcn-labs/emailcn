import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlNavbar,
  MjmlNavbarLink,
  MjmlPreview,
  MjmlSocial,
  MjmlSocialElement,
  MjmlText,
  MjmlWrapper,
  MjmlColumn,
  MjmlSection,
  MjmlDivider,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
interface NativeFooterLink {
  href: string;
  label: string;
}
interface NativeFooterSocial extends NativeFooterLink {
  iconSrc: string;
}
const FooterEmailShell = ({
  children,
  pageBackgroundColor,
  preview = "Footer",
  theme,
}: {
  children: ReactNode;
  pageBackgroundColor: string;
  preview?: string;
  theme: EmailThemeTokens;
}) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{preview}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">{children}</MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
const FooterLogo = ({
  align = "left",
  alt,
  href,
  padding = "0",
  src,
  width = "48px",
}: {
  align?: "center" | "left" | "right";
  alt: string;
  href: string;
  padding?: string;
  src: string;
  width?: string;
}) => (
  <MjmlImage
    align={align}
    alt={alt}
    href={href}
    padding={padding}
    src={src}
    width={width}
  />
);
const FooterCopy = ({
  align = "left",
  children,
  color,
  fontSize = "14px",
  fontWeight = "400",
  lineHeight = "22px",
  padding = "0",
}: {
  align?: "center" | "left" | "right";
  children: ReactNode;
  color: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  padding?: string;
}) => (
  <MjmlText
    align={align}
    color={color}
    fontFamily={fontFamily}
    fontSize={fontSize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    padding={padding}
  >
    {children}
  </MjmlText>
);
const FooterMenu = ({
  align = "left",
  links,
  textColor,
}: {
  align?: "center" | "left" | "right";
  links: NativeFooterLink[];
  textColor: string;
}) => (
  <MjmlNavbar align={align} padding="0">
    {links.map((link) => (
      <MjmlNavbarLink
        color={textColor}
        fontFamily={fontFamily}
        fontSize="14px"
        href={link.href}
        key={`${link.label}-${link.href}`}
        padding="4px 10px"
      >
        {link.label}
      </MjmlNavbarLink>
    ))}
  </MjmlNavbar>
);
const FooterVerticalMenu = ({
  align = "left",
  heading,
  headingColor,
  links,
  textColor,
}: {
  align?: "center" | "left" | "right";
  heading: string;
  headingColor: string;
  links: NativeFooterLink[];
  textColor: string;
}) => (
  <>
    <FooterCopy
      align={align}
      color={headingColor}
      fontWeight="600"
      padding="0 0 8px"
    >
      {heading}
    </FooterCopy>
    {links.map((link) => (
      <MjmlButton
        align={align}
        backgroundColor="transparent"
        color={textColor}
        fontFamily={fontFamily}
        fontSize="14px"
        href={link.href}
        innerPadding="0"
        key={`${link.label}-${link.href}`}
        lineHeight="24px"
        padding="2px 0"
      >
        {link.label}
      </MjmlButton>
    ))}
  </>
);
const FooterSocials = ({
  align = "left",
  socials,
}: {
  align?: "center" | "left" | "right";
  socials: NativeFooterSocial[];
}) => (
  <MjmlSocial align={align} iconSize="24px" mode="horizontal" padding="0">
    {socials.map((social) => (
      <MjmlSocialElement
        alt={social.label}
        href={social.href}
        key={`${social.label}-${social.href}`}
        name={social.label.toLowerCase()}
        padding="4px"
        src={social.iconSrc}
      />
    ))}
  </MjmlSocial>
);
const FooterLegal = ({
  align = "left",
  copyright,
  mutedTextColor,
  unsubscribeHref,
}: {
  align?: "center" | "left" | "right";
  copyright: string;
  mutedTextColor: string;
  unsubscribeHref: string;
}) => (
  <>
    <FooterCopy align={align} color={mutedTextColor}>
      {copyright}
    </FooterCopy>
    <MjmlButton
      align={align}
      backgroundColor="transparent"
      color={mutedTextColor}
      fontFamily={fontFamily}
      fontSize="12px"
      href={unsubscribeHref}
      innerPadding="0"
      lineHeight="20px"
      padding="4px 0 0"
      textDecoration="underline"
    >
      Unsubscribe
    </MjmlButton>
  </>
);
const FooterCta = ({
  align = "left",
  backgroundColor,
  color,
  href,
  label,
  padding = "20px 0 0",
}: {
  align?: "center" | "left" | "right";
  backgroundColor: string;
  color: string;
  href: string;
  label: string;
  padding?: string;
}) => (
  <MjmlButton
    align={align}
    backgroundColor={backgroundColor}
    borderRadius="8px"
    color={color}
    fontFamily={fontFamily}
    fontSize="15px"
    fontWeight="600"
    href={href}
    innerPadding="12px 22px"
    padding={padding}
  >
    {label}
  </MjmlButton>
);
type AppStoreFooter_FooterWithAppStoreButtonsVariant =
  | "centered"
  | "two-columns"
  | "with-title";
interface AppStoreFooter_FooterWithAppStoreButtonsProps {
  theme?: EmailThemeTokens;
  variant?: AppStoreFooter_FooterWithAppStoreButtonsVariant;
  title?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  headingColor?: string;
  mutedTextColor?: string;
  unsubscribeHref?: string;
}
const AppStoreFooter_appStore =
  "https://emailcn.vercel.app/api/email-assets/badge-app-store.png";
const AppStoreFooter_googlePlay =
  "https://emailcn.vercel.app/api/email-assets/badge-google-play.png";
const AppStoreFooter_AppButtons = ({ align }: { align: "center" | "left" }) => (
  <>
    <MjmlImage
      align={align}
      alt="Download on the App Store"
      href="https://www.apple.com/app-store/"
      padding="6px 0"
      src={AppStoreFooter_appStore}
      width="120px"
    />
    <MjmlImage
      align={align}
      alt="Get it on Google Play"
      href="https://play.google.com/store/apps"
      padding="6px 0"
      src={AppStoreFooter_googlePlay}
      width="135px"
    />
  </>
);
const AppStoreFooter_FooterWithAppStoreButtonsSection = ({
  variant = "centered",
  title = "Get the app",
  backgroundColor = "#fffffe",
  textColor = "#6b7280",
  headingColor = "#030712",
  mutedTextColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<AppStoreFooter_FooterWithAppStoreButtonsProps, "theme">) => {
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
        <AppStoreFooter_AppButtons align={centered ? "center" : "left"} />
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
const AppStoreFooter_FooterWithAppStoreButtons = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: AppStoreFooter_FooterWithAppStoreButtonsProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <AppStoreFooter_FooterWithAppStoreButtonsSection {...props} />
  </FooterEmailShell>
);
AppStoreFooter_FooterWithAppStoreButtons.PreviewProps = {
  theme: defaultTheme,
  variant: "centered",
} satisfies AppStoreFooter_FooterWithAppStoreButtonsProps;
const __AppStoreFooter = AppStoreFooter_FooterWithAppStoreButtons;
type BackgroundFooter_FooterWithBackgroundImageVariant =
  | "bottom-image-content"
  | "bottom-image-2-column-menu"
  | "bottom-image-3-column-menu"
  | "bottom-image-centered"
  | "top-image-content"
  | "top-image-3-column-menu"
  | "top-image-address"
  | "top-image-centered"
  | "top-image-logo-bottom";
type BackgroundFooter_FooterBackgroundLogoPosition = "left" | "right";
interface BackgroundFooter_FooterWithBackgroundImageProps {
  theme?: EmailThemeTokens;
  variant?: BackgroundFooter_FooterWithBackgroundImageVariant;
  logoPosition?: BackgroundFooter_FooterBackgroundLogoPosition;
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
const BackgroundFooter_copy =
  "Lorem ipsum dolor sit amet consectetur. Eget aenean sed sit sed in sapien. Vel auctor arcu nulla consectetur sed.";
const BackgroundFooter_quickLinks = [
  { href: "https://example.com/about", label: "About us" },
  { href: "https://example.com/shop", label: "Shop" },
  { href: "https://example.com/faq", label: "FAQs" },
  { href: "https://example.com/contact", label: "Contact us" },
];
const BackgroundFooter_connectLinks = [
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://github.com", label: "GitHub" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://youtube.com", label: "YouTube" },
  { href: "https://instagram.com", label: "Instagram" },
];
const BackgroundFooter_legalLinks = [
  { href: "https://example.com/privacy", label: "Privacy Policy" },
  { href: "https://example.com/terms", label: "Terms of Service" },
  { href: "https://example.com/returns", label: "Returns" },
];
const BackgroundFooter_iconRoot = "https://emailcn.vercel.app/api/email-assets";
const BackgroundFooter_socials = [
  {
    href: "https://facebook.com",
    iconSrc: `${BackgroundFooter_iconRoot}/icon-facebook.png`,
    label: "Facebook",
  },
  {
    href: "https://github.com",
    iconSrc: `${BackgroundFooter_iconRoot}/icon-github.png`,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com",
    iconSrc: `${BackgroundFooter_iconRoot}/icon-linkedin.png`,
    label: "LinkedIn",
  },
  {
    href: "https://youtube.com",
    iconSrc: `${BackgroundFooter_iconRoot}/icon-youtube.png`,
    label: "YouTube",
  },
  {
    href: "https://x.com",
    iconSrc: `${BackgroundFooter_iconRoot}/icon-x.png`,
    label: "X",
  },
];
const BackgroundFooter_ImageCta = ({
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
const BackgroundFooter_FooterBrandColumn = ({
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
  logoPosition: BackgroundFooter_FooterBackgroundLogoPosition;
  logoSrc: string;
  singleColumn: boolean;
  textColor: string;
  threeColumns: boolean;
}) => (
  <MjmlColumn direction="ltr" width={threeColumns ? "25%" : "45%"}>
    {(() => {
      if (logoBottom) {
        return null;
      }
      return (
        <FooterLogo
          align={centered ? "center" : logoPosition}
          alt="Maizzle"
          href="https://example.com"
          src={logoSrc}
          width={centered ? "64px" : "55px"}
        />
      );
    })()}
    {(() => {
      if (singleColumn) {
        return (
          <FooterCopy
            align={centered ? "center" : logoPosition}
            color={textColor}
            padding="20px 0 0"
          >
            {address
              ? "emailcn · 155 Bdv Saint Germain · 75505 Paris"
              : BackgroundFooter_copy}
          </FooterCopy>
        );
      }
      return null;
    })()}
  </MjmlColumn>
);
const BackgroundFooter_FooterContent = ({
  backgroundColor,
  logoPosition,
  logoSrc,
  mutedTextColor,
  textColor,
  unsubscribeHref,
  variant,
}: {
  backgroundColor: string;
  logoPosition: BackgroundFooter_FooterBackgroundLogoPosition;
  logoSrc: string;
  mutedTextColor: string;
  textColor: string;
  unsubscribeHref: string;
  variant: BackgroundFooter_FooterWithBackgroundImageVariant;
}) => {
  const centered = variant.includes("centered");
  const threeColumns = variant.includes("3-column");
  const twoColumns = variant.includes("2-column");
  const address = variant === "top-image-address";
  const logoBottom = variant === "top-image-logo-bottom";
  const singleColumn = !(twoColumns || threeColumns);
  const brand = (
    <BackgroundFooter_FooterBrandColumn
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
        {(() => {
          if (centered) {
            return (
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
                  links={BackgroundFooter_quickLinks}
                  textColor={textColor}
                />
                <FooterSocials
                  align="center"
                  socials={BackgroundFooter_socials}
                />
              </MjmlColumn>
            );
          }
          return (
            <>
              {logoPosition === "left" ? brand : null}
              {(() => {
                if (twoColumns || threeColumns) {
                  return (
                    <MjmlColumn
                      direction="ltr"
                      width={threeColumns ? "25%" : "28%"}
                    >
                      <FooterVerticalMenu
                        heading="Quick links"
                        headingColor="#030712"
                        links={BackgroundFooter_quickLinks}
                        textColor={textColor}
                      />
                    </MjmlColumn>
                  );
                }
                return null;
              })()}
              {(() => {
                if (twoColumns || threeColumns) {
                  return (
                    <MjmlColumn
                      direction="ltr"
                      width={threeColumns ? "25%" : "28%"}
                    >
                      <FooterVerticalMenu
                        heading="Connect"
                        headingColor="#030712"
                        links={BackgroundFooter_connectLinks}
                        textColor={textColor}
                      />
                    </MjmlColumn>
                  );
                }
                return null;
              })()}
              {threeColumns ? (
                <MjmlColumn direction="ltr" width="25%">
                  <FooterVerticalMenu
                    heading="Legal"
                    headingColor="#030712"
                    links={BackgroundFooter_legalLinks}
                    textColor={textColor}
                  />
                </MjmlColumn>
              ) : null}
              {logoPosition === "right" ? brand : null}
            </>
          );
        })()}
      </MjmlSection>
      <MjmlSection backgroundColor={backgroundColor} padding="0 24px 24px">
        <MjmlColumn>
          {centered ? null : (
            <FooterSocials socials={BackgroundFooter_socials} />
          )}
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
const BackgroundFooter_FooterWithBackgroundImageSection = ({
  variant = "bottom-image-content",
  logoPosition = "left",
  bottomImageSrc = `${BackgroundFooter_iconRoot}/footers/bg-image-1.jpg`,
  topImageSrc = `${BackgroundFooter_iconRoot}/footers/bg-image-2.jpg`,
  logoSrc = `${BackgroundFooter_iconRoot}/maizzle-insignia.png`,
  backgroundColor = "#fffffe",
  primaryColor = "#4f46e5",
  textColor = "#6b7280",
  mutedTextColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<BackgroundFooter_FooterWithBackgroundImageProps, "theme">) => {
  const topImage = variant.startsWith("top-image");
  const image = (
    <BackgroundFooter_ImageCta
      imageSrc={topImage ? topImageSrc : bottomImageSrc}
      primaryColor={primaryColor}
    />
  );
  const content = (
    <BackgroundFooter_FooterContent
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
const BackgroundFooter_FooterWithBackgroundImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: BackgroundFooter_FooterWithBackgroundImageProps) => (
  <FooterEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Footer with background image"
    theme={theme}
  >
    <BackgroundFooter_FooterWithBackgroundImageSection {...props} />
  </FooterEmailShell>
);
BackgroundFooter_FooterWithBackgroundImage.PreviewProps = {
  logoPosition: "left",
  theme: defaultTheme,
  variant: "bottom-image-content",
} satisfies BackgroundFooter_FooterWithBackgroundImageProps;
const __BackgroundFooter = BackgroundFooter_FooterWithBackgroundImage;
type LocationsFooter_FooterWithCompanyLocationsVariant = "stacked" | "grid";
interface LocationsFooter_CompanyLocation {
  address: string;
  name: string;
}
interface LocationsFooter_FooterWithCompanyLocationsProps {
  theme?: EmailThemeTokens;
  variant?: LocationsFooter_FooterWithCompanyLocationsVariant;
  locations?: LocationsFooter_CompanyLocation[];
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  strongTextColor?: string;
  subduedTextColor?: string;
  mutedTextColor?: string;
  unsubscribeHref?: string;
}
const LocationsFooter_stackedLocations: LocationsFooter_CompanyLocation[] = [
  {
    address: "Gas Company Tower\n555 W 5th St, Los Angeles, CA 90013",
    name: "Downtown Los Angeles, CA",
  },
  {
    address: "One World Trade Center\n285 Fulton St, New York, NY 10007",
    name: "Downtown New York, NY",
  },
  {
    address:
      "Willis Tower (formerly Sears Tower)\n233 S Wacker Dr, Chicago, IL 60606",
    name: "Downtown Chicago, IL",
  },
];
const LocationsFooter_gridLocations: LocationsFooter_CompanyLocation[] = [
  ...LocationsFooter_stackedLocations,
  {
    address: "Salesforce Tower\n415 Mission St, San Francisco, CA 94105",
    name: "Downtown San Francisco, CA",
  },
];
const LocationsFooter_menu = [
  { href: "https://example.com/about", label: "About us" },
  { href: "https://example.com/shop", label: "Shop" },
  { href: "https://example.com/faq", label: "FAQs" },
  { href: "https://example.com/contact", label: "Contact us" },
];
const LocationsFooter_iconRoot = "https://emailcn.vercel.app/api/email-assets";
const LocationsFooter_socials = [
  {
    href: "https://facebook.com",
    iconSrc: `${LocationsFooter_iconRoot}/icon-facebook.png`,
    label: "Facebook",
  },
  {
    href: "https://github.com",
    iconSrc: `${LocationsFooter_iconRoot}/icon-github.png`,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com",
    iconSrc: `${LocationsFooter_iconRoot}/icon-linkedin.png`,
    label: "LinkedIn",
  },
  {
    href: "https://youtube.com",
    iconSrc: `${LocationsFooter_iconRoot}/icon-youtube.png`,
    label: "YouTube",
  },
  {
    href: "https://x.com",
    iconSrc: `${LocationsFooter_iconRoot}/icon-x.png`,
    label: "X",
  },
];
const LocationsFooter_FooterWithCompanyLocationsSection = ({
  variant = "stacked",
  locations,
  logoSrc = `${LocationsFooter_iconRoot}/maizzle-insignia.png`,
  logoAlt = "Maizzle",
  logoHref = "https://example.com",
  backgroundColor = "#fffffe",
  dividerColor = "#d1d5db",
  textColor = "#6b7280",
  strongTextColor = "#030712",
  subduedTextColor = "#9ca3af",
  mutedTextColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<LocationsFooter_FooterWithCompanyLocationsProps, "theme">) => {
  const items =
    locations ??
    (variant === "grid"
      ? LocationsFooter_gridLocations
      : LocationsFooter_stackedLocations);
  return (
    <>
      <MjmlSection backgroundColor={backgroundColor} padding="44px 24px 12px">
        <MjmlColumn>
          <FooterLogo
            align="center"
            alt={logoAlt}
            href={logoHref}
            padding="0 0 20px"
            src={logoSrc}
            width="64px"
          />
          <FooterMenu
            align="center"
            links={LocationsFooter_menu}
            textColor={textColor}
          />
          <MjmlDivider borderColor={dividerColor} padding="20px 0" />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection backgroundColor={backgroundColor} padding="0 24px 20px">
        {items.map((location) => (
          <MjmlColumn
            key={location.name}
            padding="8px 12px"
            width={variant === "grid" ? "50%" : "100%"}
          >
            <FooterCopy color={strongTextColor} fontWeight="600">
              {location.name}
            </FooterCopy>
            <FooterCopy color={subduedTextColor} padding="6px 0 0">
              {location.address}
            </FooterCopy>
          </MjmlColumn>
        ))}
      </MjmlSection>
      <MjmlSection backgroundColor={backgroundColor} padding="0 24px 24px">
        <MjmlColumn>
          <FooterSocials align="center" socials={LocationsFooter_socials} />
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
};
const LocationsFooter_FooterWithCompanyLocations = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: LocationsFooter_FooterWithCompanyLocationsProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <LocationsFooter_FooterWithCompanyLocationsSection {...props} />
  </FooterEmailShell>
);
LocationsFooter_FooterWithCompanyLocations.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked",
} satisfies LocationsFooter_FooterWithCompanyLocationsProps;
const __LocationsFooter = LocationsFooter_FooterWithCompanyLocations;
interface LegalFooter_LegalFooterLink {
  href: string;
  label: string;
}
interface LegalFooter_LegalFooterSocial extends LegalFooter_LegalFooterLink {
  iconSrc: string;
}
interface LegalFooter_FooterWithLegalTextProps {
  theme?: EmailThemeTokens;
  legalText?: string;
  links?: LegalFooter_LegalFooterLink[];
  socials?: LegalFooter_LegalFooterSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  copyrightColor?: string;
  mutedTextColor?: string;
}
const LegalFooter_iconRoot = "https://emailcn.vercel.app/api/email-assets";
const LegalFooter_defaults = {
  backgroundColor: "#fffffe",
  copyrightColor: "#9ca3af",
  dividerColor: "#d1d5db",
  legalText:
    "The information provided in this email is for general informational purposes only. It is not intended as professional advice and should not be considered as a substitute for consulting with qualified professionals. The author/publisher makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the information contained herein. Any reliance you place on such information is strictly at your own risk.\n\nIn no event will the author/publisher be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this information.\n\nThrough this email, you are able to link to other websites that are not under the control of the author/publisher. The author/publisher has no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.",
  links: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
  mutedTextColor: "#d1d5db",
  pageBackgroundColor: "#f1f5f9",
  socials: [
    {
      href: "https://facebook.com",
      iconSrc: `${LegalFooter_iconRoot}/icon-facebook.png`,
      label: "Facebook",
    },
    {
      href: "https://github.com",
      iconSrc: `${LegalFooter_iconRoot}/icon-github.png`,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      iconSrc: `${LegalFooter_iconRoot}/icon-linkedin.png`,
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      iconSrc: `${LegalFooter_iconRoot}/icon-youtube.png`,
      label: "YouTube",
    },
    {
      href: "https://x.com",
      iconSrc: `${LegalFooter_iconRoot}/icon-x.png`,
      label: "X",
    },
  ],
  textColor: "#6b7280",
  unsubscribeHref: "https://example.com/unsub",
};
type LegalFooter_SectionProps = Omit<
  LegalFooter_FooterWithLegalTextProps,
  "theme"
>;
const LegalFooter_FooterWithLegalTextSection = (
  props: LegalFooter_SectionProps
) => {
  const resolved = { ...LegalFooter_defaults, ...props };
  return (
    <MjmlSection
      backgroundColor={resolved.backgroundColor}
      padding="44px 24px 24px"
    >
      <MjmlColumn>
        <MjmlDivider borderColor={resolved.dividerColor} padding="0 0 28px" />
        <FooterMenu links={resolved.links} textColor={resolved.textColor} />
        <FooterSocials socials={resolved.socials} />
        <MjmlDivider borderColor={resolved.dividerColor} padding="24px 0" />
        {resolved.legalText.split("\n\n").map((paragraph) => (
          <FooterCopy
            color={resolved.textColor}
            fontSize="12px"
            key={paragraph}
            lineHeight="18px"
            padding="0 0 14px"
          >
            {paragraph}
          </FooterCopy>
        ))}
        <FooterLegal
          copyright="© 2026 emailcn. All rights reserved."
          mutedTextColor={resolved.copyrightColor || resolved.mutedTextColor}
          unsubscribeHref={resolved.unsubscribeHref}
        />
      </MjmlColumn>
    </MjmlSection>
  );
};
const LegalFooter_FooterWithLegalText = ({
  pageBackgroundColor = LegalFooter_defaults.pageBackgroundColor,
  theme = defaultTheme,
  ...props
}: LegalFooter_FooterWithLegalTextProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <LegalFooter_FooterWithLegalTextSection {...props} />
  </FooterEmailShell>
);
LegalFooter_FooterWithLegalText.PreviewProps = {
  theme: defaultTheme,
} satisfies LegalFooter_FooterWithLegalTextProps;
const __LegalFooter = LegalFooter_FooterWithLegalText;
type AddressFooter_FooterWithSocialIconsAndAddressVariant =
  | "left-logo"
  | "right-logo"
  | "centered";
interface AddressFooter_FooterAddressSocial {
  href: string;
  iconSrc: string;
  label: string;
}
interface AddressFooter_FooterWithSocialIconsAndAddressProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  socials?: AddressFooter_FooterAddressSocial[];
  address?: string;
  legalText?: string;
  centeredLegalText?: string;
  title?: string;
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: AddressFooter_FooterWithSocialIconsAndAddressVariant;
}
const AddressFooter_iconRoot = "https://emailcn.vercel.app/api/email-assets";
const AddressFooter_defaults = {
  address: "© 2026 emailcn\nemailcn | 155 Bdv Saint Germain | 75505 Paris",
  backgroundColor: "#fffffe",
  centeredLegalText: "You’re receiving this because you subscribed to updates.",
  legalText: "We’re sending you this because you subscribed.",
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: `${AddressFooter_iconRoot}/maizzle-insignia.png`,
  mutedTextColor: "#d1d5db",
  pageBackgroundColor: "#f1f5f9",
  socials: [
    {
      href: "https://facebook.com",
      iconSrc: `${AddressFooter_iconRoot}/icon-facebook.png`,
      label: "Facebook",
    },
    {
      href: "https://github.com",
      iconSrc: `${AddressFooter_iconRoot}/icon-github.png`,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      iconSrc: `${AddressFooter_iconRoot}/icon-linkedin.png`,
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      iconSrc: `${AddressFooter_iconRoot}/icon-youtube.png`,
      label: "YouTube",
    },
    {
      href: "https://x.com",
      iconSrc: `${AddressFooter_iconRoot}/icon-x.png`,
      label: "X",
    },
  ],
  textColor: "#6b7280",
  title: "Follow us",
  unsubscribeHref: "https://example.com/unsub",
};
type AddressFooter_SectionProps = Omit<
  AddressFooter_FooterWithSocialIconsAndAddressProps,
  "theme"
>;
const AddressFooter_FooterWithSocialIconsAndAddressSection = (
  props: AddressFooter_SectionProps
) => {
  const resolved = { ...AddressFooter_defaults, ...props };
  const centered = resolved.variant === "centered";
  let logoAlign: "center" | "left" | "right" = "left";
  if (centered) {
    logoAlign = "center";
  } else if (resolved.variant === "right-logo") {
    logoAlign = "right";
  }
  const brand = (
    <MjmlColumn direction="ltr" width={centered ? "100%" : "25%"}>
      <FooterLogo
        align={logoAlign}
        alt={resolved.logoAlt}
        href={resolved.logoHref}
        src={resolved.logoSrc}
        width="55px"
      />
    </MjmlColumn>
  );
  const content = (
    <MjmlColumn direction="ltr" width={centered ? "100%" : "75%"}>
      <FooterCopy
        align={centered ? "center" : "left"}
        color={resolved.textColor}
        fontSize="16px"
        fontWeight="600"
      >
        {resolved.title}
      </FooterCopy>
      <FooterSocials
        align={centered ? "center" : "left"}
        socials={resolved.socials}
      />
      <FooterCopy
        align={centered ? "center" : "left"}
        color={resolved.textColor}
        padding="20px 0 0"
      >
        {resolved.address}
      </FooterCopy>
      <FooterLegal
        align={centered ? "center" : "left"}
        copyright={centered ? resolved.centeredLegalText : resolved.legalText}
        mutedTextColor={resolved.mutedTextColor}
        unsubscribeHref={resolved.unsubscribeHref}
      />
    </MjmlColumn>
  );
  return (
    <MjmlSection
      backgroundColor={resolved.backgroundColor}
      padding="44px 24px 24px"
    >
      {centered || resolved.variant !== "right-logo" ? brand : content}
      {centered || resolved.variant !== "right-logo" ? content : brand}
    </MjmlSection>
  );
};
const AddressFooter_FooterWithSocialIconsAndAddress = ({
  pageBackgroundColor = AddressFooter_defaults.pageBackgroundColor,
  theme = defaultTheme,
  ...props
}: AddressFooter_FooterWithSocialIconsAndAddressProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <AddressFooter_FooterWithSocialIconsAndAddressSection {...props} />
  </FooterEmailShell>
);
AddressFooter_FooterWithSocialIconsAndAddress.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies AddressFooter_FooterWithSocialIconsAndAddressProps;
const __AddressFooter = AddressFooter_FooterWithSocialIconsAndAddress;
type SimpleSocialFooter_SimpleFooterWithSocialIconsVariant =
  | "left-aligned"
  | "centered"
  | "right-aligned";
interface SimpleSocialFooter_SimpleFooterSocial {
  href: string;
  iconSrc: string;
  label: string;
}
interface SimpleSocialFooter_SimpleFooterWithSocialIconsProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  socials?: SimpleSocialFooter_SimpleFooterSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  mutedTextColor?: string;
  variant?: SimpleSocialFooter_SimpleFooterWithSocialIconsVariant;
}
const SimpleSocialFooter_defaults = {
  backgroundColor: "#fffffe",
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  mutedTextColor: "#d1d5db",
  pageBackgroundColor: "#f1f5f9",
  socials: [
    {
      href: "https://facebook.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-facebook.png",
      label: "Facebook",
    },
    {
      href: "https://github.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-github.png",
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-linkedin.png",
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-youtube.png",
      label: "YouTube",
    },
    {
      href: "https://x.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-x.png",
      label: "X",
    },
  ],
  unsubscribeHref: "https://example.com/unsub",
};
type SimpleSocialFooter_SectionProps = Omit<
  SimpleSocialFooter_SimpleFooterWithSocialIconsProps,
  "theme"
>;
const SimpleSocialFooter_SimpleFooterWithSocialIconsSection = (
  props: SimpleSocialFooter_SectionProps
) => {
  const resolved = { ...SimpleSocialFooter_defaults, ...props };
  let align: "center" | "left" | "right" = "left";
  if (resolved.variant === "centered") {
    align = "center";
  } else if (resolved.variant === "right-aligned") {
    align = "right";
  }
  return (
    <MjmlSection
      backgroundColor={resolved.backgroundColor}
      padding="44px 24px 24px"
    >
      <MjmlColumn>
        <FooterLogo
          align={align}
          alt={resolved.logoAlt}
          href={resolved.logoHref}
          src={resolved.logoSrc}
          width="64px"
        />
        <FooterSocials align={align} socials={resolved.socials} />
        <FooterLegal
          align={align}
          copyright="© 2026 emailcn. All rights reserved."
          mutedTextColor={resolved.mutedTextColor}
          unsubscribeHref={resolved.unsubscribeHref}
        />
      </MjmlColumn>
    </MjmlSection>
  );
};
const SimpleSocialFooter_SimpleFooterWithSocialIcons = ({
  pageBackgroundColor = SimpleSocialFooter_defaults.pageBackgroundColor,
  theme = defaultTheme,
  ...props
}: SimpleSocialFooter_SimpleFooterWithSocialIconsProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <SimpleSocialFooter_SimpleFooterWithSocialIconsSection {...props} />
  </FooterEmailShell>
);
SimpleSocialFooter_SimpleFooterWithSocialIcons.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies SimpleSocialFooter_SimpleFooterWithSocialIconsProps;
const __SimpleSocialFooter = SimpleSocialFooter_SimpleFooterWithSocialIcons;
export interface FooterBrand {
  logo: {
    src: string;
    alt?: string;
  };
  href?: string;
}
export interface FooterLink {
  label: string;
  href: string;
}
export interface FooterMenu {
  heading?: string;
  links: FooterLink[];
}
export interface FooterSocial extends FooterLink {
  iconSrc: string;
}
export interface FooterLegal {
  copyright?: string;
  text?: string;
  unsubscribeHref?: string;
  preferencesHref?: string;
}
export interface FooterLocation {
  name: string;
  address: string;
}
export interface UtilityFooterProps {
  theme?: Parameters<typeof __SimpleSocialFooter>[0]["theme"];
  brand?: FooterBrand;
  socials?: FooterSocial[];
  legal?: FooterLegal;
  content?: "socials" | "address" | "legal" | "locations" | "app-stores";
  locations?: FooterLocation[];
  address?: string;
  title?: string;
  alignment?: "left" | "center" | "right";
  columns?: 1 | 2;
  backgroundImage?: {
    src: string;
    alt?: string;
    position?: "top" | "bottom";
  };
}
const footerBrandValues = (brand: FooterBrand | undefined) => {
  const { href, logo } = brand ?? {};
  return {
    logoAlt: logo?.alt,
    logoHref: href,
    logoSrc: logo?.src,
  };
};
const footerLegalValues = (legal: FooterLegal | undefined) => ({
  copyright: legal?.copyright,
  preferencesHref: legal?.preferencesHref,
  text: legal?.text,
  unsubscribeHref: legal?.unsubscribeHref,
});
const utilityAppStoreVariant = (
  title: string | undefined,
  columns: NonNullable<UtilityFooterProps["columns"]>
): Parameters<typeof __AppStoreFooter>[0]["variant"] => {
  if (title) {
    return "with-title";
  }
  if (columns === 2) {
    return "two-columns";
  }
  return "centered";
};
const utilityAddressVariant = (
  alignment: NonNullable<UtilityFooterProps["alignment"]>
): Parameters<typeof __AddressFooter>[0]["variant"] => {
  if (alignment === "center") {
    return "centered";
  }
  if (alignment === "right") {
    return "right-logo";
  }
  return "left-logo";
};
const utilitySocialVariant = (
  alignment: NonNullable<UtilityFooterProps["alignment"]>
): Parameters<typeof __SimpleSocialFooter>[0]["variant"] => {
  if (alignment === "left") {
    return "left-aligned";
  }
  if (alignment === "right") {
    return "right-aligned";
  }
  return "centered";
};
export const UtilityFooter = ({
  theme,
  brand,
  socials,
  legal,
  content = "socials",
  locations,
  address,
  title,
  alignment = "center",
  columns = 1,
  backgroundImage,
}: UtilityFooterProps) => {
  const footerBrand = footerBrandValues(brand);
  const footerLegal = footerLegalValues(legal);
  if (backgroundImage) {
    return (
      <__BackgroundFooter
        bottomImageSrc={
          backgroundImage.position === "bottom"
            ? backgroundImage.src
            : undefined
        }
        logoSrc={footerBrand.logoSrc}
        theme={theme}
        topImageSrc={
          backgroundImage.position === "bottom"
            ? undefined
            : backgroundImage.src
        }
        unsubscribeHref={footerLegal.unsubscribeHref}
        variant={
          backgroundImage.position === "bottom"
            ? "bottom-image-content"
            : "top-image-content"
        }
      />
    );
  }
  if (content === "locations") {
    return (
      <__LocationsFooter
        locations={locations}
        logoAlt={footerBrand.logoAlt}
        logoHref={footerBrand.logoHref}
        logoSrc={footerBrand.logoSrc}
        theme={theme}
        unsubscribeHref={footerLegal.unsubscribeHref}
        variant={columns === 2 ? "grid" : "stacked"}
      />
    );
  }
  if (content === "app-stores") {
    return (
      <__AppStoreFooter
        theme={theme}
        title={title}
        unsubscribeHref={footerLegal.unsubscribeHref}
        variant={utilityAppStoreVariant(title, columns)}
      />
    );
  }
  if (content === "legal") {
    return (
      <__LegalFooter
        legalText={footerLegal.text}
        socials={socials}
        theme={theme}
        unsubscribeHref={footerLegal.unsubscribeHref}
      />
    );
  }
  if (content === "address") {
    return (
      <__AddressFooter
        address={address}
        legalText={footerLegal.text}
        logoAlt={footerBrand.logoAlt}
        logoHref={footerBrand.logoHref}
        logoSrc={footerBrand.logoSrc}
        socials={socials}
        theme={theme}
        title={title}
        unsubscribeHref={footerLegal.unsubscribeHref}
        variant={utilityAddressVariant(alignment)}
      />
    );
  }
  return (
    <__SimpleSocialFooter
      logoAlt={footerBrand.logoAlt}
      logoHref={footerBrand.logoHref}
      logoSrc={footerBrand.logoSrc}
      socials={socials}
      theme={theme}
      unsubscribeHref={footerLegal.unsubscribeHref}
      variant={utilitySocialVariant(alignment)}
    />
  );
};
UtilityFooter.PreviewProps = {
  alignment: "center",
  columns: 1,
  content: "socials",
} satisfies UtilityFooterProps;
