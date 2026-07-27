import { MasonryImageGrid } from "@/registry/bases/react-email/components/marketing/images/masonry-image-grid";
import { emailAsset } from "@/registry/email-assets";

export default function MasonryImageGridColumns3StackPositionLeftOverlayReverseFeatureExampleDemo() {
  return (
    <MasonryImageGrid
      columns={3}
      stackPosition="left"
      overlay={true}
      reverse={true}
      feature={{
        alt: "Featured collection",
        src: emailAsset("images/image-landscape-1.jpg"),
      }}
    />
  );
}
