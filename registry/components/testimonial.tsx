import { Column, Img, Row, Section, Text } from "react-email";
import type { EmailTheme } from "../themes/default";
import { theme as defaultTheme } from "../themes/default";

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
  const style = {
    avatar: {
      borderRadius: "50%",
      height: 56,
      objectFit: "cover" as const,
      width: 56,
    },
    companyLogo: {
      height: "auto",
      marginTop: theme.spacingBase,
      maxWidth: 80,
    } as const,
    info: {
      paddingLeft: theme.spacingBase,
    },
    name: {
      color: theme.colorText,
      fontSize: theme.fontSizeBase,
      fontWeight: theme.fontWeightMedium,
      marginBottom: "4px",
    },
    quote: {
      color: theme.colorText,
      fontSize: theme.fontSizeLg,
      fontStyle: "italic",
      lineHeight: theme.lineHeightBase,
      marginTop: theme.spacingBase,
    },
    role: {
      color: theme.colorTextMuted,
      fontSize: theme.fontSizeSm,
    },
    section: {
      backgroundColor: theme.colorBackgroundMuted,
      border: `1px solid ${theme.colorBorder}`,
      borderRadius: theme.borderRadius,
      padding: theme.spacingLg,
    },
  };

  return (
    <Section style={style.section}>
      <Text style={style.quote}>"{quote}"</Text>
      <Row style={{ marginTop: theme.spacingBase }}>
        <Column>{avatarUrl && <Img src={avatarUrl} alt={name} style={style.avatar} />}</Column>
        <Column style={style.info}>
          <Text style={style.name}>{name}</Text>
          <Text style={style.role}>{role}</Text>
        </Column>
      </Row>
      {companyLogoUrl && <Img src={companyLogoUrl} alt="Company" style={style.companyLogo} />}
    </Section>
  );
};

Testimonial.PreviewProps = {
  avatarUrl: "https://example.com/avatar.jpg",
  companyLogoUrl: "https://example.com/company.png",
  name: "Sarah Smith",
  quote: "This tool has saved us countless hours and made our team more productive.",
  role: "Product Manager, TechCorp",
  theme: defaultTheme,
} satisfies TestimonialProps;

export default Testimonial;
