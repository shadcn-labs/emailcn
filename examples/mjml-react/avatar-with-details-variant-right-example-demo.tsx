import { AvatarWithDetails } from "@/registry/bases/mjml-react/ui/ui-elements/avatars/avatar-with-details";

export default function AvatarWithDetailsVariantRightExampleDemo() {
  const align =
    ("right" as "left" | "right") === "left" ||
    ("right" as "left" | "right") === "right"
      ? ("right" as "left" | "right")
      : "center";

  return (
    <AvatarWithDetails {...AvatarWithDetails.PreviewProps} align={align} />
  );
}
