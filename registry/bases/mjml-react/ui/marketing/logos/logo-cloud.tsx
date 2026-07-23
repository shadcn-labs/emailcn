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

export type LogoCloudVariant =
  | "minimal"
  | "with-title"
  | "with-description"
  | "full"
  | "flush";
export type LogoCloudTone = "boxed" | "outlined";

export interface LogoCloudProps {
  theme?: EmailThemeTokens;
  title?: string;
  description?: string;
  logos?: { alt: string; src: string; width: number }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  boxBackgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  textColor?: string;
  variant?: LogoCloudVariant;
  tone?: LogoCloudTone;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const defaultLogos = [
  ["Stripe", "logo-stripe.png", 57],
  ["Apple Pay", "logo-apple-pay.png", 60],
  ["Mastercard", "logo-mastercard.png", 40],
  ["Visa", "logo-visa.png", 50],
  ["Klarna", "logo-klarna.png", 70],
].map(([alt, file, width]) => ({
  alt: String(alt),
  src: `https://emailcn.vercel.app/api/email-assets/logos/${file}`,
  width: Number(width),
}));

export const LogoCloudSection = ({
  backgroundColor = "#fffffe",
  borderColor = "#d1d5db",
  boxBackgroundColor = "#f3f4f6",
  description = "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  logos = defaultLogos,
  textColor = "#4b5563",
  title = "Supported payment services",
  titleColor = "#030712",
  variant = "full",
  tone = "boxed",
}: Omit<LogoCloudProps, "theme">) => {
  const showTitle =
    variant === "with-title" || variant === "full" || variant === "flush";
  const showDescription =
    variant === "with-description" || variant === "full" || variant === "flush";

  return (
    <>
      <MjmlSection backgroundColor={backgroundColor} padding="44px 24px 0">
        <MjmlColumn padding="0">
          {showTitle ? (
            <>
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
            </>
          ) : null}
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection backgroundColor={backgroundColor} padding="0 24px">
        {logos.slice(0, 5).map((logo) => (
          <MjmlColumn
            backgroundColor={tone === "boxed" ? boxBackgroundColor : undefined}
            border={
              tone === "outlined" ? `1px solid ${borderColor}` : undefined
            }
            borderRadius="4px"
            key={`${logo.alt}-${logo.src}`}
            padding="24px 8px"
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
          {showDescription ? (
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
          ) : null}
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};

export const LogoCloud = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  tone = "boxed",
  variant = "full",
  ...props
}: LogoCloudProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Supported payment services</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <LogoCloudSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          tone={tone}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

LogoCloud.PreviewProps = {
  theme: defaultTheme,
  tone: "boxed",
  variant: "full",
} satisfies LogoCloudProps;
