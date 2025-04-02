
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SalesList, { Sale } from "@/components/sales/SalesList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

// Mock data
const mockSales: Sale[] = [
  {
    id: "1",
    orderNumber: "12345",
    customer: "João Silva",
    amount: 1259.99,
    date: "10/06/2023",
    status: "completed",
    paymentMethod: "Cartão de Crédito",
  },
  {
    id: "2",
    orderNumber: "12346",
    customer: "Empresa ABC Ltda",
    amount: 3450.5,
    date: "09/06/2023",
    status: "pending",
    paymentMethod: "Boleto",
  },
  {
    id: "3",
    orderNumber: "12347",
    customer: "Maria Oliveira",
    amount: 899.9,
    date: "08/06/2023",
    status: "completed",
    paymentMethod: "PIX",
  },
  {
    id: "4",
    orderNumber: "12348",
    customer: "Supermercado XYZ",
    amount: 5780.0,
    date: "07/06/2023",
    status: "canceled",
    paymentMethod: "Transferência",
  },
  {
    id: "5",
    orderNumber: "12349",
    customer: "Carlos Ferreira",
    amount: 459.9,
    date: "06/06/2023",
    status: "completed",
    paymentMethod: "Cartão de Débito",
  },
];

export default function Sales() {
  const [sales] = useState<Sale[]>(mockSales);

  const handleRowClick = (sale: Sale) => {
    console.log("Sale clicked:", sale);
    // Here you would navigate to sale details or open a modal
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="erp-page-title">Vendas</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Nova Venda
          </Button>
        </div>

        <SalesList sales={sales} onRowClick={handleRowClick} />
      </div>
    </Layout>
  );
}
