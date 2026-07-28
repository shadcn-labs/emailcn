import { LogoCloud } from "@/registry/bases/mjml-react/components/marketing/logos/logo-cloud";
import { defaultTheme } from "@/registry/themes/default";

export default function LogoCloudDemo() {
  return (
    <LogoCloud
      layout="cloud"
      appearance="plain"
      alignment="center"
      theme={defaultTheme}
    />
  );
}
