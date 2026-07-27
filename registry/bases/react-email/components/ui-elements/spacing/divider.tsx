import { Fragment } from "react";
import type { CSSProperties, ReactNode } from "react";
import {
  Body,
  Container,
  Head as EmailHead,
  Html,
  Preview,
  Tailwind,
  Section,
  Row,
  Column,
  Link,
  Text,
  Img,
} from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { createEmailTailwindConfig } from "@/registry/bases/react-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/react-email/themes/email-theme";
import { defaultTheme } from "@/registry/themes/definitions/default";

type DividerVariant = "center" | "left" | "right";

const dividerColors = {
  border: "#e5e7eb",
  muted: "#6b7280",
  mutedBackground: "#f3f4f6",
  surface: "#ffffff",
  text: "#111827",
  white: "#ffffff",
} as const;

const dividerTextStyle: CSSProperties = {
  color: dividerColors.text,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontSize: "14px",
  lineHeight: "20px",
  margin: 0,
};

const dividerButtonStyle: CSSProperties = {
  ...dividerTextStyle,
  backgroundColor: dividerColors.text,
  borderRadius: "6px",
  color: dividerColors.white,
  display: "inline-block",
  fontSize: "12px",
  fontWeight: 500,
  lineHeight: "18px",
  padding: "8px 16px",
  textDecoration: "none",
  whiteSpace: "nowrap",
};

const dividerContentPadding: Record<DividerVariant, string> = {
  center: "0 16px",
  left: "0 16px 0 0",
  right: "0 0 0 16px",
};

const HorizontalRule = () => (
  <Section
    style={{
      backgroundColor: dividerColors.border,
      fontSize: 0,
      height: "1px",
      lineHeight: "1px",
      width: "100%",
    }}
  >
    &zwj;
  </Section>
);

const DividerFrame = ({
  children,
  variant = "center",
}: {
  children: ReactNode;
  variant?: DividerVariant;
}) => {
  const showLeftRule = variant !== "left";
  const showRightRule = variant !== "right";
  const contentPadding = dividerContentPadding[variant];
  return (
    <Section style={{ padding: "24px 0" }}>
      <Section
        style={{ borderCollapse: "collapse", width: "100%" }}
        width="100%"
      >
        <Fragment>
          <Row>
            {showLeftRule ? (
              <Column style={{ verticalAlign: "middle", width: "50%" }}>
                <HorizontalRule />
              </Column>
            ) : null}
            <Column
              style={{
                padding: contentPadding,
                verticalAlign: "middle",
                whiteSpace: "nowrap",
                width: "1%",
              }}
            >
              {children}
            </Column>
            {showRightRule ? (
              <Column style={{ verticalAlign: "middle", width: "50%" }}>
                <HorizontalRule />
              </Column>
            ) : null}
          </Row>
        </Fragment>
      </Section>
    </Section>
  );
};

const LineDividerSection = () => (
  <Section style={{ padding: "24px 0" }}>
    <HorizontalRule />
  </Section>
);

const SpacingEmailShell = ({
  children,
  preview,
  theme,
}: {
  children: ReactNode;
  preview: string;
  theme: EmailTheme;
}) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>{preview}</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body style={{ backgroundColor: dividerColors.surface }} className="m-0">
        <Container className="mx-auto max-w-[600px]">{children}</Container>
      </Body>
    </Tailwind>
  </Html>
);

interface DividerButton_DividerWithButtonProps {
  href?: string;
  label?: string;
  theme?: EmailTheme;
  variant?: DividerVariant;
}

const DividerButton_DividerWithButtonSection = ({
  href = "#",
  label = "View All",
  variant = "center",
}: Omit<DividerButton_DividerWithButtonProps, "theme">) => (
  <DividerFrame variant={variant}>
    <Link href={href} style={dividerButtonStyle}>
      {label}
    </Link>
  </DividerFrame>
);

const DividerButton_DividerWithButton = ({
  href = "#",
  label = "View All",
  theme = defaultTheme,
  variant = "center",
}: DividerButton_DividerWithButtonProps) => (
  <SpacingEmailShell preview={label} theme={theme}>
    <DividerButton_DividerWithButtonSection
      href={href}
      label={label}
      variant={variant}
    />
  </SpacingEmailShell>
);

DividerButton_DividerWithButton.PreviewProps = {
  href: "https://example.com/shop",
  label: "Shop Now",
  theme: defaultTheme,
  variant: "center",
} satisfies DividerButton_DividerWithButtonProps;

const __DividerButton = DividerButton_DividerWithButton;

interface DividerFile_DividerWithFileTypeProps {
  fileType?: string;
  theme?: EmailTheme;
  variant?: DividerVariant;
}

const DividerFile_DividerWithFileTypeSection = ({
  fileType = "PDF",
  variant = "center",
}: Omit<DividerFile_DividerWithFileTypeProps, "theme">) => (
  <DividerFrame variant={variant}>
    <Text
      style={{
        ...dividerTextStyle,
        backgroundColor: dividerColors.mutedBackground,
        borderRadius: "4px",
        color: dividerColors.muted,
        display: "inline-block",
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: "18px",
        padding: "4px 8px",
      }}
    >
      {fileType}
    </Text>
  </DividerFrame>
);

