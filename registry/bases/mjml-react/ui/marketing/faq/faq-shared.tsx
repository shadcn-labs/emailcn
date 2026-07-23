import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlStyle,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";
import { Fragment } from "react";
import type { ReactNode } from "react";

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

const colors = {
  border: "#e5e7eb",
  canvas: "#f1f5f9",
  dark: "#030712",
  light: "#f3f4f6",
  muted: "#4b5563",
  subtle: "#9ca3af",
  surface: "#fffffe",
  surfaceMuted: "#f9fafb",
} as const;

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export interface FaqItem {
  answer?: string;
  iconAlt?: string;
  iconSrc?: string;
  question: string;
}

const Question = ({ children }: { children: ReactNode }) => (
  <MjmlText
    color={colors.dark}
    fontFamily={fontFamily}
    fontSize="14px"
    fontWeight="600"
    lineHeight="20px"
    padding="0"
  >
    {children}
  </MjmlText>
);

const Answer = ({ children }: { children: ReactNode }) => (
  <>
    <MjmlSpacer height="8px" />
    <MjmlText
      color={colors.muted}
      fontFamily={fontFamily}
      fontSize="14px"
      lineHeight="22px"
      padding="0"
    >
      {children}
    </MjmlText>
  </>
);

const NumberLabel = ({ index }: { index: number }) => (
  <MjmlText
    color={colors.subtle}
    fontFamily={fontFamily}
    fontSize="12px"
    fontWeight="600"
    lineHeight="20px"
    padding="0"
  >
    {String(index + 1).padStart(2, "0")}
  </MjmlText>
);

const ToggleIcon = ({
  expanded = false,
  item,
}: {
  expanded?: boolean;
  item?: FaqItem;
}) =>
  item?.iconSrc ? (
    <MjmlImage
      alt={item.iconAlt ?? ""}
      height="20px"
      padding="0"
      src={item.iconSrc}
      width="20px"
    />
  ) : (
    <MjmlText
      align="center"
      color={colors.dark}
      fontFamily={fontFamily}
      fontSize="14px"
      fontWeight="500"
      lineHeight="18px"
      padding="0"
    >
      {expanded ? "−" : "+"}
    </MjmlText>
  );

