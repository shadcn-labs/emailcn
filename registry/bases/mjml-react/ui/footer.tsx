import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlDivider,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { defaultTheme } from "@/registry/themes/default";
import type { EmailTheme } from "@/registry/themes/define";

export interface FooterProps {
  theme?: EmailTheme;
  companyName?: string;
  address?: string;
  links?: { label: string; href: string }[];
  unsubscribeHref?: string;
}

export const Footer = ({
  theme = defaultTheme,
  companyName = "Acme",
  address = "123 Main St, San Francisco, CA",
  links = [
    { href: "#", label: "Privacy" },
    { href: "#", label: "Terms" },
  ],
  unsubscribeHref = "#",
}: FooterProps) => {
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
        <MjmlPreview>footer</MjmlPreview>
        <MjmlAttributes>
          <MjmlAll color={fg} fontFamily={sans} />
          <MjmlText fontSize={baseFs} lineHeight={lh} />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody backgroundColor={bg} width={width}>
        <MjmlWrapper padding="0">
          <MjmlSection padding={`${t.spacing.xl ?? "24px"} 0`}>
            <MjmlDivider
              borderColor={t.colors.border}
              paddingBottom={t.spacing.md}
            />
            <MjmlColumn>
              <MjmlText
                color={t.colors["foreground-muted"]}
                fontFamily={t.fontFamily.sans}
                fontSize={t.fontSize.sm ?? "12px"}
                lineHeight={t.lineHeight.snug}
              >
                © {new Date().getFullYear()} {companyName}. All rights reserved.
              </MjmlText>
              {address ? (
                <MjmlText
                  color={t.colors["foreground-muted"]}
                  fontFamily={t.fontFamily.sans}
                  fontSize={t.fontSize.sm ?? "12px"}
                  paddingTop={t.spacing.sm}
                >
                  {address}
                </MjmlText>
              ) : null}
              <MjmlText
                color={t.colors["foreground-muted"]}
                fontFamily={t.fontFamily.sans}
                fontSize={t.fontSize.sm ?? "12px"}
                paddingTop={t.spacing.sm}
              >
                {links.map((link) => (
                  <span key={`${link.href}-${link.label}`}>
                    <a
                      href={link.href}
                      style={{ color: "inherit", marginRight: 24 }}
                    >
                      {link.label}
                    </a>
                  </span>
                ))}
              </MjmlText>
              <MjmlText paddingTop={t.spacing.lg}>
                <a
                  href={unsubscribeHref}
                  style={{
                    color: t.colors["foreground-muted"],
                    fontSize: t.fontSize.sm ?? "12px",
                    textDecoration: "underline",
                  }}
                >
                  Unsubscribe
                </a>
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

Footer.PreviewProps = {
  address: "123 Main Street, San Francisco, CA 94105",
  companyName: "Acme Inc.",
  links: [
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#terms", label: "Terms of Service" },
  ],
  theme: defaultTheme,
  unsubscribeHref: "#unsubscribe",
} satisfies FooterProps;
