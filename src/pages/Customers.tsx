
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import CustomerList, { Customer } from "@/components/customers/CustomerList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

// Mock data
const mockCustomers: Customer[] = [
  {
    id: "1",
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "(11) 99999-9999",
    type: "person",
    status: "active",
    createdAt: "10/05/2023",
  },
  {
    id: "2",
    name: "Empresa ABC Ltda",
    email: "contato@empresaabc.com.br",
    phone: "(11) 5555-5555",
    type: "company",
    status: "active",
    createdAt: "15/03/2023",
  },
  {
    id: "3",
    name: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    phone: "(21) 98888-8888",
    type: "person",
    status: "inactive",
    createdAt: "22/01/2023",
  },
  {
    id: "4",
    name: "Supermercado XYZ",
    email: "compras@supermercadoxyz.com.br",
    phone: "(11) 3333-3333",
    type: "company",
    status: "active",
    createdAt: "05/06/2023",
  },
  {
    id: "5",
    name: "Carlos Ferreira",
    email: "carlos.ferreira@email.com",
    phone: "(11) 97777-7777",
    type: "person",
    status: "active",
    createdAt: "18/04/2023",
  },
];

export default function Customers() {
  const [customers] = useState<Customer[]>(mockCustomers);

  const handleRowClick = (customer: Customer) => {
    console.log("Customer clicked:", customer);
    // Here you would navigate to customer details or open a modal
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="erp-page-title">Clientes</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Novo Cliente
          </Button>
        </div>

        <CustomerList customers={customers} onRowClick={handleRowClick} />
      </div>
    </Layout>
  );
}
