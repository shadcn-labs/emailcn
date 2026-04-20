// MJML parity block — mirrored from react-email (onboarding-linear.tsx)
import { MjmlColumn, MjmlSection, MjmlText } from "@faire/mjml-react";

import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { theme as linearTheme } from "@/registry/themes/linear";

interface Props {}

export const OnboardingLinear = (_props: Props) => {
  const theme = linearTheme;
  const t = resolveEmailTheme(theme);
  return (
    <MjmlEmailDocument preview="Email preview" theme={theme}>
      <MjmlSection padding={`${t.spacing.xl ?? "24px"} 0`}>
        <MjmlColumn>
          <MjmlText color={t.colors.foreground} fontFamily={t.fontFamily.sans}>
            MJML parity placeholder for onboarding-linear.tsx — replace with
            full markup.
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlEmailDocument>
  );
};

OnboardingLinear.PreviewProps = {} satisfies Props;
export default OnboardingLinear;
