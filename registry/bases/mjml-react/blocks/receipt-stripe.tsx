// MJML parity block — mirrored from react-email (receipt-stripe.tsx)
import { MjmlColumn, MjmlSection, MjmlText } from "@faire/mjml-react";

import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { theme as stripeTheme } from "@/registry/themes/stripe";

interface Props {}

export const ReceiptStripe = (_props: Props) => {
  const theme = stripeTheme;
  const t = resolveEmailTheme(theme);
  return (
    <MjmlEmailDocument preview="Email preview" theme={theme}>
      <MjmlSection padding={`${t.spacing.xl ?? "24px"} 0`}>
        <MjmlColumn>
          <MjmlText color={t.colors.foreground} fontFamily={t.fontFamily.sans}>
            MJML parity placeholder for receipt-stripe.tsx — replace with full
            markup.
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlEmailDocument>
  );
};

ReceiptStripe.PreviewProps = {} satisfies Props;
export default ReceiptStripe;
