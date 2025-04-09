
import DataTable, { Column } from "../ui/DataTable";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

export interface Employee {
  id: string;
  name: string;
  cpf: string;
  phone: string;
  position: string;
  status: "active" | "inactive";
  createdAt: string;
}

interface EmployeeListProps {
  employees: Employee[];
  onRowClick?: (employee: Employee) => void;
}

export default function EmployeeList({ employees, onRowClick }: EmployeeListProps) {
  const columns: Column<Employee>[] = [
    {
      header: "Nome",
      accessorKey: "name",
      cell: (employee) => (
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            <User className="h-4 w-4" />
          </div>
          <div className="font-medium">{employee.name}</div>
        </div>
      ),
    },
    {
      header: "CPF",
      accessorKey: "cpf",
    },
    {
      header: "Telefone",
      accessorKey: "phone",
    },
    {
      header: "Função",
      accessorKey: "position",
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (employee) => (
        <Badge
          variant={employee.status === "active" ? "default" : "secondary"}
        >
          {employee.status === "active" ? "Ativo" : "Inativo"}
        </Badge>
      ),
    },
    {
      header: "Data de Cadastro",
      accessorKey: "createdAt",
    },
  ];

  return <DataTable columns={columns} data={employees} onRowClick={onRowClick} />;
}
