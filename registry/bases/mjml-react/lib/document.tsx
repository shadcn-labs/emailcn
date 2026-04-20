import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlHead,
  MjmlPreview,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { ReactNode } from "react";
import type { TailwindConfig } from "react-email";

import { resolveEmailTheme } from "@/registry/lib/resolve-theme";

export interface MjmlEmailDocumentProps {
  theme: TailwindConfig;
  preview?: string;
  title?: string;
  children: ReactNode;
}

export function MjmlEmailDocument({
  theme,
  preview,
  title,
  children,
}: MjmlEmailDocumentProps) {
  const t = resolveEmailTheme(theme);

  const container =
    typeof t.maxWidth.container === "string"
      ? Number.parseInt(String(t.maxWidth.container).replaceAll(/\D/g, ""), 10)
      : 600;
  const width = Number.isFinite(container) && container > 0 ? container : 600;

  const fg = t.colors.foreground ?? "#111827";
  const bg = t.colors.background ?? "#ffffff";
  const sans = t.fontFamily.sans ?? "sans-serif";
  const baseFs = t.fontSize.base ?? "14px";
  const lh = t.lineHeight.snug ?? "1.375";

  return (
    <Mjml>
      <MjmlHead>
        {(preview ?? title) ? (
          <MjmlPreview>{preview ?? title}</MjmlPreview>
        ) : null}
        <MjmlAttributes>
          <MjmlAll color={fg} fontFamily={sans} />
          <MjmlText fontSize={baseFs} lineHeight={lh} />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody backgroundColor={bg} width={width}>
        <MjmlWrapper padding="0">{children}</MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
}
