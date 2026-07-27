import { Fragment } from "react";
import type { CSSProperties, ReactNode } from "react";
import {
  Section,
  Link,
  Img,
  Body,
  Head as EmailHead,
  Html,
  Preview,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { defaultTheme } from "@/registry/bases/react-email/themes/theme-default";

type ButtonsVariant =
  | "primary"
  | "primary-leading-icon"
  | "primary-trailing-icon"
  | "secondary"
  | "secondary-leading-icon"
  | "secondary-trailing-icon"
  | "text"
  | "text-leading-icon"
  | "text-trailing-icon";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

type EmailCssProperties = CSSProperties & {
  msoTextRaise?: string;
};

const ASSET_ROOT = "https://emailcn.vercel.app/api/email-assets";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const msoRaise14: EmailCssProperties = { msoTextRaise: "14px" };

const msoRaise16: EmailCssProperties = { msoTextRaise: "16px" };

const sizes: Record<
  ButtonSize,
  {
    fontSize: number;
    iconWidth: number;
    lineHeight: number;
    paddingX: number;
    paddingY: number;
  }
> = {
  lg: {
    fontSize: 16,
    iconWidth: 14,
    lineHeight: 24,
    paddingX: 20,
    paddingY: 10,
  },
  md: {
    fontSize: 14,
    iconWidth: 14,
    lineHeight: 20,
    paddingX: 16,
    paddingY: 10,
  },
  sm: {
    fontSize: 14,
    iconWidth: 12,
    lineHeight: 20,
    paddingX: 12,
    paddingY: 8,
  },
  xl: {
    fontSize: 16,
    iconWidth: 16,
    lineHeight: 24,
    paddingX: 24,
    paddingY: 12,
  },
  xs: { fontSize: 12, iconWidth: 10, lineHeight: 16, paddingX: 8, paddingY: 4 },
};

const sizeOrder: ButtonSize[] = ["xs", "sm", "md", "lg", "xl"];

type ButtonAppearance = "primary" | "secondary" | "text";

type IconPosition = "leading" | "trailing";

const buttonsResponsiveStyles = `
  .emailcn-button-primary:hover { background-color: #4338ca !important; }
  .emailcn-button-secondary:hover { background-color: #f3f4f6 !important; }
`;

const getIconWidth = ({
  appearance,
  position,
  size,
  width,
}: {
  appearance: ButtonAppearance;
  position?: IconPosition;
  size: ButtonSize;
  width: number;
}) => {
  if (appearance === "primary" && position === "trailing") {
    return size === "xs" ? 10 : 12;
  }
  if (appearance !== "primary" && size === "xs") {
    return 11;
  }
  return width;
};

const getAppearanceStyles = (
  appearance: ButtonAppearance,
  withIcon: boolean
) => {
  if (appearance === "primary") {
    return {
      backgroundColor: "#4f46e5",
      buttonClass: "emailcn-button-primary",
      color: withIcon ? "#fffffe" : "#f8fafc",
    };
  }
  if (appearance === "secondary") {
    return {
      backgroundColor: withIcon ? "transparent" : "#fffffe",
      buttonClass: "emailcn-button-secondary",
      color: "#4b5563",
    };
  }
  return {
    backgroundColor: withIcon ? "transparent" : undefined,
    buttonClass: undefined,
    color: "#4f46e5",
  };
};

const getTextStyle = (position?: IconPosition): EmailCssProperties => {
  if (!position) {
    return msoRaise16;
  }
  return {
    ...msoRaise14,
    ...(position === "leading"
      ? { marginLeft: "8px" }
      : { marginRight: "8px" }),
  };
};

const Icon = ({
  appearance,
  customIcon,
  lineHeight,
  position,
  width,
}: {
  appearance: ButtonAppearance;
  customIcon?: ReactNode;
  lineHeight: number;
  position: IconPosition;
  width: number;
}) => {
  if (customIcon) {
    return <span>{customIcon}</span>;
  }
  const prefix = position === "leading" ? "icon-download" : "icon-arrow-right";
  let suffix = "-brand";
  if (appearance === "primary") {
    suffix = position === "leading" ? "-light" : "";
  } else if (appearance === "secondary") {
    suffix = "-dark";
  }
  return (
    <Img
      alt=""
      src={`${ASSET_ROOT}/${prefix}${suffix}.png`}
      style={{
        lineHeight: `${lineHeight}px`,
        maxWidth: "100%",
        verticalAlign: "baseline",
      }}
      width={width}
    />
  );
};

const ButtonExample = ({
  align,
  appearance,
  customIcon,
  href,
  iconPosition,
  label,
  size,
}: {
  align: "center" | "left" | "right";
  appearance: ButtonAppearance;
  customIcon?: ReactNode;
  href: string;
  iconPosition?: IconPosition;
  label: string;
  size: ButtonSize;
}) => {
  const config = sizes[size];
  const isSecondary = appearance === "secondary";
  const isText = appearance === "text";
  const withIcon = iconPosition !== undefined;
  const iconWidth = getIconWidth({
    appearance,
    position: iconPosition,
    size,
    width: config.iconWidth,
  });
  const paddingY =
    appearance !== "primary" && size === "xs" ? 6 : config.paddingY;
  const { backgroundColor, buttonClass, color } = getAppearanceStyles(
    appearance,
    withIcon
  );
  const icon = iconPosition ? (
    <span style={msoRaise14}>
      <Icon
        appearance={appearance}
        customIcon={customIcon}
        lineHeight={config.lineHeight}
        position={iconPosition}
        width={iconWidth}
      />
    </span>
  ) : null;
  const text = <span style={getTextStyle(iconPosition)}>{label}</span>;
  return (
    <Section style={{ textAlign: align }}>
      <Link
        className={buttonClass}
        href={href}
        style={{
          backgroundColor,
          border: isSecondary ? "1px solid #d1d5db" : undefined,
          borderRadius: isText && !withIcon ? undefined : "8px",
          color,
          display: "inline-block",
          fontFamily,
          fontSize: `${config.fontSize}px`,
          fontWeight: isSecondary && !withIcon ? 600 : 500,
          lineHeight: `${config.lineHeight}px`,
          padding: `${paddingY}px ${config.paddingX}px`,
          textAlign: "center",
          textDecoration: "none",
        }}
      >
        {iconPosition === "leading" ? icon : null}
        {iconPosition === "leading" ? " " : null}
        {text}
        {iconPosition === "trailing" ? " " : null}
        {iconPosition === "trailing" ? icon : null}
      </Link>
    </Section>
  );
};

const ButtonsSection = ({
  align = "center",
  href = "https://example.com",
  icon,
  iconPosition,
  label,
  size = "all",
  variant = "primary",
}: {
  align?: "center" | "left" | "right";
  href?: string;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  label?: string;
  size?: ButtonSize | "all";
  variant?: ButtonsVariant;
}) => {
  let appearance: ButtonAppearance = "primary";
  let resolvedIconPosition: IconPosition | undefined;
  if (variant.startsWith("secondary")) {
    appearance = "secondary";
  } else if (variant.startsWith("text")) {
    appearance = "text";
  }
  if (variant.includes("trailing")) {
    resolvedIconPosition = "trailing";
  } else if (variant.includes("leading")) {
    resolvedIconPosition = "leading";
  } else if (icon) {
    resolvedIconPosition = iconPosition ?? "leading";
  }
  let resolvedLabel = "Button";
  if (resolvedIconPosition === "trailing") {
    resolvedLabel = "Details";
  } else if (resolvedIconPosition === "leading") {
    resolvedLabel = "Download";
  }
  resolvedLabel = label ?? resolvedLabel;
  const visibleSizes = size === "all" ? sizeOrder : [size];
  return (
    <>
      <Section style={{ height: "100px" }} />
      <Section
        style={{
          backgroundColor: "#fffffe",
          fontSize: "16px",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "600px",
          textAlign: "start",
        }}
      >
        <Section
          style={{ paddingBottom: "44px", paddingTop: "44px", width: "100%" }}
        >
          {visibleSizes.map((buttonSize, index) => (
            <Fragment key={buttonSize}>
              <ButtonExample
                align={align}
                appearance={appearance}
                customIcon={icon}
                href={href}
                iconPosition={resolvedIconPosition}
                label={resolvedLabel}
                size={buttonSize}
              />
              {index < visibleSizes.length - 1 ? (
                <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
              ) : null}
            </Fragment>
          ))}
        </Section>
      </Section>
      <Section style={{ height: "100px" }} />
    </>
  );
};

interface Buttons_ButtonsProps {
  align?: "center" | "left" | "right";
  href?: string;
  icon?: ReactNode;
  iconPosition?: "leading" | "trailing";
  label?: string;
  size?: ButtonSize | "all";
  theme?: TailwindConfig;
  variant?: ButtonsVariant;
}

const Buttons_Buttons = ({
  theme: _theme = defaultTheme,
  ...props
}: Buttons_ButtonsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style>{buttonsResponsiveStyles}</style>
    </EmailHead>
    <Preview>Buttons</Preview>
    <Body style={{ margin: 0 }}>
      <ButtonsSection {...props} />
    </Body>
  </Html>
);

Buttons_Buttons.PreviewProps = {
  align: "center",
  href: "https://example.com",
  size: "all",
  theme: defaultTheme,
  variant: "primary",
} satisfies Buttons_ButtonsProps;

const __Buttons = Buttons_Buttons;

export interface ButtonProps {
  theme?: Parameters<typeof __Buttons>[0]["theme"];
  label?: string;
  href?: string;
  variant?: "primary" | "secondary" | "text";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "all";
  icon?: Parameters<typeof __Buttons>[0]["icon"];
  iconPosition?: "leading" | "trailing";
  align?: "left" | "center" | "right";
}

export const Button = ({
  theme,
  label,
  href,
  variant = "primary",
  size,
  icon,
  iconPosition = "leading",
  align,
}: ButtonProps) => (
  <__Buttons
    align={align}
    href={href}
    icon={icon}
    iconPosition={iconPosition}
    label={label}
    size={size}
    theme={theme}
    variant={
      icon
        ? (`${variant}-${iconPosition}-icon` as Parameters<
            typeof __Buttons
          >[0]["variant"])
        : variant
    }
  />
);

Button.PreviewProps = {
  iconPosition: "leading",
  variant: "primary",
} satisfies ButtonProps;
