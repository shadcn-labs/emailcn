import { Pills } from "@/registry/bases/jsx-email/components/ui-elements/pills/pills";
import { defaultTheme } from "@/registry/themes/default";

export default function PillsDemo() {
  return (
    <Pills
      pills={[
        { label: "Shipped", status: "success" },
        { label: "Needs review", status: "warning" },
        { label: "Blocked", status: "danger" },
      ]}
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
