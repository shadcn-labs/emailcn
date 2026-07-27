import { MasonryImageGrid } from "@/registry/bases/mjml-react/components/marketing/images/masonry-image-grid";
import { emailAsset } from "@/registry/email-assets";

export default function MasonryImageGridColumns2StackPositionRightOverlayReverseFeatureExampleDemo() {
  return (
    <MasonryImageGrid
      columns={2}
      stackPosition="right"
      overlay={true}
      reverse={true}
      feature={{
        alt: "Featured collection",
        src: emailAsset("images/image-landscape-1.jpg"),
      }}
    />
  );
}
