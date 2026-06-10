import { Buttons } from "@/registry/bases/mjml-react/ui/ui-elements/buttons/buttons";

export default function TextLinkButtonsDemo() {
  return (
    <Buttons
      {...Buttons.PreviewProps}
      variant="text"
      label="Unsubscribe"
      href="https://example.com"
    />
  );
}
