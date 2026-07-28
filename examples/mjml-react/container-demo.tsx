import { Container } from "@/registry/bases/mjml-react/components/ui-elements/containers/container";
import { defaultTheme } from "@/registry/themes/default";

export default function ContainerDemo() {
  return <Container mobile="gutters" align="left" theme={defaultTheme} />;
}
