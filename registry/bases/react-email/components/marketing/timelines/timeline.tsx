import { Fragment } from "react";
import type { ReactNode } from "react";
import {
  Body,
  Head as EmailHead,
  Html,
  Preview,
  Tailwind,
  Section,
  Row,
  Column,
  Text,
  Img,
} from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { createEmailTailwindConfig } from "@/registry/bases/react-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/react-email/themes/email-theme";
import { defaultTheme } from "@/registry/themes/default";

type CardsTimeline_CardsTimelineVariant =
  | "default"
  | "with-badge"
  | "with-accent"
  | "image-top"
  | "image-bottom";

interface CardsTimeline_CardsTimelineProps {
  theme?: EmailTheme;
  variant?: CardsTimeline_CardsTimelineVariant;
  date?: string;
  badge?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const CardsTimeline_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const CardsTimeline_textStyle = {
  fontFamily: CardsTimeline_fontFamily,
  margin: 0,
} as const;

const CardsTimeline_CardsTimelineSection = (
  props: Omit<CardsTimeline_CardsTimelineProps, "theme">
) => {
  const { badge, date, description, imageAlt, imageSrc, title, variant } = {
    badge: "Today",
    date: "Monday",
    description: "Description of event",
    imageAlt: "One workspace. Every team.",
    imageSrc: "https://emailcn.vercel.app/api/email-assets/timelines/cards.jpg",
    title: "Miles traveled",
    variant: "default",
    ...props,
  };
  const dark =
    variant === "with-accent" ||
    variant === "image-top" ||
    variant === "image-bottom";
  const withBadge = variant !== "default";
  const withCheck = variant === "with-accent";
  const imageTop = variant === "image-top";
  const imageBottom = variant === "image-bottom";
  let cardBackgroundColor = "#fffffe";
  if (dark) {
    cardBackgroundColor = "#030712";
  } else if (variant === "with-badge") {
    cardBackgroundColor = "#f9fafb";
  }
  const image = (
    <Img
      alt={imageAlt}
      src={imageSrc}
      style={{
        borderRadius: "4px",
        maxWidth: "100%",
        verticalAlign: "middle",
      }}
      width="536"
    />
  );
  return (
    <Section style={{ backgroundColor: "#f1f5f9", width: "100%" }}>
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: "#fffffe",
              maxWidth: "100%",
              padding: variant === "default" ? 0 : "16px 0",
              width: "600px",
            }}
          >
            <Section style={{ width: "100%" }}>
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 16px" }}>
                    <Section style={{ width: "100%" }}>
                      <Fragment>
                        <Row>
                          <Column
                            style={{
                              backgroundColor: cardBackgroundColor,
                              borderRadius:
                                variant === "default" ? undefined : "8px",
                              padding: "16px",
                            }}
                          >
                            {imageTop ? (
                              <>
                                {image}
                                <Section style={{ lineHeight: "16px" }}>
                                  &zwj;
                                </Section>
                              </>
                            ) : null}
                            <Section style={{ width: "100%" }}>
                              <Fragment>
                                <Row>
                                  <Column>
                                    <Section>
                                      <Fragment>
                                        <Row>
                                          <Column>
                                            <Section
                                              style={{
                                                backgroundColor:
                                                  variant === "default"
                                                    ? "#fcd34d"
                                                    : "#6ee7b7",
                                                borderRadius: "9999px",
                                                height: "12px",
                                                lineHeight: withCheck
                                                  ? "10px"
                                                  : "12px",
                                                textAlign: "center",
                                                width: "12px",
                                              }}
                                            >
                                              {withCheck ? (
                                                <Img
                                                  alt=""
                                                  src="https://emailcn.vercel.app/api/email-assets/timelines/icon-check.png"
                                                  style={{
                                                    marginBottom: "1px",
                                                  }}
                                                  width="8"
                                                />
                                              ) : (
                                                <>&zwj;</>
                                              )}
                                            </Section>
                                          </Column>
                                          <Column style={{ width: "8px" }}>
                                            &zwj;
                                          </Column>
                                          <Column>
                                            <Text
                                              style={{
                                                ...CardsTimeline_textStyle,
                                                color: dark
                                                  ? "#e5e7eb"
                                                  : "#374151",
                                                fontSize: "12px",
                                                lineHeight: "16px",
                                              }}
                                            >
                                              {date}
                                            </Text>
                                          </Column>
                                        </Row>
                                      </Fragment>
                                    </Section>
                                  </Column>
                                  <Column style={{ textAlign: "right" }}>
                                    {withBadge ? (
                                      <span
                                        style={{
                                          backgroundColor: "#eef2ff",
                                          border: "1px solid #c7d2fe",
                                          borderRadius: "9999px",
                                          color: "#4f46e5",
                                          display: "inline-block",
                                          fontFamily: CardsTimeline_fontFamily,
                                          fontSize: "12px",
                                          fontWeight: 500,
                                          lineHeight: "16px",
                                          padding: "1px 8px",
                                        }}
                                      >
                                        {badge}
                                      </span>
                                    ) : null}
                                  </Column>
                                </Row>
                              </Fragment>
                            </Section>
                            <Text
                              style={{
                                ...CardsTimeline_textStyle,
                                color: dark ? "#fffffe" : "#030712",
                                fontSize: "18px",
                                fontWeight: 600,
                                lineHeight: "28px",
                                marginTop: "4px",
                              }}
                            >
                              {title}
                            </Text>
                            <Text
                              style={{
                                ...CardsTimeline_textStyle,
                                color: dark ? "#d1d5db" : "#4b5563",
                                fontSize: "16px",
                                lineHeight: "24px",
                                marginTop: "4px",
                              }}
                            >
                              {description}
                            </Text>
                            {imageBottom ? (
                              <>
                                <Section style={{ lineHeight: "16px" }}>
                                  &zwj;
                                </Section>
                                {image}
                              </>
                            ) : null}
                          </Column>
                        </Row>
                      </Fragment>
                    </Section>
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

const CardsTimeline_CardsTimeline = ({
  theme = defaultTheme,
  ...props
}: CardsTimeline_CardsTimelineProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Miles traveled</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body className="m-0 bg-background font-sans">
        <CardsTimeline_CardsTimelineSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

CardsTimeline_CardsTimeline.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies CardsTimeline_CardsTimelineProps;

const __CardsTimeline = CardsTimeline_CardsTimeline;

type Changelog_ChangelogVariant =
  | "muted-left"
  | "muted-right"
  | "basic-left"
  | "basic-right"
  | "accent-left"
  | "accent-right";

type Changelog_ChangelogLayout = "line" | "boxed";

interface Changelog_ChangelogProps {
  theme?: EmailTheme;
  variant?: Changelog_ChangelogVariant;
  layout?: Changelog_ChangelogLayout;
  version?: string;
  date?: string;
  category?: string;
  title?: string;
  description?: string;
}

const Changelog_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const Changelog_responsiveStyles = `
    .changelog-mobile { display: none; }
    @media only screen and (max-width: 599px) {
      .changelog-meta { width: 96px !important; }
    }
    @media only screen and (max-width: 430px) {
      .changelog-meta, .changelog-gap { display: none !important; }
      .changelog-mobile { display: block !important; }
      .changelog-content { width: 100% !important; }
      .changelog-copy { text-align: left !important; }
    }
  `;

const Changelog_textStyle = {
  fontFamily: Changelog_fontFamily,
  margin: 0,
} as const;

const Changelog_ChangelogShell = ({ children }: { children: ReactNode }) => (
  <>
    <style>{Changelog_responsiveStyles}</style>
    <Section style={{ backgroundColor: "#f1f5f9", width: "100%" }}>
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: "#fffffe",
              maxWidth: "100%",
              width: "600px",
            }}
          >
            {children}
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  </>
);

