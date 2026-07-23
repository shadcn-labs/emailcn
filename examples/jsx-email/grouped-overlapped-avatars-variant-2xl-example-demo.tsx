import { GroupedOverlappedAvatars } from "@/registry/bases/jsx-email/ui/ui-elements/avatars/grouped-overlapped-avatars";
import type { AvatarSize } from "@/registry/bases/jsx-email/ui/ui-elements/avatars/grouped-overlapped-avatars";

const sizes: AvatarSize[] = ["xs", "sm", "md", "lg", "xl", "2xl"];

export default function GroupedOverlappedAvatarsVariant2xlExampleDemo() {
  const size = sizes.find((item) => item === ("2xl" as string)) ?? "md";

  return (
    <GroupedOverlappedAvatars
      {...GroupedOverlappedAvatars.PreviewProps}
      size={size}
    />
  );
}
