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
interface CenteredFooter_CenteredFooterLink {
  href: string;
  label: string;
}
interface CenteredFooter_CenteredFooterSocial extends CenteredFooter_CenteredFooterLink {
  iconSrc: string;
}
interface CenteredFooter_FooterCenteredWithMenuAndSocialsProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  links?: CenteredFooter_CenteredFooterLink[];
  socials?: CenteredFooter_CenteredFooterSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  mutedTextColor?: string;
}
const CenteredFooter_defaults = {
  backgroundColor: "#fffffe",
  links: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
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
  textColor: "#9ca3af",
  unsubscribeHref: "https://example.com/unsub",
};
type CenteredFooter_SectionProps = Omit<
  CenteredFooter_FooterCenteredWithMenuAndSocialsProps,
  "theme"
>;
const CenteredFooter_FooterCenteredWithMenuAndSocialsSection = (
  props: CenteredFooter_SectionProps
) => {
  const resolved = { ...CenteredFooter_defaults, ...props };
  return (
    <MjmlSection
      backgroundColor={resolved.backgroundColor}
      padding="44px 24px 24px"
    >
      <MjmlColumn>
        <FooterLogo
          align="center"
          alt={resolved.logoAlt}
          href={resolved.logoHref}
          padding="0 0 40px"
          src={resolved.logoSrc}
          width="55px"
        />
        <FooterMenu
          align="center"
          links={resolved.links}
          textColor={resolved.textColor}
        />
        <FooterSocials align="center" socials={resolved.socials} />
        <FooterLegal
          align="center"
          copyright="© 2026 emailcn. All rights reserved."
          mutedTextColor={resolved.mutedTextColor}
          unsubscribeHref={resolved.unsubscribeHref}
        />
      </MjmlColumn>
    </MjmlSection>
  );
};
const CenteredFooter_FooterCenteredWithMenuAndSocials = ({
  pageBackgroundColor = CenteredFooter_defaults.pageBackgroundColor,
  theme = defaultTheme,
  ...props
}: CenteredFooter_FooterCenteredWithMenuAndSocialsProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <CenteredFooter_FooterCenteredWithMenuAndSocialsSection {...props} />
  </FooterEmailShell>
);
CenteredFooter_FooterCenteredWithMenuAndSocials.PreviewProps = {
  theme: defaultTheme,
} satisfies CenteredFooter_FooterCenteredWithMenuAndSocialsProps;
const __CenteredFooter = CenteredFooter_FooterCenteredWithMenuAndSocials;
type DividerMenuFooter_FooterWith2ColumnMenuAndDividerVariant =
  | "left-logo"
  | "right-logo";
interface DividerMenuFooter_FooterWith2ColumnMenuAndDividerProps {
  theme?: EmailThemeTokens;
  variant?: DividerMenuFooter_FooterWith2ColumnMenuAndDividerVariant;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  headingColor?: string;
  legalColor?: string;
  unsubscribeHref?: string;
}
const DividerMenuFooter_quickLinks = [
  { href: "https://example.com/about", label: "About us" },
  { href: "https://example.com/shop", label: "Shop" },
  { href: "https://example.com/faq", label: "FAQs" },
  { href: "https://example.com/contact", label: "Contact us" },
];
const DividerMenuFooter_legalLinks = [
  { href: "https://example.com/privacy", label: "Privacy Policy" },
  { href: "https://example.com/terms", label: "Terms of Service" },
  { href: "https://example.com/returns", label: "Returns" },
];
const DividerMenuFooter_iconRoot =
  "https://emailcn.vercel.app/api/email-assets";
