import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlDivider,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlWrapper,
  MjmlButton,
  MjmlText,
  MjmlImage,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { defaultTheme } from "@/registry/themes/default";

type DividerVariant = "center" | "left" | "right";

const dividerColors = {
  border: "#e5e7eb",
  muted: "#6b7280",
  mutedBackground: "#f3f4f6",
  surface: "#ffffff",
  text: "#111827",
  white: "#ffffff",
} as const;

const dividerFontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const columnWidths: Record<
  DividerVariant,
  {
    content: string;
    left: string;
    right: string;
  }
> = {
  center: { content: "34%", left: "33%", right: "33%" },
  left: { content: "30%", left: "0%", right: "70%" },
  right: { content: "30%", left: "70%", right: "0%" },
};

const RuleColumn = ({ width }: { width: string }) => (
  <MjmlColumn padding="0" verticalAlign="middle" width={width}>
    <MjmlDivider
      borderColor={dividerColors.border}
      borderStyle="solid"
      borderWidth="1px"
      padding="0"
      width="100%"
    />
  </MjmlColumn>
);

const DividerFrame = ({
  children,
  variant = "center",
}: {
  children: ReactNode;
  variant?: DividerVariant;
}) => {
  const widths = columnWidths[variant];
  return (
    <MjmlSection padding="24px 0">
      {variant === "left" ? null : <RuleColumn width={widths.left} />}
      <MjmlColumn
        padding={variant === "left" ? "0 16px 0 0" : "0 16px"}
        verticalAlign="middle"
        width={widths.content}
      >
        {children}
      </MjmlColumn>
      {variant === "right" ? null : <RuleColumn width={widths.right} />}
    </MjmlSection>
  );
};

const LineDividerSection = () => (
  <MjmlSection padding="24px 0">
    <MjmlColumn padding="0">
      <MjmlDivider
        borderColor={dividerColors.border}
        borderStyle="solid"
        borderWidth="1px"
        padding="0"
        width="100%"
      />
    </MjmlColumn>
  </MjmlSection>
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{preview}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">{children}</MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
    <MjmlButton
      align="center"
      backgroundColor={dividerColors.text}
      borderRadius="6px"
      color={dividerColors.white}
      fontFamily={dividerFontFamily}
      fontSize="12px"
      fontWeight="500"
      href={href}
      innerPadding="8px 16px"
      lineHeight="18px"
      padding="0"
    >
      {label}
    </MjmlButton>
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
    <MjmlButton
      align="center"
      backgroundColor={dividerColors.mutedBackground}
      borderRadius="4px"
      color={dividerColors.muted}
      fontFamily={dividerFontFamily}
      fontSize="12px"
      fontWeight="500"
      innerPadding="4px 8px"
      lineHeight="18px"
      padding="0"
    >
      {fileType}
    </MjmlButton>
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
    <MjmlButton
      align="center"
      backgroundColor={dividerColors.text}
      borderRadius="6px"
      color={dividerColors.white}
      fontFamily={dividerFontFamily}
      fontSize="12px"
      fontWeight="500"
      href={href}
      innerPadding="8px 16px"
      lineHeight="18px"
      padding="0"
    >
      {icon}&nbsp;&nbsp;{label}
    </MjmlButton>
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
    <MjmlText
      align="center"
      color={dividerColors.text}
      fontFamily={dividerFontFamily}
      fontSize="18px"
      lineHeight="28px"
      padding="0"
    >
      {icon}
    </MjmlText>
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
      <MjmlImage
        align="center"
        alt={logoAlt}
        height={32}
        padding="0"
        src={logoSrc}
        width={128}
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
    <MjmlText
      align="center"
      color={dividerColors.text}
      fontFamily={dividerFontFamily}
      fontSize="18px"
      letterSpacing="8px"
      lineHeight="28px"
      padding="0"
    >
      {"ⓐ Ⓐ Ⓢ Ⓨ"}
    </MjmlText>
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
    <MjmlText
      align="center"
      color={dividerColors.text}
      fontFamily={dividerFontFamily}
      fontSize="14px"
      fontWeight="500"
      lineHeight="20px"
      padding="0"
    >
      {title}
    </MjmlText>
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
