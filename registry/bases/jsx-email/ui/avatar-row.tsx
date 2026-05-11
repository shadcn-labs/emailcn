import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

export interface AvatarRowProps {
  avatarUrl?: string;
  name?: string;
  title?: string;
  companyName?: string;
}

export const AvatarRowSection = ({
  avatarUrl,
  name = "John Doe",
  title = "Product Designer",
  companyName = "Acme Inc.",
}: Omit<AvatarRowProps, "theme">) => (
  <Section>
    <Container style={{ maxWidth: defaultTheme.containerWidth }}>
      <Row>
        <Column>
          {avatarUrl ? (
            <Img
              src={avatarUrl}
              alt={name}
              height={64}
              width={64}
              style={{
                borderRadius: "9999px",
                objectFit: "cover",
              }}
            />
          ) : (
            <Text
              style={{
                backgroundColor: defaultTheme.colorPrimary,
                borderRadius: "9999px",
                color: defaultTheme.colorPrimaryForeground,
                fontSize: "24px",
                height: "64px",
                lineHeight: "64px",
                margin: 0,
                textAlign: "center",
                width: "64px",
              }}
            >
              {name.charAt(0)}
            </Text>
          )}
        </Column>
        <Column style={{ paddingLeft: "24px" }}>
          <Text
            style={{
              color: defaultTheme.colorText,
              fontSize: defaultTheme.fontSizeLg,
              fontWeight: defaultTheme.fontWeightMedium,
              marginBottom: "4px",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              color: defaultTheme.colorTextMuted,
              fontSize: defaultTheme.fontSizeBase,
              margin: 0,
            }}
          >
            {title}
          </Text>
          {companyName ? (
            <Text
              style={{
                color: defaultTheme.colorTextMuted,
                fontSize: defaultTheme.fontSizeSm,
                marginTop: "4px",
              }}
            >
              {companyName}
            </Text>
          ) : null}
        </Column>
      </Row>
    </Container>
  </Section>
);

export const AvatarRow = ({
  avatarUrl,
  name = "John Doe",
  title = "Product Designer",
  companyName = "Acme Inc.",
}: AvatarRowProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{name}</Preview>
    <Tailwind>
      <Body
        style={{
          backgroundColor: defaultTheme.colorBackground,
          fontFamily: defaultTheme.fontFamily,
          margin: 0,
        }}
      >
        <AvatarRowSection
          avatarUrl={avatarUrl}
          companyName={companyName}
          name={name}
          title={title}
        />
      </Body>
    </Tailwind>
  </Html>
);

AvatarRow.PreviewProps = {
  avatarUrl: "https://example.com/avatar.jpg",
  companyName: "TechCorp",
  name: "Alex Johnson",
  title: "Senior Engineer",
} satisfies AvatarRowProps;
