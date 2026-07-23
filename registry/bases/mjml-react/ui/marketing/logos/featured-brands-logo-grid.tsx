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
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type FeaturedBrandsLogoGridTone = "outlined" | "boxed";
export type FeaturedBrandsLogoGridAlignment = "left" | "center" | "right";

export interface FeaturedBrandsLogoGridProps {
  theme?: EmailThemeTokens;
  title?: string;
  description?: string;
  featuredLogo?: { alt: string; src: string; width: number };
  supportingLogos?: { alt: string; src: string; width: number }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  boxBackgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  textColor?: string;
  tone?: FeaturedBrandsLogoGridTone;
  alignment?: FeaturedBrandsLogoGridAlignment;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const defaultFeaturedLogo = {
  alt: "Monarch",
  src: "https://emailcn.vercel.app/api/email-assets/logos/logo-mock-1.png",
  width: 167,
};

const defaultSupportingLogos = [
  {
    alt: "Accentic",
    src: "https://emailcn.vercel.app/api/email-assets/logos/logo-mock-2.png",
    width: 71,
  },
  {
    alt: "Amada",
    src: "https://emailcn.vercel.app/api/email-assets/logos/logo-mock-3.png",
    width: 78,
  },
];

export const FeaturedBrandsLogoGridSection = ({
  alignment = "left",
  backgroundColor = "#fffffe",
  borderColor = "#d1d5db",
  boxBackgroundColor = "#f3f4f6",
  description = "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  featuredLogo = defaultFeaturedLogo,
  supportingLogos = defaultSupportingLogos,
  textColor = "#4b5563",
  title = "Brands we support",
  titleColor = "#030712",
  tone = "outlined",
}: Omit<FeaturedBrandsLogoGridProps, "theme">) => {
  let logos = [featuredLogo, ...supportingLogos];
  if (alignment === "right") {
    logos = [...supportingLogos, featuredLogo];
  } else if (alignment === "center") {
    logos = [supportingLogos[0], featuredLogo, supportingLogos[1]];
  }

  return (
    <>
      <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
        <MjmlColumn padding="0">
          <MjmlText
            align="center"
            color={titleColor}
            fontFamily={fontFamily}
            fontSize="20px"
            fontWeight="600"
            lineHeight="28px"
            padding="0"
          >
            {title}
          </MjmlText>
          <MjmlSpacer height="44px" />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection backgroundColor={backgroundColor} padding="0 24px">
        {logos.map((logo) => (
          <MjmlColumn
            backgroundColor={tone === "boxed" ? boxBackgroundColor : undefined}
            border={
              tone === "outlined" ? `1px solid ${borderColor}` : undefined
            }
            borderRadius="4px"
            key={`${logo.alt}-${logo.src}`}
            padding="24px 12px"
            verticalAlign="middle"
          >
            <MjmlImage
              alt={logo.alt}
              padding="0"
              src={logo.src}
              width={`${logo.width}px`}
            />
          </MjmlColumn>
        ))}
      </MjmlSection>
      <MjmlSection backgroundColor={backgroundColor} padding="36px 24px 44px">
        <MjmlColumn padding="0">
          <MjmlText
            align="center"
            color={textColor}
            fontFamily={fontFamily}
            fontSize="16px"
            fontWeight="300"
            lineHeight="24px"
            padding="0"
          >
            {description}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};

export const FeaturedBrandsLogoGrid = ({
  alignment = "left",
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  tone = "outlined",
  ...props
}: FeaturedBrandsLogoGridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Brands we support</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <FeaturedBrandsLogoGridSection
          {...props}
          alignment={alignment}
          pageBackgroundColor={pageBackgroundColor}
          tone={tone}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FeaturedBrandsLogoGrid.PreviewProps = {
  alignment: "left",
  theme: defaultTheme,
  tone: "outlined",
} satisfies FeaturedBrandsLogoGridProps;