interface Changelog_BadgeProps {
  muted: boolean;
  version: string;
}

const Changelog_VersionBadge = ({ muted, version }: Changelog_BadgeProps) => (
  <span
    style={{
      backgroundColor: muted ? "#f9fafb" : "#eef2ff",
      border: `1px solid ${muted ? "#d1d5db" : "#a5b4fc"}`,
      borderRadius: "9999px",
      color: muted ? "#4b5563" : "#4f46e5",
      display: "inline-block",
      fontFamily: Changelog_fontFamily,
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16px",
      padding: "2px 8px",
    }}
  >
    {version}
  </span>
);

interface Changelog_MetaProps {
  category: string;
  date: string;
  muted: boolean;
  right: boolean;
  version: string;
}

const Changelog_ChangelogMeta = ({
  category,
  date,
  muted,
  right,
  version,
}: Changelog_MetaProps) => (
  <Column
    className="changelog-meta"
    style={{
      textAlign: right ? "left" : "right",
      verticalAlign: "top",
      width: "136px",
    }}
  >
    <Section style={{ lineHeight: "6px" }}>&zwj;</Section>
    <Changelog_VersionBadge muted={muted} version={version} />
    <Text
      style={{
        ...Changelog_textStyle,
        color: "#030712",
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "24px",
        marginTop: "8px",
      }}
    >
      {date}
    </Text>
    <Text
      style={{
        ...Changelog_textStyle,
        color: "#6b7280",
        fontSize: "12px",
        fontWeight: 600,
        lineHeight: "16px",
        marginTop: "8px",
      }}
    >
      {category}
    </Text>
  </Column>
);

