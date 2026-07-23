import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlDivider,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export const BlockEmail = ({
  children,
  preview,
  theme,
}: {
  children: ReactNode;
  preview: string;
  theme: EmailThemeTokens;
}) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{preview}</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorText} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">{children}</MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

export const BlockText = ({
  align = "left",
  children,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  padding = "0",
}: {
  align?: "center" | "left" | "right";
  children: ReactNode;
  color: string;
  fontFamily: string;
  fontSize: string;
  fontWeight?: string;
  lineHeight: string;
  padding?: string;
}) => (
  <MjmlText
    align={align}
    color={color}
    fontFamily={fontFamily}
    fontSize={fontSize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    padding={padding}
  >
    {children}
  </MjmlText>
);

export const BlockHeading = ({
  align = "left",
  children,
  theme,
}: {
  align?: "center" | "left" | "right";
  children: ReactNode;
  theme: EmailThemeTokens;
}) => (
  <BlockText
    align={align}
    color={theme.colorText}
    fontFamily={theme.fontFamily}
    fontSize={theme.fontSizeXl}
    fontWeight={theme.fontWeightMedium}
    lineHeight="28px"
    padding={`0 0 ${theme.spacingBase}`}
  >
    {children}
  </BlockText>
);

export const BlockParagraph = ({
  align = "left",
  children,
  padding = "0 0 16px",
  theme,
}: {
  align?: "center" | "left" | "right";
  children: ReactNode;
  padding?: string;
  theme: EmailThemeTokens;
}) => (
  <BlockText
    align={align}
    color={theme.colorTextMuted}
    fontFamily={theme.fontFamily}
    fontSize={theme.fontSizeLg}
    lineHeight={theme.lineHeightBase}
    padding={padding}
  >
    {children}
  </BlockText>
);

export const BlockAction = ({
  align = "left",
  href,
  label,
  theme,
}: {
  align?: "center" | "left" | "right";
  href: string;
  label: string;
  theme: EmailThemeTokens;
}) => (
  <MjmlButton
    align={align}
    backgroundColor={theme.colorPrimary}
    borderRadius={theme.button.primary.borderRadius}
    color={theme.colorPrimaryForeground}
    fontFamily={theme.fontFamily}
    fontSize={theme.button.primary.fontSize}
    fontWeight={theme.button.primary.fontWeight}
    href={href}
    innerPadding={`${theme.button.primary.paddingY} ${theme.button.primary.paddingX}`}
    padding={`${theme.spacingBase} 0`}
  >
    {label}
  </MjmlButton>
);

export const BlockCode = ({
  code,
  theme,
}: {
  code: string;
  theme: EmailThemeTokens;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackgroundMuted}
    borderRadius={theme.borderRadius}
    padding="24px 32px"
  >
    <MjmlColumn>
      <BlockText
        align="center"
        color={theme.colorText}
        fontFamily={theme.fontFamilyMono}
        fontSize="32px"
        fontWeight={theme.fontWeightBold}
        lineHeight="40px"
      >
        {code}
      </BlockText>
    </MjmlColumn>
  </MjmlSection>
);

export const BlockCard = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme: EmailThemeTokens;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackgroundMuted}
    border={`1px solid ${theme.colorBorder}`}
    borderRadius={theme.borderRadiusLg}
    padding="24px"
  >
    <MjmlColumn>{children}</MjmlColumn>
  </MjmlSection>
);

export const BlockFooter = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme: EmailThemeTokens;
}) => (
  <MjmlSection padding={`${theme.spacingLg} 0 ${theme.spacingBase}`}>
    <MjmlColumn>
      <MjmlDivider borderColor={theme.colorBorder} padding="0 0 20px" />
      <BlockText
        color={theme.colorTextSubtle}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm}
        lineHeight="18px"
      >
        {children}
      </BlockText>
    </MjmlColumn>
  </MjmlSection>
);

export const BlockLogo = ({
  alt,
  href = "https://example.com",
  src,
}: {
  alt: string;
  href?: string;
  src?: string;
}) =>
  src ? (
    <MjmlImage
      align="left"
      alt={alt}
      href={href}
      padding="0 0 24px"
      src={src}
      width="120px"
    />
  ) : null;

