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

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { defaultTheme } from "@/registry/themes/default";

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
  theme: EmailTheme;
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

type ContentCtaFooter_FooterWithContentAndCtaVariant =
  | "centered"
  | "left-aligned"
  | "right-aligned";

interface ContentCtaFooter_FooterWithContentAndCtaProps {
  theme?: EmailTheme;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  logoSrc?: string;
  logoAlt?: string;
  updatePreferencesHref?: string;
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  variant?: ContentCtaFooter_FooterWithContentAndCtaVariant;
}

const ContentCtaFooter_defaults = {
  backgroundColor: "#fffffe",
  buttonColor: "#4f46e5",
  buttonTextColor: "#fffffe",
  ctaHref: "https://example.com",
  ctaLabel: "Visit website",
  heading: "Start sending professionally\ndesigned emails today",
  headingColor: "#030712",
  logoAlt: "Maizzle",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  mutedTextColor: "#d1d5db",
  pageBackgroundColor: "#f1f5f9",
  subtext:
    "Lorem ipsum dolor sit amet consectetur. Eget aenean sed sit sed in sapien. Vel auctor arcu nulla consectetur sed.",
  textColor: "#6b7280",
  unsubscribeHref: "https://example.com/unsub",
  updatePreferencesHref: "https://example.com/update",
};

type ContentCtaFooter_SectionProps = Omit<
  ContentCtaFooter_FooterWithContentAndCtaProps,
  "theme"
>;

const ContentCtaFooter_FooterWithContentAndCtaSection = (
  props: ContentCtaFooter_SectionProps
) => {
  const resolved = { ...ContentCtaFooter_defaults, ...props };
  let align: "center" | "left" | "right" = "center";
  if (resolved.variant === "left-aligned") {
    align = "left";
  } else if (resolved.variant === "right-aligned") {
    align = "right";
  }
  return (
    <MjmlSection
      backgroundColor={resolved.backgroundColor}
      padding="44px 24px 24px"
    >
      <MjmlColumn>
        <FooterCopy
          align={align}
          color={resolved.headingColor}
          fontSize="20px"
          fontWeight="600"
          lineHeight="28px"
        >
          {resolved.heading}
        </FooterCopy>
        <FooterCopy
          align={align}
          color={resolved.textColor}
          fontSize="16px"
          lineHeight="24px"
          padding="24px 0 0"
        >
          {resolved.subtext}
        </FooterCopy>
        <FooterCta
          align={align}
          backgroundColor={resolved.buttonColor}
          color={resolved.buttonTextColor}
          href={resolved.ctaHref}
          label={resolved.ctaLabel}
          padding="28px 0"
        />
        <FooterLogo
          align={align}
          alt={resolved.logoAlt}
          href="https://example.com"
          src={resolved.logoSrc}
          width="48px"
        />
        <FooterLegal
          align={align}
          copyright="© 2026 emailcn. Update preferences at any time."
          mutedTextColor={resolved.mutedTextColor}
          unsubscribeHref={resolved.unsubscribeHref}
        />
      </MjmlColumn>
    </MjmlSection>
  );
};

const ContentCtaFooter_FooterWithContentAndCta = ({
  pageBackgroundColor = ContentCtaFooter_defaults.pageBackgroundColor,
  theme = defaultTheme,
  ...props
}: ContentCtaFooter_FooterWithContentAndCtaProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <ContentCtaFooter_FooterWithContentAndCtaSection {...props} />
  </FooterEmailShell>
);

ContentCtaFooter_FooterWithContentAndCta.PreviewProps = {
  theme: defaultTheme,
  variant: "centered",
} satisfies ContentCtaFooter_FooterWithContentAndCtaProps;

const __ContentCtaFooter = ContentCtaFooter_FooterWithContentAndCta;

interface LargeTitleFooter_FooterWithLargeTitleAndButtonsProps {
  theme?: EmailTheme;
  title?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  primaryColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  dividerColor?: string;
  unsubscribeHref?: string;
}

