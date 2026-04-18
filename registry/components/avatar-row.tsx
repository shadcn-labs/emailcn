import { Column, Container, Img, Row, Section, Text } from "react-email";

import type { EmailTheme } from "../themes/default";
import { theme as defaultTheme } from "../themes/default";

export interface AvatarRowProps {
  theme?: EmailTheme;
  avatarUrl?: string;
  name?: string;
  title?: string;
  companyName?: string;
}

export const AvatarRow = ({
  theme = defaultTheme,
  avatarUrl,
  name = "John Doe",
  title = "Product Designer",
  companyName = "Acme Inc.",
}: AvatarRowProps) => {
  const style = {
    avatar: {
      borderRadius: "50%",
      height: 64,
      objectFit: "cover" as const,
      width: 64,
    },
    company: {
      color: theme.colorTextMuted,
      fontSize: theme.fontSizeSm,
      marginTop: "4px",
    },
    info: {
      paddingLeft: theme.spacingBase,
    },
    name: {
      color: theme.colorText,
      fontSize: theme.fontSizeLg,
      fontWeight: theme.fontWeightMedium,
      marginBottom: "4px",
    },
    title: {
      color: theme.colorTextMuted,
      fontSize: theme.fontSizeBase,
    },
  };

  return (
    <Section>
      <Container>
        <Row>
          <Column>
            {avatarUrl ? (
              <Img src={avatarUrl} alt={name} style={style.avatar} />
            ) : (
              <Text
                style={{
                  ...style.avatar,
                  backgroundColor: theme.colorPrimary,
                  color: theme.colorPrimaryForeground,
                  lineHeight: "64px",
                  textAlign: "center",
                }}
              >
                {name.charAt(0)}
              </Text>
            )}
          </Column>
          <Column style={style.info}>
            <Text style={style.name}>{name}</Text>
            <Text style={style.title}>{title}</Text>
            {companyName && <Text style={style.company}>{companyName}</Text>}
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

AvatarRow.PreviewProps = {
  avatarUrl: "https://example.com/avatar.jpg",
  companyName: "TechCorp",
  name: "Alex Johnson",
  theme: defaultTheme,
  title: "Senior Engineer",
} satisfies AvatarRowProps;

export default AvatarRow;
