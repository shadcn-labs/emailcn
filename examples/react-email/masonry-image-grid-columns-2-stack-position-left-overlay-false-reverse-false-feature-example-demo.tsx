import { MasonryImageGrid } from "@/registry/bases/react-email/components/marketing/images/masonry-image-grid";

export default function MasonryImageGridColumns2StackPositionLeftOverlayFalseReverseFalseFeatureExampleDemo() {
  return (
    <MasonryImageGrid
      columns={2}
      stackPosition="left"
      overlay={false}
      reverse={false}
      feature={{
        alt: "Featured collection",
        src: "https://emailcn.vercel.app/api/email-assets/images/image-landscape-1.jpg",
      }}
    />
  );
}
