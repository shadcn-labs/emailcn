import { MasonryImageGrid } from "@/registry/bases/jsx-email/components/marketing/images/masonry-image-grid";

export default function MasonryImageGridColumns2StackPositionRightOverlayReverseFalseFeatureExampleDemo() {
  return (
    <MasonryImageGrid
      columns={2}
      stackPosition="right"
      overlay={true}
      reverse={false}
      feature={{
        alt: "Featured collection",
        src: "https://emailcn.vercel.app/api/email-assets/images/image-landscape-1.jpg",
      }}
    />
  );
}
