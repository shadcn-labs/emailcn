import {
  Body,
  Column,
  Head as EmailHead,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";
import { Fragment } from "react";
import type { ReactNode } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/font-default";
import { EmailTailwind } from "@/registry/bases/jsx-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/jsx-email/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

export type TestimonialLayout = "full-width" | "centered" | "split";
export type TestimonialAlignment = "left" | "center";
export type TestimonialAppearance = "plain" | "boxed" | "accent";
export type TestimonialAvatarTreatment = "inline" | "overlapping";
export type TestimonialPlacement = "left" | "right" | "top" | "bottom";
export type TestimonialVariant = "quote" | "text-top" | "text-bottom";

export interface TestimonialProps {
  theme?: EmailTheme;
  quote?: string;
  author?: string;
  role?: string;
  company?: string;
  avatar?: {
    src: string;
    alt?: string;
  };
  logo?: {
    src: string;
    alt?: string;
  };
  layout?: TestimonialLayout;
  alignment?: TestimonialAlignment;
  appearance?: TestimonialAppearance;
  avatarTreatment?: TestimonialAvatarTreatment;
  placement?: TestimonialPlacement;
  variant?: TestimonialVariant;
  action?: {
    href: string;
    label: string;
  };
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const assetUrl = (file: string) => emailAsset(`testimonials/${file}`);

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .testimonial-centered-content,
    .testimonial-centered-card {
      padding-left: 24px !important;
      padding-right: 24px !important;
    }
    .testimonial-centered-quote {
      font-size: 24px !important;
      line-height: 32px !important;
    }
    .testimonial-split-column {
      display: block !important;
      width: 100% !important;
    }
    .testimonial-split-gap {
      display: block !important;
      line-height: 24px !important;
      width: 100% !important;
    }
  }
`;

const Spacer = ({ height }: { height: number }) => (
  <Section style={{ lineHeight: `${height}px` }}>&zwj;</Section>
);

const AvatarImage = ({ alt = "", src }: { alt?: string; src: string }) => (
  <Img
    alt={alt}
    src={src}
    style={{
      borderRadius: "9999px",
      maxWidth: "100%",
      verticalAlign: "middle",
    }}
    width={64}
  />
);

const frame = (content: ReactNode, horizontalPadding: number) => (
  <Section style={{ backgroundColor: "#f1f5f9" }} width="100%">
    <Fragment>
      <Row>
        <Column>&zwj;</Column>
        <Column
          style={{
            backgroundColor: "#fffffe",
            maxWidth: "100%",
            paddingBottom: "44px",
            width: "600px",
          }}
        >
          <Section width="100%">
            <Fragment>
              <Row>
                <Column style={{ padding: `0 ${horizontalPadding}px` }}>
                  <Spacer height={44} />
                  {content}
                </Column>
              </Row>
            </Fragment>
          </Section>
        </Column>
        <Column>&zwj;</Column>
      </Row>
    </Fragment>
  </Section>
);

const CenteredTestimonial = ({
  action,
  author,
  avatar,
  company,
  quote,
  role,
  variant,
}: Required<
  Pick<TestimonialProps, "author" | "company" | "quote" | "role" | "variant">
> &
  Pick<TestimonialProps, "action" | "avatar">) =>
  frame(
    <Section className="testimonial-centered-content">
      {variant === "quote" ? (
        <Fragment>
          <Img
            alt=""
            src={assetUrl("quote.png")}
            style={{
              margin: "0 auto",
              maxWidth: "100%",
              verticalAlign: "middle",
            }}
            width={36}
          />
          <Spacer height={24} />
        </Fragment>
      ) : null}
      <Heading
        className="testimonial-centered-quote"
        style={{
          color: "#030712",
          fontFamily,
          fontSize: "30px",
          fontWeight: 600,
          lineHeight: "36px",
          margin: 0,
          textAlign: "center",
        }}
        as="h2"
      >
        {quote}
      </Heading>
      <Spacer height={24} />
      <Section style={{ textAlign: "center" }}>
        <AvatarImage
          alt={avatar?.alt}
          src={avatar?.src ?? assetUrl("user-1.jpg")}
        />
      </Section>
      <Spacer height={8} />
      <Text
        style={{
          color: "#4b5563",
          fontFamily,
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "24px",
          margin: 0,
          textAlign: "center",
        }}
      >
        {author}, <br />
        {role} at {company}
      </Text>
      <Spacer height={24} />
      <Text style={{ margin: 0, textAlign: "center" }}>
        <Link
          href={action?.href ?? "https://example.com"}
          style={{
            color: "#4f46e5",
            fontFamily,
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "24px",
            textDecoration: "none",
          }}
        >
          {action?.label ?? `Read ${company}'s case study`}
        </Link>
      </Text>
    </Section>,
    44
  );

