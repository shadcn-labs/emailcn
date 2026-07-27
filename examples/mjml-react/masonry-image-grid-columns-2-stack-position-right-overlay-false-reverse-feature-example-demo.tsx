import { MasonryImageGrid } from "@/registry/bases/mjml-react/components/marketing/images/masonry-image-grid";

export default function MasonryImageGridColumns2StackPositionRightOverlayFalseReverseFeatureExampleDemo() {
  return (
    <MasonryImageGrid
      columns={2}
      stackPosition="right"
      overlay={false}
      reverse={true}
      feature={{
        alt: "Featured collection",
        src: "https://emailcn.vercel.app/api/email-assets/images/image-landscape-1.jpg",
      }}
    />
  );
}
