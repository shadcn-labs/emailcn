// MJML parity block — mirrored from react-email (receipt-nike.tsx)
import { MjmlColumn, MjmlSection, MjmlText } from "@faire/mjml-react";

import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { theme as defaultTheme } from "@/registry/themes/default";
import { mergeEmailThemes } from "@/registry/themes/merge";

interface Props {}

export const ReceiptNike = (_props: Props) => {
  const theme = mergeEmailThemes(defaultTheme, {
    theme: {
      extend: {
        colors: {
          primary: { DEFAULT: "#111111", fg: "#ffffff", hover: "#000000" },
        },
      },
    },
  });
  const t = resolveEmailTheme(theme);
  return (
    <MjmlEmailDocument preview="Email preview" theme={theme}>
      <MjmlSection padding={`${t.spacing.xl ?? "24px"} 0`}>
        <MjmlColumn>
          <MjmlText color={t.colors.foreground} fontFamily={t.fontFamily.sans}>
            MJML parity placeholder for receipt-nike.tsx — replace with full
            markup.
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlEmailDocument>
  );
};

ReceiptNike.PreviewProps = {} satisfies Props;

export default ReceiptNike;