const SplitIdentity = ({
  author,
  avatar,
  company,
}: Required<Pick<TestimonialProps, "author" | "company">> &
  Pick<TestimonialProps, "avatar">) => (
  <Column
    className="testimonial-split-column"
    style={{ verticalAlign: "top", width: "104px" }}
    width={104}
  >
    <AvatarImage
      alt={avatar?.alt}
      src={avatar?.src ?? assetUrl("user-1.jpg")}
    />
    <Spacer height={8} />
    <Text
      style={{
        color: "#030712",
        fontFamily,
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "24px",
        margin: 0,
      }}
    >
      {author}, <br />
      <span style={{ color: "#4b5563" }}>{company}</span>
    </Text>
  </Column>
);

const SplitQuote = ({
  action,
  company,
  quote,
}: Required<Pick<TestimonialProps, "company" | "quote">> &
  Pick<TestimonialProps, "action">) => (
  <Column className="testimonial-split-column">
    <Img
      alt=""
      src={assetUrl("quote.png")}
      style={{ maxWidth: "100%", verticalAlign: "middle" }}
      width={36}
    />
    <Spacer height={24} />
    <Heading
      style={{
        color: "#030712",
        fontFamily,
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "28px",
        margin: 0,
      }}
      as="h2"
    >
      {quote}
    </Heading>
    <Spacer height={24} />
    <Link
      href={action?.href ?? "https://example.com"}
      style={{
        color: "#4f46e5",
        fontFamily,
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "24px",
        textDecoration: "none",
      }}
    >
      {action?.label ?? `Read ${company}'s case study`}
    </Link>
  </Column>
);

const SplitTestimonial = ({
  action,
  author,
  avatar,
  company,
  placement,
  quote,
}: Required<
  Pick<TestimonialProps, "author" | "company" | "placement" | "quote">
> &
  Pick<TestimonialProps, "action" | "avatar">) => {
  const identity = (
    <SplitIdentity author={author} avatar={avatar} company={company} />
  );
  const quoteContent = (
    <SplitQuote action={action} company={company} quote={quote} />
  );
  const gap = (
    <Column
      className="testimonial-split-gap"
      style={{ width: "44px" }}
      width={44}
    >
      &zwj;
    </Column>
  );

  return frame(
    <Section width="100%">
      <Fragment>
        <Row>
          {placement === "right" ? quoteContent : identity}
          {gap}
          {placement === "right" ? identity : quoteContent}
        </Row>
      </Fragment>
    </Section>,
    24
  );
};

