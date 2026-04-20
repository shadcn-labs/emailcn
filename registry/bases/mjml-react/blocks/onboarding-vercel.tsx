// MJML parity block — mirrored from react-email (onboarding-vercel.tsx)
import { MjmlColumn, MjmlSection, MjmlText } from "@faire/mjml-react";

import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { theme as vercelTheme } from "@/registry/themes/vercel";

interface Props {}

export const OnboardingVercel = (_props: Props) => {
  const theme = vercelTheme;
  const t = resolveEmailTheme(theme);
  return (
    <MjmlEmailDocument preview="Email preview" theme={theme}>
      <MjmlSection padding={`${t.spacing.xl ?? "24px"} 0`}>
        <MjmlColumn>
          <MjmlText color={t.colors.foreground} fontFamily={t.fontFamily.sans}>
            MJML parity placeholder for onboarding-vercel.tsx — replace with
            full markup.
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlEmailDocument>
  );
};

OnboardingVercel.PreviewProps = {} satisfies Props;
export default OnboardingVercel;
