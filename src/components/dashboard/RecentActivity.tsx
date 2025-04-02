
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Package, CreditCard, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActivityItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  timestamp: string;
  status?: "success" | "warning" | "error" | "info";
}

const ActivityItem = ({ icon, title, description, timestamp, status = "info" }: ActivityItemProps) => {
  const statusColors = {
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <div className="flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-muted/50">
      <div className={cn("rounded-full p-2", statusColors[status])}>
        {icon}
      </div>
      <div className="flex-1 space-y-1">
        <p className="font-medium leading-none">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="text-sm text-muted-foreground">{timestamp}</div>
    </div>
  );
};

export default function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Atividades Recentes</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2">
        <ActivityItem
          icon={<User className="h-4 w-4 text-white" />}
          title="Novo Cliente"
          description="Empresa ABC Ltda foi adicionada"
          timestamp="14:30"
          status="success"
        />
        <ActivityItem
          icon={<Package className="h-4 w-4 text-white" />}
          title="Estoque Baixo"
          description="Produto XYZ está com estoque baixo"
          timestamp="13:15"
          status="warning"
        />
        <ActivityItem
          icon={<CreditCard className="h-4 w-4 text-white" />}
          title="Pagamento Recebido"
          description="R$ 1.250,00 recebido do cliente João Silva"
          timestamp="11:42"
          status="success"
        />
        <ActivityItem
          icon={<AlertCircle className="h-4 w-4 text-white" />}
          title="Erro na NF-e"
          description="Falha ao emitir NF-e para pedido #12345"
          timestamp="09:30"
          status="error"
        />
      </CardContent>
    </Card>
  );
}
