import { Fragment } from "react";
import type { CSSProperties } from "react";
import {
  Section,
  Body,
  Head as EmailHead,
  Html,
  Preview,
  Tailwind,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { defaultTheme } from "@/registry/bases/react-email/themes/theme-default";

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

type EmailCssProperties = CSSProperties & {
  msoPaddingAlt?: string;
  msoTextRaise?: string;
};

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
  const style: EmailCssProperties = {
    backgroundColor: colors.backgroundColor,
    border: `1px solid ${colors.borderColor}`,
    borderRadius: "9999px",
    color: colors.color,
    display: "inline-block",
    fontFamily,
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "16px",
    msoPaddingAlt: "0",
    msoTextRaise: "2px",
    padding: "2px 8px",
  };
  return (
    <span style={style}>
      {" "}
      <span /> <span>{label}</span> <span />
    </span>
  );
};

const BasicPillsStatusColorsSection = ({
  mjmlCompensation = false,
  pills = defaultPills,
}: {
  mjmlCompensation?: boolean;
  pills?: InternalPillItem[];
}) => (
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
        style={{
          paddingBottom: "44px",
          paddingTop: "44px",
          textAlign: "center",
          width: "100%",
        }}
      >
        {mjmlCompensation ? <Section style={{ height: "1px" }} /> : null}
        {pills.map((pill, index) => (
          <Fragment key={`${pill.label}-${pill.variant}`}>
            <Pill {...pill} />
            {(() => {
              if (index < pills.length - 1) {
                return (
                  <Section
                    style={{ lineHeight: mjmlCompensation ? "25px" : "24px" }}
                  >
                    &zwj;
                  </Section>
                );
              }
              return null;
            })()}
          </Fragment>
        ))}
      </Section>
    </Section>
    <Section style={{ height: "100px" }} />
  </>
);

interface Pills_BasicPillsStatusColorsProps {
  pills?: InternalPillItem[];
  theme?: TailwindConfig;
}

const Pills_BasicPillsStatusColors = ({
  pills = defaultPills,
  theme = defaultTheme,
}: Pills_BasicPillsStatusColorsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Basic pills with status colors</Preview>
    <Tailwind config={theme}>
      <Body className="m-0">
        <BasicPillsStatusColorsSection pills={pills} />
      </Body>
    </Tailwind>
  </Html>
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
