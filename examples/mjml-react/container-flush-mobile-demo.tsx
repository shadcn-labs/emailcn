import { Container } from "@/registry/bases/mjml-react/ui/ui-elements/containers/container";

export default function ContainerFlushMobileDemo() {
  return (
    <Container
      {...Container.PreviewProps}
      content="Flush container spans edge to edge on mobile devices."
      mobile="flush"
    />
  );
}
