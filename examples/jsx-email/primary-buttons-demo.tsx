import { Buttons } from "@/registry/bases/jsx-email/ui/ui-elements/buttons/buttons";

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