const DividerMenuFooter_socials = [
  {
    href: "https://facebook.com",
    iconSrc: `${DividerMenuFooter_iconRoot}/icon-facebook.png`,
    label: "Facebook",
  },
  {
    href: "https://github.com",
    iconSrc: `${DividerMenuFooter_iconRoot}/icon-github.png`,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com",
    iconSrc: `${DividerMenuFooter_iconRoot}/icon-linkedin.png`,
    label: "LinkedIn",
  },
  {
    href: "https://youtube.com",
    iconSrc: `${DividerMenuFooter_iconRoot}/icon-youtube.png`,
    label: "YouTube",
  },
  {
    href: "https://x.com",
    iconSrc: `${DividerMenuFooter_iconRoot}/icon-x.png`,
    label: "X",
  },
];
const DividerMenuFooter_FooterWith2ColumnMenuAndDividerSection = ({
  variant = "left-logo",
  logoSrc = `${DividerMenuFooter_iconRoot}/maizzle-insignia.png`,
  logoAlt = "Maizzle",
  logoHref = "https://example.com",
  backgroundColor = "#fffffe",
  dividerColor = "#d1d5db",
  textColor = "#6b7280",
  headingColor = "#030712",
  legalColor = "#9ca3af",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<DividerMenuFooter_FooterWith2ColumnMenuAndDividerProps, "theme">) => {
  const brand = (
    <MjmlColumn direction="ltr" width="34%">
      <FooterLogo
        align={variant === "right-logo" ? "right" : "left"}
        alt={logoAlt}
        href={logoHref}
        src={logoSrc}
        width="55px"
      />
    </MjmlColumn>
  );
  const menus = (
    <>
      <MjmlColumn direction="ltr" width="33%">
        <FooterVerticalMenu
          heading="Quick links"
          headingColor={headingColor}
          links={DividerMenuFooter_quickLinks}
          textColor={textColor}
        />
      </MjmlColumn>
      <MjmlColumn direction="ltr" width="33%">
        <FooterVerticalMenu
          heading="Legal"
          headingColor={headingColor}
          links={DividerMenuFooter_legalLinks}
          textColor={textColor}
        />
      </MjmlColumn>
    </>
  );
  return (
    <>
      <MjmlSection backgroundColor={backgroundColor} padding="44px 24px 8px">
        {variant === "right-logo" ? menus : brand}
        {variant === "right-logo" ? brand : menus}
      </MjmlSection>
      <MjmlSection backgroundColor={backgroundColor} padding="0 24px 24px">
        <MjmlColumn>
          <MjmlDivider borderColor={dividerColor} padding="16px 0 24px" />
          <FooterSocials socials={DividerMenuFooter_socials} />
          <FooterLegal
            copyright="© 2026 emailcn. All rights reserved."
            mutedTextColor={legalColor}
            unsubscribeHref={unsubscribeHref}
          />
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};
const DividerMenuFooter_FooterWith2ColumnMenuAndDivider = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: DividerMenuFooter_FooterWith2ColumnMenuAndDividerProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <DividerMenuFooter_FooterWith2ColumnMenuAndDividerSection {...props} />
  </FooterEmailShell>
);
DividerMenuFooter_FooterWith2ColumnMenuAndDivider.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies DividerMenuFooter_FooterWith2ColumnMenuAndDividerProps;
const __DividerMenuFooter = DividerMenuFooter_FooterWith2ColumnMenuAndDivider;
type TwoColumnFooter_FooterWith2ColumnMenuVariant = "left-logo" | "right-logo";
interface TwoColumnFooter_FooterWith2ColumnMenuLink {
  href: string;
  label: string;
}
interface TwoColumnFooter_FooterWith2ColumnMenuProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  quickLinks?: TwoColumnFooter_FooterWith2ColumnMenuLink[];
  connectLinks?: TwoColumnFooter_FooterWith2ColumnMenuLink[];
  copyright?: string;
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: TwoColumnFooter_FooterWith2ColumnMenuVariant;
}
const TwoColumnFooter_defaults = {
  backgroundColor: "#fffffe",
  connectLinks: [
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://github.com", label: "GitHub" },
    { href: "https://linkedin.com", label: "LinkedIn" },
    { href: "https://youtube.com", label: "YouTube" },
    { href: "https://instagram.com", label: "Instagram" },
  ],
  copyright: "© 2026 emailcn. No longer want to receive emails?",
  headingColor: "#030712",
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  mutedTextColor: "#9ca3af",
  pageBackgroundColor: "#f1f5f9",
  quickLinks: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
  textColor: "#6b7280",
  unsubscribeHref: "https://example.com/unsub",
};
type TwoColumnFooter_SectionProps = Omit<
  TwoColumnFooter_FooterWith2ColumnMenuProps,
  "theme"
