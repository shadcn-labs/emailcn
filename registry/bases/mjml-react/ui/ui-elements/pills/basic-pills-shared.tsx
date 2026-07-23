import {
  MjmlButton,
  MjmlColumn,
  MjmlSection,
  MjmlSpacer,
} from "@faire/mjml-react";
import { Fragment } from "react";

export type PillStatusVariant =
  | "brand"
  | "danger"
  | "default"
  | "error"
  | "info"
  | "success"
  | "warning";

export interface PillItem {
  label: string;
  variant: PillStatusVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const pillStyles: Record<
  PillStatusVariant,
  { backgroundColor: string; borderColor: string; color: string }
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

export const defaultPills: PillItem[] = [
  { label: "Label", variant: "default" },
  { label: "Success", variant: "success" },
  { label: "Error", variant: "error" },
  { label: "Warning", variant: "warning" },
  { label: "Info", variant: "info" },
  { label: "Brand", variant: "brand" },
];

const Pill = ({ label, variant }: PillItem) => {
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

export const BasicPillsStatusColorsSection = ({
  mjmlCompensation: _mjmlCompensation = false,
  pills = defaultPills,
}: {
  mjmlCompensation?: boolean;
  pills?: PillItem[];
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
