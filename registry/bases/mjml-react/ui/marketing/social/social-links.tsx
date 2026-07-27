import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlSocial,
  MjmlSocialElement,
  MjmlSpacer,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/themes/definitions/default";
import type { EmailThemeTokens } from "@/registry/themes/definitions/default";

interface SimpleSocials_SimpleSocialLogoItem {
  alt: string;
  href: string;
  src: string;
}

interface SimpleSocials_SimpleSocialLogosRowProps {
  theme?: EmailThemeTokens;
  title?: string;
  description?: string;
  items?: SimpleSocials_SimpleSocialLogoItem[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
}

const SimpleSocials_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const SimpleSocials_defaultItems: SimpleSocials_SimpleSocialLogoItem[] = [
  ["LinkedIn", "icon-linkedin.png"],
  ["X", "icon-x.png"],
  ["YouTube", "icon-youtube.png"],
  ["Instagram", "icon-instagram.png"],
  ["Discord", "icon-discord.png"],
].map(([alt, file]) => ({
  alt,
  href: "https://example.com",
  src: `https://emailcn.vercel.app/api/email-assets/social/${file}`,
}));

const SimpleSocials_SimpleSocialLogosRowSection = ({
  title = "Connect with us",
  description = "Stay in the loop by following us across our social channels for updates, news, and behind-the-scenes moments.",
  items = SimpleSocials_defaultItems,
  backgroundColor = "#fffffe",
}: Omit<SimpleSocials_SimpleSocialLogosRowProps, "theme">) => (
  <MjmlSection backgroundColor={backgroundColor} padding="44px 64px">
    <MjmlColumn padding="0">
      <MjmlText
        align="center"
        color="#030712"
        fontFamily={SimpleSocials_fontFamily}
        fontSize="20px"
        fontWeight="600"
        lineHeight="28px"
        padding="0"
      >
        {title}
      </MjmlText>
      <MjmlSpacer height="36px" />
      <MjmlSocial align="center" iconSize="24px" padding="0">
        {items.map((item) => (
          <MjmlSocialElement
            alt={item.alt}
            href={item.href}
            key={`${item.alt}-${item.href}`}
            padding="0 8px"
            src={item.src}
          />
        ))}
      </MjmlSocial>
      <MjmlSpacer height="36px" />
      <MjmlText
        align="center"
        color="#4b5563"
        fontFamily={SimpleSocials_fontFamily}
        fontSize="16px"
        fontWeight="300"
        lineHeight="24px"
        padding="0"
      >
        {description}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

const SimpleSocials_SimpleSocialLogosRow = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: SimpleSocials_SimpleSocialLogosRowProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlPreview>Connect with us</MjmlPreview>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <SimpleSocials_SimpleSocialLogosRowSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
  theme?: EmailThemeTokens;
  title?: string;
  description?: string;
  items?: SocialLogos_SocialLogoItem[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  variant?: SocialLogos_SocialLogosVariant;
}

const SocialLogos_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const SocialLogos_defaultItems: SocialLogos_SocialLogoItem[] = [
  ["LinkedIn", "icon-linkedin.png"],
  ["X", "icon-x.png"],
  ["YouTube", "icon-youtube.png"],
  ["Instagram", "icon-instagram.png"],
  ["Discord", "icon-discord.png"],
].map(([alt, file]) => ({
  alt,
  href: "https://example.com",
  src: `https://emailcn.vercel.app/api/email-assets/social/${file}`,
}));

const SocialLogos_SocialLogosSection = ({
  title = "Connect with us",
  description = "Stay in the loop by following us across our social channels for updates, news, and behind-the-scenes moments.",
  items = SocialLogos_defaultItems,
  backgroundColor = "#fffffe",
  variant = "square-tiles",
}: Omit<SocialLogos_SocialLogosProps, "theme">) => {
  const outlined = variant.startsWith("outlined");
  const rounded = variant.includes("circle") || variant.includes("pill");
  return (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 64px">
      <MjmlColumn padding="0">
        <MjmlText
          align="center"
          color="#030712"
          fontFamily={SocialLogos_fontFamily}
          fontSize="20px"
          fontWeight="600"
          lineHeight="28px"
          padding="0"
        >
          {title}
        </MjmlText>
        <MjmlSpacer height="36px" />
        <MjmlSocial
          align="center"
          borderRadius={rounded ? "9999px" : "4px"}
          iconSize="24px"
          padding="0"
        >
          {items.map((item) => (
            <MjmlSocialElement
              alt={item.alt}
              backgroundColor={outlined ? "#fffffe" : "#f3f4f6"}
              borderRadius={rounded ? "9999px" : "4px"}
              href={item.href}
              iconPadding="20px"
              key={`${item.alt}-${item.href}`}
              padding="0 8px"
              src={item.src}
            />
          ))}
        </MjmlSocial>
        <MjmlSpacer height="36px" />
        <MjmlText
          align="center"
          color="#4b5563"
          fontFamily={SocialLogos_fontFamily}
          fontSize="16px"
          fontWeight="300"
          lineHeight="24px"
          padding="0"
        >
          {description}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
};

const SocialLogos_SocialLogos = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "square-tiles",
  ...props
}: SocialLogos_SocialLogosProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlPreview>Connect with us</MjmlPreview>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <SocialLogos_SocialLogosSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
  theme?: EmailThemeTokens;
  title?: string;
  description?: string;
  items?: SocialLabels_LabeledSocialItem[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  variant?: SocialLabels_SocialsWithLabelsVariant;
}

const SocialLabels_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const SocialLabels_makeItems = (
  entries: readonly (readonly [string, string])[]
) =>
  entries.map(([label, file]) => ({
    alt: label,
    href: "https://example.com",
    label,
    src: `https://emailcn.vercel.app/api/email-assets/social/${file}`,
  }));

const SocialLabels_stackedItems = SocialLabels_makeItems([
  ["LinkedIn", "icon-linkedin.png"],
  ["X", "icon-x.png"],
  ["YouTube", "icon-youtube.png"],
  ["Instagram", "icon-instagram.png"],
  ["Discord", "icon-discord.png"],
] as const);

const SocialLabels_inlineItems = SocialLabels_makeItems([
  ["LinkedIn", "icon-linkedin.png"],
  ["Facebook", "icon-facebook.png"],
  ["YouTube", "icon-youtube.png"],
  ["Instagram", "icon-instagram.png"],
] as const);

const SocialLabels_SocialsWithLabelsSection = ({
  title = "Connect with us",
  description = "Stay in the loop by following us across our social channels for updates, news, and behind-the-scenes moments.",
  items,
  backgroundColor = "#fffffe",
  variant = "stacked",
}: Omit<SocialLabels_SocialsWithLabelsProps, "theme">) => {
  const resolvedItems =
    items ??
    (variant === "stacked"
      ? SocialLabels_stackedItems
      : SocialLabels_inlineItems);
  const stacked = variant === "stacked";
  return (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 64px">
      <MjmlColumn padding="0">
        <MjmlText
          align="center"
          color="#030712"
          fontFamily={SocialLabels_fontFamily}
          fontSize="20px"
          fontWeight="600"
          lineHeight="28px"
          padding="0"
        >
          {title}
        </MjmlText>
        <MjmlSpacer height="36px" />
        <MjmlSocial
          align="center"
          color="#6b7280"
          fontFamily={SocialLabels_fontFamily}
          fontSize="16px"
          fontWeight="500"
          iconSize={stacked ? "24px" : "16px"}
          padding="0"
          textPadding={stacked ? "4px 10px 0" : "0 10px 0 6px"}
        >
          {resolvedItems.map((item) => (
            <MjmlSocialElement
              alt={item.alt}
              href={item.href}
              key={`${item.label}-${item.href}`}
              src={item.src}
            >
              {item.label}
            </MjmlSocialElement>
          ))}
        </MjmlSocial>
        <MjmlSpacer height="36px" />
        <MjmlText
          align="center"
          color="#4b5563"
          fontFamily={SocialLabels_fontFamily}
          fontSize="16px"
          fontWeight="300"
          lineHeight="24px"
          padding="0"
        >
          {description}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
};

const SocialLabels_SocialsWithLabels = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "stacked",
  ...props
}: SocialLabels_SocialsWithLabelsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlPreview>Connect with us</MjmlPreview>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <SocialLabels_SocialsWithLabelsSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
  theme?: EmailThemeTokens;
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

const SocialTileLabels_makeItems = (
  entries: readonly (readonly [string, string])[]
) =>
  entries.map(([label, file]) => ({
    alt: label,
    href: "https://example.com",
    label,
    src: `https://emailcn.vercel.app/api/email-assets/social/${file}`,
  }));

const SocialTileLabels_stackedItems = SocialTileLabels_makeItems([
  ["LinkedIn", "icon-linkedin.png"],
  ["X", "icon-x.png"],
  ["YouTube", "icon-youtube.png"],
  ["Instagram", "icon-instagram.png"],
] as const);

const SocialTileLabels_inlineItems = SocialTileLabels_makeItems([
  ["LinkedIn", "icon-linkedin.png"],
  ["Facebook", "icon-facebook.png"],
  ["YouTube", "icon-youtube.png"],
  ["Instagram", "icon-instagram.png"],
] as const);

const SocialTileLabels_SocialsWithTileLabelsSection = ({
  title = "Connect with us",
  description = "Stay in the loop by following us across our social channels for updates, news, and behind-the-scenes moments.",
  items,
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
  return (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
      <MjmlColumn padding="0">
        <MjmlText
          align="center"
          color="#030712"
          fontFamily={SocialTileLabels_fontFamily}
          fontSize="20px"
          fontWeight="600"
          lineHeight="28px"
          padding="0"
        >
          {title}
        </MjmlText>
        <MjmlSpacer height="36px" />
        <MjmlSocial
          align="center"
          color="#6b7280"
          fontFamily={SocialTileLabels_fontFamily}
          fontSize="16px"
          fontWeight="500"
          iconSize={stacked ? "24px" : "16px"}
          padding="0"
          textPadding={stacked ? "4px 10px 0" : "0 10px 0 6px"}
        >
          {resolvedItems.map((item) => (
            <MjmlSocialElement
              alt={item.alt}
              backgroundColor={tileBackgroundColor}
              borderRadius="4px"
              href={item.href}
              iconPadding="16px"
              key={`${item.label}-${item.href}`}
              src={item.src}
            >
              {item.label}
            </MjmlSocialElement>
          ))}
        </MjmlSocial>
        <MjmlSpacer height="36px" />
        <MjmlText
          align="center"
          color="#4b5563"
          fontFamily={SocialTileLabels_fontFamily}
          fontSize="16px"
          fontWeight="300"
          lineHeight="24px"
          padding="0"
        >
          {description}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
};

const SocialTileLabels_SocialsWithTileLabels = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "stacked",
  ...props
}: SocialTileLabels_SocialsWithTileLabelsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlPreview>Connect with us</MjmlPreview>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <SocialTileLabels_SocialsWithTileLabelsSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
  const props = { description, items: normalizedItems, theme, title };
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
  direction: "inline",
  outlined: false,
  presentation: "icons",
  shape: "square",
} satisfies SocialLinksProps;
