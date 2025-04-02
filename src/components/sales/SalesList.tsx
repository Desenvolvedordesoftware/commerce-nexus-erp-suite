
import DataTable, { Column } from "../ui/DataTable";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

export interface Sale {
  id: string;
  orderNumber: string;
  customer: string;
  amount: number;
  date: string;
  status: "pending" | "completed" | "canceled";
  paymentMethod: string;
}

interface SalesListProps {
  sales: Sale[];
  onRowClick?: (sale: Sale) => void;
}

export default function SalesList({ sales, onRowClick }: SalesListProps) {
  const columns: Column<Sale>[] = [
    {
      header: "Pedido",
      accessorKey: "orderNumber",
      cell: (sale) => (
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            <ShoppingCart className="h-4 w-4" />
          </div>
          <div className="font-medium">#{sale.orderNumber}</div>
        </div>
      ),
    },
    {
      header: "Cliente",
      accessorKey: "customer",
    },
    {
      header: "Valor",
      accessorKey: "amount",
      cell: (sale) => (
        <div className="font-medium">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(sale.amount)}
        </div>
      ),
    },
    {
      header: "Data",
      accessorKey: "date",
    },
    {
      header: "Pagamento",
      accessorKey: "paymentMethod",
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (sale) => {
        const statusMap = {
          pending: { label: "Pendente", variant: "secondary" as const },
          completed: { label: "Concluído", variant: "default" as const },
          canceled: { label: "Cancelado", variant: "destructive" as const },
        };
        const { label, variant } = statusMap[sale.status];
        return <Badge variant={variant}>{label}</Badge>;
      },
    },
  ];

  return <DataTable columns={columns} data={sales} onRowClick={onRowClick} />;
}
