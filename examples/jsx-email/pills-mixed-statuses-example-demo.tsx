import { Pills } from "@/registry/bases/jsx-email/ui/ui-elements/pills/pills";

export default function PillsMixedStatusesDemo() {
  return (
    <Pills
      pills={[
        { label: "Active", status: "success" },
        { label: "Pending", status: "warning" },
        { label: "Failed", status: "danger" },
      ]}
    />
  );
}
