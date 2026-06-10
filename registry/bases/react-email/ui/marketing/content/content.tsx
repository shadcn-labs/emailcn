/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
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
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface ContentProps {
  theme?: TailwindConfig;
  type?: "title" | "paragraph";
  columns?: 1 | 2;
  withIcons?: boolean;
  padding?: "regular" | "large";
  title?: string;
  text?: string;
  column1?: string;
  column2?: string;
  iconSrc1?: string;
  iconAlt1?: string;
  iconSrc2?: string;
  iconAlt2?: string;
}

export const ContentSection = ({
  type = "paragraph",
  columns = 1,
  withIcons = false,
  padding = "regular",
  title = "Section Title",
  text = "This is a paragraph used to present information in a clear and readable way.",
  column1 = "This is the first column of a two-column paragraph layout.",
  column2 = "This is the second column of a two-column paragraph layout.",
  iconSrc1,
  iconAlt1 = "Icon 1",
  iconSrc2,
  iconAlt2 = "Icon 2",
}: Omit<ContentProps, "theme">) => {
  const py = padding === "large" ? "py-16" : "py-8";

  if (type === "title") {
    return (
      <Section className={`bg-background ${py}`}>
        <Container className="mx-auto max-w-container text-center">
          <Text className="m-0 text-2xl font-bold text-heading leading-snug text-foreground">
            {title}
          </Text>
        </Container>
      </Section>
    );
  }

  if (columns === 2) {
    const columnClass = withIcons
      ? "w-1/2 text-center align-top"
      : "w-1/2 align-top";

    return (
      <Section className={`bg-background ${py}`}>
        <Container className="mx-auto max-w-container">
          <Row>
            <Column className={`pr-4 ${columnClass}`}>
              {withIcons && iconSrc1 ? (
                <Img
                  src={iconSrc1}
                  alt={iconAlt1}
                  width="24"
                  height="24"
                  className="mx-auto mb-3 h-auto object-contain"
                />
              ) : null}
              <Text className="m-0 text-base leading-relaxed text-foreground-muted">
                {column1}
              </Text>
            </Column>
            <Column className={`pl-4 ${columnClass}`}>
              {withIcons && iconSrc2 ? (
                <Img
                  src={iconSrc2}
                  alt={iconAlt2}
                  width="24"
                  height="24"
                  className="mx-auto mb-3 h-auto object-contain"
                />
              ) : null}
              <Text className="m-0 text-base leading-relaxed text-foreground-muted">
                {column2}
              </Text>
            </Column>
          </Row>
        </Container>
      </Section>
    );
  }

  return (
    <Section className={`bg-background ${py}`}>
      <Container className="mx-auto max-w-container text-center">
        <Text className="m-0 text-base leading-relaxed text-foreground-muted">
          {text}
        </Text>
      </Container>
    </Section>
  );
};

export const Content = ({
  theme = defaultTheme,
  type = "paragraph",
  columns = 1,
  withIcons = false,
  padding = "regular",
  title,
  text,
  column1,
  column2,
  iconSrc1,
  iconAlt1,
  iconSrc2,
  iconAlt2,
}: ContentProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{type === "title" ? (title ?? "Title") : "Content"}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ContentSection
          type={type}
          columns={columns}
          withIcons={withIcons}
          padding={padding}
          title={title}
          text={text}
          column1={column1}
          column2={column2}
          iconSrc1={iconSrc1}
          iconAlt1={iconAlt1}
          iconSrc2={iconSrc2}
          iconAlt2={iconAlt2}
        />
      </Body>
    </Tailwind>
  </Html>
);

Content.PreviewProps = {
  columns: 1,
  padding: "regular",
  text: "This is a paragraph used to present information in a clear and readable way.",
  theme: defaultTheme,
  type: "paragraph",
  withIcons: false,
} satisfies ContentProps;
