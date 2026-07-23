import { AvatarWithDetails } from "@/registry/bases/jsx-email/ui/ui-elements/avatars/avatar-with-details";

export default function AvatarWithDetailsDemo({
  variant,
}: {
  variant?: string;
}) {
  const align = variant === "left" || variant === "right" ? variant : "center";

  return (
    <AvatarWithDetails {...AvatarWithDetails.PreviewProps} align={align} />
  );
}
