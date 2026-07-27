import { MasonryImageGrid } from "@/registry/bases/jsx-email/components/marketing/images/masonry-image-grid";
import { emailAsset } from "@/registry/email-assets";

export default function MasonryImageGridColumns2StackPositionLeftOverlayReverseFeatureExampleDemo() {
  return (
    <MasonryImageGrid
      columns={2}
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
