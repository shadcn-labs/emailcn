import type { AvatarSize } from "@/registry/bases/react-email/ui/ui-elements/avatars/grouped-overlapped-avatars";
import { GroupedOverlappedAvatarsPlusCount } from "@/registry/bases/react-email/ui/ui-elements/avatars/grouped-overlapped-avatars-with-plus-count";

const sizes: AvatarSize[] = ["xs", "sm", "md", "lg", "xl", "2xl"];

export default function GroupedOverlappedAvatarsPlusCountVariantXlExampleDemo() {
  const size = sizes.find((item) => item === ("xl" as string)) ?? "md";

  return (
    <GroupedOverlappedAvatarsPlusCount
      {...GroupedOverlappedAvatarsPlusCount.PreviewProps}
      size={size}
    />
  );
}
