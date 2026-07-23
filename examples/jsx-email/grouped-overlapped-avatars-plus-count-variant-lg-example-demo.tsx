import type { AvatarSize } from "@/registry/bases/jsx-email/ui/ui-elements/avatars/grouped-overlapped-avatars";
import { GroupedOverlappedAvatarsPlusCount } from "@/registry/bases/jsx-email/ui/ui-elements/avatars/grouped-overlapped-avatars-with-plus-count";

const sizes: AvatarSize[] = ["xs", "sm", "md", "lg", "xl", "2xl"];

export default function GroupedOverlappedAvatarsPlusCountVariantLgExampleDemo() {
  const size = sizes.find((item) => item === ("lg" as string)) ?? "md";

  return (
    <GroupedOverlappedAvatarsPlusCount
      {...GroupedOverlappedAvatarsPlusCount.PreviewProps}
      size={size}
    />
  );
}
