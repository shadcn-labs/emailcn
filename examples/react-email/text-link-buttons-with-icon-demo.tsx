import { Buttons } from "@/registry/bases/react-email/ui/ui-elements/buttons/buttons";

export default function TextLinkButtonsWithIconDemo() {
  return (
    <Buttons
      {...Buttons.PreviewProps}
      variant="text"
      icon={"\u2192"}
      label="View Details"
      href="https://example.com"
    />
  );
}
