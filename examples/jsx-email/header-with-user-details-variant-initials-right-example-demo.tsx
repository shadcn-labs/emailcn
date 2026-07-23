import { HeaderWithUserDetails } from "@/registry/bases/jsx-email/ui/marketing/headers/header-with-user-details";

const variants = {
  "image-left": { alignment: "left", avatar: "image" },
  "image-right": { alignment: "right", avatar: "image" },
  "initials-left": { alignment: "left", avatar: "initials" },
  "initials-right": { alignment: "right", avatar: "initials" },
} as const;

export default function HeaderWithUserDetailsVariantInitialsRightExampleDemo() {
  const selected = variants["initials-right"];
  return (
    <HeaderWithUserDetails
      {...HeaderWithUserDetails.PreviewProps}
      alignment={selected.alignment}
      avatar={selected.avatar}
    />
  );
}
