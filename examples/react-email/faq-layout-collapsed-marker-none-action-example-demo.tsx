import { Faq } from "@/registry/bases/react-email/components/marketing/faq/faq";

export default function FaqLayoutCollapsedMarkerNoneActionExampleDemo() {
  return (
    <Faq
      layout="collapsed"
      marker="none"
      action={{ href: "https://example.com", label: "Contact support" }}
    />
  );
}
