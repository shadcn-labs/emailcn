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

type BasicLogoCloud_BasicLogoCloudVariant =
  | "minimal"
  | "with-title"
  | "with-description"
  | "full";

interface BasicLogoCloud_BasicLogoCloudProps {
  theme?: EmailThemeTokens;
  title?: string;
  description?: string;
  logos?: {
    alt: string;
    src: string;
    width: number;
  }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  titleColor?: string;
  textColor?: string;
  variant?: BasicLogoCloud_BasicLogoCloudVariant;
}

const BasicLogoCloud_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const BasicLogoCloud_defaultLogos = [
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

const BasicLogoCloud_BasicLogoCloudSection = ({
  backgroundColor = "#fffffe",
  description = "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  logos = BasicLogoCloud_defaultLogos,
  textColor = "#4b5563",
  title = "Supported payment services",
  titleColor = "#030712",
  variant = "full",
}: Omit<BasicLogoCloud_BasicLogoCloudProps, "theme">) => {
  const showTitle = variant === "with-title" || variant === "full";
  const showDescription = variant === "with-description" || variant === "full";
  return (
    <>
      <MjmlSection backgroundColor={backgroundColor} padding="44px 24px 0">
        <MjmlColumn padding="0">
          {showTitle ? (
            <>
              <MjmlText
                align="center"
                color={titleColor}
                fontFamily={BasicLogoCloud_fontFamily}
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
          <MjmlColumn key={`${logo.alt}-${logo.src}`} padding="0 8px">
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
              fontFamily={BasicLogoCloud_fontFamily}
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

const BasicLogoCloud_BasicLogoCloud = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "full",
  ...props
}: BasicLogoCloud_BasicLogoCloudProps) => (
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
        <BasicLogoCloud_BasicLogoCloudSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BasicLogoCloud_BasicLogoCloud.PreviewProps = {
  theme: defaultTheme,
  variant: "full",
} satisfies BasicLogoCloud_BasicLogoCloudProps;

const __BasicLogoCloud = BasicLogoCloud_BasicLogoCloud;

type FeaturedLogoGrid_FeaturedBrandsLogoGridTone = "outlined" | "boxed";

type FeaturedLogoGrid_FeaturedBrandsLogoGridAlignment =
  | "left"
  | "center"
  | "right";

interface FeaturedLogoGrid_FeaturedBrandsLogoGridProps {
  theme?: EmailThemeTokens;
  title?: string;
  description?: string;
  featuredLogo?: {
    alt: string;
    src: string;
    width: number;
  };
  supportingLogos?: {
    alt: string;
    src: string;
    width: number;
  }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  boxBackgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  textColor?: string;
  tone?: FeaturedLogoGrid_FeaturedBrandsLogoGridTone;
  alignment?: FeaturedLogoGrid_FeaturedBrandsLogoGridAlignment;
}

const FeaturedLogoGrid_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const FeaturedLogoGrid_defaultFeaturedLogo = {
  alt: "Monarch",
  src: "https://emailcn.vercel.app/api/email-assets/logos/logo-mock-1.png",
  width: 167,
};

const FeaturedLogoGrid_defaultSupportingLogos = [
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

const FeaturedLogoGrid_FeaturedBrandsLogoGridSection = ({
  alignment = "left",
  backgroundColor = "#fffffe",
  borderColor = "#d1d5db",
  boxBackgroundColor = "#f3f4f6",
  description = "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  featuredLogo = FeaturedLogoGrid_defaultFeaturedLogo,
  supportingLogos = FeaturedLogoGrid_defaultSupportingLogos,
  textColor = "#4b5563",
  title = "Brands we support",
  titleColor = "#030712",
  tone = "outlined",
}: Omit<FeaturedLogoGrid_FeaturedBrandsLogoGridProps, "theme">) => {
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
            fontFamily={FeaturedLogoGrid_fontFamily}
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
            fontFamily={FeaturedLogoGrid_fontFamily}
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

const FeaturedLogoGrid_FeaturedBrandsLogoGrid = ({
  alignment = "left",
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  tone = "outlined",
  ...props
}: FeaturedLogoGrid_FeaturedBrandsLogoGridProps) => (
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
        <FeaturedLogoGrid_FeaturedBrandsLogoGridSection
          {...props}
          alignment={alignment}
          pageBackgroundColor={pageBackgroundColor}
          tone={tone}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FeaturedLogoGrid_FeaturedBrandsLogoGrid.PreviewProps = {
  alignment: "left",
  theme: defaultTheme,
  tone: "outlined",
} satisfies FeaturedLogoGrid_FeaturedBrandsLogoGridProps;

const __FeaturedLogoGrid = FeaturedLogoGrid_FeaturedBrandsLogoGrid;

type BorderedLogoCloud_LogoCloudWithBordersVariant =
  | "minimal"
  | "with-title"
  | "with-description"
  | "full"
  | "flush";

interface BorderedLogoCloud_LogoCloudWithBordersProps {
  theme?: EmailThemeTokens;
  title?: string;
  description?: string;
  logos?: {
    alt: string;
    src: string;
    width: number;
  }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  textColor?: string;
  variant?: BorderedLogoCloud_LogoCloudWithBordersVariant;
}

const BorderedLogoCloud_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const BorderedLogoCloud_defaultLogos = [
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

const BorderedLogoCloud_LogoCloudWithBordersSection = ({
  backgroundColor = "#fffffe",
  borderColor = "#d1d5db",
  description = "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  logos = BorderedLogoCloud_defaultLogos,
  textColor = "#4b5563",
  title = "Supported payment services",
  titleColor = "#030712",
  variant = "full",
}: Omit<BorderedLogoCloud_LogoCloudWithBordersProps, "theme">) => {
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
                fontFamily={BorderedLogoCloud_fontFamily}
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
            border={`1px solid ${borderColor}`}
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
              fontFamily={BorderedLogoCloud_fontFamily}
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

const BorderedLogoCloud_LogoCloudWithBorders = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "full",
  ...props
}: BorderedLogoCloud_LogoCloudWithBordersProps) => (
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
        <BorderedLogoCloud_LogoCloudWithBordersSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BorderedLogoCloud_LogoCloudWithBorders.PreviewProps = {
  theme: defaultTheme,
  variant: "full",
} satisfies BorderedLogoCloud_LogoCloudWithBordersProps;

const __BorderedLogoCloud = BorderedLogoCloud_LogoCloudWithBorders;

type LogoCloud_LogoCloudVariant =
  | "minimal"
  | "with-title"
  | "with-description"
  | "full"
  | "flush";

type LogoCloud_LogoCloudTone = "boxed" | "outlined";

interface LogoCloud_LogoCloudProps {
  theme?: EmailThemeTokens;
  title?: string;
  description?: string;
  logos?: {
    alt: string;
    src: string;
    width: number;
  }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  boxBackgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  textColor?: string;
  variant?: LogoCloud_LogoCloudVariant;
  tone?: LogoCloud_LogoCloudTone;
}

const LogoCloud_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const LogoCloud_defaultLogos = [
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

const LogoCloud_LogoCloudSection = ({
  backgroundColor = "#fffffe",
  borderColor = "#d1d5db",
  boxBackgroundColor = "#f3f4f6",
  description = "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  logos = LogoCloud_defaultLogos,
  textColor = "#4b5563",
  title = "Supported payment services",
  titleColor = "#030712",
  variant = "full",
  tone = "boxed",
}: Omit<LogoCloud_LogoCloudProps, "theme">) => {
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
                fontFamily={LogoCloud_fontFamily}
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
              fontFamily={LogoCloud_fontFamily}
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

const LogoCloud_LogoCloud = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  tone = "boxed",
  variant = "full",
  ...props
}: LogoCloud_LogoCloudProps) => (
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
        <LogoCloud_LogoCloudSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          tone={tone}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

LogoCloud_LogoCloud.PreviewProps = {
  theme: defaultTheme,
  tone: "boxed",
  variant: "full",
} satisfies LogoCloud_LogoCloudProps;

const __LogoCloud = LogoCloud_LogoCloud;

type LogosGrid_LogosGridTone = "boxed" | "outlined" | "bordered";

interface LogosGrid_LogosGridProps {
  theme?: EmailThemeTokens;
  title?: string;
  description?: string;
  logos?: {
    alt: string;
    src: string;
    width: number;
  }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  boxBackgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  textColor?: string;
  tone?: LogosGrid_LogosGridTone;
}

const LogosGrid_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const LogosGrid_defaultLogos = [
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

const LogosGrid_LogoRow = ({
  borderColor,
  boxBackgroundColor,
  logos,
  tone,
}: {
  borderColor: string;
  boxBackgroundColor: string;
  logos: typeof LogosGrid_defaultLogos;
  tone: LogosGrid_LogosGridTone;
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

const LogosGrid_LogosGridSection = ({
  backgroundColor = "#fffffe",
  borderColor = "#d1d5db",
  boxBackgroundColor = "#f3f4f6",
  description = "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  logos = LogosGrid_defaultLogos,
  textColor = "#4b5563",
  title = "Supported payment services",
  titleColor = "#030712",
  tone = "boxed",
}: Omit<LogosGrid_LogosGridProps, "theme">) => (
  <>
    <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
      <MjmlColumn padding="0">
        <MjmlText
          align="center"
          color={titleColor}
          fontFamily={LogosGrid_fontFamily}
          fontSize="20px"
          fontWeight="600"
          lineHeight="28px"
          padding="0"
        >
          {title}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
    <LogosGrid_LogoRow
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
    <LogosGrid_LogoRow
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
          fontFamily={LogosGrid_fontFamily}
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

const LogosGrid_LogosGrid = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  tone = "boxed",
  ...props
}: LogosGrid_LogosGridProps) => (
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
        <LogosGrid_LogosGridSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          tone={tone}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

LogosGrid_LogosGrid.PreviewProps = {
  theme: defaultTheme,
  tone: "boxed",
} satisfies LogosGrid_LogosGridProps;

const __LogosGrid = LogosGrid_LogosGrid;

export interface LogoItem {
  alt: string;
  src: string;
  width: number;
}

export interface LogoCloudProps {
  theme?: Parameters<typeof __BasicLogoCloud>[0]["theme"];
  title?: string;
  description?: string;
  logos?: LogoItem[];
  layout?: "cloud" | "grid" | "featured";
  appearance?: "plain" | "boxed" | "outlined" | "bordered";
  alignment?: "left" | "center" | "right";
  featuredIndex?: number;
}

const contentVariant = ({
  title,
  description,
}: Pick<LogoCloudProps, "title" | "description">) => {
  if (title && description) {
    return "full" as const;
  }
  if (title) {
    return "with-title" as const;
  }
  return description ? ("with-description" as const) : "minimal";
};

export const LogoCloud = ({
  theme,
  title,
  description,
  logos,
  layout = "cloud",
  appearance = "plain",
  alignment = "center",
  featuredIndex = 0,
}: LogoCloudProps) => {
  const resolvedAppearance = appearance;
  if (layout === "featured") {
    return (
      <__FeaturedLogoGrid
        alignment={alignment}
        description={description}
        featuredLogo={logos?.[featuredIndex]}
        supportingLogos={logos?.filter((_, index) => index !== featuredIndex)}
        theme={theme}
        title={title}
        tone={resolvedAppearance === "boxed" ? "boxed" : "outlined"}
      />
    );
  }
  if (layout === "grid") {
    return (
      <__LogosGrid
        description={description}
        logos={logos}
        theme={theme}
        title={title}
        tone={(() => {
          if (resolvedAppearance === "bordered") {
            return "bordered";
          }
          if (resolvedAppearance === "outlined") {
            return "outlined";
          }
          return "boxed";
        })()}
      />
    );
  }
  const variant = contentVariant({ description, title });
  if (resolvedAppearance === "plain") {
    return (
      <__BasicLogoCloud
        description={description}
        logos={logos}
        theme={theme}
        title={title}
        variant={variant}
      />
    );
  }
  if (resolvedAppearance === "bordered") {
    return (
      <__BorderedLogoCloud
        description={description}
        logos={logos}
        theme={theme}
        title={title}
        variant={variant}
      />
    );
  }
  return (
    <__LogoCloud
      description={description}
      logos={logos}
      theme={theme}
      title={title}
      tone={resolvedAppearance === "outlined" ? "outlined" : "boxed"}
      variant={variant}
    />
  );
};

LogoCloud.PreviewProps = {
  alignment: "center",
  appearance: "plain",
  layout: "cloud",
} satisfies LogoCloudProps;
