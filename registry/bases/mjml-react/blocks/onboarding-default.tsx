// MJML parity block — mirrored from react-email (onboarding-default.tsx)
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

type Props = Record<string, never>;

export const OnboardingDefault = (_props: Props) => {
  const theme: EmailThemeTokens = defaultTheme;

  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>Email preview</MjmlPreview>
        <MjmlAttributes>
          <MjmlAll color={theme.colorText} fontFamily={theme.fontFamily} />
          <MjmlText
            fontSize={theme.fontSizeBase}
            lineHeight={theme.lineHeightBase}
          />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody
        backgroundColor={theme.colorBackground}
        width={theme.containerWidth}
      >
        <MjmlWrapper padding="0">
          <MjmlSection padding={`${theme.spacingXl ?? "24px"} 0`}>
            <MjmlColumn>
              <MjmlText color={theme.colorText} fontFamily={theme.fontFamily}>
                MJML parity placeholder for onboarding-default.tsx — replace
                with full markup.
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

OnboardingDefault.PreviewProps = {} satisfies Props;
