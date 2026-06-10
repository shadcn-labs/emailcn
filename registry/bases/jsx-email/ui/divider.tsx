import { Body, Head, Html, Preview, Section, Tailwind, Text } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

export interface DividerProps {
  label?: string;
}

export const DividerSection = ({ label }: Pick<DividerProps, "label">) => (
  <Section style={{ paddingBottom: "24px", paddingTop: "24px" }}>
    {label ? (
      <Text
        style={{
          color: defaultTheme.colorTextMuted,
          fontSize: defaultTheme.fontSizeSm,
          textAlign: "center",
        }}
      >
        {label}
      </Text>
    ) : (
      <Section
        style={{ borderBottom: `1px solid ${defaultTheme.colorBorder}` }}
      />
    )}
  </Section>
);

export const Divider = ({ label }: DividerProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{label ?? "—"}</Preview>
    <Tailwind>
      <Body
        style={{
          backgroundColor: defaultTheme.colorBackground,
          fontFamily: defaultTheme.fontFamily,
          margin: 0,
        }}
      >
        <DividerSection label={label} />
      </Body>
    </Tailwind>
  </Html>
);

Divider.PreviewProps = {
  label: "— or —",
} satisfies DividerProps;