>;
const TwoColumnFooter_FooterWith2ColumnMenuSection = (
  props: TwoColumnFooter_SectionProps
) => {
  const resolved = { ...TwoColumnFooter_defaults, ...props };
  const brand = (
    <MjmlColumn direction="ltr" width="40%">
      <FooterLogo
        align={resolved.variant === "right-logo" ? "right" : "left"}
        alt={resolved.logoAlt}
        href={resolved.logoHref}
        src={resolved.logoSrc}
        width="55px"
      />
    </MjmlColumn>
  );
  const menus = (
    <>
      <MjmlColumn direction="ltr" width="30%">
        <FooterVerticalMenu
          heading="Quick links"
          headingColor={resolved.headingColor}
          links={resolved.quickLinks}
          textColor={resolved.textColor}
        />
      </MjmlColumn>
      <MjmlColumn direction="ltr" width="30%">
        <FooterVerticalMenu
          heading="Connect"
          headingColor={resolved.headingColor}
          links={resolved.connectLinks}
          textColor={resolved.textColor}
        />
      </MjmlColumn>
    </>
  );
  return (
    <>
      <MjmlSection
        backgroundColor={resolved.backgroundColor}
        padding="44px 24px 16px"
      >
        {resolved.variant === "right-logo" ? menus : brand}
        {resolved.variant === "right-logo" ? brand : menus}
      </MjmlSection>
      <MjmlSection
        backgroundColor={resolved.backgroundColor}
        padding="0 24px 24px"
      >
        <MjmlColumn>
          <FooterLegal
            copyright={resolved.copyright}
            mutedTextColor={resolved.mutedTextColor}
            unsubscribeHref={resolved.unsubscribeHref}
          />
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};
const TwoColumnFooter_FooterWith2ColumnMenu = ({
  pageBackgroundColor = TwoColumnFooter_defaults.pageBackgroundColor,
  theme = defaultTheme,
  ...props
}: TwoColumnFooter_FooterWith2ColumnMenuProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <TwoColumnFooter_FooterWith2ColumnMenuSection {...props} />
  </FooterEmailShell>
);
TwoColumnFooter_FooterWith2ColumnMenu.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies TwoColumnFooter_FooterWith2ColumnMenuProps;
const __TwoColumnFooter = TwoColumnFooter_FooterWith2ColumnMenu;
type ThreeColumnFooter_FooterWith3ColMenuVariant = "left-logo" | "right-logo";
interface ThreeColumnFooter_FooterWith3ColMenuLink {
  href: string;
  label: string;
}
interface ThreeColumnFooter_FooterWith3ColMenuSocial extends ThreeColumnFooter_FooterWith3ColMenuLink {
  iconSrc: string;
}
interface ThreeColumnFooter_FooterWith3ColMenuProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  quickLinks?: ThreeColumnFooter_FooterWith3ColMenuLink[];
  connectLinks?: ThreeColumnFooter_FooterWith3ColMenuLink[];
  legalLinks?: ThreeColumnFooter_FooterWith3ColMenuLink[];
  socials?: ThreeColumnFooter_FooterWith3ColMenuSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: ThreeColumnFooter_FooterWith3ColMenuVariant;
}
const ThreeColumnFooter_iconRoot =
  "https://emailcn.vercel.app/api/email-assets";
