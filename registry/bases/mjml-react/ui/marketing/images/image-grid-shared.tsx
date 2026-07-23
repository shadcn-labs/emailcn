import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export interface NativeImageCardData {
  alt: string;
  heading: string;
  href: string;
  src: string;
  subtext: string;
}

export const ImageGridEmailShell = ({
  backgroundColor,
  children,
  preview,
  theme,
}: {
  backgroundColor: string;
  children: ReactNode;
  preview: string;
  theme: EmailThemeTokens;
}) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{preview}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor={backgroundColor} width={theme.containerWidth}>
      <MjmlWrapper padding="0">{children}</MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

export const NativeImageCard = ({
  data,
  headingColor,
  overlay,
  textColor,
  width,
}: {
  data: NativeImageCardData;
  headingColor: string;
  overlay: boolean;
  textColor: string;
  width: number;
}) => (
  <>
    <MjmlImage
      alt={data.alt}
      borderRadius={overlay ? "4px 4px 0 0" : "4px"}
      href={data.href}
      padding="0"
      src={data.src}
      width={`${width}px`}
    />
    {overlay ? (
      <>
        <MjmlText
          backgroundColor="#000001"
          color={headingColor}
          fontFamily={fontFamily}
          fontSize="20px"
          fontWeight="700"
          lineHeight="28px"
          padding="16px 16px 0"
        >
          {data.heading}
        </MjmlText>
        <MjmlText
          backgroundColor="#000001"
          color={textColor}
          fontFamily={fontFamily}
          fontSize="16px"
          lineHeight="24px"
          padding="0 16px 16px"
        >
          {data.subtext}
        </MjmlText>
      </>
    ) : null}
  </>
);

export const NativeImageRow = ({
  backgroundColor,
  cards,
  headingColor,
  overlay,
  padding = "0 24px 24px",
  textColor,
  widths,
}: {
  backgroundColor: string;
  cards: readonly NativeImageCardData[];
  headingColor: string;
  overlay: boolean;
  padding?: string;
  textColor: string;
  widths: readonly number[];
}) => {
  const getPadding = (index: number) => {
    if (index === 0) {
      return "0 8px 0 0";
    }
    return index === cards.length - 1 ? "0 0 0 8px" : "0 8px";
  };

  return (
    <MjmlSection backgroundColor={backgroundColor} padding={padding}>
      {cards.map((card, index) => (
        <MjmlColumn
          key={`${card.src}-${index}`}
          padding={getPadding(index)}
          verticalAlign="top"
          width={`${(widths[index] / widths.reduce((sum, width) => sum + width, 0)) * 100}%`}
        >
          <NativeImageCard
            data={card}
            headingColor={headingColor}
            overlay={overlay}
            textColor={textColor}
            width={widths[index]}
          />
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};

export const NativeFeatureImage = ({
  backgroundColor,
  data,
  headingColor,
  overlay,
  padding = "0 24px 24px",
  textColor,
}: {
  backgroundColor: string;
  data: NativeImageCardData;
  headingColor: string;
  overlay: boolean;
  padding?: string;
  textColor: string;
}) => (
  <MjmlSection backgroundColor={backgroundColor} padding={padding}>
    <MjmlColumn padding="0">
      <NativeImageCard
        data={data}
        headingColor={headingColor}
        overlay={overlay}
        textColor={textColor}
        width={552}
      />
    </MjmlColumn>
  </MjmlSection>
);
