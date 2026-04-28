import { AppShell } from "@/components/layout/app/app-shell";
import { AppContentHeader } from "@/components/layout/app/app-content-header";
import { Text } from "@/components/ui/text";

export default function DashboardPage() {
  return (
    <AppShell>
      <AppContentHeader title="Dashboard" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Revenue", value: "$45,231.89", change: "+20.1%", trend: "up" },
          { label: "Subscriptions", value: "+2350", change: "+180.1%", trend: "up" },
          { label: "Sales", value: "+12,234", change: "+19%", trend: "up" },
          { label: "Active Now", value: "+573", change: "+201", trend: "up" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg border bg-card p-6">
            <Text variant="muted">{stat.label}</Text>
            <Text as="p" className="mt-2 text-2xl font-bold">{stat.value}</Text>
            <Text variant="small" className="mt-1 text-emerald-600">
              {stat.change} from last month
            </Text>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="rounded-lg border bg-card p-6 lg:col-span-4">
          <Text as="h3" variant="h5">Overview</Text>
          <div className="mt-4 flex h-[350px] items-center justify-center rounded-md border border-dashed">
            <Text variant="muted">Chart placeholder</Text>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-6 lg:col-span-3">
          <Text as="h3" variant="h5">Recent Sales</Text>
          <div className="mt-4 space-y-4">
            {[
              { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00" },
              { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00" },
              { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00" },
              { name: "William Kim", email: "will@email.com", amount: "+$99.00" },
              { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00" },
            ].map((sale) => (
              <div key={sale.email} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                    <Text variant="small" className="font-medium">{sale.name[0]}</Text>
                  </div>
                  <div>
                    <Text variant="small" className="font-medium">{sale.name}</Text>
                    <Text variant="muted">{sale.email}</Text>
                  </div>
                </div>
                <Text variant="small" className="font-medium">{sale.amount}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
