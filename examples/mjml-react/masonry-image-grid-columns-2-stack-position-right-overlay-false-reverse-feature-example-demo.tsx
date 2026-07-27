import { MasonryImageGrid } from "@/registry/bases/mjml-react/components/marketing/images/masonry-image-grid";
import { emailAsset } from "@/registry/email-assets";

export default function MasonryImageGridColumns2StackPositionRightOverlayFalseReverseFeatureExampleDemo() {
  return (
    <MasonryImageGrid
      columns={2}
      stackPosition="right"
      overlay={false}
      reverse={true}
      feature={{
        alt: "Featured collection",
        src: emailAsset("images/image-landscape-1.jpg"),
      }}
    />
  );
}
