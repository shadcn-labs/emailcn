import { MasonryImageGrid } from "@/registry/bases/react-email/components/marketing/images/masonry-image-grid";

export default function MasonryImageGridColumns3StackPositionLeftOverlayFalseReverseFalseFeatureExampleDemo() {
  return (
    <MasonryImageGrid
      columns={3}
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
