import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { defaultTheme } from "@/registry/themes/default";
import type { EmailTheme } from "@/registry/themes/define";

export interface TestimonialProps {
  theme?: EmailTheme;
  avatarUrl?: string;
  name?: string;
  role?: string;
  quote?: string;
  companyLogoUrl?: string;
}

export const Testimonial = ({
  theme = defaultTheme,
  avatarUrl,
  name = "John Doe",
  role = "CEO, Acme",
  quote = "This product has transformed how we work.",
  companyLogoUrl,
}: TestimonialProps) => {
  const t = resolveEmailTheme(theme);

  const container =
    typeof t.maxWidth.container === "string"
      ? Number.parseInt(String(t.maxWidth.container).replaceAll(/\D/g, ""), 10)
      : 600;
  const width = Number.isFinite(container) && container > 0 ? container : 600;

  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>testimonial</MjmlPreview>
        <MjmlAttributes>
          <MjmlAll
            color={t.colors.foreground}
            fontFamily={t.colors.background}
          />
          <MjmlText fontSize={t.fontSize.base} lineHeight={t.lineHeight.snug} />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody backgroundColor={t.colors.background} width={width}>
        <MjmlWrapper
          backgroundColor={t.colors["background-muted"]}
          border={`1px solid ${t.colors.border}`}
          borderRadius={t.borderRadius.md}
          padding={t.spacing.lg ?? "24px"}
        >
          <MjmlSection padding="0">
            <MjmlColumn>
              <MjmlText
                color={t.colors.foreground}
                fontFamily={t.fontFamily.sans}
                fontSize={t.fontSize.lg ?? "16px"}
                fontStyle="italic"
                lineHeight={t.lineHeight.snug}
                padding={`0 0 ${t.spacing.lg ?? "24px"}`}
              >
                &ldquo;{quote}&rdquo;
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection padding="0">
            <MjmlColumn width="56px">
              {avatarUrl ? (
                <MjmlImage
                  alt={name}
                  borderRadius="999px"
                  height={56}
                  padding="0"
                  src={avatarUrl}
                  width={56}
                />
              ) : null}
            </MjmlColumn>
            <MjmlColumn>
              <MjmlText
                color={t.colors.foreground}
                fontFamily={t.fontFamily.sans}
                fontSize={t.fontSize.base ?? "14px"}
                fontWeight={t.fontWeight.medium ?? "500"}
                padding={`0 0 ${t.spacing.sm ?? "12px"} ${t.spacing.md ?? "24px"}`}
              >
                {name}
              </MjmlText>
              <MjmlText
                color={t.colors["foreground-muted"]}
                fontFamily={t.fontFamily.sans}
                fontSize={t.fontSize.sm ?? "12px"}
                padding={`0 0 0 ${t.spacing.md ?? "24px"}`}
              >
                {role}
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
          {companyLogoUrl ? (
            <MjmlSection padding={`${t.spacing.lg ?? "24px"} 0 0`}>
              <MjmlColumn>
                <MjmlImage
                  alt="Company"
                  padding="0"
                  src={companyLogoUrl}
                  width={80}
                />
              </MjmlColumn>
            </MjmlSection>
          ) : null}
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

Testimonial.PreviewProps = {
  avatarUrl: "https://example.com/avatar.jpg",
  companyLogoUrl: "https://example.com/company.png",
  name: "Sarah Smith",
  quote:
    "This tool has saved us countless hours and made our team more productive.",
  role: "Product Manager, TechCorp",
  theme: defaultTheme,
} satisfies TestimonialProps;