const DividerFile_DividerWithFileType = ({
  fileType = "PDF",
  theme = defaultTheme,
  variant = "center",
}: DividerFile_DividerWithFileTypeProps) => (
  <SpacingEmailShell preview={fileType} theme={theme}>
    <DividerFile_DividerWithFileTypeSection
      fileType={fileType}
      variant={variant}
    />
  </SpacingEmailShell>
);

DividerFile_DividerWithFileType.PreviewProps = {
  fileType: "PDF",
  theme: defaultTheme,
  variant: "center",
} satisfies DividerFile_DividerWithFileTypeProps;

const __DividerFile = DividerFile_DividerWithFileType;

interface DividerIconButton_DividerWithIconButtonProps {
  href?: string;
  icon?: string;
  label?: string;
  theme?: EmailTheme;
  variant?: DividerVariant;
}

const DividerIconButton_DividerWithIconButtonSection = ({
  href = "#",
  icon = "➜",
  label = "Learn More",
  variant = "center",
}: Omit<DividerIconButton_DividerWithIconButtonProps, "theme">) => (
  <DividerFrame variant={variant}>
    <Section>
      <Fragment>
        <Row>
          <Column style={{ paddingRight: "8px", verticalAlign: "middle" }}>
            <Text
              style={{
                ...dividerTextStyle,
                fontSize: "18px",
                lineHeight: "28px",
              }}
            >
              {icon}
            </Text>
          </Column>
          <Column style={{ verticalAlign: "middle" }}>
            <Link href={href} style={dividerButtonStyle}>
              {label}
            </Link>
          </Column>
        </Row>
      </Fragment>
    </Section>
  </DividerFrame>
);

const DividerIconButton_DividerWithIconButton = ({
  href = "#",
  icon = "➜",
  label = "Learn More",
  theme = defaultTheme,
  variant = "center",
}: DividerIconButton_DividerWithIconButtonProps) => (
  <SpacingEmailShell preview={label} theme={theme}>
    <DividerIconButton_DividerWithIconButtonSection
      href={href}
      icon={icon}
      label={label}
      variant={variant}
    />
  </SpacingEmailShell>
);

DividerIconButton_DividerWithIconButton.PreviewProps = {
  href: "https://example.com",
  icon: "➜",
  label: "Learn More",
  theme: defaultTheme,
  variant: "center",
} satisfies DividerIconButton_DividerWithIconButtonProps;

const __DividerIconButton = DividerIconButton_DividerWithIconButton;

interface DividerIcon_DividerWithIconProps {
  icon?: string;
  theme?: EmailTheme;
  variant?: DividerVariant;
}

const DividerIcon_DividerWithIconSection = ({
  icon = "✨",
  variant = "center",
}: Omit<DividerIcon_DividerWithIconProps, "theme">) => (
  <DividerFrame variant={variant}>
    <Text
      style={{
        ...dividerTextStyle,
        fontSize: "18px",
        lineHeight: "28px",
      }}
    >
      {icon}
    </Text>
  </DividerFrame>
);

const DividerIcon_DividerWithIcon = ({
  icon = "✨",
  theme = defaultTheme,
  variant = "center",
}: DividerIcon_DividerWithIconProps) => (
  <SpacingEmailShell preview="Divider with icon" theme={theme}>
    <DividerIcon_DividerWithIconSection icon={icon} variant={variant} />
  </SpacingEmailShell>
);

DividerIcon_DividerWithIcon.PreviewProps = {
  icon: "✨",
  theme: defaultTheme,
  variant: "center",
} satisfies DividerIcon_DividerWithIconProps;

const __DividerIcon = DividerIcon_DividerWithIcon;

interface DividerLogo_DividerWithLogoProps {
  logoAlt?: string;
  logoSrc?: string;
  theme?: EmailTheme;
  variant?: DividerVariant;
}

const DividerLogo_DividerWithLogoSection = ({
  logoAlt = "Logo",
  logoSrc,
  variant = "center",
}: Omit<DividerLogo_DividerWithLogoProps, "theme">) => (
  <DividerFrame variant={variant}>
    {logoSrc ? (
      <Img
        alt={logoAlt}
        height={32}
        src={logoSrc}
        width={128}
        style={{
          display: "block",
          height: "32px",
          objectFit: "contain",
          width: "128px",
        }}
      />
    ) : null}
  </DividerFrame>
);

const DividerLogo_DividerWithLogo = ({
  logoAlt = "Logo",
  logoSrc,
  theme = defaultTheme,
  variant = "center",
}: DividerLogo_DividerWithLogoProps) => (
  <SpacingEmailShell preview="Divider with logo" theme={theme}>
    <DividerLogo_DividerWithLogoSection
      logoAlt={logoAlt}
      logoSrc={logoSrc}
      variant={variant}
    />
  </SpacingEmailShell>
);

