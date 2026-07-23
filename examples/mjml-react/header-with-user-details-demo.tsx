import { HeaderWithUserDetails } from "@/registry/bases/mjml-react/ui/marketing/headers/header-with-user-details";

const variants = {
  "image-left": { alignment: "left", avatar: "image" },
  "image-right": { alignment: "right", avatar: "image" },
  "initials-left": { alignment: "left", avatar: "initials" },
  "initials-right": { alignment: "right", avatar: "initials" },
} as const;

type HeaderWithUserDetailsExampleVariant = keyof typeof variants;

export default function HeaderWithUserDetailsDemo({
  variant,
}: {
  variant?: HeaderWithUserDetailsExampleVariant;
}) {
  const selected = variants[variant ?? "initials-left"];
  return (
    <HeaderWithUserDetails
      {...HeaderWithUserDetails.PreviewProps}
      alignment={selected.alignment}
      avatar={selected.avatar}
    />
  );
}
