import { Container } from "@/registry/bases/jsx-email/components/ui-elements/containers/container";
import { defaultTheme } from "@/registry/themes/default";

export default function ContainerDemo() {
  return (
    <Container
      mobile="gutters"
      align="left"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