DividerLogo_DividerWithLogo.PreviewProps = {
  logoAlt: "emailcn",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/emailcn-logo.png",
  theme: defaultTheme,
  variant: "center",
} satisfies DividerLogo_DividerWithLogoProps;

const __DividerLogo = DividerLogo_DividerWithLogo;

interface DividerSocials_DividerWithSocialIconsProps {
  theme?: EmailTheme;
  variant?: DividerVariant;
}

const DividerSocials_DividerWithSocialIconsSection = ({
  variant = "center",
}: Omit<DividerSocials_DividerWithSocialIconsProps, "theme">) => (
  <DividerFrame variant={variant}>
    <Text
      style={{
        ...dividerTextStyle,
        fontSize: "18px",
        letterSpacing: "8px",
        lineHeight: "28px",
      }}
    >
      {"ⓐ Ⓐ Ⓢ Ⓨ"}
    </Text>
  </DividerFrame>
);

const DividerSocials_DividerWithSocialIcons = ({
  theme = defaultTheme,
  variant = "center",
}: DividerSocials_DividerWithSocialIconsProps) => (
  <SpacingEmailShell preview="Divider with social icons" theme={theme}>
    <DividerSocials_DividerWithSocialIconsSection variant={variant} />
  </SpacingEmailShell>
);

DividerSocials_DividerWithSocialIcons.PreviewProps = {
  theme: defaultTheme,
  variant: "center",
} satisfies DividerSocials_DividerWithSocialIconsProps;

const __DividerSocials = DividerSocials_DividerWithSocialIcons;

interface DividerTitle_DividerWithTitleProps {
  theme?: EmailTheme;
  title?: string;
  variant?: DividerVariant;
}

const DividerTitle_DividerWithTitleSection = ({
  title = "Section Title",
  variant = "center",
}: Omit<DividerTitle_DividerWithTitleProps, "theme">) => (
  <DividerFrame variant={variant}>
    <Text style={{ ...dividerTextStyle, fontWeight: 500 }}>{title}</Text>
  </DividerFrame>
);

const DividerTitle_DividerWithTitle = ({
  theme = defaultTheme,
  title = "Section Title",
  variant = "center",
}: DividerTitle_DividerWithTitleProps) => (
  <SpacingEmailShell preview={title} theme={theme}>
    <DividerTitle_DividerWithTitleSection title={title} variant={variant} />
  </SpacingEmailShell>
);

DividerTitle_DividerWithTitle.PreviewProps = {
  theme: defaultTheme,
  title: "Featured Products",
  variant: "center",
} satisfies DividerTitle_DividerWithTitleProps;

const __DividerTitle = DividerTitle_DividerWithTitle;

interface LineDivider_LineDividerProps {
  theme?: EmailTheme;
}

const LineDivider_LineDivider = ({
  theme = defaultTheme,
}: LineDivider_LineDividerProps) => (
  <SpacingEmailShell preview="Line divider" theme={theme}>
    <LineDividerSection />
  </SpacingEmailShell>
);

LineDivider_LineDivider.PreviewProps = {
  theme: defaultTheme,
} satisfies LineDivider_LineDividerProps;

const __LineDivider = LineDivider_LineDivider;

export type DividerContent =
  | {
      type: "title";
      title: string;
    }
  | {
      type: "file";
      fileType: string;
    }
  | {
      type: "icon";
      src: string;
    }
  | {
      type: "logo";
      image: {
        src: string;
        alt?: string;
      };
    }
  | {
      type: "socials";
    }
  | {
      type: "button";
      action: {
        href: string;
        label: string;
      };
    }
  | {
      type: "icon-button";
      iconSrc: string;
      action: {
        href: string;
        label: string;
      };
    };

export interface DividerProps {
  theme?: Parameters<typeof __LineDivider>[0]["theme"];
  align?: "left" | "center" | "right";
  content?: DividerContent;
}

export const Divider = ({ theme, align = "center", content }: DividerProps) => {
  if (!content) {
    return <__LineDivider theme={theme} />;
  }
  if (content.type === "title") {
    return (
      <__DividerTitle theme={theme} title={content.title} variant={align} />
    );
  }
  if (content.type === "file") {
    return (
      <__DividerFile
        fileType={content.fileType}
        theme={theme}
        variant={align}
      />
    );
  }
  if (content.type === "icon") {
    return <__DividerIcon icon={content.src} theme={theme} variant={align} />;
  }
  if (content.type === "logo") {
    return (
      <__DividerLogo
        logoAlt={content.image.alt}
        logoSrc={content.image.src}
        theme={theme}
        variant={align}
      />
    );
  }
  if (content.type === "socials") {
    return <__DividerSocials theme={theme} variant={align} />;
  }
  if (content.type === "icon-button") {
    return (
      <__DividerIconButton
        href={content.action.href}
        icon={content.iconSrc}
        label={content.action.label}
        theme={theme}
        variant={align}
      />
    );
  }
  return (
    <__DividerButton
      href={content.action.href}
      label={content.action.label}
      theme={theme}
      variant={align}
    />
  );
};

Divider.PreviewProps = {
  align: "center",
} satisfies DividerProps;
