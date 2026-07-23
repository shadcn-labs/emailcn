import { Fragment } from "react";
import { Link, Text, Section, Row, Column } from "react-email";
import type { TailwindConfig } from "react-email";

import { defaultTheme } from "@/registry/bases/react-email/themes/default";

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
  theme?: TailwindConfig;
  variant?: DividerVariant;
}

export const DividerWithIconButtonSection = ({
  href = "#",
  icon = "➜",
  label = "Learn More",
  variant = "center",
}: Omit<DividerWithIconButtonProps, "theme">) => (
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
