import { CallToAction } from "@/registry/bases/mjml-react/components/marketing/cta/call-to-action";

export default function CallToActionActionsExampleDemo() {
  return (
    <CallToAction
      actions={[
        { href: "https://example.com", label: "Get started" },
        { href: "https://example.com/learn", label: "Learn more" },
      ]}
    />
  );
}
