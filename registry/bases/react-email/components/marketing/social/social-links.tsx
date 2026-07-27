import { Fragment } from "react";
import {
  Body,
  Head as EmailHead,
  Html,
  Preview,
  Section,
  Row,
  Column,
  Heading,
  Link,
  Text,
  Img,
  Tailwind,
} from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { createEmailTailwindConfig } from "@/registry/bases/react-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/react-email/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

export type SocialLinksContent = "full" | "lead" | "title" | "minimal";

interface SimpleSocials_SimpleSocialLogoItem {
  alt: string;
  href: string;
  src: string;
}

interface SimpleSocials_SimpleSocialLogosRowProps {
  theme?: EmailTheme;
  content?: SocialLinksContent;
  title?: string;
  description?: string;
  items?: SimpleSocials_SimpleSocialLogoItem[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
}

const SimpleSocials_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const SimpleSocials_responsiveStyles = [
  "@media only screen and (max-width: 430px) {",
  "  .simple-social-content { padding-left: 24px !important; padding-right: 24px !important; }",
  "}",
].join("\n");

const SimpleSocials_defaultItems: SimpleSocials_SimpleSocialLogoItem[] = [
  {
    alt: "LinkedIn",
    href: "https://example.com",
    src: emailAsset("social/icon-linkedin.png"),
  },
  {
    alt: "X",
    href: "https://example.com",
    src: emailAsset("social/icon-x.png"),
  },
  {
    alt: "YouTube",
    href: "https://example.com",
    src: emailAsset("social/icon-youtube.png"),
  },
  {
    alt: "Instagram",
    href: "https://example.com",
    src: emailAsset("social/icon-instagram.png"),
  },
  {
    alt: "Discord",
    href: "https://example.com",
    src: emailAsset("social/icon-discord.png"),
  },
];

const SimpleSocials_SimpleSocialLogosRowSection = ({
  content = "full",
  title = "Connect with us",
  description = "Stay in the loop by following us across our social channels for updates, news, and behind-the-scenes moments.",
  items = SimpleSocials_defaultItems,
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
}: Omit<SimpleSocials_SimpleSocialLogosRowProps, "theme">) => {
  const showTitle = content === "full" || content === "title";
  const showDescription = content === "full" || content === "lead";

  return (
    <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              width: "600px",
            }}
          >
            <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column
                    className="simple-social-content"
                    style={{ padding: "0 64px", textAlign: "center" }}
                  >
                    {showTitle ? (
                      <Fragment>
                        <Heading
                          style={{
                            color: "#030712",
                            fontFamily: SimpleSocials_fontFamily,
                            fontSize: "20px",
                            fontWeight: 600,
                            lineHeight: "28px",
                            margin: 0,
                            textAlign: "center",
                          }}
                          as="h2"
                        >
                          {title}
                        </Heading>
                        <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
                      </Fragment>
                    ) : null}
                    <Section
                      align="center"
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    >
                      <Fragment>
                        <Row>
                          {items.map((item, index) => (
                            <Column
                              key={`${item.alt}-${item.href}`}
                              style={
                                index > 0 ? { paddingLeft: "16px" } : undefined
                              }
                            >
                              <Link href={item.href}>
                                <Img
                                  alt={item.alt}
                                  src={item.src}
                                  style={{
                                    maxWidth: "100%",
                                    verticalAlign: "middle",
                                  }}
                                  width={24}
                                />
                              </Link>
                            </Column>
                          ))}
                        </Row>
                      </Fragment>
                    </Section>
                    {showDescription ? (
                      <Fragment>
                        <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
                        <Text
                          style={{
                            color: "#4b5563",
                            fontFamily: SimpleSocials_fontFamily,
                            fontSize: "16px",
                            fontWeight: 300,
                            lineHeight: "24px",
                            margin: 0,
                            textAlign: "center",
                          }}
                        >
                          {description}
                        </Text>
                      </Fragment>
                    ) : null}
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
};

