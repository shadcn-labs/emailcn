import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlStyle,
  MjmlTable,
  MjmlText,
} from "@faire/mjml-react";

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
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
    .testimonial-centered-column > table > tbody > tr > td {
      padding-left: 24px !important;
      padding-right: 24px !important;
    }
    .testimonial-centered-quote div {
      font-size: 24px !important;
      line-height: 32px !important;
    }
    .testimonial-avatar-top,
    .testimonial-avatar-bottom {
      overflow: visible !important;
    }
  }
  .testimonial-avatar-top { max-height: 32px !important; }
  .testimonial-avatar-bottom { max-height: 8px !important; }
`;

const AvatarImage = ({
  align = "left",
  alt = "",
  cssClass,
  src,
}: {
  align?: TestimonialAlignment;
  alt?: string;
  cssClass?: string;
  src: string;
}) => (
  <MjmlImage
    align={align}
    alt={alt}
    borderRadius="9999px"
    cssClass={cssClass}
    padding="0"
    src={src}
    width="64px"
  />
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
  Pick<TestimonialProps, "action" | "avatar">) => (
  <MjmlSection backgroundColor="#fffffe" padding="44px 44px">
    <MjmlColumn cssClass="testimonial-centered-column" padding="0">
      {variant === "quote" ? (
        <>
          <MjmlImage
            align="center"
            alt=""
            padding="0"
            src={assetUrl("quote.png")}
            width="36px"
          />
          <MjmlSpacer height="24px" />
        </>
      ) : null}
      <MjmlText
        align="center"
        color="#030712"
        cssClass="testimonial-centered-quote"
        fontFamily={fontFamily}
        fontSize="30px"
        fontWeight="600"
        lineHeight="36px"
        padding="0"
      >
        {quote}
      </MjmlText>
      <MjmlSpacer height="24px" />
      <AvatarImage
        align="center"
        alt={avatar?.alt}
        src={avatar?.src ?? assetUrl("user-1.jpg")}
      />
      <MjmlSpacer height="8px" />
      <MjmlText
        align="center"
        color="#4b5563"
        fontFamily={fontFamily}
        fontSize="16px"
        fontWeight="600"
        lineHeight="24px"
        padding="0"
      >
        {author}, <br />
        {role} at {company}
      </MjmlText>
      <MjmlSpacer height="24px" />
      <MjmlText
        align="center"
        fontFamily={fontFamily}
        fontSize="16px"
        fontWeight="500"
        lineHeight="24px"
        padding="0"
      >
        <a
          href={action?.href ?? "https://example.com"}
          style={{ color: "#4f46e5", textDecoration: "none" }}
        >
          {action?.label ?? `Read ${company}'s case study`}
        </a>
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

const SplitIdentity = ({
  author,
  avatar,
  company,
}: Required<Pick<TestimonialProps, "author" | "company">> &
  Pick<TestimonialProps, "avatar">) => (
  <MjmlColumn padding="0" verticalAlign="top" width="104px">
    <AvatarImage
      alt={avatar?.alt}
      src={avatar?.src ?? assetUrl("user-1.jpg")}
    />
    <MjmlSpacer height="8px" />
    <MjmlText
      color="#030712"
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="600"
      lineHeight="24px"
      padding="0"
    >
      {author}, <br />
      <span style={{ color: "#4b5563" }}>{company}</span>
    </MjmlText>
  </MjmlColumn>
);

const SplitQuote = ({
  action,
  company,
  quote,
}: Required<Pick<TestimonialProps, "company" | "quote">> &
  Pick<TestimonialProps, "action">) => (
  <MjmlColumn padding="0" verticalAlign="top">
    <MjmlImage
      align="left"
      alt=""
      padding="0"
      src={assetUrl("quote.png")}
      width="36px"
    />
    <MjmlSpacer height="24px" />
    <MjmlText
      color="#030712"
      fontFamily={fontFamily}
      fontSize="20px"
      fontWeight="600"
      lineHeight="28px"
      padding="0"
    >
      {quote}
    </MjmlText>
    <MjmlSpacer height="24px" />
    <MjmlText
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="500"
      lineHeight="24px"
      padding="0"
    >
      <a
        href={action?.href ?? "https://example.com"}
        style={{ color: "#4f46e5", textDecoration: "none" }}
      >
        {action?.label ?? `Read ${company}'s case study`}
      </a>
    </MjmlText>
  </MjmlColumn>
);

