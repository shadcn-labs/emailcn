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
} from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/themes/default";
import type { EmailTheme } from "@/registry/themes/define";

export interface AvatarRowProps {
  theme?: EmailTheme;
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
    <Container>
      <Row>
        <Column>
          {avatarUrl ? (
            <Img
              src={avatarUrl}
              alt={name}
              height={64}
              width={64}
              className="rounded-full object-cover"
            />
          ) : (
            <Text className="h-16 w-16 rounded-full bg-primary text-center text-2xl leading-[64px] text-primary-fg">
              {name.charAt(0)}
            </Text>
          )}
        </Column>
        <Column className="pl-6">
          <Text className="mb-1 text-lg font-medium text-foreground">
            {name}
          </Text>
          <Text className="text-base text-foreground-muted">{title}</Text>
          {companyName ? (
            <Text className="mt-1 text-sm text-foreground-muted">
              {companyName}
            </Text>
          ) : null}
        </Column>
      </Row>
    </Container>
  </Section>
);

export const AvatarRow = ({
  theme = defaultTheme,
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
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
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
  theme: defaultTheme,
  title: "Senior Engineer",
} satisfies AvatarRowProps;
