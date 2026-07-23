import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  BasicPillsStatusColorsSection,
  defaultPills,
} from "@/registry/bases/mjml-react/ui/ui-elements/pills/basic-pills-shared";
import type {
  PillItem,
  PillStatusVariant,
} from "@/registry/bases/mjml-react/ui/ui-elements/pills/basic-pills-shared";

export interface BasicPillsStatusColorsProps {
  pills?: PillItem[];
  theme?: EmailThemeTokens;
}

export { BasicPillsStatusColorsSection };
export type { PillItem, PillStatusVariant };

export const BasicPillsStatusColors = ({
  pills = defaultPills,
  theme = defaultTheme,
}: BasicPillsStatusColorsProps) => (
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

BasicPillsStatusColors.PreviewProps = {
  pills: defaultPills,
  theme: defaultTheme,
} satisfies BasicPillsStatusColorsProps;
