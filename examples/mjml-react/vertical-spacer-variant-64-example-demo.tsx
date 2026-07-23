import { VerticalSpacer } from "@/registry/bases/mjml-react/ui/ui-elements/spacing/vertical-spacer";

export default function VerticalSpacerVariant64ExampleDemo() {
  return (
    <VerticalSpacer
      {...VerticalSpacer.PreviewProps}
      height={Number("64" as "24" | "48" | "64")}
    />
  );
}
