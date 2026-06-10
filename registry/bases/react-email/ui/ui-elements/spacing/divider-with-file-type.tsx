/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface DividerWithFileTypeProps {
  theme?: TailwindConfig;
  fileType?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const DividerWithFileTypeSection = ({
  fileType = "PDF",
  variant = "default",
}: Omit<DividerWithFileTypeProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className="py-6">
      <div className="flex items-center">
        <Hr className="flex-1 border-border" />
        <Text
          className={`mx-4 m-0 inline-block rounded bg-foreground-muted/10 px-2 py-1 text-xs font-medium text-foreground-muted whitespace-nowrap ${textAlign}`}
        >
          {fileType}
        </Text>
        <Hr className="flex-1 border-border" />
      </div>
    </Section>
  );
};

export const DividerWithFileType = ({
  theme = defaultTheme,
  fileType = "PDF",
  variant = "default",
}: DividerWithFileTypeProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{fileType}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <DividerWithFileTypeSection fileType={fileType} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

DividerWithFileType.PreviewProps = {
  fileType: "PDF",
  theme: defaultTheme,
  variant: "default",
} satisfies DividerWithFileTypeProps;
