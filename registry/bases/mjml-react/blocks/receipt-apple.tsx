// MJML parity block — mirrored from react-email (receipt-apple.tsx)
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

import { appleTheme } from "@/registry/bases/mjml-react/themes/apple";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

type Props = Record<string, never>;

export const ReceiptApple = (_props: Props) => {
  const theme: EmailThemeTokens = appleTheme;

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
                MJML parity placeholder for receipt-apple.tsx — replace with
                full markup.
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

ReceiptApple.PreviewProps = {} satisfies Props;
