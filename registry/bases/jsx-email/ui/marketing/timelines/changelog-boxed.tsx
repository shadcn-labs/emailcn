import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import { ChangelogSection } from "@/registry/bases/jsx-email/ui/marketing/timelines/changelog";
import type {
  ChangelogProps,
  ChangelogVariant,
} from "@/registry/bases/jsx-email/ui/marketing/timelines/changelog";

export type ChangelogBoxedVariant = ChangelogVariant;
export type ChangelogBoxedProps = Omit<ChangelogProps, "layout">;

export const ChangelogBoxedSection = (
  props: Omit<ChangelogBoxedProps, "theme">
) => <ChangelogSection {...props} layout="boxed" />;

export const ChangelogBoxed = ({
  theme: _theme = defaultTheme,
  ...props
}: ChangelogBoxedProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Refined layouts</Preview>
    <Body style={{ margin: 0 }}>
      <ChangelogBoxedSection {...props} />
    </Body>
  </Html>
);

ChangelogBoxed.PreviewProps = {
  theme: defaultTheme,
  variant: "muted-left",
} satisfies ChangelogBoxedProps;