const ThreeColumnFooter_defaults = {
  backgroundColor: "#fffffe",
  connectLinks: [
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://github.com", label: "GitHub" },
    { href: "https://linkedin.com", label: "LinkedIn" },
    { href: "https://youtube.com", label: "YouTube" },
    { href: "https://instagram.com", label: "Instagram" },
  ],
  headingColor: "#030712",
  legalLinks: [
    { href: "https://example.com/privacy", label: "Privacy Policy" },
    { href: "https://example.com/terms", label: "Terms of Service" },
    { href: "https://example.com/returns", label: "Returns" },
  ],
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: `${ThreeColumnFooter_iconRoot}/maizzle-insignia.png`,
  mutedTextColor: "#9ca3af",
  pageBackgroundColor: "#f1f5f9",
  quickLinks: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
  socials: [
    {
      href: "https://facebook.com",
      iconSrc: `${ThreeColumnFooter_iconRoot}/icon-facebook.png`,
      label: "Facebook",
    },
    {
      href: "https://github.com",
      iconSrc: `${ThreeColumnFooter_iconRoot}/icon-github.png`,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      iconSrc: `${ThreeColumnFooter_iconRoot}/icon-linkedin.png`,
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      iconSrc: `${ThreeColumnFooter_iconRoot}/icon-youtube.png`,
      label: "YouTube",
    },
    {
      href: "https://x.com",
      iconSrc: `${ThreeColumnFooter_iconRoot}/icon-x.png`,
      label: "X",
    },
  ],
  textColor: "#6b7280",
  unsubscribeHref: "https://example.com/unsub",
};
type ThreeColumnFooter_SectionProps = Omit<
  ThreeColumnFooter_FooterWith3ColMenuProps,
  "theme"
