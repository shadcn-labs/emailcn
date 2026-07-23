import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import { ChangelogSection } from "@/registry/bases/mjml-react/ui/marketing/timelines/changelog";
import type {
  ChangelogProps,
  ChangelogVariant,
} from "@/registry/bases/mjml-react/ui/marketing/timelines/changelog";

export type ChangelogBoxedVariant = ChangelogVariant;
export type ChangelogBoxedProps = Omit<ChangelogProps, "layout">;

export const ChangelogBoxedSection = (
  props: Omit<ChangelogBoxedProps, "theme">
) => <ChangelogSection {...props} layout="boxed" />;

export const ChangelogBoxed = ({
  theme = defaultTheme,
  ...props
}: ChangelogBoxedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Refined layouts</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <div style={{ textAlign: "left" }}>
            <ChangelogBoxedSection {...props} />
          </div>
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ChangelogBoxed.PreviewProps = {
  theme: defaultTheme,
  variant: "muted-left",
} satisfies ChangelogBoxedProps;
