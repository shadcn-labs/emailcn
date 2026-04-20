import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import PricingTable from "@/registry/bases/mjml-react/ui/pricing-table";
import { theme as defaultTheme } from "@/registry/themes/default";

export default function PricingTableDemo() {
  return (
    <MjmlEmailDocument preview="pricing-table" theme={defaultTheme}>
      <PricingTable {...PricingTable.PreviewProps} />
    </MjmlEmailDocument>
  );
}
