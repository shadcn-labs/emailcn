import { AvatarWithDetails } from "@/registry/bases/react-email/ui/ui-elements/avatars/avatar-with-details";

export default function AvatarWithDetailsVariantLeftExampleDemo() {
  const align =
    ("left" as "left" | "right") === "left" ||
    ("left" as "left" | "right") === "right"
      ? ("left" as "left" | "right")
      : "center";

  return (
    <AvatarWithDetails {...AvatarWithDetails.PreviewProps} align={align} />
  );
}
