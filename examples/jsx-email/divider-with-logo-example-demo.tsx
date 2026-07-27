import { Divider } from "@/registry/bases/jsx-email/components/ui-elements/spacing/divider";

export default function DividerWithLogoDemo() {
  return (
    <Divider
      align="center"
      content={{
        image: {
          alt: "emailcn",
          src: "https://emailcn.vercel.app/api/email-assets/emailcn-logo.png",
        },
        type: "logo",
      }}
    />
  );
}