const SimpleSocials_SimpleSocialLogosRow = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: SimpleSocials_SimpleSocialLogosRowProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: SimpleSocials_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Connect with us</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: SimpleSocials_fontFamily,
        }}
        className="m-0"
      >
        <SimpleSocials_SimpleSocialLogosRowSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
        />
      </Body>
    </Tailwind>
  </Html>
);

SimpleSocials_SimpleSocialLogosRow.PreviewProps = {
  theme: defaultTheme,
} satisfies SimpleSocials_SimpleSocialLogosRowProps;

const __SimpleSocials = SimpleSocials_SimpleSocialLogosRow;

type SocialLogos_SocialLogosVariant =
  | "square-tiles"
  | "squared-box"
  | "circle-tiles"
  | "pill-box"
  | "outlined-square-tiles"
  | "outlined-circle-tiles"
  | "outlined-box"
  | "outlined-pill-box";

interface SocialLogos_SocialLogoItem {
  alt: string;
  href: string;
  src: string;
}

interface SocialLogos_SocialLogosProps {
  theme?: EmailTheme;
  content?: SocialLinksContent;
  title?: string;
  description?: string;
  items?: SocialLogos_SocialLogoItem[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  variant?: SocialLogos_SocialLogosVariant;
}

const SocialLogos_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const SocialLogos_responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .social-logo-item { display: inline-block !important; padding: 0 8px 16px !important; }",
  "  .social-logo-group-item { display: inline-block !important; }",
  "  .social-logo-content { padding-left: 24px !important; padding-right: 24px !important; }",
  "  .social-logo-description-gap { line-height: 20px !important; }",
  "}",
].join("\n");

const SocialLogos_defaultItems: SocialLogos_SocialLogoItem[] = [
  {
    alt: "LinkedIn",
    href: "https://example.com",
    src: emailAsset("social/icon-linkedin.png"),
  },
  {
    alt: "X",
    href: "https://example.com",
    src: emailAsset("social/icon-x.png"),
  },
  {
    alt: "YouTube",
    href: "https://example.com",
    src: emailAsset("social/icon-youtube.png"),
  },
  {
    alt: "Instagram",
    href: "https://example.com",
    src: emailAsset("social/icon-instagram.png"),
  },
  {
    alt: "Discord",
    href: "https://example.com",
    src: emailAsset("social/icon-discord.png"),
  },
];

const SocialLogos_individualVariants = new Set<SocialLogos_SocialLogosVariant>([
  "square-tiles",
  "circle-tiles",
  "outlined-square-tiles",
  "outlined-circle-tiles",
]);

const SocialLogos_variantStyle = (variant: SocialLogos_SocialLogosVariant) => {
  const outlined = variant.startsWith("outlined");
  const rounded = variant.includes("circle") || variant.includes("pill");
  return {
    backgroundColor: outlined ? undefined : "#f3f4f6",
    border: outlined ? "1px solid #d1d5db" : undefined,
    borderRadius: rounded ? "9999px" : "4px",
  };
};

