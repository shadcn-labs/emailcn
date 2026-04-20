import {
  Column,
  Container,
  Img,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";

import type { EmailTheme } from "@/registry/themes/default";
import { theme as defaultTheme } from "@/registry/themes/default";

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
}: AvatarRowProps) => (
  <Tailwind config={theme}>
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
  </Tailwind>
);

AvatarRow.PreviewProps = {
  avatarUrl: "https://example.com/avatar.jpg",
  companyName: "TechCorp",
  name: "Alex Johnson",
  theme: defaultTheme,
  title: "Senior Engineer",
} satisfies AvatarRowProps;

export default AvatarRow;
