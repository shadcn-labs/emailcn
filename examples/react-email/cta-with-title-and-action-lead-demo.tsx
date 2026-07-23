import type { ComponentProps } from "react";

import { CTAWithTitleAndActionLead } from "@/registry/bases/react-email/ui/marketing/cta/cta-with-title-and-action-lead";

export default function CTAWithTitleAndActionLeadDemo({
  variant,
}: {
  variant?: ComponentProps<typeof CTAWithTitleAndActionLead>["variant"];
}) {
  return (
    <CTAWithTitleAndActionLead
      {...CTAWithTitleAndActionLead.PreviewProps}
      variant={variant ?? CTAWithTitleAndActionLead.PreviewProps.variant}
    />
  );
}
