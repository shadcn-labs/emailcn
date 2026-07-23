import { SocialsWithLabels } from "@/registry/bases/react-email/ui/marketing/social/socials-with-labels";

export default function SocialsWithInlineLabelsDemo() {
  return (
    <SocialsWithLabels {...SocialsWithLabels.PreviewProps} variant="inline" />
  );
}
