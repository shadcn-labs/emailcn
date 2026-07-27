import { Divider } from "@/registry/bases/mjml-react/components/ui-elements/spacing/divider";

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
