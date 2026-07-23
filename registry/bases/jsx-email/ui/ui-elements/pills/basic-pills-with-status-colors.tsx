import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import {
  BasicPillsStatusColorsSection,
  defaultPills,
} from "@/registry/bases/jsx-email/ui/ui-elements/pills/basic-pills-shared";
import type {
  PillItem,
  PillStatusVariant,
} from "@/registry/bases/jsx-email/ui/ui-elements/pills/basic-pills-shared";

export interface BasicPillsStatusColorsProps {
  pills?: PillItem[];
  theme?: EmailThemeTokens;
}

export { BasicPillsStatusColorsSection };
export type { PillItem, PillStatusVariant };

export const BasicPillsStatusColors = ({
  pills = defaultPills,
  theme: _theme = defaultTheme,
}: BasicPillsStatusColorsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Basic pills with status colors</Preview>
    <Body style={{ margin: 0 }}>
      <BasicPillsStatusColorsSection pills={pills} />
    </Body>
  </Html>
);

BasicPillsStatusColors.PreviewProps = {
  pills: defaultPills,
  theme: defaultTheme,
} satisfies BasicPillsStatusColorsProps;