const SplitGap = () => (
  <MjmlColumn padding="0" width="44px">
    <MjmlSpacer height="24px" />
  </MjmlColumn>
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
  Pick<TestimonialProps, "action" | "avatar">) => (
  <MjmlSection backgroundColor="#fffffe" padding="44px 24px">
    {placement === "right" ? (
      <SplitQuote action={action} company={company} quote={quote} />
    ) : (
      <SplitIdentity author={author} avatar={avatar} company={company} />
    )}
    <SplitGap />
    {placement === "right" ? (
      <SplitIdentity author={author} avatar={avatar} company={company} />
    ) : (
      <SplitQuote action={action} company={company} quote={quote} />
    )}
  </MjmlSection>
);

const InlineIdentity = ({
  alignment,
  author,
  avatar,
  role,
}: Required<Pick<TestimonialProps, "alignment" | "author" | "role">> &
  Pick<TestimonialProps, "avatar">) => {
  if (alignment === "center") {
    return (
      <>
        <AvatarImage
          align="center"
          alt={avatar?.alt}
          src={avatar?.src ?? assetUrl("user-2.jpg")}
        />
        <MjmlSpacer height="12px" />
        <MjmlText
          align="center"
          color="#030712"
          fontFamily={fontFamily}
          fontSize="16px"
          fontWeight="600"
          lineHeight="24px"
          padding="0"
        >
          {author}, <br />
          <span style={{ color: "#4b5563" }}>{role}</span>
        </MjmlText>
      </>
    );
  }

  return (
    <MjmlTable
      cellpadding="0"
      cellspacing="0"
      fontFamily={fontFamily}
      padding="0"
      role="presentation"
    >
      <tbody>
        <tr>
          <td style={{ width: "64px" }}>
            <img
              alt={avatar?.alt ?? ""}
              src={avatar?.src ?? assetUrl("user-2.jpg")}
              width="64"
              style={{ borderRadius: "9999px", verticalAlign: "middle" }}
            />
          </td>
          <td style={{ width: "12px" }}>&zwj;</td>
          <td
            style={{
              color: "#030712",
              fontFamily,
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "24px",
            }}
          >
            {author}, <br />
            <span style={{ color: "#4b5563" }}>{role}</span>
          </td>
        </tr>
      </tbody>
    </MjmlTable>
  );
};

