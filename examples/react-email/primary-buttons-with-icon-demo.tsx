import { Buttons } from "@/registry/bases/react-email/ui/ui-elements/buttons/buttons";

export default function PrimaryButtonsWithIconDemo() {
  return (
    <Buttons
      {...Buttons.PreviewProps}
      variant="primary"
      icon={"\u279C"}
      label="Shop Now"
      href="https://example.com/shop"
    />
  );
}