const SocialLogos_SocialLogosSection = ({
  content = "full",
  title = "Connect with us",
  description = "Stay in the loop by following us across our social channels for updates, news, and behind-the-scenes moments.",
  items = SocialLogos_defaultItems,
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  variant = "square-tiles",
}: Omit<SocialLogos_SocialLogosProps, "theme">) => {
  const individual = SocialLogos_individualVariants.has(variant);
  const decoration = SocialLogos_variantStyle(variant);
  const showTitle = content === "full" || content === "title";
  const showDescription = content === "full" || content === "lead";
  const itemLink = (item: SocialLogos_SocialLogoItem) => (
    <Link
      href={item.href}
      style={{
        ...(individual ? decoration : {}),
        color: "#6b7280",
        display: "inline-block",
        fontFamily: SocialLogos_fontFamily,
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "24px",
        padding: "20px",
        textAlign: "center",
        textDecoration: "none",
      }}
    >
      <Img
        alt={item.alt}
        src={item.src}
        style={{ maxWidth: "100%", verticalAlign: "middle" }}
        width={24}
      />
    </Link>
  );
  return (
    <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              width: "600px",
            }}
          >
            <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column
                    className="social-logo-content"
                    style={{ padding: "0 64px", textAlign: "center" }}
                  >
                    {showTitle ? (
                      <Fragment>
                        <Heading
                          style={{
                            color: "#030712",
                            fontFamily: SocialLogos_fontFamily,
                            fontSize: "20px",
                            fontWeight: 600,
                            lineHeight: "28px",
                            margin: 0,
                            textAlign: "center",
                          }}
                          as="h2"
                        >
                          {title}
                        </Heading>
                        <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
                      </Fragment>
                    ) : null}
                    <Section
                      align="center"
                      style={
                        individual
                          ? { marginLeft: "auto", marginRight: "auto" }
                          : {
                              ...decoration,
                              marginLeft: "auto",
                              marginRight: "auto",
                            }
                      }
                    >
                      <Fragment>
                        <Row>
                          {individual ? null : (
                            <Column style={{ width: "8px" }}>&zwj;</Column>
                          )}
                          {items.map((item, index) => (
                            <Column
                              className={
                                individual
                                  ? "social-logo-item"
                                  : "social-logo-group-item"
                              }
                              key={`${item.alt}-${item.href}`}
                              style={
                                individual && index > 0
                                  ? { paddingLeft: "16px" }
                                  : undefined
                              }
                            >
                              {itemLink(item)}
                            </Column>
                          ))}
                          {individual ? null : (
                            <Column style={{ width: "8px" }}>&zwj;</Column>
                          )}
                        </Row>
                      </Fragment>
                    </Section>
                    {showDescription ? (
                      <Fragment>
                        <Section
                          className="social-logo-description-gap"
                          style={{ lineHeight: "36px" }}
                        >
                          &zwj;
                        </Section>
                        <Text
                          style={{
                            color: "#4b5563",
                            fontFamily: SocialLogos_fontFamily,
                            fontSize: "16px",
                            fontWeight: 300,
                            lineHeight: "24px",
                            margin: 0,
                            textAlign: "center",
                          }}
                        >
                          {description}
                        </Text>
                      </Fragment>
                    ) : null}
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
};

const SocialLogos_SocialLogos = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "square-tiles",
  ...props
}: SocialLogos_SocialLogosProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: SocialLogos_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Connect with us</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: SocialLogos_fontFamily,
        }}
        className="m-0"
      >
        <SocialLogos_SocialLogosSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

SocialLogos_SocialLogos.PreviewProps = {
  theme: defaultTheme,
  variant: "square-tiles",
} satisfies SocialLogos_SocialLogosProps;

const __SocialLogos = SocialLogos_SocialLogos;

type SocialLabels_SocialsWithLabelsVariant = "stacked" | "inline";

interface SocialLabels_LabeledSocialItem {
  alt: string;
  href: string;
  label: string;
  src: string;
}

interface SocialLabels_SocialsWithLabelsProps {
  theme?: EmailTheme;
  content?: SocialLinksContent;
  title?: string;
  description?: string;
  items?: SocialLabels_LabeledSocialItem[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  variant?: SocialLabels_SocialsWithLabelsVariant;
}

const SocialLabels_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const SocialLabels_responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .labeled-social-item { display: inline-block !important; padding: 0 18px 16px !important; }",
  "  .labeled-social-content { padding-left: 24px !important; padding-right: 24px !important; }",
  "  .labeled-social-description-gap { line-height: 20px !important; }",
  "}",
].join("\n");

const SocialLabels_stackedItems: SocialLabels_LabeledSocialItem[] = [
  ["LinkedIn", "icon-linkedin.png"],
  ["X", "icon-x.png"],
  ["YouTube", "icon-youtube.png"],
  ["Instagram", "icon-instagram.png"],
  ["Discord", "icon-discord.png"],
].map(([label, file]) => ({
  alt: label,
  href: "https://example.com",
  label,
  src: emailAsset(`social/${file}`),
}));

