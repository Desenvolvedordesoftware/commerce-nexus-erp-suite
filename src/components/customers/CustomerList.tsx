
import DataTable, { Column } from "../ui/DataTable";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: "person" | "company";
  status: "active" | "inactive";
  createdAt: string;
}

interface CustomerListProps {
  customers: Customer[];
  onRowClick?: (customer: Customer) => void;
}

export default function CustomerList({ customers, onRowClick }: CustomerListProps) {
  const columns: Column<Customer>[] = [
    {
      header: "Nome",
      accessorKey: "name",
      cell: (customer) => (
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            <User className="h-4 w-4" />
          </div>
          <div className="font-medium">{customer.name}</div>
        </div>
      ),
    },
    {
      header: "E-mail",
      accessorKey: "email",
    },
    {
      header: "Telefone",
      accessorKey: "phone",
    },
    {
      header: "Tipo",
      accessorKey: "type",
      cell: (customer) => (
        <div>
          {customer.type === "person" ? "Pessoa Física" : "Pessoa Jurídica"}
        </div>
      ),
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (customer) => (
        <Badge
          variant={customer.status === "active" ? "default" : "secondary"}
        >
          {customer.status === "active" ? "Ativo" : "Inativo"}
        </Badge>
      ),
    },
    {
      header: "Data de Cadastro",
      accessorKey: "createdAt",
    },
  ];

  return <DataTable columns={columns} data={customers} onRowClick={onRowClick} />;
}
