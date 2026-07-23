import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type BoxedCTAWithBackgroundImageVariant =
  | "flush-light"
  | "padded-light"
  | "flush-dark"
  | "padded-dark";

export interface BoxedCTAWithBackgroundImageProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImageSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: BoxedCTAWithBackgroundImageVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .boxed-cta-background-side {
      width: 24px !important;
    }
  }

  .boxed-cta-background-button:hover {
    background-color: #4338ca !important;
  }
`;

const variantStyles = {
  "flush-dark": {
    backgroundColor: "#030712",
    cardBackgroundColor: "#030712",
    headingColor: "#fffffe",
    padded: false,
    textColor: "#d1d5db",
  },
  "flush-light": {
    backgroundColor: "#fffffe",
    cardBackgroundColor: "#fffffe",
    headingColor: "#030712",
    padded: false,
    textColor: "#4b5563",
  },
  "padded-dark": {
    backgroundColor: "#030712",
    cardBackgroundColor: "#030712",
    headingColor: "#fffffe",
    padded: true,
    textColor: "#d1d5db",
  },
  "padded-light": {
    backgroundColor: "#fffffe",
    cardBackgroundColor: "#fffffe",
    headingColor: "#030712",
    padded: true,
    textColor: "#4b5563",
  },
} satisfies Record<
  BoxedCTAWithBackgroundImageVariant,
  {
    backgroundColor: string;
    cardBackgroundColor: string;
    headingColor: string;
    padded: boolean;
    textColor: string;
  }
>;

const defaultSectionStyles = {
  backgroundImageSrc:
    "https://assets.mailviews.com/images/components/cta/cta-bg-glow.png",
  buttonBackgroundColor: "#4f46e5",
  buttonTextColor: "#f8fafc",
  ctaHref: "https://example.com/",
  ctaLabel: "Activate account",
  heading: "Welcome to Your Workspace",
  pageBackgroundColor: "#f1f5f9",
  subtext:
    "Your account is ready. Confirm your email to activate access, connect your tools, and start building smarter with our platform.",
};

type SectionProps = Omit<BoxedCTAWithBackgroundImageProps, "theme">;

export const BoxedCTAWithBackgroundImageSection = (props: SectionProps) => {
  const variant = props.variant ?? "flush-light";
  const resolved = {
    ...defaultSectionStyles,
    ...variantStyles[variant],
    ...props,
  };

  return (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <tbody>
        <tr>
          <td>&zwj;</td>
          <td
            style={{
              backgroundColor: resolved.backgroundColor,
              backgroundImage: `url('${resolved.backgroundImageSrc}')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxWidth: "100%",
              paddingBottom: resolved.padded ? "80px" : 0,
              width: "600px",
            }}
          >
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              width="100%"
            >
              <tbody>
                <tr>
                  <td
                    className="boxed-cta-background-side"
                    style={{ width: "44px" }}
                  >
                    &zwj;
                  </td>
                  <td>
                    <div style={{ lineHeight: "80px" }}>&zwj;</div>
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      role="presentation"
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              backgroundColor: resolved.cardBackgroundColor,
                              borderRadius: "4px",
                              padding: "0 44px",
                              textAlign: "center",
                            }}
                          >
                            <div style={{ lineHeight: "44px" }}>&zwj;</div>
                            <h2
                              style={{
                                color: resolved.headingColor,
                                fontFamily,
                                fontSize: "24px",
                                fontWeight: 600,
                                lineHeight: "32px",
                                margin: 0,
                                textAlign: "center",
                              }}
                            >
                              {resolved.heading}
                            </h2>
                            <div style={{ lineHeight: "16px" }}>&zwj;</div>
                            <p
                              style={{
                                color: resolved.textColor,
                                fontFamily,
                                fontSize: "16px",
                                fontWeight: 300,
                                lineHeight: "24px",
                                margin: 0,
                                textAlign: "center",
                              }}
                            >
                              {resolved.subtext}
                            </p>
                            <div style={{ lineHeight: "36px" }}>&zwj;</div>
                            <a
                              className="boxed-cta-background-button"
                              href={resolved.ctaHref}
                              style={{
                                backgroundColor: resolved.buttonBackgroundColor,
                                borderRadius: "8px",
                                color: resolved.buttonTextColor,
                                display: "inline-block",
                                fontFamily,
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: "24px",
                                padding: "10px 22px",
                                textAlign: "center",
                                textDecoration: "none",
                              }}
                            >
                              {resolved.ctaLabel}
                            </a>
                            {resolved.padded ? (
                              <div style={{ lineHeight: "44px" }}>&zwj;</div>
                            ) : null}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td
                    className="boxed-cta-background-side"
                    style={{ width: "44px" }}
                  >
                    &zwj;
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
  );
};

export const BoxedCTAWithBackgroundImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "flush-light",
  ...props
}: BoxedCTAWithBackgroundImageProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{props.heading ?? defaultSectionStyles.heading}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <BoxedCTAWithBackgroundImageSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BoxedCTAWithBackgroundImage.PreviewProps = {
  theme: defaultTheme,
  variant: "flush-light",
} satisfies BoxedCTAWithBackgroundImageProps;