>;
const ThreeColumnFooter_FooterWith3ColMenuSection = (
  props: ThreeColumnFooter_SectionProps
) => {
  const resolved = { ...ThreeColumnFooter_defaults, ...props };
  const brand = (
    <MjmlColumn direction="ltr" width="25%">
      <FooterLogo
        align={resolved.variant === "right-logo" ? "right" : "left"}
        alt={resolved.logoAlt}
        href={resolved.logoHref}
        src={resolved.logoSrc}
        width="55px"
      />
    </MjmlColumn>
  );
  const menus = (
    <>
      {[
        ["Quick links", resolved.quickLinks],
        ["Connect", resolved.connectLinks],
        ["Legal", resolved.legalLinks],
      ].map(([heading, links]) => (
        <MjmlColumn direction="ltr" key={heading as string} width="25%">
          <FooterVerticalMenu
            heading={heading as string}
            headingColor={resolved.headingColor}
            links={links as ThreeColumnFooter_FooterWith3ColMenuLink[]}
            textColor={resolved.textColor}
          />
        </MjmlColumn>
      ))}
    </>
  );
  return (
    <>
      <MjmlSection
        backgroundColor={resolved.backgroundColor}
        padding="44px 24px 16px"
      >
        {resolved.variant === "right-logo" ? menus : brand}
        {resolved.variant === "right-logo" ? brand : menus}
      </MjmlSection>
      <MjmlSection
        backgroundColor={resolved.backgroundColor}
        padding="0 24px 24px"
      >
        <MjmlColumn>
          <FooterSocials socials={resolved.socials} />
          <FooterLegal
            copyright="© 2026 emailcn. All rights reserved."
            mutedTextColor={resolved.mutedTextColor}
            unsubscribeHref={resolved.unsubscribeHref}
          />
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};
const ThreeColumnFooter_FooterWith3ColMenu = ({
  pageBackgroundColor = ThreeColumnFooter_defaults.pageBackgroundColor,
  theme = defaultTheme,
  ...props
}: ThreeColumnFooter_FooterWith3ColMenuProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <ThreeColumnFooter_FooterWith3ColMenuSection {...props} />
  </FooterEmailShell>
);
ThreeColumnFooter_FooterWith3ColMenu.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies ThreeColumnFooter_FooterWith3ColMenuProps;
const __ThreeColumnFooter = ThreeColumnFooter_FooterWith3ColMenu;
type FullMenuFooter_FooterWithFullMenuVariant = "oversized-logo" | "bordered";
interface FullMenuFooter_FullMenuFooterLink {
  href: string;
  label: string;
}
interface FullMenuFooter_FullMenuFooterSocial extends FullMenuFooter_FullMenuFooterLink {
  iconSrc: string;
}
interface FullMenuFooter_FooterWithFullMenuProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  assistanceText?: string;
  links?: FullMenuFooter_FullMenuFooterLink[];
  socials?: FullMenuFooter_FullMenuFooterSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: FullMenuFooter_FooterWithFullMenuVariant;
}
const FullMenuFooter_iconRoot = "https://emailcn.vercel.app/api/email-assets";
const FullMenuFooter_defaults = {
  assistanceText:
    "If you have any questions or need assistance, please reply to this email.",
  backgroundColor: "#fffffe",
  dividerColor: "#d1d5db",
  links: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/blog", label: "Blog" },
    { href: "https://example.com/support", label: "Support" },
    { href: "https://example.com/privacy", label: "Privacy Policy" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: `${FullMenuFooter_iconRoot}/maizzle-insignia.png`,
  mutedTextColor: "#d1d5db",
  pageBackgroundColor: "#f1f5f9",
  socials: [
    {
      href: "https://facebook.com",
      iconSrc: `${FullMenuFooter_iconRoot}/icon-facebook.png`,
      label: "Facebook",
    },
    {
      href: "https://github.com",
      iconSrc: `${FullMenuFooter_iconRoot}/icon-github.png`,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      iconSrc: `${FullMenuFooter_iconRoot}/icon-linkedin.png`,
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      iconSrc: `${FullMenuFooter_iconRoot}/icon-youtube.png`,
      label: "YouTube",
    },
    {
      href: "https://x.com",
      iconSrc: `${FullMenuFooter_iconRoot}/icon-x.png`,
      label: "X",
    },
  ],
  textColor: "#6b7280",
  unsubscribeHref: "https://example.com/unsub",
};
type FullMenuFooter_SectionProps = Omit<
  FullMenuFooter_FooterWithFullMenuProps,
  "theme"
>;
const FullMenuFooter_FooterWithFullMenuSection = (
  props: FullMenuFooter_SectionProps
) => {
  const resolved = {
    ...FullMenuFooter_defaults,
    ...props,
    variant: props.variant ?? "oversized-logo",
  };
  return (
    <MjmlSection
      backgroundColor={resolved.backgroundColor}
      border={
        resolved.variant === "bordered"
          ? `1px solid ${resolved.dividerColor}`
          : "none"
      }
      padding="44px 24px 24px"
    >
      <MjmlColumn>
        <FooterLogo
          align="center"
          alt={resolved.logoAlt}
          href={resolved.logoHref}
          padding="0 0 28px"
          src={resolved.logoSrc}
          width={resolved.variant === "oversized-logo" ? "96px" : "55px"}
        />
        <FooterMenu
          align="center"
          links={resolved.links}
          textColor={resolved.textColor}
        />
        <MjmlDivider borderColor={resolved.dividerColor} padding="24px 0" />
        <FooterCopy align="center" color={resolved.textColor}>
          {resolved.assistanceText}
        </FooterCopy>
        <FooterSocials align="center" socials={resolved.socials} />
        <FooterLegal
          align="center"
          copyright="© 2026 emailcn. All rights reserved."
          mutedTextColor={resolved.mutedTextColor}
          unsubscribeHref={resolved.unsubscribeHref}
        />
      </MjmlColumn>
    </MjmlSection>
  );
};
const FullMenuFooter_FooterWithFullMenu = ({
  pageBackgroundColor = FullMenuFooter_defaults.pageBackgroundColor,
  theme = defaultTheme,
  ...props
}: FullMenuFooter_FooterWithFullMenuProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <FullMenuFooter_FooterWithFullMenuSection {...props} />
  </FooterEmailShell>
);
FullMenuFooter_FooterWithFullMenu.PreviewProps = {
  theme: defaultTheme,
  variant: "oversized-logo",
} satisfies FullMenuFooter_FooterWithFullMenuProps;
const __FullMenuFooter = FullMenuFooter_FooterWithFullMenu;
type TextMenuFooterBundle_FooterWithTextMenuAndSocialsVariant =
  | "left-logo"
  | "right-logo";
interface TextMenuFooterBundle_FooterLink {
  href: string;
  label: string;
}
interface TextMenuFooterBundle_FooterSocialLink extends TextMenuFooterBundle_FooterLink {
  iconSrc: string;
}
interface TextMenuFooterBundle_FooterWithTextMenuAndSocialsProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  description?: string;
  /** @deprecated Use `copyright` instead. */
  text?: string;
  quickLinks?: TextMenuFooterBundle_FooterLink[];
  socials?: TextMenuFooterBundle_FooterSocialLink[];
  copyright?: string;
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: TextMenuFooterBundle_FooterWithTextMenuAndSocialsVariant;
}
const TextMenuFooterBundle_iconRoot =
  "https://emailcn.vercel.app/api/email-assets";
