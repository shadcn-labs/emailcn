import { GroupedOverlappedAvatars } from "@/registry/bases/mjml-react/ui/ui-elements/avatars/grouped-overlapped-avatars";
import type { AvatarSize } from "@/registry/bases/mjml-react/ui/ui-elements/avatars/grouped-overlapped-avatars";

const sizes: AvatarSize[] = ["xs", "sm", "md", "lg", "xl", "2xl"];

export default function GroupedOverlappedAvatarsVariantSmExampleDemo() {
  const size = sizes.find((item) => item === ("sm" as string)) ?? "md";

  return (
    <GroupedOverlappedAvatars
      {...GroupedOverlappedAvatars.PreviewProps}
      size={size}
    />
  );
}
