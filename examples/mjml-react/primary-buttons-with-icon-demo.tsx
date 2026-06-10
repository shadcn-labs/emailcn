import { Buttons } from "@/registry/bases/mjml-react/ui/ui-elements/buttons/buttons";

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