const TextMenuFooterBundle_defaults = {
  backgroundColor: "#fffffe",
  copyright: "© 2026 emailcn. No longer want to receive emails?",
  description:
    "Lorem ipsum dolor sit amet consectetur. Eget aenean sed sit sed in sapien. Vel auctor arcu nulla consectetur sed.",
  headingColor: "#030712",
  logoAlt: "Maizzle",
  logoSrc: `${TextMenuFooterBundle_iconRoot}/maizzle-insignia.png`,
  mutedTextColor: "#9ca3af",
  pageBackgroundColor: "#f1f5f9",
  quickLinks: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
  socials: [
    {
      href: "https://facebook.com",
      iconSrc: `${TextMenuFooterBundle_iconRoot}/icon-facebook.png`,
      label: "Facebook",
    },
    {
      href: "https://github.com",
      iconSrc: `${TextMenuFooterBundle_iconRoot}/icon-github.png`,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      iconSrc: `${TextMenuFooterBundle_iconRoot}/icon-linkedin.png`,
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      iconSrc: `${TextMenuFooterBundle_iconRoot}/icon-youtube.png`,
      label: "YouTube",
    },
    {
      href: "https://x.com",
      iconSrc: `${TextMenuFooterBundle_iconRoot}/icon-x.png`,
      label: "X",
    },
  ],
  textColor: "#6b7280",
  unsubscribeHref: "https://example.com/unsub",
};
type TextMenuFooterBundle_SectionProps = Omit<
  TextMenuFooterBundle_FooterWithTextMenuAndSocialsProps,
  "theme"