const SocialLabels_inlineItems: SocialLabels_LabeledSocialItem[] = [
  ["LinkedIn", "icon-linkedin.png"],
  ["Facebook", "icon-facebook.png"],
  ["YouTube", "icon-youtube.png"],
  ["Instagram", "icon-instagram.png"],
].map(([label, file]) => ({
  alt: label,
  href: "https://example.com",
  label,
  src: emailAsset(`social/${file}`),
}));

const SocialLabels_getItemStyle = (index: number, stacked: boolean) => {
  if (index === 0) {
    return {};
  }
  return { paddingLeft: stacked ? "36px" : "28px" };
};

const SocialLabels_SocialsWithLabelsSection = ({
  content = "full",
  title = "Connect with us",
  description = "Stay in the loop by following us across our social channels for updates, news, and behind-the-scenes moments.",
  items,
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  variant = "stacked",
}: Omit<SocialLabels_SocialsWithLabelsProps, "theme">) => {
  const resolvedItems =
    items ??
    (variant === "stacked"
      ? SocialLabels_stackedItems
      : SocialLabels_inlineItems);
  const stacked = variant === "stacked";
  const showTitle = content === "full" || content === "title";
  const showDescription = content === "full" || content === "lead";
  return (
    <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              width: "600px",
            }}
          >
            <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column
                    className="labeled-social-content"
                    style={{ padding: "0 64px", textAlign: "center" }}
                  >
                    {showTitle ? (
                      <Fragment>
                        <Heading
                          style={{
                            color: "#030712",
                            fontFamily: SocialLabels_fontFamily,
                            fontSize: "20px",
                            fontWeight: 600,
                            lineHeight: "28px",
                            margin: 0,
                            textAlign: "center",
                          }}
                          as="h2"
                        >
                          {title}
                        </Heading>
                        <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
                      </Fragment>
                    ) : null}
                    <Section
                      align="center"
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    >
                      <Fragment>
                        <Row>
                          {resolvedItems.map((item, index) => (
                            <Column
                              className="labeled-social-item"
                              key={`${item.label}-${item.href}`}
                              style={SocialLabels_getItemStyle(index, stacked)}
                            >
                              <Link
                                href={item.href}
                                style={{
                                  color: "#6b7280",
                                  display: stacked ? "inline-block" : undefined,
                                  fontFamily: SocialLabels_fontFamily,
                                  fontSize: "16px",
                                  fontWeight: 500,
                                  lineHeight: "24px",
                                  textAlign: "center",
                                  textDecoration: "none",
                                }}
                              >
                                <Img
                                  alt={stacked ? item.alt : ""}
                                  src={item.src}
                                  style={{
                                    marginBottom: stacked ? "4px" : undefined,
                                    maxWidth: "100%",
                                    verticalAlign: stacked ? "middle" : "top",
                                  }}
                                  width={stacked ? 24 : 16}
                                />
                                {stacked ? <br /> : null}
                                <span
                                  style={
                                    stacked ? undefined : { marginLeft: "6px" }
                                  }
                                >
                                  {item.label}
                                </span>
                              </Link>
                            </Column>
                          ))}
                        </Row>
                      </Fragment>
                    </Section>
                    {showDescription ? (
                      <Fragment>
                        <Section
                          className="labeled-social-description-gap"
                          style={{ lineHeight: "36px" }}
                        >
                          &zwj;
                        </Section>
                        <Text
                          style={{
                            color: "#4b5563",
                            fontFamily: SocialLabels_fontFamily,
                            fontSize: "16px",
                            fontWeight: 300,
                            lineHeight: "24px",
                            margin: 0,
                            textAlign: "center",
                          }}
                        >
                          {description}
                        </Text>
                      </Fragment>
                    ) : null}
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
};

const SocialLabels_SocialsWithLabels = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "stacked",
  ...props
}: SocialLabels_SocialsWithLabelsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: SocialLabels_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Connect with us</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: SocialLabels_fontFamily,
        }}
        className="m-0"
      >
        <SocialLabels_SocialsWithLabelsSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

SocialLabels_SocialsWithLabels.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked",
} satisfies SocialLabels_SocialsWithLabelsProps;

