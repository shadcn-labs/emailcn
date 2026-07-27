import { DataTable } from "@/registry/bases/mjml-react/ui/ui-elements/data-tables/data-table";

export default function DataTableLogoActionsDemo() {
  return (
    <DataTable
      variant="logo-actions"
      headers={["", "Integration", ""]}
      rows={[
        {
          actionHref: "#stripe",
          actionLabel: "Configure",
          logoUrl:
            "https://emailcn.vercel.app/api/email-assets/logos/logo-stripe.png",
          name: "Stripe",
        },
        {
          actionHref: "#apple-pay",
          actionLabel: "Connect",
          logoUrl:
            "https://emailcn.vercel.app/api/email-assets/logos/logo-apple-pay.png",
          name: "Apple Pay",
        },
        {
          actionHref: "#mastercard",
          actionLabel: "Sync",
          logoUrl:
            "https://emailcn.vercel.app/api/email-assets/logos/logo-mastercard.png",
          name: "Mastercard",
        },
      ]}
    />
  );
}
