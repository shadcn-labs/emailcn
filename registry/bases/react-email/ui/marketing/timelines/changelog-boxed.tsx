import { Body, Head, Html, Preview, Tailwind } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import { ChangelogSection } from "@/registry/bases/react-email/ui/marketing/timelines/changelog";
import type {
  ChangelogProps,
  ChangelogVariant,
} from "@/registry/bases/react-email/ui/marketing/timelines/changelog";

export type ChangelogBoxedVariant = ChangelogVariant;
export type ChangelogBoxedProps = Omit<ChangelogProps, "layout">;

export const ChangelogBoxedSection = (
  props: Omit<ChangelogBoxedProps, "theme">
) => <ChangelogSection {...props} layout="boxed" />;

export const ChangelogBoxed = ({
  theme = defaultTheme,
  ...props
}: ChangelogBoxedProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Refined layouts</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ChangelogBoxedSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

ChangelogBoxed.PreviewProps = {
  theme: defaultTheme,
  variant: "muted-left",
} satisfies ChangelogBoxedProps;
