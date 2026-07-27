import { Team } from "@/registry/bases/jsx-email/components/marketing/team/team";
import { defaultTheme } from "@/registry/themes/default";

export default function TeamDemo() {
  return (
    <Team
      layout="cards"
      columns={2}
      appearance="plain"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