>;
const TextMenuFooterBundle_FooterWithTextMenuAndSocialsSection = (
  props: TextMenuFooterBundle_SectionProps
) => {
  const resolved = { ...TextMenuFooterBundle_defaults, ...props };
  const brand = (
    <MjmlColumn direction="ltr" width="60%">
      <FooterLogo
        align={resolved.variant === "right-logo" ? "right" : "left"}
        alt={resolved.logoAlt}
        href="https://example.com"
        src={resolved.logoSrc}
        width="55px"
      />
      <FooterCopy
        align={resolved.variant === "right-logo" ? "right" : "left"}
        color={resolved.textColor}
        fontSize="16px"
        padding="24px 0 0"
      >
        {resolved.text ?? resolved.description}
      </FooterCopy>
    </MjmlColumn>
  );
  const menu = (
    <MjmlColumn direction="ltr" width="40%">
      <FooterVerticalMenu
        align={resolved.variant === "right-logo" ? "left" : "right"}
        heading="Quick links"
        headingColor={resolved.headingColor}
        links={resolved.quickLinks}
        textColor={resolved.textColor}
      />
    </MjmlColumn>
  );
  return (
    <>
      <MjmlSection
        backgroundColor={resolved.backgroundColor}
        padding="44px 24px 16px"
      >
        {resolved.variant === "right-logo" ? menu : brand}
        {resolved.variant === "right-logo" ? brand : menu}
      </MjmlSection>
      <MjmlSection
        backgroundColor={resolved.backgroundColor}
        padding="0 24px 24px"
      >
        <MjmlColumn>
          <FooterSocials socials={resolved.socials} />
          <FooterLegal
            copyright={resolved.copyright}
            mutedTextColor={resolved.mutedTextColor}
            unsubscribeHref={resolved.unsubscribeHref}
          />
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};
const TextMenuFooterBundle_FooterWithTextMenuAndSocials = ({
  pageBackgroundColor = TextMenuFooterBundle_defaults.pageBackgroundColor,
  theme = defaultTheme,
  ...props
}: TextMenuFooterBundle_FooterWithTextMenuAndSocialsProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <TextMenuFooterBundle_FooterWithTextMenuAndSocialsSection {...props} />
  </FooterEmailShell>
);
TextMenuFooterBundle_FooterWithTextMenuAndSocials.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies TextMenuFooterBundle_FooterWithTextMenuAndSocialsProps;
const __TextMenuFooterBundle = {
  Component: TextMenuFooterBundle_FooterWithTextMenuAndSocials,
  __NavigationFooterSection:
    TextMenuFooterBundle_FooterWithTextMenuAndSocialsSection,
};
const __TextMenuFooter = __TextMenuFooterBundle.Component;
const { __NavigationFooterSection } = __TextMenuFooterBundle;
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
export interface NavigationFooterProps {
  theme?: Parameters<typeof __TwoColumnFooter>[0]["theme"];
  brand?: FooterBrand;
  description?: string;
  menus?: FooterMenu[];
  socials?: FooterSocial[];
  legal?: FooterLegal;
  columns?: 1 | 2 | 3;
  alignment?: "left" | "center" | "right";
  logoPosition?: "left" | "right" | "top" | "bottom";
  divider?: boolean;
  oversizedLogo?: boolean;
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
const footerMenuLinks = (menu: FooterMenu | undefined) => menu?.links;
export const NavigationFooter = ({
  theme,
  brand,
  description,
  menus,
  socials,
  legal,
  columns = 2,
  alignment = "left",
  logoPosition = "left",
  divider = false,
  oversizedLogo = false,
}: NavigationFooterProps) => {
  const footerBrand = footerBrandValues(brand);
  const footerLegal = footerLegalValues(legal);
  const [quickMenu, connectMenu, legalMenu] = menus ?? [];
  const quickLinks = footerMenuLinks(quickMenu);
  const connectLinks = footerMenuLinks(connectMenu);
  const legalLinks = footerMenuLinks(legalMenu);
  const baseProps = {
    logoAlt: footerBrand.logoAlt,
    logoHref: footerBrand.logoHref,
    logoSrc: footerBrand.logoSrc,
    socials,
    theme,
    unsubscribeHref: footerLegal.unsubscribeHref,
  };
  if (oversizedLogo) {
    return (
      <__FullMenuFooter
        {...baseProps}
        links={menus?.flatMap(({ links }) => links)}
        variant="oversized-logo"
      />
    );
  }
  if (alignment === "center" && columns === 1) {
    return (
      <__CenteredFooter {...baseProps} links={quickLinks} socials={socials} />
    );
  }
  if (description) {
    return (
      <__TextMenuFooter
        {...baseProps}
        copyright={footerLegal.copyright}
        description={description}
        quickLinks={quickLinks}
        variant={logoPosition === "right" ? "right-logo" : "left-logo"}
      />
    );
  }
  if (divider) {
    return (
      <__DividerMenuFooter
        {...baseProps}
        variant={logoPosition === "right" ? "right-logo" : "left-logo"}
      />
    );
  }
  if (columns === 3) {
    return (
      <__ThreeColumnFooter
        {...baseProps}
        connectLinks={connectLinks}
        legalLinks={legalLinks}
        quickLinks={quickLinks}
        variant={logoPosition === "right" ? "right-logo" : "left-logo"}
      />
    );
  }
  return (
    <__TwoColumnFooter
      {...baseProps}
      connectLinks={connectLinks}
      copyright={footerLegal.copyright}
      quickLinks={quickLinks}
      variant={logoPosition === "right" ? "right-logo" : "left-logo"}
    />
  );
};
export const NavigationFooterSection = __NavigationFooterSection;
NavigationFooter.PreviewProps = {
  alignment: "left",
  columns: 2,
  divider: false,
  logoPosition: "left",
  oversizedLogo: false,
} satisfies NavigationFooterProps;