const InlineIdentity = ({
  alignment,
  author,
  avatar,
  role,
}: Required<Pick<TestimonialProps, "alignment" | "author" | "role">> &
  Pick<TestimonialProps, "avatar">) => {
  if (alignment === "center") {
    return (
      <Fragment>
        <Section style={{ textAlign: "center" }}>
          <AvatarImage
            alt={avatar?.alt}
            src={avatar?.src ?? assetUrl("user-2.jpg")}
          />
        </Section>
        <Spacer height={12} />
        <Text
          style={{
            color: "#030712",
            fontFamily,
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "24px",
            margin: 0,
            textAlign: "center",
          }}
        >
          {author}, <br />
          <span style={{ color: "#4b5563" }}>{role}</span>
        </Text>
      </Fragment>
    );
  }

  return (
    <Section>
      <Fragment>
        <Row>
          <Column style={{ width: "64px" }} width={64}>
            <AvatarImage
              alt={avatar?.alt}
              src={avatar?.src ?? assetUrl("user-2.jpg")}
            />
          </Column>
          <Column style={{ width: "12px" }} width={12}>
            &zwj;
          </Column>
          <Column>
            <Text
              style={{
                color: "#030712",
                fontFamily,
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                margin: 0,
              }}
            >
              {author}, <br />
              <span style={{ color: "#4b5563" }}>{role}</span>
            </Text>
          </Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const FullWidthContent = ({
  alignment,
  appearance,
  author,
  avatar,
  logo,
  quote,
  role,
}: Required<
  Pick<
    TestimonialProps,
    "alignment" | "appearance" | "author" | "quote" | "role"
  >
> &
  Pick<TestimonialProps, "avatar" | "logo">) => {
  const accent = appearance === "accent";
  let defaultLogo = "logo-monarch.png";
  let logoWidth = 145;
  if (alignment === "center") {
    defaultLogo = "logo-accentic.png";
    logoWidth = 106;
  }
  if (accent) {
    defaultLogo = "logo-accentic-light.png";
    logoWidth = 106;
  }
  const cardBackgroundColor = accent ? "#030712" : "#f8fafc";

  return (
    <Section
      className={
        appearance === "plain" ? undefined : "testimonial-centered-card"
      }
      style={{
        backgroundColor:
          appearance === "plain" ? undefined : cardBackgroundColor,
        borderRadius: appearance === "plain" ? undefined : "8px",
        padding: appearance === "plain" ? 0 : "24px 44px",
      }}
    >
      <Section style={{ textAlign: alignment }}>
        <Img
          alt={logo?.alt ?? ""}
          src={logo?.src ?? assetUrl(defaultLogo)}
          style={{ maxWidth: "100%", verticalAlign: "middle" }}
          width={logoWidth}
        />
      </Section>
      <Spacer height={24} />
      <Heading
        style={{
          color: accent ? "#fffffe" : "#030712",
          fontFamily,
          fontSize: "18px",
          fontWeight: 600,
          lineHeight: "28px",
          margin: 0,
          textAlign: alignment,
        }}
        as="h2"
      >
        {quote}
      </Heading>
      <Spacer height={24} />
      <InlineIdentity
        alignment={alignment}
        author={author}
        avatar={avatar}
        role={role}
      />
    </Section>
  );
};

const OverlappingTestimonial = ({
  alignment,
  author,
  avatar,
  logo,
  placement,
  quote,
  role,
}: Required<
  Pick<
    TestimonialProps,
    "alignment" | "author" | "placement" | "quote" | "role"
  >
> &
  Pick<TestimonialProps, "avatar" | "logo">) => {
  const avatarElement = (
    <Section
      style={{
        maxHeight: placement === "top" ? "32px" : "8px",
        textAlign: alignment,
      }}
    >
      <AvatarImage
        alt={avatar?.alt}
        src={avatar?.src ?? assetUrl("user-2.jpg")}
      />
    </Section>
  );
  const content = (
    <Section
      className="testimonial-centered-card"
      style={{
        backgroundColor: "#f8fafc",
        borderRadius: "8px",
        padding: "48px 44px 24px",
      }}
    >
      <Heading
        style={{
          color: "#030712",
          fontFamily,
          fontSize: "18px",
          fontWeight: 600,
          lineHeight: "28px",
          margin: 0,
          textAlign: alignment,
        }}
        as="h2"
      >
        {quote}
      </Heading>
      <Spacer height={24} />
      <Section style={{ textAlign: alignment }}>
        <Img
          alt={logo?.alt ?? ""}
          src={logo?.src ?? assetUrl("logo-accentic.png")}
          style={{ maxWidth: "100%", verticalAlign: "middle" }}
          width={106}
        />
      </Section>
      <Spacer height={24} />
      <Text
        style={{
          color: "#030712",
          fontFamily,
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "24px",
          margin: 0,
          textAlign: alignment,
        }}
      >
        {author}, <br />
        <span style={{ color: "#4b5563" }}>{role}</span>
      </Text>
      {placement === "bottom" ? (
        <Fragment>
          <Spacer height={24} />
          {avatarElement}
        </Fragment>
      ) : null}
    </Section>
  );

  return frame(
    <Section>
      {placement === "top" ? avatarElement : null}
      {content}
    </Section>,
    alignment === "center" ? 44 : 24
  );
};

const CenteredLayout = (props: Omit<TestimonialProps, "theme">) => (
  <CenteredTestimonial
    action={props.action}
    author={props.author ?? "Jason Adam"}
    avatar={props.avatar}
    company={props.company ?? "Monarch"}
    quote={
      props.quote ??
      "After redesigning our emails with emailcn, we saw an increase in engagement by 40%."
    }
    role={props.role ?? "Director of Operations"}
    variant={props.variant ?? "quote"}
  />
);

const SplitLayout = (props: Omit<TestimonialProps, "theme">) => (
  <SplitTestimonial
    action={props.action}
    author={props.author ?? "Jason Adam"}
    avatar={props.avatar}
    company={props.company ?? "Monarch"}
    placement={props.placement === "right" ? "right" : "left"}
    quote={
      props.quote ??
      "After migrating to emailcn, we increased efficiency by 40% across our transactional and marketing email development pipeline."
    }
  />
);

const FullWidthLayout = (props: Omit<TestimonialProps, "theme">) => {
  const alignment = props.alignment ?? "left";
  const appearance = props.appearance ?? "plain";
  const author = props.author ?? "Ella Roustek";
  const quote =
    props.quote ??
    "“After migrating to emailcn, we increased efficiency by 40% across our transactional and marketing email development pipeline.”";
  const role = props.role ?? "Operations Manager";

  if (props.avatarTreatment === "overlapping") {
    return (
      <OverlappingTestimonial
        alignment={alignment}
        author={author}
        avatar={props.avatar}
        logo={props.logo}
        placement={props.placement === "top" ? "top" : "bottom"}
        quote={quote}
        role={role}
      />
    );
  }

  return frame(
    <FullWidthContent
      alignment={alignment}
      appearance={appearance}
      author={author}
      avatar={props.avatar}
      logo={props.logo}
      quote={quote}
      role={role}
    />,
    appearance === "plain" && alignment === "center" ? 44 : 24
  );
};

const TestimonialSection = (props: Omit<TestimonialProps, "theme">) => {
  if (props.layout === "centered") {
    return <CenteredLayout {...props} />;
  }
  if (props.layout === "split") {
    return <SplitLayout {...props} />;
  }
  return <FullWidthLayout {...props} />;
};

export const Testimonial = ({
  theme = defaultTheme,
  ...props
}: TestimonialProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </EmailHead>
    <Preview>Customer testimonial</Preview>
    <EmailTailwind theme={theme}>
      <Body style={{ backgroundColor: "#f1f5f9", fontFamily }} className="m-0">
        <TestimonialSection {...props} />
      </Body>
    </EmailTailwind>
  </Html>
);

Testimonial.PreviewProps = {
  alignment: "left",
  appearance: "plain",
  avatarTreatment: "inline",
  layout: "full-width",
  placement: "bottom",
  theme: defaultTheme,
  variant: "quote",
} satisfies TestimonialProps;