const FullWidthTestimonial = ({
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
  let logoWidth = "145px";
  if (alignment === "center") {
    defaultLogo = "logo-accentic.png";
    logoWidth = "106px";
  }
  if (accent) {
    defaultLogo = "logo-accentic-light.png";
    logoWidth = "106px";
  }
  const boxed = appearance !== "plain";
  const cardBackgroundColor = accent ? "#030712" : "#f8fafc";

  return (
    <MjmlSection
      backgroundColor="#fffffe"
      padding={`44px ${alignment === "center" && !boxed ? "44px" : "24px"}`}
    >
      <MjmlColumn
        backgroundColor={boxed ? cardBackgroundColor : undefined}
        borderRadius={boxed ? "8px" : undefined}
        cssClass={boxed ? "testimonial-centered-column" : undefined}
        padding={boxed ? "24px 44px" : "0"}
      >
        <MjmlImage
          align={alignment}
          alt={logo?.alt ?? ""}
          padding="0"
          src={logo?.src ?? assetUrl(defaultLogo)}
          width={logoWidth}
        />
        <MjmlSpacer height="24px" />
        <MjmlText
          align={alignment}
          color={accent ? "#fffffe" : "#030712"}
          fontFamily={fontFamily}
          fontSize="18px"
          fontWeight="600"
          lineHeight="28px"
          padding="0"
        >
          {quote}
        </MjmlText>
        <MjmlSpacer height="24px" />
        <InlineIdentity
          alignment={alignment}
          author={author}
          avatar={avatar}
          role={role}
        />
      </MjmlColumn>
    </MjmlSection>
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
  Pick<TestimonialProps, "avatar" | "logo">) => (
  <MjmlSection
    backgroundColor="#fffffe"
    padding={`44px ${alignment === "center" ? "44px" : "24px"}`}
  >
    <MjmlColumn
      backgroundColor="#f8fafc"
      borderRadius="8px"
      cssClass="testimonial-centered-column"
      padding="0 44px 24px"
    >
      {placement === "top" ? (
        <AvatarImage
          align={alignment}
          alt={avatar?.alt}
          cssClass="testimonial-avatar-top"
          src={avatar?.src ?? assetUrl("user-2.jpg")}
        />
      ) : null}
      <MjmlSpacer height="48px" />
      <MjmlText
        align={alignment}
        color="#030712"
        fontFamily={fontFamily}
        fontSize="18px"
        fontWeight="600"
        lineHeight="28px"
        padding="0"
      >
        {quote}
      </MjmlText>
      <MjmlSpacer height="24px" />
      <MjmlImage
        align={alignment}
        alt={logo?.alt ?? ""}
        padding="0"
        src={logo?.src ?? assetUrl("logo-accentic.png")}
        width="106px"
      />
      <MjmlSpacer height="24px" />
      <MjmlText
        align={alignment}
        color="#030712"
        fontFamily={fontFamily}
        fontSize="16px"
        fontWeight="600"
        lineHeight="24px"
        padding="0"
      >
        {author}, <br />
        <span style={{ color: "#4b5563" }}>{role}</span>
      </MjmlText>
      {placement === "bottom" ? (
        <>
          <MjmlSpacer height="24px" />
          <AvatarImage
            align={alignment}
            alt={avatar?.alt}
            cssClass="testimonial-avatar-bottom"
            src={avatar?.src ?? assetUrl("user-2.jpg")}
          />
        </>
      ) : null}
    </MjmlColumn>
  </MjmlSection>
);

const TestimonialSection = ({
  action,
  alignment = "left",
  appearance = "plain",
  author,
  avatar,
  avatarTreatment = "inline",
  company = "Monarch",
  layout = "full-width",
  logo,
  placement,
  quote,
  role,
  variant = "quote",
}: Omit<TestimonialProps, "theme">) => {
  if (layout === "centered") {
    return (
      <CenteredTestimonial
        action={action}
        author={author ?? "Jason Adam"}
        avatar={avatar}
        company={company}
        quote={
          quote ??
          "After redesigning our emails with emailcn, we saw an increase in engagement by 40%."
        }
        role={role ?? "Director of Operations"}
        variant={variant}
      />
    );
  }

  if (layout === "split") {
    return (
      <SplitTestimonial
        action={action}
        author={author ?? "Jason Adam"}
        avatar={avatar}
        company={company}
        placement={placement === "right" ? "right" : "left"}
        quote={
          quote ??
          "After migrating to emailcn, we increased efficiency by 40% across our transactional and marketing email development pipeline."
        }
      />
    );
  }

  const resolvedAuthor = author ?? "Ella Roustek";
  const resolvedQuote =
    quote ??
    "“After migrating to emailcn, we increased efficiency by 40% across our transactional and marketing email development pipeline.”";
  const resolvedRole = role ?? "Operations Manager";

  if (avatarTreatment === "overlapping") {
    return (
      <OverlappingTestimonial
        alignment={alignment}
        author={resolvedAuthor}
        avatar={avatar}
        logo={logo}
        placement={placement === "top" ? "top" : "bottom"}
        quote={resolvedQuote}
        role={resolvedRole}
      />
    );
  }

  return (
    <FullWidthTestimonial
      alignment={alignment}
      appearance={appearance}
      author={resolvedAuthor}
      avatar={avatar}
      logo={logo}
      quote={resolvedQuote}
      role={resolvedRole}
    />
  );
};

export const Testimonial = ({
  theme = defaultTheme,
  ...props
}: TestimonialProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlPreview>Customer testimonial</MjmlPreview>
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <TestimonialSection {...props} />
    </MjmlBody>
  </Mjml>
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