const Changelog_ChangelogRail = ({
  muted,
  accent,
}: {
  accent: boolean;
  muted: boolean;
}) => (
  <Column style={{ verticalAlign: "top", width: "12px" }}>
    <Section
      style={{
        backgroundColor: muted ? undefined : "#4f46e5",
        border: muted ? "2px solid #d1d5db" : undefined,
        borderRadius: "9999px",
        height: muted ? "8px" : "12px",
        margin: muted ? "8px 2px 0" : "6px 0 0",
        width: muted ? "8px" : "12px",
      }}
    >
      &zwj;
    </Section>
    <Section
      style={{
        backgroundColor: accent ? "#030712" : "#d1d5db",
        height: "104px",
        margin: "0 auto",
        width: "2px",
      }}
    >
      &zwj;
    </Section>
  </Column>
);

interface Changelog_CopyProps {
  boxed: boolean;
  dark: boolean;
  description: string;
  title: string;
}

const Changelog_ChangelogCopy = ({
  boxed,
  dark,
  description,
  title,
}: Changelog_CopyProps) =>
  (() => {
    if (boxed) {
      return (
        <Section
          style={{
            backgroundColor: dark ? "#030712" : "#f9fafb",
            borderRadius: "8px",
            width: "100%",
          }}
        >
          <Fragment>
            <Row>
              <Column style={{ padding: "24px 24px 0" }}>
                <Text
                  style={{
                    ...Changelog_textStyle,
                    color: dark ? "#fffffe" : "#030712",
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                >
                  {title}
                </Text>
              </Column>
            </Row>
            <Row>
              <Column style={{ padding: "16px 24px 24px" }}>
                <Text
                  style={{
                    ...Changelog_textStyle,
                    color: dark ? "#d1d5db" : "#4b5563",
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  {description}
                </Text>
              </Column>
            </Row>
          </Fragment>
        </Section>
      );
    }
    return (
      <>
        <Text
          style={{
            ...Changelog_textStyle,
            color: "#030712",
            fontSize: "18px",
            fontWeight: 600,
            lineHeight: "24px",
          }}
        >
          {title}
        </Text>
        <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
        <Text
          style={{
            ...Changelog_textStyle,
            color: "#4b5563",
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          {description}
        </Text>
      </>
    );
  })();

interface Changelog_ContentProps {
  accent: boolean;
  boxed: boolean;
  category: string;
  date: string;
  description: string;
  muted: boolean;
  right: boolean;
  title: string;
  version: string;
}

const Changelog_ChangelogContent = ({
  accent,
  boxed,
  category,
  date,
  description,
  muted,
  right,
  title,
  version,
}: Changelog_ContentProps) => {
  const copy = (
    <Column
      className="changelog-copy"
      style={{ paddingBottom: "80px", textAlign: right ? "right" : "left" }}
    >
      <Section className="changelog-mobile">
        <Changelog_VersionBadge muted={muted} version={version} />
        <Text
          style={{
            ...Changelog_textStyle,
            color: "#030712",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "24px",
            marginTop: "8px",
          }}
        >
          {date}
        </Text>
        <Text
          style={{
            ...Changelog_textStyle,
            color: "#6b7280",
            fontSize: "12px",
            fontWeight: 600,
            lineHeight: "16px",
            marginTop: "8px",
          }}
        >
          {category}
        </Text>
        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
      </Section>
      <Changelog_ChangelogCopy
        boxed={boxed}
        dark={boxed && accent}
        description={description}
        title={title}
      />
    </Column>
  );
  return (
    <Column className="changelog-content" style={{ verticalAlign: "top" }}>
      <Section style={{ width: "100%" }}>
        <Fragment>
          <Row>
            {right ? (
              <>
                {copy}
                <Column style={{ width: "16px" }}>&zwj;</Column>
                <Changelog_ChangelogRail accent={accent} muted={muted} />
              </>
            ) : (
              <>
                <Changelog_ChangelogRail accent={accent} muted={muted} />
                <Column style={{ width: "16px" }}>&zwj;</Column>
                {copy}
              </>
            )}
          </Row>
        </Fragment>
      </Section>
    </Column>
  );
};

const Changelog_ChangelogSection = ({
  category = "Refactoring",
  date = "19 Jan",
  description = "Introduced a new timeline pattern to clearly represent ordered states and progression, improving clarity across step-based and time-based flows.",
  layout = "line",
  title = "Refined layouts",
  variant = "muted-left",
  version = "v1.0.9",
}: Omit<Changelog_ChangelogProps, "theme">) => {
  const boxed = layout === "boxed";
  const right = variant.endsWith("-right");
  const muted = variant.startsWith("muted");
  const accent = variant.startsWith("accent");
  const meta = (
    <Changelog_ChangelogMeta
      category={category}
      date={date}
      muted={muted}
      right={right}
      version={version}
    />
  );
  const content = (
    <Changelog_ChangelogContent
      accent={accent}
      boxed={boxed}
      category={category}
      date={date}
      description={description}
      muted={muted}
      right={right}
      title={title}
      version={version}
    />
  );
  return (
    <Changelog_ChangelogShell>
      <Section style={{ width: "100%" }}>
        <Fragment>
          <Row>
            <Column style={{ padding: "0 24px" }}>
              <Section style={{ width: "100%" }}>
                <Fragment>
                  <Row>
                    {right ? content : meta}
                    <Column className="changelog-gap" style={{ width: "16px" }}>
                      &zwj;
                    </Column>
                    {right ? meta : content}
                  </Row>
                </Fragment>
              </Section>
            </Column>
          </Row>
        </Fragment>
      </Section>
    </Changelog_ChangelogShell>
  );
};

const Changelog_Changelog = ({
  theme = defaultTheme,
  ...props
}: Changelog_ChangelogProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Refined layouts</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body className="m-0 bg-background font-sans">
        <Changelog_ChangelogSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

Changelog_Changelog.PreviewProps = {
  layout: "line",
  theme: defaultTheme,
  variant: "muted-left",
} satisfies Changelog_ChangelogProps;

const __Changelog = Changelog_Changelog;

type SplitTimeline_SplitCardsVariant =
  | "muted"
  | "muted-reverse"
  | "boxed"
  | "boxed-reverse"
  | "accent"
  | "accent-reverse"
  | "image-top"
  | "image-top-reverse"
  | "image-bottom"
  | "image-bottom-reverse";

interface SplitTimeline_SplitCardsProps {
  theme?: EmailTheme;
  variant?: SplitTimeline_SplitCardsVariant;
  index?: string;
  label?: string;
  date?: string;
  badge?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const SplitTimeline_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const SplitTimeline_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .split-card-column { display: block !important; width: 100% !important; }
      .split-card-meta { display: table-header-group !important; width: 100% !important; }
      .split-card-copy { display: table-footer-group !important; width: 100% !important; }
      .split-card-mobile-space { display: block !important; line-height: 16px !important; }
    }
  `;

const SplitTimeline_textStyle = {
  fontFamily: SplitTimeline_fontFamily,
  margin: 0,
} as const;

const SplitTimeline_SplitShell = ({ children }: { children: ReactNode }) => (
  <>
    <style>{SplitTimeline_responsiveStyles}</style>
    <Section style={{ backgroundColor: "#f1f5f9", width: "100%" }}>
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: "#fffffe",
              maxWidth: "100%",
              width: "600px",
            }}
          >
            {children}
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  </>
);

const SplitTimeline_SplitMeta = ({
  index,
  label,
}: {
  index: string;
  label: string;
}) => (
  <Column
    className="split-card-column split-card-meta"
    style={{ padding: "16px 0", verticalAlign: "top", width: "112px" }}
  >
    <Section>
      <Text
        style={{
          ...SplitTimeline_textStyle,
          color: "#030712",
          fontSize: "60px",
          fontWeight: 600,
          lineHeight: 1,
        }}
      >
        {index}
      </Text>
      <Text
        style={{
          ...SplitTimeline_textStyle,
          color: "#9ca3af",
          fontSize: "12px",
          fontWeight: 600,
          lineHeight: "16px",
        }}
      >
        {label}
      </Text>
    </Section>
  </Column>
);

interface SplitTimeline_EventCardProps {
  badge: string;
  date: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  title: string;
  variant: SplitTimeline_SplitCardsVariant;
}

const SplitTimeline_EventCard = ({
  badge,
  date,
  description,
  imageAlt,
  imageSrc,
  title,
  variant,
}: SplitTimeline_EventCardProps) => {
  const muted = variant.startsWith("muted");
  const boxed = variant.startsWith("boxed");
  const accent = variant.startsWith("accent");
  const imageTop = variant.startsWith("image-top");
  const imageBottom = variant.startsWith("image-bottom");
  const dark = accent || imageTop || imageBottom;
  let cardBackgroundColor: string | undefined;
  if (dark) {
    cardBackgroundColor = "#030712";
  } else if (boxed) {
    cardBackgroundColor = "#f9fafb";
  }
  const image = (
    <Img
      alt={imageAlt}
      src={imageSrc}
      style={{
        borderRadius: "4px",
        maxWidth: "100%",
        verticalAlign: "middle",
      }}
      width="536"
    />
  );
  return (
    <Section style={{ width: "100%" }}>
      <Fragment>
        <Row>
          <Column
            style={{
              backgroundColor: cardBackgroundColor,
              borderRadius: muted ? undefined : "8px",
              padding: muted ? 0 : "16px",
            }}
          >
            {imageTop ? (
              <>
                {image}
                <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
              </>
            ) : null}
            {(() => {
              if (muted) {
                return (
                  <Text
                    style={{
                      ...SplitTimeline_textStyle,
                      color: "#374151",
                      fontSize: "12px",
                      lineHeight: "16px",
                    }}
                  >
                    {date}
                  </Text>
                );
              }
              return (
                <Section style={{ width: "100%" }}>
                  <Fragment>
                    <Row>
                      <Column>
                        <Section>
                          <Fragment>
                            <Row>
                              <Column>
                                <Section
                                  style={{
                                    backgroundColor: "#6ee7b7",
                                    borderRadius: "9999px",
                                    height: "12px",
                                    lineHeight: accent ? "10px" : "12px",
                                    textAlign: "center",
                                    width: "12px",
                                  }}
                                >
                                  {accent ? (
                                    <Img
                                      alt=""
                                      src="https://emailcn.vercel.app/api/email-assets/timelines/icon-check.png"
                                      style={{ marginBottom: "1px" }}
                                      width="8"
                                    />
                                  ) : (
                                    <>&zwj;</>
                                  )}
                                </Section>
                              </Column>
                              <Column style={{ width: "8px" }}>&zwj;</Column>
                              <Column>
                                <Text
                                  style={{
                                    ...SplitTimeline_textStyle,
                                    color: dark ? "#e5e7eb" : "#374151",
                                    fontSize: "12px",
                                    lineHeight: "16px",
                                  }}
                                >
                                  {date}
                                </Text>
                              </Column>
                            </Row>
                          </Fragment>
                        </Section>
                      </Column>
                      <Column style={{ textAlign: "right" }}>
                        <span
                          style={{
                            backgroundColor: "#eef2ff",
                            border: "1px solid #c7d2fe",
                            borderRadius: "9999px",
                            color: "#4f46e5",
                            display: "inline-block",
                            fontFamily: SplitTimeline_fontFamily,
                            fontSize: "12px",
                            fontWeight: 500,
                            lineHeight: "16px",
                            padding: "1px 8px",
                          }}
                        >
                          {badge}
                        </span>
                      </Column>
                    </Row>
                  </Fragment>
                </Section>
              );
            })()}
            <Text
              style={{
                ...SplitTimeline_textStyle,
                color: dark ? "#fffffe" : "#030712",
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "28px",
                marginTop: "4px",
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                ...SplitTimeline_textStyle,
                color: dark ? "#d1d5db" : "#4b5563",
                fontSize: "16px",
                lineHeight: "24px",
                marginTop: "4px",
              }}
            >
              {description}
            </Text>
            {imageBottom ? (
              <>
                <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
                {image}
              </>
            ) : null}
          </Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const SplitTimeline_SplitCardsSection = ({
  badge = "Today",
  date = "Monday",
  description = "Description of event",
  imageAlt = "Placeholder image",
  imageSrc = "https://emailcn.vercel.app/api/email-assets/timelines/cards.jpg",
  index = "01",
  label = "Miles traveled",
  title = "Miles traveled",
  variant = "muted",
}: Omit<SplitTimeline_SplitCardsProps, "theme">) => {
  const reverse = variant.endsWith("-reverse");
  const muted = variant.startsWith("muted");
  const meta = <SplitTimeline_SplitMeta index={index} label={label} />;
  const copy = (
    <Column
      className="split-card-column split-card-copy"
      style={{ padding: "16px", verticalAlign: "top" }}
    >
      <SplitTimeline_EventCard
        badge={badge}
        date={date}
        description={description}
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        title={title}
        variant={variant}
      />
    </Column>
  );
  return (
    <SplitTimeline_SplitShell>
      <Section style={{ width: "100%" }}>
        <Fragment>
          <Row>
            <Column
              style={{
                padding: muted && !reverse ? "0 24px" : "16px 24px",
              }}
            >
              <Section style={{ width: "100%" }}>
                <Fragment>
                  <Row>
                    {reverse ? copy : meta}
                    {reverse ? meta : copy}
                  </Row>
                </Fragment>
              </Section>
            </Column>
          </Row>
        </Fragment>
      </Section>
    </SplitTimeline_SplitShell>
  );
};

const SplitTimeline_SplitCards = ({
  theme = defaultTheme,
  ...props
}: SplitTimeline_SplitCardsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Miles traveled</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body className="m-0 bg-background font-sans">
        <SplitTimeline_SplitCardsSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

SplitTimeline_SplitCards.PreviewProps = {
  theme: defaultTheme,
  variant: "muted",
} satisfies SplitTimeline_SplitCardsProps;

const __SplitTimeline = SplitTimeline_SplitCards;

type StackedTimeline_StackedTimelineVariant =
  | "muted-left"
  | "muted-right"
  | "basic-left"
  | "basic-right"
  | "completed-left"
  | "completed-right"
  | "accent-left"
  | "accent-right";

type StackedTimeline_StackedTimelineLayout = "line" | "boxed";

interface StackedTimeline_StackedTimelineProps {
  theme?: EmailTheme;
  variant?: StackedTimeline_StackedTimelineVariant;
  layout?: StackedTimeline_StackedTimelineLayout;
  index?: string;
  label?: string;
  title?: string;
  description?: string;
}

const StackedTimeline_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const StackedTimeline_responsiveStyles = `
    .stacked-timeline-mobile { display: none; }
    @media only screen and (max-width: 599px) {
      .stacked-timeline-meta { width: 96px !important; }
    }
    @media only screen and (max-width: 430px) {
      .stacked-timeline-meta, .stacked-timeline-gap { display: none !important; }
      .stacked-timeline-mobile { display: block !important; }
      .stacked-timeline-content { width: 100% !important; }
      .stacked-timeline-card { text-align: left !important; }
    }
  `;

const StackedTimeline_textStyle = {
  fontFamily: StackedTimeline_fontFamily,
  margin: 0,
} as const;

interface StackedTimeline_ShellProps {
  children: ReactNode;
}

const StackedTimeline_TimelineShell = ({
  children,
}: StackedTimeline_ShellProps) => (
  <>
    <style>{StackedTimeline_responsiveStyles}</style>
    <Section style={{ backgroundColor: "#f1f5f9", width: "100%" }}>
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: "#fffffe",
              maxWidth: "100%",
              width: "600px",
            }}
          >
            {children}
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  </>
);

interface StackedTimeline_MetaProps {
  index: string;
  label: string;
  muted: boolean;
  right: boolean;
}

const StackedTimeline_TimelineMeta = ({
  index,
  label,
  muted,
  right,
}: StackedTimeline_MetaProps) => (
  <Column
    className="stacked-timeline-meta"
    style={{
      textAlign: right ? "left" : "right",
      verticalAlign: "top",
      width: "136px",
    }}
  >
    <Text
      style={{
        ...StackedTimeline_textStyle,
        color: muted ? "#9ca3af" : "#030712",
        fontSize: "60px",
        fontWeight: 600,
      }}
    >
      {index}
    </Text>
    <Text
      style={{
        ...StackedTimeline_textStyle,
        color: "#9ca3af",
        fontSize: "12px",
        fontWeight: 600,
        lineHeight: "16px",
      }}
    >
      {label}
    </Text>
  </Column>
);

const StackedTimeline_Rail = ({
  boxed,
  muted,
  railColor,
}: {
  boxed: boolean;
  muted: boolean;
  railColor: string;
}) => (
  <Column style={{ verticalAlign: "top", width: "12px" }}>
    <Section
      style={{
        backgroundColor: railColor,
        height: boxed ? "24px" : "4px",
        margin: "0 auto",
        width: "2px",
      }}
    >
      &zwj;
    </Section>
    <Section
      style={{
        backgroundColor: muted ? undefined : "#4f46e5",
        border: muted ? "2px solid #d1d5db" : undefined,
        borderRadius: "9999px",
        height: muted ? "8px" : "12px",
        margin: muted ? "6px 2px" : "6px 0",
        width: muted ? "8px" : "12px",
      }}
    >
      &zwj;
    </Section>
    <Section
      style={{
        backgroundColor: railColor,
        height: "104px",
        margin: "0 auto",
        width: "2px",
      }}
    >
      &zwj;
    </Section>
  </Column>
);

interface StackedTimeline_CopyProps {
  accent: boolean;
  boxed: boolean;
  cardBackground?: string;
  description: string;
  descriptionColor: string;
  title: string;
  titleColor: string;
}

const StackedTimeline_TimelineCopy = ({
  boxed,
  cardBackground,
  description,
  descriptionColor,
  title,
  titleColor,
}: StackedTimeline_CopyProps) =>
  boxed ? (
    <Section
      style={{
        backgroundColor: cardBackground,
        borderRadius: "8px",
        width: "100%",
      }}
    >
      <Fragment>
        <Row>
          <Column style={{ padding: "24px 24px 0" }}>
            <Text
              style={{
                ...StackedTimeline_textStyle,
                color: titleColor,
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "24px",
              }}
            >
              {title}
            </Text>
          </Column>
        </Row>
        <Row>
          <Column style={{ padding: "16px 24px 24px" }}>
            <Text
              style={{
                ...StackedTimeline_textStyle,
                color: descriptionColor,
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              {description}
            </Text>
          </Column>
        </Row>
      </Fragment>
    </Section>
  ) : (
    <>
      <Text
        style={{
          ...StackedTimeline_textStyle,
          color: titleColor,
          fontSize: "18px",
          fontWeight: 600,
          lineHeight: "24px",
        }}
      >
        {title}
      </Text>
      <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
      <Text
        style={{
          ...StackedTimeline_textStyle,
          color: descriptionColor,
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        {description}
      </Text>
    </>
  );

interface StackedTimeline_ContentProps {
  accent: boolean;
  boxed: boolean;
  description: string;
  index: string;
  label: string;
  muted: boolean;
  right: boolean;
  title: string;
}

const StackedTimeline_TimelineContent = ({
  accent,
  boxed,
  description,
  index,
  label,
  muted,
  right,
  title,
}: StackedTimeline_ContentProps) => {
  const railColor = accent ? "#030712" : "#d1d5db";
  let cardBackground: string | undefined;
  if (boxed) {
    cardBackground = accent ? "#030712" : "#f9fafb";
  }
  const titleColor = boxed && accent ? "#fffffe" : "#030712";
  const descriptionColor = boxed && accent ? "#d1d5db" : "#4b5563";
  return (
    <Column
      className="stacked-timeline-content"
      style={{ textAlign: right ? "right" : "left", verticalAlign: "top" }}
    >
      <Section style={{ width: "100%" }}>
        <Fragment>
          <Row>
            {(() => {
              if (right) {
                return (
                  <>
                    <Column
                      className="stacked-timeline-card"
                      style={{ paddingBottom: "80px" }}
                    >
                      <Section className="stacked-timeline-mobile">
                        <Text
                          style={{
                            ...StackedTimeline_textStyle,
                            color: muted ? "#9ca3af" : "#030712",
                            fontSize: "60px",
                            fontWeight: 600,
                            lineHeight: "64px",
                          }}
                        >
                          {index}
                        </Text>
                        <Text
                          style={{
                            ...StackedTimeline_textStyle,
                            color: "#9ca3af",
                            fontSize: "12px",
                            fontWeight: 600,
                            lineHeight: "16px",
                          }}
                        >
                          {label}
                        </Text>
                        <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
                      </Section>
                      <StackedTimeline_TimelineCopy
                        accent={accent}
                        boxed={boxed}
                        cardBackground={cardBackground}
                        description={description}
                        descriptionColor={descriptionColor}
                        title={title}
                        titleColor={titleColor}
                      />
                    </Column>
                    <Column style={{ width: "16px" }}>&zwj;</Column>
                    <StackedTimeline_Rail
                      boxed={boxed}
                      muted={muted}
                      railColor={railColor}
                    />
                  </>
                );
              }
              return (
                <>
                  <StackedTimeline_Rail
                    boxed={boxed}
                    muted={muted}
                    railColor={railColor}
                  />
                  <Column style={{ width: "16px" }}>&zwj;</Column>
                  <Column
                    className="stacked-timeline-card"
                    style={{ paddingBottom: "80px" }}
                  >
                    <Section className="stacked-timeline-mobile">
                      <Text
                        style={{
                          ...StackedTimeline_textStyle,
                          color: muted ? "#9ca3af" : "#030712",
                          fontSize: "60px",
                          fontWeight: 600,
                          lineHeight: "64px",
                        }}
                      >
                        {index}
                      </Text>
                      <Text
                        style={{
                          ...StackedTimeline_textStyle,
                          color: "#9ca3af",
                          fontSize: "12px",
                          fontWeight: 600,
                          lineHeight: "16px",
                        }}
                      >
                        {label}
                      </Text>
                      <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
                    </Section>
                    <StackedTimeline_TimelineCopy
                      accent={accent}
                      boxed={boxed}
                      cardBackground={cardBackground}
                      description={description}
                      descriptionColor={descriptionColor}
                      title={title}
                      titleColor={titleColor}
                    />
                  </Column>
                </>
              );
            })()}
          </Row>
        </Fragment>
      </Section>
    </Column>
  );
};

const StackedTimeline_StackedTimelineSection = ({
  description = "Every mile tells a story. Each step forward adds to the journey, shaping the path ahead and marking progress along the way.",
  index,
  label,
  layout = "line",
  title = "Total distance",
  variant = "muted-left",
}: Omit<StackedTimeline_StackedTimelineProps, "theme">) => {
  const boxed = layout === "boxed";
  const right = variant.endsWith("-right");
  const muted = variant.startsWith("muted");
  const accent =
    variant.startsWith("completed") || variant.startsWith("accent");
  const resolvedIndex = index ?? (boxed ? "A" : "01");
  const resolvedLabel = label ?? (boxed ? "Cargo number" : "Miles traveled");
  const meta = (
    <StackedTimeline_TimelineMeta
      index={resolvedIndex}
      label={resolvedLabel}
      muted={muted}
      right={right}
    />
  );
  const content = (
    <StackedTimeline_TimelineContent
      accent={accent}
      boxed={boxed}
      description={description}
      index={resolvedIndex}
      label={resolvedLabel}
      muted={muted}
      right={right}
      title={title}
    />
  );
  return (
    <StackedTimeline_TimelineShell>
      <Section style={{ width: "100%" }}>
        <Fragment>
          <Row>
            <Column style={{ padding: "0 24px" }}>
              <Section style={{ width: "100%" }}>
                <Fragment>
                  <Row>
                    {right ? content : meta}
                    <Column
                      className="stacked-timeline-gap"
                      style={{ width: "16px" }}
                    >
                      &zwj;
                    </Column>
                    {right ? meta : content}
                  </Row>
                </Fragment>
              </Section>
            </Column>
          </Row>
        </Fragment>
      </Section>
    </StackedTimeline_TimelineShell>
  );
};

const StackedTimeline_StackedTimeline = ({
  theme = defaultTheme,
  ...props
}: StackedTimeline_StackedTimelineProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Total distance</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body className="m-0 bg-background font-sans">
        <StackedTimeline_StackedTimelineSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

StackedTimeline_StackedTimeline.PreviewProps = {
  layout: "line",
  theme: defaultTheme,
  variant: "muted-left",
} satisfies StackedTimeline_StackedTimelineProps;

const __StackedTimeline = StackedTimeline_StackedTimeline;

export interface TimelineItem {
  index?: string;
  label?: string;
  date?: string;
  version?: string;
  category?: string;
  badge?: string;
  title: string;
  description?: string;
  image?: {
    src: string;
    alt?: string;
  };
  completed?: boolean;
}

export interface TimelineProps {
  theme?: Parameters<typeof __Changelog>[0]["theme"];
  items?: TimelineItem[];
  layout?: "line" | "boxed" | "cards" | "split";
  alignment?: "left" | "right";
  appearance?: "muted" | "basic" | "accent";
  reverse?: boolean;
  variant?:
    | Parameters<typeof __CardsTimeline>[0]["variant"]
    | Parameters<typeof __Changelog>[0]["variant"]
    | Parameters<typeof __SplitTimeline>[0]["variant"]
    | Parameters<typeof __StackedTimeline>[0]["variant"];
}

const timelineVariant = ({
  alignment,
  appearance,
}: Required<Pick<TimelineProps, "alignment" | "appearance">>) =>
  `${appearance}-${alignment}` as const;

const timelineItemValues = (item: TimelineItem | undefined) => {
  const {
    badge,
    category,
    date,
    description,
    image,
    index,
    label,
    title,
    version,
  } = item ?? {};
  return {
    badge,
    category,
    date,
    description,
    imageAlt: image?.alt,
    imageSrc: image?.src,
    index,
    label,
    title,
    version,
  };
};

export const Timeline = ({
  theme,
  items,
  layout = "line",
  alignment = "left",
  appearance = "basic",
  reverse = false,
  variant: variantOverride,
}: TimelineProps) => {
  const [item] = items ?? [];
  const props = { ...timelineItemValues(item), theme };
  if (layout === "cards") {
    const variant = (() => {
      if (item?.image) {
        if (reverse) {
          return "image-bottom";
        }
        return "image-top";
      }
      if (item?.badge) {
        return "with-badge";
      }
      if (appearance === "accent") {
        return "with-accent";
      }
      return "default";
    })();
    return (
      <__CardsTimeline
        {...props}
        variant={
          (variantOverride ?? variant) as Parameters<
            typeof __CardsTimeline
          >[0]["variant"]
        }
      />
    );
  }
  if (layout === "split") {
    const base = (() => {
      if (item?.image) {
        return "image-top";
      }
      if (appearance === "basic") {
        return "boxed";
      }
      return appearance;
    })();
    const variant = variantOverride ?? `${base}${reverse ? "-reverse" : ""}`;
    return (
      <__SplitTimeline
        {...props}
        variant={variant as Parameters<typeof __SplitTimeline>[0]["variant"]}
      />
    );
  }
  if (item?.version || item?.category) {
    return (
      <__Changelog
        {...props}
        layout={layout}
        variant={
          (variantOverride ??
            timelineVariant({ alignment, appearance })) as Parameters<
            typeof __Changelog
          >[0]["variant"]
        }
      />
    );
  }
  const variant = item?.completed
    ? `completed-${alignment}`
    : timelineVariant({ alignment, appearance });
  return (
    <__StackedTimeline
      {...props}
      layout={layout}
      variant={
        (variantOverride ?? variant) as Parameters<
          typeof __StackedTimeline
        >[0]["variant"]
      }
    />
  );
};

Timeline.PreviewProps = {
  alignment: "left",
  appearance: "basic",
  layout: "line",
  reverse: false,
} satisfies TimelineProps;
