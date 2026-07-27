import { Spacer } from "@/registry/bases/jsx-email/components/ui-elements/spacing/spacer";
import { defaultTheme } from "@/registry/themes/default";

export default function SpacerDemo() {
  return (
    <Spacer height={64} theme={{ ...defaultTheme, containerWidth: "640px" }} />
  );
}
