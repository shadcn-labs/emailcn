import { Buttons } from "@/registry/bases/react-email/ui/ui-elements/buttons/buttons";

export default function SecondaryButtonsWithIconDemo() {
  return (
    <Buttons
      {...Buttons.PreviewProps}
      variant="secondary"
      icon={"\u279C"}
      label="Learn More"
      href="https://example.com/learn"
    />
  );
}