const __SocialLabels = SocialLabels_SocialsWithLabels;

type SocialTileLabels_SocialsWithTileLabelsVariant = "stacked" | "inline";

interface SocialTileLabels_TiledSocialItem {
  alt: string;
  href: string;
  label: string;
  src: string;
}

interface SocialTileLabels_SocialsWithTileLabelsProps {
  theme?: EmailTheme;
  content?: SocialLinksContent;
  title?: string;
  description?: string;
  items?: SocialTileLabels_TiledSocialItem[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  tileBackgroundColor?: string;
  variant?: SocialTileLabels_SocialsWithTileLabelsVariant;
}

const SocialTileLabels_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const SocialTileLabels_responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .tiled-social-item { display: inline-block !important; padding: 0 8px 16px !important; }",
  "  .tiled-social-spacer { display: none !important; }",
  "  .tiled-social-content { padding-left: 24px !important; padding-right: 24px !important; }",
  "  .tiled-social-description-gap { line-height: 20px !important; }",
  "}",
].join("\n");

const SocialTileLabels_stackedItems: SocialTileLabels_TiledSocialItem[] = [
  ["LinkedIn", "icon-linkedin.png"],
  ["X", "icon-x.png"],
  ["YouTube", "icon-youtube.png"],
  ["Instagram", "icon-instagram.png"],
].map(([label, file]) => ({
  alt: label,
  href: "https://example.com",
  label,
  src: emailAsset(`social/${file}`),
}));

const SocialTileLabels_inlineItems: SocialTileLabels_TiledSocialItem[] = [
  ["LinkedIn", "icon-linkedin.png"],
  ["Facebook", "icon-facebook.png"],
  ["YouTube", "icon-youtube.png"],
  ["Instagram", "icon-instagram.png"],
].map(([label, file]) => ({
  alt: label,
  href: "https://example.com",
  label,
  src: emailAsset(`social/${file}`),
}));

const SocialTileLabels_SocialsWithTileLabelsSection = ({
  content = "full",
  title = "Connect with us",
  description = "Stay in the loop by following us across our social channels for updates, news, and behind-the-scenes moments.",
  items,
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  tileBackgroundColor = "#f3f4f6",
  variant = "stacked",
}: Omit<SocialTileLabels_SocialsWithTileLabelsProps, "theme">) => {
  const resolvedItems =
    items ??
    (variant === "stacked"
      ? SocialTileLabels_stackedItems
      : SocialTileLabels_inlineItems);
  const stacked = variant === "stacked";
  const showTitle = content === "full" || content === "title";
  const showDescription = content === "full" || content === "lead";
  return (
    <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              width: "600px",
            }}
          >
            <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column
                    className="tiled-social-content"
                    style={{
                      padding: stacked ? "0 52px" : "0 24px",
                      textAlign: "center",
                    }}
                  >
                    {showTitle ? (
                      <Fragment>
                        <Heading
                          style={{
                            color: "#030712",
                            fontFamily: SocialTileLabels_fontFamily,
                            fontSize: "20px",
                            fontWeight: 600,
                            lineHeight: "28px",
                            margin: 0,
                            textAlign: "center",
                          }}
                          as="h2"
                        >
                          {title}
                        </Heading>
                        <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
                      </Fragment>
                    ) : null}
                    <Section
                      align="center"
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    >
                      <Fragment>
                        <Row>
                          {resolvedItems.map((item, index) => (
                            <Fragment key={`${item.label}-${item.href}`}>
                              {index > 0 ? (
                                <Column
                                  className="tiled-social-spacer"
                                  style={{ width: "16px" }}
                                >
                                  &zwj;
                                </Column>
                              ) : null}
                              <Column
                                className="tiled-social-item"
                                style={{
                                  backgroundColor: tileBackgroundColor,
                                  width: stacked ? "112px" : undefined,
                                }}
                              >
                                <Link
                                  href={item.href}
                                  style={{
                                    backgroundColor: tileBackgroundColor,
                                    borderRadius: "4px",
                                    color: "#6b7280",
                                    display: "block",
                                    fontFamily: SocialTileLabels_fontFamily,
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    lineHeight: "24px",
                                    padding: "16px",
                                    textAlign: "center",
                                    textDecoration: "none",
                                  }}
                                >
                                  <Img
                                    alt={stacked ? item.alt : ""}
                                    src={item.src}
                                    style={{
                                      maxWidth: "100%",
                                      verticalAlign: stacked ? "middle" : "top",
                                    }}
                                    width={stacked ? 24 : 16}
                                  />
                                  {stacked ? <br /> : null}
                                  <span
                                    style={
                                      stacked
                                        ? undefined
                                        : { marginLeft: "6px" }
                                    }
                                  >
                                    {item.label}
                                  </span>
                                </Link>
                              </Column>
                            </Fragment>
                          ))}
                        </Row>
                      </Fragment>
                    </Section>
                    {showDescription ? (
                      <Fragment>
                        <Section
                          className="tiled-social-description-gap"
                          style={{ lineHeight: "36px" }}
                        >
                          &zwj;
                        </Section>
                        <Text
                          style={{
                            color: "#4b5563",
                            fontFamily: SocialTileLabels_fontFamily,
                            fontSize: "16px",
                            fontWeight: 300,
                            lineHeight: "24px",
                            margin: 0,
                            textAlign: "center",
                          }}
                        >
                          {description}
                        </Text>
                      </Fragment>
                    ) : null}
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
};

