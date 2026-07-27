import { MasonryImageGrid } from "@/registry/bases/mjml-react/components/marketing/images/masonry-image-grid";

export default function MasonryImageGridColumns3StackPositionRightOverlayReverseFeatureExampleDemo() {
  return (
    <MasonryImageGrid
      columns={3}
      stackPosition="right"
      overlay={true}
      reverse={true}
      feature={{
        alt: "Featured collection",
        src: "https://emailcn.vercel.app/api/email-assets/images/image-landscape-1.jpg",
      }}
    />
  );
}
