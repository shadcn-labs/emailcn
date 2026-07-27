import { Button } from "@/registry/bases/jsx-email/components/ui-elements/buttons/button";
import { defaultTheme } from "@/registry/themes/default";

export default function ButtonDemo() {
  return (
    <Button
      variant="primary"
      size="md"
      align="center"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
