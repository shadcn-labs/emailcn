import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlWrapper,
  MjmlColumn,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
export const HeaderEmailShell = ({
  children,
  pageBackgroundColor,
  preview,
  theme,
}: {
  children: ReactNode;
  pageBackgroundColor: string;
  preview: string;
  theme: EmailThemeTokens;
}) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{preview}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">{children}</MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
export const HeaderLogo = ({
  align = "left",
  alt,
  href,
  src,
}: {
  align?: "center" | "left" | "right";
  alt: string;
  href: string;
  src: string;
}) => (
  <MjmlImage
    align={align}
    alt={alt}
    href={href}
    padding="0"
    src={src}
    width="55px"
  />
);
export type HeaderWithLogoAndFinanceStatsAlignment =
  | "left"
  | "center"
  | "right";
export interface HeaderFinanceStat {
  alt: string;
  change: string;
  label: string;
  positive: boolean;
  src: string;
}
export interface HeaderWithLogoAndFinanceStatsProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  stats?: HeaderFinanceStat[];
  alignment?: HeaderWithLogoAndFinanceStatsAlignment;
  pageBackgroundColor?: string;
  backgroundColor?: string;
}
const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const defaultStats: HeaderFinanceStat[] = [
  {
    alt: "BTC",
    change: "+23.5%",
    label: "BTC",
    positive: true,
    src: "https://emailcn.vercel.app/api/email-assets/btc-logo.png",
  },
  {
    alt: "ETH",
    change: "-13.2%",
    label: "ETH",
    positive: false,
    src: "https://emailcn.vercel.app/api/email-assets/eth-logo.png",
  },
];
const FinanceColumn = ({ stat }: { stat: HeaderFinanceStat }) => (
  <MjmlColumn padding="0 8px" verticalAlign="middle" width="25%">
    <MjmlImage
      align="center"
      alt={stat.alt}
      padding="0"
      src={stat.src}
      width="24px"
    />
    <MjmlText
      align="center"
      color="#030712"
      fontFamily={fontFamily}
      fontSize="13px"
      fontWeight="600"
      lineHeight="18px"
      padding="4px 0 0"
    >
      {stat.label}
    </MjmlText>
    <MjmlText
      align="center"
      color={stat.positive ? "#059669" : "#dc2626"}
      fontFamily={fontFamily}
      fontSize="12px"
      lineHeight="18px"
      padding="0"
    >
      {stat.change}
    </MjmlText>
  </MjmlColumn>
);
export const HeaderWithLogoAndFinanceStatsSection = ({
  alignment = "left",
  backgroundColor = "#fffffe",
  logoAlt = "Maizzle",
  logoHref = "https://example.com",
  logoSrc = "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  stats = defaultStats,
}: Omit<HeaderWithLogoAndFinanceStatsProps, "theme">) => {
  const logo = (
    <MjmlColumn padding="0" verticalAlign="middle" width="50%">
      <HeaderLogo
        align={alignment}
        alt={logoAlt}
        href={logoHref}
        src={logoSrc}
      />
    </MjmlColumn>
  );
  const finance = stats
    .slice(0, 2)
    .map((stat) => (
      <FinanceColumn key={`${stat.label}-${stat.change}`} stat={stat} />
    ));
  if (alignment === "center") {
    return (
      <>
        <MjmlSection backgroundColor={backgroundColor} padding="24px 24px 12px">
          {logo}
        </MjmlSection>
        <MjmlSection backgroundColor={backgroundColor} padding="12px 24px 24px">
          <MjmlColumn padding="0" width="25%">
            <MjmlSpacer height="1px" />
          </MjmlColumn>
          {finance}
          <MjmlColumn padding="0" width="25%">
            <MjmlSpacer height="1px" />
          </MjmlColumn>
        </MjmlSection>
      </>
    );
  }
  return (
    <MjmlSection backgroundColor={backgroundColor} padding="24px">
      {alignment === "left" ? logo : finance}
      {alignment === "left" ? finance : logo}
    </MjmlSection>
  );
};
export const HeaderWithLogoAndFinanceStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: HeaderWithLogoAndFinanceStatsProps) => (
  <HeaderEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Market update"
    theme={theme}
  >
    <HeaderWithLogoAndFinanceStatsSection {...props} />
  </HeaderEmailShell>
);
HeaderWithLogoAndFinanceStats.PreviewProps = {
  alignment: "left",
  theme: defaultTheme,
} satisfies HeaderWithLogoAndFinanceStatsProps;
