import { CallToAction } from "@/registry/bases/jsx-email/ui/marketing/cta/call-to-action";

export default function CallToActionTwoActionsDemo() {
  return (
    <CallToAction
      actions={[
        { href: "#", label: "Start now" },
        { href: "#", label: "Learn more" },
      ]}
    />
  );
}
