import { Link, Text } from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

import {
  DividerFrame,
  SpacingEmailShell,
  dividerButtonStyle,
  dividerTextStyle,
} from "./divider-shared";
import type { DividerVariant } from "./divider-shared";

export interface DividerWithIconButtonProps {
  href?: string;
  icon?: string;
  label?: string;
  theme?: EmailThemeTokens;
  variant?: DividerVariant;
}

export const DividerWithIconButtonSection = ({
  href = "#",
  icon = "➜",
  label = "Learn More",
  variant = "center",
}: Omit<DividerWithIconButtonProps, "theme">) => (
  <DividerFrame variant={variant}>
    <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
      <tbody>
        <tr>
          <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
            <Text
              style={{
                ...dividerTextStyle,
                fontSize: "18px",
                lineHeight: "28px",
              }}
            >
              {icon}
            </Text>
          </td>
          <td style={{ verticalAlign: "middle" }}>
            <Link href={href} style={dividerButtonStyle}>
              {label}
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  </DividerFrame>
);

export const DividerWithIconButton = ({
  href = "#",
  icon = "➜",
  label = "Learn More",
  theme = defaultTheme,
  variant = "center",
}: DividerWithIconButtonProps) => (
  <SpacingEmailShell preview={label} theme={theme}>
    <DividerWithIconButtonSection
      href={href}
      icon={icon}
      label={label}
      variant={variant}
    />
  </SpacingEmailShell>
);

DividerWithIconButton.PreviewProps = {
  href: "https://example.com",
  icon: "➜",
  label: "Learn More",
  theme: defaultTheme,
  variant: "center",
} satisfies DividerWithIconButtonProps;
