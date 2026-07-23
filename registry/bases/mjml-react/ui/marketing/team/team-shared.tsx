import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSocial,
  MjmlSocialElement,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const TeamEmailShell = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme: EmailThemeTokens;
}) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Meet the team</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">{children}</MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

export const TeamMemberContent = ({
  accent,
  avatarAlt,
  avatarSrc,
  bio,
  email,
  imageWidth = 264,
  imageAfter = false,
  name,
  role,
  rounded = false,
}: {
  accent: boolean;
  avatarAlt: string;
  avatarSrc: string;
  bio?: string;
  email?: string;
  imageWidth?: number;
  imageAfter?: boolean;
  name: string;
  role: string;
  rounded?: boolean;
}) => {
  const image = (
    <MjmlImage
      align="center"
      alt={avatarAlt}
      borderRadius={rounded ? "9999px" : "8px"}
      padding="0"
      src={avatarSrc}
      width={`${imageWidth}px`}
    />
  );

  return (
    <>
      {imageAfter ? null : image}
      <MjmlText
        align={rounded ? "center" : "left"}
        color={accent ? "#fffffe" : "#030712"}
        fontFamily={fontFamily}
        fontSize="16px"
        fontWeight="600"
        lineHeight="24px"
        padding="16px 0 0"
      >
        {name}
      </MjmlText>
      <MjmlText
        align={rounded ? "center" : "left"}
        color={accent ? "#d1d5db" : "#4b5563"}
        fontFamily={fontFamily}
        fontSize="14px"
        lineHeight="20px"
        padding="0"
      >
        {role}
      </MjmlText>
      {bio ? (
        <MjmlText
          align={rounded ? "center" : "left"}
          color={accent ? "#9ca3af" : "#4b5563"}
          fontFamily={fontFamily}
          fontSize="16px"
          lineHeight="24px"
          padding="16px 0 0"
        >
          {bio}
        </MjmlText>
      ) : null}
      {email ? (
        <MjmlText
          align={rounded ? "center" : "left"}
          color={accent ? "#a5b4fc" : "#4f46e5"}
          fontFamily={fontFamily}
          fontSize="14px"
          fontWeight="500"
          lineHeight="20px"
          padding="16px 0 0"
        >
          {email}
        </MjmlText>
      ) : null}
      <MjmlSocial
        align={rounded ? "center" : "left"}
        iconSize="16px"
        padding="16px 0 0"
      >
        {["facebook", "x", "linkedin"].map((network) => (
          <MjmlSocialElement
            href={`https://${network}.com`}
            key={network}
            name={network}
          />
        ))}
      </MjmlSocial>
      {imageAfter ? image : null}
    </>
  );
};
