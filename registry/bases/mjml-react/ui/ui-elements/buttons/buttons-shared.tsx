import {
  MjmlButton,
  MjmlColumn,
  MjmlSection,
  MjmlSpacer,
} from "@faire/mjml-react";
import { Fragment } from "react";
import type { ReactNode } from "react";

export type ButtonsVariant =
  | "primary"
  | "primary-leading-icon"
  | "primary-trailing-icon"
  | "secondary"
  | "secondary-leading-icon"
  | "secondary-trailing-icon"
  | "text"
  | "text-leading-icon"
  | "text-trailing-icon";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const sizes: Record<
  ButtonSize,
  {
    fontSize: number;
    lineHeight: number;
    paddingX: number;
    paddingY: number;
  }
> = {
  lg: {
    fontSize: 16,
    lineHeight: 24,
    paddingX: 20,
    paddingY: 10,
  },
  md: {
    fontSize: 14,
    lineHeight: 20,
    paddingX: 16,
    paddingY: 10,
  },
  sm: {
    fontSize: 14,
    lineHeight: 20,
    paddingX: 12,
    paddingY: 8,
  },
  xl: {
    fontSize: 16,
    lineHeight: 24,
    paddingX: 24,
    paddingY: 12,
  },
  xs: { fontSize: 12, lineHeight: 16, paddingX: 8, paddingY: 4 },
};

const sizeOrder: ButtonSize[] = ["xs", "sm", "md", "lg", "xl"];

type ButtonAppearance = "primary" | "secondary" | "text";
type IconPosition = "leading" | "trailing";

export const buttonsResponsiveStyles = `
  .emailcn-button-primary:hover { background-color: #4338ca !important; }
  .emailcn-button-secondary:hover { background-color: #f3f4f6 !important; }
`;

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

const Icon = ({
  customIcon,
  position,
}: {
  customIcon?: ReactNode;
  position: IconPosition;
}) => customIcon ?? (position === "leading" ? "↓" : "→");

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
  const paddingY =
    appearance !== "primary" && size === "xs" ? 6 : config.paddingY;
  const { backgroundColor, buttonClass, color } = getAppearanceStyles(
    appearance,
    withIcon
  );

  const icon = iconPosition ? (
    <Icon customIcon={customIcon} position={iconPosition} />
  ) : null;

  return (
    <MjmlButton
      align={align}
      backgroundColor={backgroundColor ?? "transparent"}
      border={isSecondary ? "1px solid #d1d5db" : "none"}
      borderRadius={isText && !withIcon ? "0" : "8px"}
      color={color}
      cssClass={buttonClass}
      fontFamily={fontFamily}
      fontSize={`${config.fontSize}px`}
      fontWeight={isSecondary && !withIcon ? "600" : "500"}
      href={href}
      innerPadding={`${paddingY}px ${config.paddingX}px`}
      lineHeight={`${config.lineHeight}px`}
      padding="0"
    >
      {iconPosition === "leading" ? icon : null}
      {iconPosition === "leading" ? "  " : null}
      {label}
      {iconPosition === "trailing" ? "  " : null}
      {iconPosition === "trailing" ? icon : null}
    </MjmlButton>
  );
};

export const ButtonsSection = ({
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
      <MjmlSection padding="0">
        <MjmlColumn padding="0">
          <MjmlSpacer height="100px" />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection backgroundColor="#fffffe" padding="44px 24px">
        <MjmlColumn padding="0">
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
                <MjmlSpacer height="24px" />
              ) : null}
            </Fragment>
          ))}
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection padding="0">
        <MjmlColumn padding="0">
          <MjmlSpacer height="100px" />
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};
