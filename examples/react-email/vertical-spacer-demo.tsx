import { VerticalSpacer } from "@/registry/bases/react-email/ui/ui-elements/spacing/vertical-spacer";

export default function VerticalSpacerDemo({
  variant = "48",
}: {
  variant?: "24" | "48" | "64";
}) {
  return (
    <VerticalSpacer {...VerticalSpacer.PreviewProps} height={Number(variant)} />
  );
}
