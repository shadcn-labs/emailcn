import { Buttons } from "@/registry/bases/mjml-react/ui/ui-elements/buttons/buttons";

export default function PrimaryButtonsDemo() {
  return (
    <Buttons
      {...Buttons.PreviewProps}
      variant="primary"
      label="Get Started"
      href="https://example.com"
    />
  );
}
