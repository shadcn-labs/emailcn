import { HeaderWithLogo } from "@/registry/bases/react-email/ui/marketing/headers/header-with-logo";

const variants = {
  "minimal-center": { alignment: "center", variant: "minimal" },
  "minimal-left": { alignment: "left", variant: "minimal" },
  "minimal-right": { alignment: "right", variant: "minimal" },
  "with-text-center": { alignment: "center", variant: "with-text" },
  "with-text-left": { alignment: "left", variant: "with-text" },
  "with-text-right": { alignment: "right", variant: "with-text" },
} as const;

export default function HeaderWithLogoVariantWithTextRightExampleDemo() {
  const selected = variants["with-text-right"];
  return (
    <HeaderWithLogo
      {...HeaderWithLogo.PreviewProps}
      alignment={selected.alignment}
      variant={selected.variant}
    />
  );
}
