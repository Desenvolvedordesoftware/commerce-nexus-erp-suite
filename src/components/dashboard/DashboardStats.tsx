
import {
  BarChart3,
  Users,
  ShoppingCart,
  DollarSign,
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

function StatCard({ title, value, description, icon, trend }: StatCardProps) {
  return (
    <div className="erp-stats-card">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-muted-foreground">{title}</div>
        <div className="rounded-full bg-primary/10 p-2 text-primary">
          {icon}
        </div>
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="flex items-center text-sm text-muted-foreground">
        <span>{description}</span>
        {trend && (
          <span
            className={`ml-2 flex items-center text-xs ${
              trend.isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {trend.isPositive ? "↑" : "↓"} {trend.value}%
          </span>
        )}
      </div>
    </div>
  );
}

export default function DashboardStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Vendas Totais"
        value="R$ 45.231,89"
        description="Mês atual"
        icon={<DollarSign className="h-4 w-4" />}
        trend={{ value: 12, isPositive: true }}
      />
      <StatCard
        title="Pedidos"
        value="382"
        description="Mês atual"
        icon={<ShoppingCart className="h-4 w-4" />}
        trend={{ value: 8, isPositive: true }}
      />
      <StatCard
        title="Clientes"
        value="2.845"
        description="Total"
        icon={<Users className="h-4 w-4" />}
        trend={{ value: 3, isPositive: true }}
      />
      <StatCard
        title="Produtos"
        value="1.293"
        description="Em estoque"
        icon={<BarChart3 className="h-4 w-4" />}
        trend={{ value: 2, isPositive: false }}
      />
    </div>
  );
}