const SocialTileLabels_SocialsWithTileLabels = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "stacked",
  ...props
}: SocialTileLabels_SocialsWithTileLabelsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: SocialTileLabels_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Connect with us</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: SocialTileLabels_fontFamily,
        }}
        className="m-0"
      >
        <SocialTileLabels_SocialsWithTileLabelsSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

SocialTileLabels_SocialsWithTileLabels.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked",
} satisfies SocialTileLabels_SocialsWithTileLabelsProps;

const __SocialTileLabels = SocialTileLabels_SocialsWithTileLabels;

export interface SocialLink {
  label?: string;
  href: string;
  icon: {
    alt?: string;
    src: string;
  };
}

export interface SocialLinksProps {
  theme?: Parameters<typeof __SimpleSocials>[0]["theme"];
  content?: SocialLinksContent;
  title?: string;
  description?: string;
  items?: SocialLink[];
  presentation?: "icons" | "labels";
  container?: "none" | "tile" | "box" | "pill";
  shape?: "square" | "circle";
  outlined?: boolean;
  direction?: "inline" | "stacked";
}

const iconVariant = ({
  container,
  shape,
  outlined,
}: Required<Pick<SocialLinksProps, "container" | "shape" | "outlined">>) => {
  const prefix = outlined ? "outlined-" : "";
  if (container === "box") {
    return outlined ? ("outlined-box" as const) : ("squared-box" as const);
  }
  if (container === "pill") {
    return `${prefix}pill-box` as const;
  }
  return `${prefix}${shape}-tiles` as const;
};

export const SocialLinks = ({
  theme,
  content = "full",
  title,
  description,
  items,
  presentation = "icons",
  container = "none",
  shape = "square",
  outlined = false,
  direction = "inline",
}: SocialLinksProps) => {
  const normalizedItems = items?.map(({ href, icon, label }) => ({
    alt: icon.alt ?? label ?? "",
    href,
    label: label ?? "",
    src: icon.src,
  }));
  const props = { content, description, items: normalizedItems, theme, title };
  if (presentation === "labels") {
    return container === "tile" ? (
      <__SocialTileLabels {...props} variant={direction} />
    ) : (
      <__SocialLabels {...props} variant={direction} />
    );
  }
  if (container === "none") {
    return <__SimpleSocials {...props} />;
  }
  return (
    <__SocialLogos
      {...props}
      variant={iconVariant({ container, outlined, shape })}
    />
  );
};

SocialLinks.PreviewProps = {
  container: "none",
  content: "full",
  direction: "inline",
  outlined: false,
  presentation: "icons",
  shape: "square",
} satisfies SocialLinksProps;
