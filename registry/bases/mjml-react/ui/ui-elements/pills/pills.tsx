import {
  MjmlButton,
  MjmlColumn,
  MjmlSection,
  MjmlSpacer,
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlWrapper,
} from "@faire/mjml-react";
import { Fragment } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
type PillStatusVariant =
  | "brand"
  | "danger"
  | "default"
  | "error"
  | "info"
  | "success"
  | "warning";
interface InternalPillItem {
  label: string;
  variant: PillStatusVariant;
}
const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const pillStyles: Record<
  PillStatusVariant,
  {
    backgroundColor: string;
    borderColor: string;
    color: string;
  }
> = {
  brand: {
    backgroundColor: "#eef2ff",
    borderColor: "#a5b4fc",
    color: "#6366f1",
  },
  danger: {
    backgroundColor: "#fef2f2",
    borderColor: "#fca5a5",
    color: "#ef4444",
  },
  default: {
    backgroundColor: "#f9fafb",
    borderColor: "#d1d5db",
    color: "#4b5563",
  },
  error: {
    backgroundColor: "#fef2f2",
    borderColor: "#fca5a5",
    color: "#ef4444",
  },
  info: {
    backgroundColor: "#f0f9ff",
    borderColor: "#7dd3fc",
    color: "#0ea5e9",
  },
  success: {
    backgroundColor: "#ecfdf5",
    borderColor: "#6ee7b7",
    color: "#10b981",
  },
  warning: {
    backgroundColor: "#fffbeb",
    borderColor: "#fcd34d",
    color: "#f59e0b",
  },
};
const defaultPills: InternalPillItem[] = [
  { label: "Label", variant: "default" },
  { label: "Success", variant: "success" },
  { label: "Error", variant: "error" },
  { label: "Warning", variant: "warning" },
  { label: "Info", variant: "info" },
  { label: "Brand", variant: "brand" },
];
const Pill = ({ label, variant }: InternalPillItem) => {
  const colors = pillStyles[variant];
  return (
    <MjmlButton
      align="center"
      backgroundColor={colors.backgroundColor}
      border={`1px solid ${colors.borderColor}`}
      borderRadius="9999px"
      color={colors.color}
      fontFamily={fontFamily}
      fontSize="12px"
      fontWeight="500"
      innerPadding="2px 8px"
      lineHeight="16px"
      padding="0"
    >
      {label}
    </MjmlButton>
  );
};
const BasicPillsStatusColorsSection = ({
  mjmlCompensation: _mjmlCompensation = false,
  pills = defaultPills,
}: {
  mjmlCompensation?: boolean;
  pills?: InternalPillItem[];
}) => (
  <>
    <MjmlSection padding="0">
      <MjmlColumn padding="0">
        <MjmlSpacer height="100px" padding="0" />
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection backgroundColor="#fffffe" padding="44px 24px">
      <MjmlColumn padding="0">
        {pills.map((pill, index) => (
          <Fragment key={`${pill.label}-${pill.variant}`}>
            <Pill {...pill} />
            {index < pills.length - 1 ? (
              <MjmlSpacer height="24px" padding="0" />
            ) : null}
          </Fragment>
        ))}
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection padding="0">
      <MjmlColumn padding="0">
        <MjmlSpacer height="100px" padding="0" />
      </MjmlColumn>
    </MjmlSection>
  </>
);
interface Pills_BasicPillsStatusColorsProps {
  pills?: InternalPillItem[];
  theme?: EmailThemeTokens;
}
const Pills_BasicPillsStatusColors = ({
  pills = defaultPills,
  theme = defaultTheme,
}: Pills_BasicPillsStatusColorsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Basic pills with status colors</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <BasicPillsStatusColorsSection mjmlCompensation pills={pills} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
Pills_BasicPillsStatusColors.PreviewProps = {
  pills: defaultPills,
  theme: defaultTheme,
} satisfies Pills_BasicPillsStatusColorsProps;
const __Pills = Pills_BasicPillsStatusColors;
export interface PillItem {
  label: string;
  status?:
    | "brand"
    | "danger"
    | "default"
    | "error"
    | "info"
    | "success"
    | "warning";
}
export interface PillsProps {
  theme?: Parameters<typeof __Pills>[0]["theme"];
  pills?: PillItem[];
}
export const Pills = ({ theme, pills }: PillsProps) => (
  <__Pills
    pills={pills?.map(({ label, status = "default" }) => ({
      label,
      variant: status,
    }))}
    theme={theme}
  />
);
Pills.PreviewProps = {} satisfies PillsProps;
