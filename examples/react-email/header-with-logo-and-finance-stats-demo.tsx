import { HeaderWithLogoAndFinanceStats } from "@/registry/bases/react-email/components/marketing/headers/header-with-logo-and-finance-stats";
import { defaultTheme } from "@/registry/themes/default";

export default function HeaderWithLogoAndFinanceStatsDemo() {
  return (
    <HeaderWithLogoAndFinanceStats
      alignment="left"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
