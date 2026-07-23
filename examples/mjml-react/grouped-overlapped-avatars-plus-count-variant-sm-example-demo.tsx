import type { AvatarSize } from "@/registry/bases/mjml-react/ui/ui-elements/avatars/grouped-overlapped-avatars";
import { GroupedOverlappedAvatarsPlusCount } from "@/registry/bases/mjml-react/ui/ui-elements/avatars/grouped-overlapped-avatars-with-plus-count";

const sizes: AvatarSize[] = ["xs", "sm", "md", "lg", "xl", "2xl"];

export default function GroupedOverlappedAvatarsPlusCountVariantSmExampleDemo() {
  const size = sizes.find((item) => item === ("sm" as string)) ?? "md";

  return (
    <GroupedOverlappedAvatarsPlusCount
      {...GroupedOverlappedAvatarsPlusCount.PreviewProps}
      size={size}
    />
  );
}
