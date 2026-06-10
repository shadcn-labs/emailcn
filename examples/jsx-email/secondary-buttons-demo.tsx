import { Buttons } from "@/registry/bases/jsx-email/ui/ui-elements/buttons/buttons";

export default function SecondaryButtonsDemo() {
  return (
    <Buttons
      {...Buttons.PreviewProps}
      variant="secondary"
      label="Learn More"
      href="https://example.com/learn"
    />
  );
}