const LargeTitleFooter_FooterWithLargeTitleAndButtonsSection = ({
  title = "Start sending professionally\ndesigned emails today",
  backgroundColor = "#fffffe",
  primaryColor = "#4f46e5",
  textColor = "#6b7280",
  mutedTextColor = "#d1d5db",
  dividerColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<LargeTitleFooter_FooterWithLargeTitleAndButtonsProps, "theme">) => (
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

const LargeTitleFooter_FooterWithLargeTitleAndButtons = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: LargeTitleFooter_FooterWithLargeTitleAndButtonsProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <LargeTitleFooter_FooterWithLargeTitleAndButtonsSection {...props} />
  </FooterEmailShell>
);

LargeTitleFooter_FooterWithLargeTitleAndButtons.PreviewProps = {
  theme: defaultTheme,
} satisfies LargeTitleFooter_FooterWithLargeTitleAndButtonsProps;

const __LargeTitleFooter = LargeTitleFooter_FooterWithLargeTitleAndButtons;

interface FullWidthCtaFooter_FooterWithMenuAndFullWidthCtaProps {
  theme?: EmailTheme;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  subduedTextColor?: string;
  mutedTextColor?: string;
  ctaHref?: string;
  ctaText?: string;
  unsubscribeHref?: string;
}

const FullWidthCtaFooter_links = [
  { href: "https://example.com/about", label: "About us" },
  { href: "https://example.com/shop", label: "Shop" },
  { href: "https://example.com/faq", label: "FAQs" },
  { href: "https://example.com/contact", label: "Contact us" },
];

const FullWidthCtaFooter_socials = [
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
];

const FullWidthCtaFooter_FooterWithMenuAndFullWidthCtaSection = ({
  backgroundColor = "#fffffe",
  dividerColor = "#d1d5db",
  textColor = "#6b7280",
  subduedTextColor = "#9ca3af",
  mutedTextColor = "#d1d5db",
  ctaHref = "https://example.com/contact",
  ctaText = "Got questions? We’re here to help.",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<FullWidthCtaFooter_FooterWithMenuAndFullWidthCtaProps, "theme">) => (
  <MjmlSection backgroundColor={backgroundColor} padding="44px 24px 24px">
    <MjmlColumn>
      <FooterMenu links={FullWidthCtaFooter_links} textColor={textColor} />
      <MjmlDivider borderColor={dividerColor} padding="20px 0" />
      <FooterCopy color={textColor} fontSize="16px">
        {ctaText}
      </FooterCopy>
      <FooterCta
        backgroundColor={textColor}
        color={backgroundColor}
        href={ctaHref}
        label="Contact us"
      />
      <MjmlDivider borderColor={dividerColor} padding="20px 0" />
      <FooterSocials socials={FullWidthCtaFooter_socials} />
      <FooterLegal
        copyright="© 2026 emailcn. All rights reserved."
        mutedTextColor={mutedTextColor || subduedTextColor}
        unsubscribeHref={unsubscribeHref}
      />
    </MjmlColumn>
  </MjmlSection>
);

const FullWidthCtaFooter_FooterWithMenuAndFullWidthCta = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: FullWidthCtaFooter_FooterWithMenuAndFullWidthCtaProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <FullWidthCtaFooter_FooterWithMenuAndFullWidthCtaSection {...props} />
  </FooterEmailShell>
);

FullWidthCtaFooter_FooterWithMenuAndFullWidthCta.PreviewProps = {
  theme: defaultTheme,
} satisfies FullWidthCtaFooter_FooterWithMenuAndFullWidthCtaProps;

const __FullWidthCtaFooter = FullWidthCtaFooter_FooterWithMenuAndFullWidthCta;

type OverlapFooter_FooterWithOverlappedCtaVariant =
  | "content"
  | "2-column-menu"
  | "3-column-menu"
  | "centered-content"
  | "centered-menu"
  | "address"
  | "centered-socials";

type OverlapFooter_FooterOverlappedLogoPosition = "left" | "right";

interface OverlapFooter_FooterWithOverlappedCtaProps {
  theme?: EmailTheme;
  variant?: OverlapFooter_FooterWithOverlappedCtaVariant;
  logoPosition?: OverlapFooter_FooterOverlappedLogoPosition;
  backgroundImageSrc?: string;
  logoSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  primaryColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  unsubscribeHref?: string;
}

const OverlapFooter_copy =
  "Lorem ipsum dolor sit amet consectetur. Eget aenean sed sit sed in sapien. Vel auctor arcu nulla consectetur sed.";

const OverlapFooter_quickLinks = [
  { href: "https://example.com/about", label: "About us" },
  { href: "https://example.com/shop", label: "Shop" },
  { href: "https://example.com/faq", label: "FAQs" },
  { href: "https://example.com/contact", label: "Contact us" },
];

const OverlapFooter_connectLinks = [
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://github.com", label: "GitHub" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://youtube.com", label: "YouTube" },
];

const OverlapFooter_legalLinks = [
  { href: "https://example.com/privacy", label: "Privacy Policy" },
  { href: "https://example.com/terms", label: "Terms of Service" },
  { href: "https://example.com/returns", label: "Returns" },
];

const OverlapFooter_iconRoot = "https://emailcn.vercel.app/api/email-assets";

const OverlapFooter_socials = [
  {
    href: "https://facebook.com",
    iconSrc: `${OverlapFooter_iconRoot}/icon-facebook.png`,
    label: "Facebook",
  },
  {
    href: "https://github.com",
    iconSrc: `${OverlapFooter_iconRoot}/icon-github.png`,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com",
    iconSrc: `${OverlapFooter_iconRoot}/icon-linkedin.png`,
    label: "LinkedIn",
  },
  {
    href: "https://youtube.com",
    iconSrc: `${OverlapFooter_iconRoot}/icon-youtube.png`,
    label: "YouTube",
  },
  {
    href: "https://x.com",
    iconSrc: `${OverlapFooter_iconRoot}/icon-x.png`,
    label: "X",
  },
];

const OverlapFooter_FooterWithOverlappedCtaSection = (
  props: Omit<OverlapFooter_FooterWithOverlappedCtaProps, "theme">
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
    backgroundImageSrc: `${OverlapFooter_iconRoot}/footers/bg-image-3.jpg`,
    logoPosition: "left" as OverlapFooter_FooterOverlappedLogoPosition,
    logoSrc: `${OverlapFooter_iconRoot}/maizzle-insignia.png`,
    mutedTextColor: "#d1d5db",
    primaryColor: "#4f46e5",
    textColor: "#6b7280",
    unsubscribeHref: "https://example.com/unsub",
    variant: "content" as OverlapFooter_FooterWithOverlappedCtaVariant,
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
      {(() => {
        if (menuColumns === 0 && variant !== "centered-menu") {
          return (
            <FooterCopy
              align={centered ? "center" : logoPosition}
              color={textColor}
              padding="20px 0 0"
            >
              {variant === "address"
                ? "emailcn · 155 Bdv Saint Germain · 75505 Paris"
                : OverlapFooter_copy}
            </FooterCopy>
          );
        }
        return null;
      })()}
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
        {(() => {
          if (centered) {
            return (
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
                    links={OverlapFooter_quickLinks}
                    textColor={textColor}
                  />
                ) : null}
                <FooterSocials align="center" socials={OverlapFooter_socials} />
              </MjmlColumn>
            );
          }
          return (
            <>
              {logoPosition === "left" ? brand : null}
              {(() => {
                if (menuColumns >= 2) {
                  return (
                    <MjmlColumn
                      direction="ltr"
                      width={menuColumns === 3 ? "25%" : "30%"}
                    >
                      <FooterVerticalMenu
                        heading="Quick links"
                        headingColor="#030712"
                        links={OverlapFooter_quickLinks}
                        textColor={textColor}
                      />
                    </MjmlColumn>
                  );
                }
                return null;
              })()}
              {(() => {
                if (menuColumns >= 2) {
                  return (
                    <MjmlColumn
                      direction="ltr"
                      width={menuColumns === 3 ? "25%" : "30%"}
                    >
                      <FooterVerticalMenu
                        heading="Connect"
                        headingColor="#030712"
                        links={OverlapFooter_connectLinks}
                        textColor={textColor}
                      />
                    </MjmlColumn>
                  );
                }
                return null;
              })()}
              {menuColumns === 3 ? (
                <MjmlColumn direction="ltr" width="25%">
                  <FooterVerticalMenu
                    heading="Legal"
                    headingColor="#030712"
                    links={OverlapFooter_legalLinks}
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
          {centered ? null : <FooterSocials socials={OverlapFooter_socials} />}
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

const OverlapFooter_FooterWithOverlappedCta = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: OverlapFooter_FooterWithOverlappedCtaProps) => (
  <FooterEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Footer with overlapped CTA"
    theme={theme}
  >
    <OverlapFooter_FooterWithOverlappedCtaSection {...props} />
  </FooterEmailShell>
);

OverlapFooter_FooterWithOverlappedCta.PreviewProps = {
  logoPosition: "left",
  theme: defaultTheme,
  variant: "content",
} satisfies OverlapFooter_FooterWithOverlappedCtaProps;

const __OverlapFooter = OverlapFooter_FooterWithOverlappedCta;

export interface FooterBrand {
  logo: {
    src: string;
    alt?: string;
  };
  href?: string;
}

export interface FooterLegal {
  copyright?: string;
  text?: string;
  unsubscribeHref?: string;
  preferencesHref?: string;
}

export interface PromotionFooterProps {
  theme?: Parameters<typeof __ContentCtaFooter>[0]["theme"];
  brand?: FooterBrand;
  heading?: string;
  description?: string;
  actions?: {
    href: string;
    label: string;
  }[];
  legal?: FooterLegal;
  placement?: "inline" | "full-width" | "overlap" | "large-title";
  menuColumns?: 0 | 2 | 3;
  alignment?: "left" | "center" | "right";
  logoPosition?: "left" | "right";
  backgroundImage?: {
    src: string;
    alt?: string;
  };
  variant?:
    | Parameters<typeof __ContentCtaFooter>[0]["variant"]
    | Parameters<typeof __OverlapFooter>[0]["variant"];
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

const promotionActionValues = (
  action:
    | {
        href: string;
        label: string;
      }
    | undefined
) => ({
  href: action?.href,
  label: action?.label,
});

const promotionOverlapVariant = (
  menuColumns: NonNullable<PromotionFooterProps["menuColumns"]>,
  alignment: NonNullable<PromotionFooterProps["alignment"]>
): Parameters<typeof __OverlapFooter>[0]["variant"] => {
  if (menuColumns === 3) {
    return "3-column-menu";
  }
  if (menuColumns === 2) {
    return "2-column-menu";
  }
  if (alignment === "center") {
    return "centered-content";
  }
  return "content";
};

const promotionAlignmentVariant = (
  alignment: NonNullable<PromotionFooterProps["alignment"]>
): Parameters<typeof __ContentCtaFooter>[0]["variant"] => {
  if (alignment === "left") {
    return "left-aligned";
  }
  if (alignment === "right") {
    return "right-aligned";
  }
  return "centered";
};

const promotionFooterDefinedProps = <Props extends object>(props: Props) =>
  Object.fromEntries(
    Object.entries(props).filter(([, value]) => value !== undefined)
  ) as Partial<Props>;

export const PromotionFooter = ({
  theme,
  brand,
  heading,
  description,
  actions,
  legal,
  placement = "inline",
  menuColumns = 0,
  alignment = "center",
  logoPosition = "left",
  backgroundImage,
  variant: variantOverride,
}: PromotionFooterProps) => {
  const footerBrand = footerBrandValues(brand);
  const footerLegal = footerLegalValues(legal);
  const [firstAction] = actions ?? [];
  const action = promotionActionValues(firstAction);
  const backgroundImageSrc = backgroundImage?.src;
  if (placement === "overlap") {
    const variant = promotionOverlapVariant(menuColumns, alignment);
    return (
      <__OverlapFooter
        logoPosition={logoPosition}
        variant={
          (variantOverride ?? variant) as Parameters<
            typeof __OverlapFooter
          >[0]["variant"]
        }
        {...promotionFooterDefinedProps({
          backgroundImageSrc,
          logoSrc: footerBrand.logoSrc,
          theme,
          unsubscribeHref: footerLegal.unsubscribeHref,
        })}
      />
    );
  }
  if (placement === "full-width") {
    return (
      <__FullWidthCtaFooter
        {...promotionFooterDefinedProps({
          ctaHref: action.href,
          ctaText: action.label,
          theme,
          unsubscribeHref: footerLegal.unsubscribeHref,
        })}
      />
    );
  }
  if (placement === "large-title") {
    return (
      <__LargeTitleFooter
        {...promotionFooterDefinedProps({
          theme,
          title: heading,
          unsubscribeHref: footerLegal.unsubscribeHref,
        })}
      />
    );
  }
  return (
    <__ContentCtaFooter
      variant={
        (variantOverride ?? promotionAlignmentVariant(alignment)) as Parameters<
          typeof __ContentCtaFooter
        >[0]["variant"]
      }
      {...promotionFooterDefinedProps({
        ctaHref: action.href,
        ctaLabel: action.label,
        heading,
        logoAlt: footerBrand.logoAlt,
        logoSrc: footerBrand.logoSrc,
        subtext: description,
        theme,
        unsubscribeHref: footerLegal.unsubscribeHref,
        updatePreferencesHref: footerLegal.preferencesHref,
      })}
    />
  );
};

PromotionFooter.PreviewProps = {
  alignment: "center",
  logoPosition: "left",
  menuColumns: 0,
  placement: "inline",
} satisfies PromotionFooterProps;
