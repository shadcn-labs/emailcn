import {
  MjmlColumn,
  MjmlImage,
  MjmlSection,
  MjmlText,
} from "@faire/mjml-react";

import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import type { EmailTheme } from "@/registry/themes/default";
import { theme as defaultTheme } from "@/registry/themes/default";

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

  return (
    <MjmlSection
      backgroundColor={t.colors["background-muted"]}
      border={`1px solid ${t.colors.border}`}
      borderRadius={t.borderRadius.md}
      padding={t.spacing.lg ?? "24px"}
    >
      <MjmlColumn>
        <MjmlText
          color={t.colors.foreground}
          fontFamily={t.fontFamily.sans}
          fontSize={t.fontSize.lg ?? "16px"}
          fontStyle="italic"
          lineHeight={t.lineHeight.snug}
          paddingBottom={t.spacing.lg}
        >
          &ldquo;{quote}&rdquo;
        </MjmlText>
        <MjmlSection padding="0">
          <MjmlColumn width="56px">
            {avatarUrl ? (
              <MjmlImage
                alt={name}
                borderRadius="999px"
                height={56}
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
              paddingBottom={t.spacing.sm}
            >
              {name}
            </MjmlText>
            <MjmlText
              color={t.colors["foreground-muted"]}
              fontFamily={t.fontFamily.sans}
              fontSize={t.fontSize.sm ?? "12px"}
            >
              {role}
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        {companyLogoUrl ? (
          <MjmlImage
            alt="Company"
            paddingTop={t.spacing.lg}
            src={companyLogoUrl}
            width={80}
          />
        ) : null}
      </MjmlColumn>
    </MjmlSection>
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

export default Testimonial;