export const FaqHeading = ({ children }: { children: ReactNode }) => (
  <MjmlSection padding="0 0 32px">
    <MjmlColumn padding="0">
      <MjmlText
        align="center"
        color={colors.dark}
        fontFamily={fontFamily}
        fontSize="28px"
        fontWeight="600"
        lineHeight="36px"
        padding="0"
      >
        {children}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const ExpandedNumbersContent = ({
  items,
}: {
  items: readonly FaqItem[];
}) => (
  <>
    {items.map((item, index) => (
      <MjmlSection
        borderTop={index === 0 ? "none" : `1px solid ${colors.border}`}
        key={`${item.question}-${index}`}
        padding="20px 0"
      >
        <MjmlColumn padding="0 16px 0 0" verticalAlign="top" width="40px">
          <NumberLabel index={index} />
        </MjmlColumn>
        <MjmlColumn padding="0" verticalAlign="top">
          <Question>{item.question}</Question>
          {item.answer ? <Answer>{item.answer}</Answer> : null}
        </MjmlColumn>
      </MjmlSection>
    ))}
  </>
);

export const OffsetAnswersContent = ({
  items,
}: {
  items: readonly FaqItem[];
}) => (
  <>
    {items.map((item, index) => (
      <MjmlSection
        borderTop={index === 0 ? "none" : `1px solid ${colors.border}`}
        key={`${item.question}-${index}`}
        padding="20px 0"
      >
        <MjmlColumn padding="0 24px 0 0" verticalAlign="top" width="38%">
          <Question>{item.question}</Question>
        </MjmlColumn>
        <MjmlColumn padding="0" verticalAlign="top">
          {item.answer ? (
            <MjmlText
              color={colors.muted}
              fontFamily={fontFamily}
              fontSize="14px"
              lineHeight="22px"
              padding="0"
            >
              {item.answer}
            </MjmlText>
          ) : null}
        </MjmlColumn>
      </MjmlSection>
    ))}
  </>
);

export const BoxedNumberedContent = ({
  items,
}: {
  items: readonly FaqItem[];
}) => {
  const getBorderRadius = (index: number) => {
    if (index === 0) {
      return "8px 8px 0 0";
    }
    return index === items.length - 1 ? "0 0 8px 8px" : "0";
  };

  return (
    <>
      {items.map((item, index) => (
        <MjmlSection
          border={`1px solid ${colors.border}`}
          borderRadius={getBorderRadius(index)}
          key={`${item.question}-${index}`}
          padding="20px"
        >
          <MjmlColumn padding="0 16px 0 0" verticalAlign="top" width="40px">
            <NumberLabel index={index} />
          </MjmlColumn>
          <MjmlColumn padding="0" verticalAlign="top">
            <Question>{item.question}</Question>
            {item.answer ? <Answer>{item.answer}</Answer> : null}
          </MjmlColumn>
        </MjmlSection>
      ))}
    </>
  );
};

export const AlternatingBoxedContent = ({
  items,
}: {
  items: readonly FaqItem[];
}) => (
  <>
    {items.map((item, index) => (
      <Fragment key={`${item.question}-${index}`}>
        <MjmlSection
          backgroundColor={index % 2 === 0 ? colors.surfaceMuted : colors.light}
          borderRadius="8px"
          padding="20px"
        >
          <MjmlColumn padding="0 16px 0 0" verticalAlign="top" width="40px">
            <NumberLabel index={index} />
          </MjmlColumn>
          <MjmlColumn padding="0" verticalAlign="top">
            <Question>{item.question}</Question>
            {item.answer ? <Answer>{item.answer}</Answer> : null}
          </MjmlColumn>
        </MjmlSection>
        {index < items.length - 1 ? (
          <MjmlSection padding="0">
            <MjmlColumn padding="0">
              <MjmlSpacer height="12px" />
            </MjmlColumn>
          </MjmlSection>
        ) : null}
      </Fragment>
    ))}
  </>
);

export const CollapsedNumbersContent = ({
  items,
}: {
  items: readonly FaqItem[];
}) => (
  <>
    {items.map((item, index) => (
      <MjmlSection
        borderTop={`1px solid ${colors.border}`}
        key={`${item.question}-${index}`}
        padding="16px 0"
      >
        <MjmlColumn padding="0 16px 0 0" verticalAlign="middle" width="40px">
          <NumberLabel index={index} />
        </MjmlColumn>
        <MjmlColumn padding="0" verticalAlign="middle">
          <Question>{item.question}</Question>
        </MjmlColumn>
        <MjmlColumn padding="0 0 0 16px" verticalAlign="middle" width="24px">
          <ToggleIcon />
        </MjmlColumn>
      </MjmlSection>
    ))}
  </>
);

export const CollapsedIconsContent = ({
  items,
}: {
  items: readonly FaqItem[];
}) => (
  <>
    {items.map((item, index) => (
      <MjmlSection
        backgroundColor={index === 0 ? colors.surfaceMuted : undefined}
        borderRadius={index === 0 ? "8px" : undefined}
        borderTop={index > 1 ? `1px solid ${colors.border}` : "none"}
        key={`${item.question}-${index}`}
        padding="16px"
      >
        <MjmlColumn padding="0 16px 0 0" verticalAlign="top" width="36px">
          <ToggleIcon expanded={index === 0} item={item} />
        </MjmlColumn>
        <MjmlColumn padding="0" verticalAlign="top">
          <Question>{item.question}</Question>
          {index === 0 && item.answer ? <Answer>{item.answer}</Answer> : null}
        </MjmlColumn>
      </MjmlSection>
    ))}
  </>
);

export const CollapsedCtaContent = ({
  ctaHref,
  ctaLabel,
  ctaText,
  items,
}: {
  ctaHref: string;
  ctaLabel: string;
  ctaText: string;
  items: readonly FaqItem[];
}) => (
  <>
    <CollapsedNumbersContent items={items} />
    <MjmlSection padding="24px 0 0">
      <MjmlColumn
        backgroundColor={colors.surfaceMuted}
        borderRadius="8px 0 0 8px"
        padding="16px 20px"
        verticalAlign="middle"
      >
        <MjmlText
          color={colors.muted}
          fontFamily={fontFamily}
          fontSize="14px"
          lineHeight="20px"
          padding="0"
        >
          {ctaText}
        </MjmlText>
      </MjmlColumn>
      <MjmlColumn
        backgroundColor={colors.surfaceMuted}
        borderRadius="0 8px 8px 0"
        padding="16px 20px"
        verticalAlign="middle"
        width="120px"
      >
        <MjmlButton
          align="right"
          backgroundColor="transparent"
          color={colors.dark}
          fontFamily={fontFamily}
          fontSize="14px"
          fontWeight="600"
          href={ctaHref}
          innerPadding="0"
          lineHeight="20px"
          padding="0"
          textDecoration="underline"
        >
          {ctaLabel}
        </MjmlButton>
      </MjmlColumn>
    </MjmlSection>
  </>
);

export const FaqEmailShell = ({
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
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>
        {[
          "@media only screen and (max-width: 599px) {",
          "  .faq-content { padding-left: 24px !important; padding-right: 24px !important; }",
          "}",
        ].join("\n")}
      </MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor={colors.canvas} width={theme.containerWidth}>
      <MjmlWrapper
        backgroundColor={colors.surface}
        cssClass="faq-content"
        padding="44px 64px"
      >
        {children}
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
