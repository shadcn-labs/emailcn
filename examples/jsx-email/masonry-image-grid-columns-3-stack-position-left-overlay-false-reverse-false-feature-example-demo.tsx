import { MasonryImageGrid } from "@/registry/bases/jsx-email/components/marketing/images/masonry-image-grid";
import { emailAsset } from "@/registry/email-assets";

export default function MasonryImageGridColumns3StackPositionLeftOverlayFalseReverseFalseFeatureExampleDemo() {
  return (
    <MasonryImageGrid
      columns={3}
      stackPosition="left"
      overlay={false}
      reverse={false}
      feature={{
        alt: "Featured collection",
        src: emailAsset("images/image-landscape-1.jpg"),
      }}
    />
  );
}