export const AuthOtpBlock = ({
  expiresInMinutes,
  otpCode,
  productName,
  theme,
}: {
  expiresInMinutes: number;
  otpCode: string;
  productName: string;
  theme: EmailThemeTokens;
}) => (
  <BlockEmail preview="Your verification code" theme={theme}>
    <MjmlSection padding={`${theme.spacingXl} 0 ${theme.spacingBase}`}>
      <MjmlColumn>
        <BlockHeading theme={theme}>Your verification code</BlockHeading>
        <BlockParagraph theme={theme}>
          Enter this code to sign in to your {productName} account. This code
          expires in {expiresInMinutes} minutes.
        </BlockParagraph>
      </MjmlColumn>
    </MjmlSection>
    <BlockCode code={otpCode} theme={theme} />
    <BlockFooter theme={theme}>
      If you didn’t request this, you can safely ignore this email.
    </BlockFooter>
  </BlockEmail>
);

export const PasswordResetBlock = ({
  expiresInMinutes,
  productName,
  resetHref,
  theme,
}: {
  expiresInMinutes: number;
  productName: string;
  resetHref: string;
  theme: EmailThemeTokens;
}) => (
  <BlockEmail preview="Reset your password" theme={theme}>
    <MjmlSection padding={`${theme.spacingXl} 0 ${theme.spacingBase}`}>
      <MjmlColumn>
        <BlockHeading theme={theme}>Reset your password</BlockHeading>
        <BlockParagraph theme={theme}>
          Click the button below to reset your {productName} password. This link
          expires in {expiresInMinutes} minutes.
        </BlockParagraph>
        <BlockAction href={resetHref} label="Reset password" theme={theme} />
      </MjmlColumn>
    </MjmlSection>
    <BlockFooter theme={theme}>
      If you didn’t request this, you can safely ignore this email.
    </BlockFooter>
  </BlockEmail>
);

export const InviteBlock = ({
  ctaHref,
  expiresInHours,
  inviterAvatarUrl,
  inviterName,
  teamName,
  theme,
}: {
  ctaHref: string;
  expiresInHours: number;
  inviterAvatarUrl?: string;
  inviterName: string;
  teamName: string;
  theme: EmailThemeTokens;
}) => (
  <BlockEmail preview={`You’re invited to join ${teamName}`} theme={theme}>
    <MjmlSection padding={`${theme.spacingXl} 0 ${theme.spacingBase}`}>
      {inviterAvatarUrl ? (
        <MjmlColumn width="72px">
          <MjmlImage
            align="left"
            alt={inviterName}
            borderRadius="28px"
            padding="0"
            src={inviterAvatarUrl}
            width="56px"
          />
        </MjmlColumn>
      ) : null}
      <MjmlColumn>
        <BlockText
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeLg}
          fontWeight={theme.fontWeightMedium}
          lineHeight={theme.lineHeightBase}
        >
          {inviterName}
        </BlockText>
        <BlockParagraph padding="4px 0 24px" theme={theme}>
          invited you to join
        </BlockParagraph>
        <BlockHeading theme={theme}>{teamName}</BlockHeading>
        <BlockParagraph theme={theme}>
          Click the button below to accept this invitation and join the team.
          This invitation expires in {expiresInHours} hours.
        </BlockParagraph>
        <BlockAction href={ctaHref} label={`Join ${teamName}`} theme={theme} />
      </MjmlColumn>
    </MjmlSection>
    <BlockFooter theme={theme}>
      If you didn’t expect this invitation, you can ignore this email.
    </BlockFooter>
  </BlockEmail>
);

export interface NewsletterArticle {
  title: string;
  summary: string;
  href: string;
  imageUrl?: string;
}

export const NewsletterBlock = ({
  articles,
  issueNumber,
  preheader,
  productName,
  theme,
}: {
  articles: NewsletterArticle[];
  issueNumber: string;
  preheader: string;
  productName: string;
  theme: EmailThemeTokens;
}) => (
  <BlockEmail preview={preheader} theme={theme}>
    <MjmlSection padding={`${theme.spacingXl} 0 ${theme.spacingBase}`}>
      <MjmlColumn>
        <BlockText
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm}
          lineHeight="18px"
        >
          Issue #{issueNumber}
        </BlockText>
        <BlockText
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeHeading}
          fontWeight={theme.fontWeightBold}
          lineHeight="36px"
          padding="8px 0 0"
        >
          {productName}
        </BlockText>
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection padding="0 0 16px">
      <MjmlColumn>
        <BlockHeading theme={theme}>Featured articles</BlockHeading>
      </MjmlColumn>
    </MjmlSection>
    {articles.map((article) => (
      <MjmlSection
        backgroundColor={theme.colorBackgroundMuted}
        borderRadius={theme.borderRadius}
        key={`${article.title}-${article.href}`}
        padding="20px 24px"
      >
        {article.imageUrl ? (
          <MjmlColumn width="32%">
            <MjmlImage
              alt={article.title}
              borderRadius={theme.borderRadius}
              href={article.href}
              padding="0 16px 0 0"
              src={article.imageUrl}
            />
          </MjmlColumn>
        ) : null}
        <MjmlColumn width={article.imageUrl ? "68%" : "100%"}>
          <BlockText
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeLg}
            fontWeight={theme.fontWeightMedium}
            lineHeight="24px"
          >
            {article.title}
          </BlockText>
          <BlockParagraph padding="8px 0" theme={theme}>
            {article.summary}
          </BlockParagraph>
          <MjmlButton
            align="left"
            backgroundColor="transparent"
            color={theme.colorPrimary}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase}
            href={article.href}
            innerPadding="0"
            padding="0"
          >
            Read article
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
    ))}
    <BlockFooter theme={theme}>
      View this email online · Unsubscribe
    </BlockFooter>
  </BlockEmail>
);

