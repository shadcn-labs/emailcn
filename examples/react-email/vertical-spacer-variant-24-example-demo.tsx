import { VerticalSpacer } from "@/registry/bases/react-email/ui/ui-elements/spacing/vertical-spacer";

export default function VerticalSpacerVariant24ExampleDemo() {
  return (
    <VerticalSpacer
      {...VerticalSpacer.PreviewProps}
      height={Number("24" as "24" | "48" | "64")}
    />
  );
}
