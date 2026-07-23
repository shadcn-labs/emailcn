import { HeaderWithLogoAndFinanceStats } from "@/registry/bases/react-email/ui/marketing/headers/header-with-logo-and-finance-stats";
import type { HeaderWithLogoAndFinanceStatsAlignment } from "@/registry/bases/react-email/ui/marketing/headers/header-with-logo-and-finance-stats";

export default function HeaderWithLogoAndFinanceStatsDemo({
  variant,
}: {
  variant?: HeaderWithLogoAndFinanceStatsAlignment;
}) {
  return (
    <HeaderWithLogoAndFinanceStats
      {...HeaderWithLogoAndFinanceStats.PreviewProps}
      alignment={
        variant ?? HeaderWithLogoAndFinanceStats.PreviewProps.alignment
      }
    />
  );
}
