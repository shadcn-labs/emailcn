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

export type LogosGridTone = "boxed" | "outlined" | "bordered";

export interface LogosGridProps {
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
  tone?: LogosGridTone;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const defaultLogos = [
  ["Stripe", "logo-stripe.png", 57],
  ["Apple Pay", "logo-apple-pay.png", 60],
  ["Mastercard", "logo-mastercard.png", 40],
  ["Visa", "logo-visa.png", 50],
  ["Google Pay", "logo-google-pay.png", 60],
  ["Klarna", "logo-klarna.png", 70],
].map(([alt, file, width]) => ({
  alt: String(alt),
  src: `https://emailcn.vercel.app/api/email-assets/logos/${file}`,
  width: Number(width),
}));

const LogoRow = ({
  borderColor,
  boxBackgroundColor,
  logos,
  tone,
}: {
  borderColor: string;
  boxBackgroundColor: string;
  logos: typeof defaultLogos;
  tone: LogosGridTone;
}) => (
  <MjmlSection padding="0 24px">
    {logos.map((logo) => (
      <MjmlColumn
        backgroundColor={tone === "boxed" ? boxBackgroundColor : undefined}
        border={tone === "boxed" ? undefined : `1px solid ${borderColor}`}
        borderRadius="4px"
        key={`${logo.alt}-${logo.src}`}
        padding="24px 12px"
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
);

export const LogosGridSection = ({
  backgroundColor = "#fffffe",
  borderColor = "#d1d5db",
  boxBackgroundColor = "#f3f4f6",
  description = "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  logos = defaultLogos,
  textColor = "#4b5563",
  title = "Supported payment services",
  titleColor = "#030712",
  tone = "boxed",
}: Omit<LogosGridProps, "theme">) => (
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
      </MjmlColumn>
    </MjmlSection>
    <LogoRow
      borderColor={borderColor}
      boxBackgroundColor={boxBackgroundColor}
      logos={logos.slice(0, 3)}
      tone={tone}
    />
    <MjmlSection backgroundColor={backgroundColor} padding="0">
      <MjmlColumn padding="0">
        <MjmlSpacer height="16px" />
      </MjmlColumn>
    </MjmlSection>
    <LogoRow
      borderColor={borderColor}
      boxBackgroundColor={boxBackgroundColor}
      logos={logos.slice(3, 6)}
      tone={tone}
    />
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

export const LogosGrid = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  tone = "boxed",
  ...props
}: LogosGridProps) => (
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
        <LogosGridSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          tone={tone}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

LogosGrid.PreviewProps = {
  theme: defaultTheme,
  tone: "boxed",
} satisfies LogosGridProps;