export const NotificationBlock = ({
  action,
  actorAvatarUrl,
  actorName,
  body,
  ctaHref,
  ctaLabel,
  heading,
  issueNumber,
  preview = "New notification",
  targetName,
  theme,
}: {
  action?: string;
  actorAvatarUrl?: string;
  actorName?: string;
  body?: string;
  ctaHref: string;
  ctaLabel: string;
  heading: string;
  issueNumber?: string;
  preview?: string;
  targetName?: string;
  theme: EmailThemeTokens;
}) => (
  <BlockEmail preview={preview} theme={theme}>
    <MjmlSection padding={`${theme.spacingXl} 0 ${theme.spacingBase}`}>
      {actorAvatarUrl ? (
        <MjmlColumn width="64px">
          <MjmlImage
            alt={actorName}
            borderRadius="24px"
            padding="0 16px 0 0"
            src={actorAvatarUrl}
            width="48px"
          />
        </MjmlColumn>
      ) : null}
      <MjmlColumn>
        {actorName ? (
          <BlockText
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeLg}
            fontWeight={theme.fontWeightMedium}
            lineHeight={theme.lineHeightBase}
          >
            {actorName}
          </BlockText>
        ) : null}
        {action ? (
          <BlockParagraph padding="4px 0 20px" theme={theme}>
            {action}
          </BlockParagraph>
        ) : null}
        <BlockHeading theme={theme}>
          {issueNumber ? `#${issueNumber} · ` : ""}
          {heading}
        </BlockHeading>
        {targetName ? (
          <BlockParagraph theme={theme}>{targetName}</BlockParagraph>
        ) : null}
        {body ? <BlockParagraph theme={theme}>{body}</BlockParagraph> : null}
        {ctaHref && ctaLabel ? (
          <BlockAction href={ctaHref} label={ctaLabel} theme={theme} />
        ) : null}
      </MjmlColumn>
    </MjmlSection>
  </BlockEmail>
);

export const OnboardingBlock = ({
  ctaHref,
  firstName,
  productName,
  senderName,
  theme,
}: {
  ctaHref: string;
  firstName: string;
  productName: string;
  senderName: string;
  theme: EmailThemeTokens;
}) => (
  <BlockEmail preview={`Welcome to ${productName}, ${firstName}`} theme={theme}>
    <MjmlSection padding={`${theme.spacingBase} 0`}>
      <MjmlColumn>
        <BlockText
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeLg}
          fontWeight={theme.fontWeightBold}
          lineHeight="24px"
        >
          {productName}
        </BlockText>
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection
      backgroundColor={theme.colorBackgroundMuted}
      borderRadius={theme.borderRadiusLg}
      padding={`${theme.spacingXl} ${theme.spacingLg}`}
    >
      <MjmlColumn>
        <BlockText
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeHeading}
          fontWeight={theme.fontWeightBold}
          lineHeight="36px"
        >
          Welcome, {firstName}
        </BlockText>
        <BlockParagraph align="center" padding="16px 0 4px" theme={theme}>
          We’re excited to have you on board at {productName}. Let’s get you set
          up for success.
        </BlockParagraph>
        <BlockAction
          align="center"
          href={ctaHref}
          label="Get started"
          theme={theme}
        />
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection padding={`${theme.spacingLg} 0`}>
      {[
        "Create your profile",
        "Explore your workspace",
        "Invite your team",
      ].map((step, index) => (
        <MjmlColumn key={step} padding="8px" width="33.333%">
          <BlockText
            align="center"
            color={theme.colorPrimary}
            fontFamily={theme.fontFamilyMono}
            fontSize={theme.fontSizeXl}
            fontWeight={theme.fontWeightBold}
            lineHeight="28px"
          >
            0{index + 1}
          </BlockText>
          <BlockText
            align="center"
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase}
            fontWeight={theme.fontWeightMedium}
            lineHeight="20px"
            padding="8px 0 0"
          >
            {step}
          </BlockText>
        </MjmlColumn>
      ))}
    </MjmlSection>
    <BlockFooter theme={theme}>Sent by {senderName}</BlockFooter>
  </BlockEmail>
);

