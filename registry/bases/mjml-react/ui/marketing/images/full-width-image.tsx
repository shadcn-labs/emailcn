/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type ImageTriptychVariant = "default" | "slanted-left" | "slanted-right";

export interface ImageTriptychProps {
  theme?: EmailThemeTokens;
  src1?: string;
  alt1?: string;
  src2?: string;
  alt2?: string;
  src3?: string;
  alt3?: string;
  variant?: ImageTriptychVariant;
}

const ImageTriptychSection = ({
  alt1,
  alt2,
  alt3,
  src1,
  src2,
  src3,
  theme,
  variant,
}: {
  alt1: string;
  alt2: string;
  alt3: string;
  src1: string;
  src2: string;
  src3: string;
  theme: EmailThemeTokens;
  variant: ImageTriptychVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn width="33.33%" padding="Fourpx">
      <MjmlImage
        alt={alt1}
        borderRadius={theme.borderRadius}
        src={src1}
        width={190}
      />
    </MjmlColumn>
    <MjmlColumn width="33.33%" padding="Fourpx">
      <MjmlImage
        alt={alt2}
        borderRadius={theme.borderRadius}
        src={src2}
        width={190}
      />
    </MjmlColumn>
    <MjmlColumn width="33.33%" padding="Fourpx">
      <MjmlImage
        alt={alt3}
        borderRadius={theme.borderRadius}
        src={src3}
        width={190}
      />
    </MjmlColumn>
  </MjmlSection>
);

export const FullWidthImage = ({
  theme = defaultTheme,
  src1 = "https://placehold.co/300x300?text=1",
  alt1 = "image 1",
  src2 = "https://placehold.co/300x300?text=2",
  alt2 = "image 2",
  src3 = "https://placehold.co/300x300?text=3",
  alt3 = "image 3",
  variant = "default",
}: ImageTriptychProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>image triptych</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
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
      <MjmlWrapper padding="0">
        <ImageTriptychSection
          alt1={alt1}
          alt2={alt2}
          alt3={alt3}
          src1={src1}
          src2={src2}
          src3={src3}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FullWidthImage.PreviewProps = {
  alt1: "product 1",
  alt2: "product 2",
  alt3: "product 3",
  src1: "https://placehold.co/300x300?text=Product+1",
  src2: "https://placehold.co/300x300?text=Product+2",
  src3: "https://placehold.co/300x300?text=Product+3",
  theme: defaultTheme,
  variant: "default",
} satisfies ImageTriptychProps;
