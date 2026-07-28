import { Team } from "@/registry/bases/mjml-react/components/marketing/team/team";
import { defaultTheme } from "@/registry/themes/default";

export default function TeamDemo() {
  return (
    <Team layout="cards" columns={2} appearance="plain" theme={defaultTheme} />
  );
}