export interface NativeReceiptItem {
  name: string;
  imageUrl?: string;
  price: string;
  quantity?: number;
}

const ReceiptTotalRow = ({
  bold = false,
  label,
  theme,
  value,
}: {
  bold?: boolean;
  label: string;
  theme: EmailThemeTokens;
  value: string;
}) => (
  <>
    <MjmlColumn width="50%">
      <BlockText
        color={bold ? theme.colorText : theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={bold ? theme.fontSizeLg : theme.fontSizeBase}
        fontWeight={bold ? theme.fontWeightBold : theme.fontWeightNormal}
        lineHeight="24px"
        padding="4px 0"
      >
        {label}
      </BlockText>
    </MjmlColumn>
    <MjmlColumn width="50%">
      <BlockText
        align="right"
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={bold ? theme.fontSizeLg : theme.fontSizeBase}
        fontWeight={bold ? theme.fontWeightBold : theme.fontWeightMedium}
        lineHeight="24px"
        padding="4px 0"
      >
        {value}
      </BlockText>
    </MjmlColumn>
  </>
);

export const ReceiptBlock = ({
  customerName,
  items,
  label = "Receipt",
  orderNumber,
  subtotal,
  supportHref,
  supportLabel = "Contact support",
  tax,
  theme,
  total,
}: {
  customerName: string;
  items: NativeReceiptItem[];
  label?: string;
  orderNumber: string;
  subtotal: string;
  supportHref: string;
  supportLabel?: string;
  tax: string;
  theme: EmailThemeTokens;
  total: string;
}) => (
  <BlockEmail preview={`Your ${label.toLowerCase()}`} theme={theme}>
    <MjmlSection padding={`${theme.spacingXl} 0 ${theme.spacingBase}`}>
      <MjmlColumn>
        <BlockText
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeHeading}
          fontWeight={theme.fontWeightBold}
          lineHeight="36px"
        >
          {label}
        </BlockText>
        <BlockParagraph padding="6px 0 16px" theme={theme}>
          {label === "Receipt" ? "Order " : ""}
          {orderNumber} · {customerName}
        </BlockParagraph>
      </MjmlColumn>
    </MjmlSection>
    {items.map((item, index) => (
      <MjmlSection
        backgroundColor={theme.colorBackgroundMuted}
        borderRadius={theme.borderRadius}
        key={`${item.name}-${index}`}
        padding="16px"
      >
        {item.imageUrl ? (
          <MjmlColumn width="24%">
            <MjmlImage
              alt={item.name}
              borderRadius={theme.borderRadius}
              padding="0 16px 0 0"
              src={item.imageUrl}
              width="88px"
            />
          </MjmlColumn>
        ) : null}
        <MjmlColumn width={item.imageUrl ? "51%" : "75%"}>
          <BlockText
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeLg}
            fontWeight={theme.fontWeightMedium}
            lineHeight="24px"
          >
            {item.name}
          </BlockText>
          <BlockParagraph padding="4px 0 0" theme={theme}>
            Quantity: {item.quantity ?? 1}
          </BlockParagraph>
        </MjmlColumn>
        <MjmlColumn width="25%">
          <BlockText
            align="right"
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase}
            fontWeight={theme.fontWeightMedium}
            lineHeight="24px"
          >
            {item.price}
          </BlockText>
        </MjmlColumn>
      </MjmlSection>
    ))}
    <MjmlSection padding="24px 0 0">
      <ReceiptTotalRow label="Subtotal" theme={theme} value={subtotal} />
    </MjmlSection>
    <MjmlSection padding="0">
      <ReceiptTotalRow label="Tax" theme={theme} value={tax} />
    </MjmlSection>
    <MjmlSection padding="0">
      <MjmlColumn>
        <MjmlDivider borderColor={theme.colorBorder} padding="12px 0" />
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection padding="0">
      <ReceiptTotalRow bold label="Total" theme={theme} value={total} />
    </MjmlSection>
    <MjmlSection padding={`${theme.spacingLg} 0`}>
      <MjmlColumn>
        <BlockParagraph theme={theme}>Need help?</BlockParagraph>
        <MjmlButton
          align="left"
          backgroundColor="transparent"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase}
          href={supportHref}
          innerPadding="0"
          padding="0"
          textDecoration="underline"
        >
          {supportLabel}
        </MjmlButton>
      </MjmlColumn>
    </MjmlSection>
  </BlockEmail>
);
