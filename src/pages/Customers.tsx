
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import CustomerList, { Customer } from "@/components/customers/CustomerList";
import CustomerForm, { CustomerFormData } from "@/components/customers/CustomerForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);

  // Filtra clientes com base no termo de busca (nome, CPF ou CNPJ)
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenForm = () => {
    setEditingCustomer(null);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingCustomer(null);
  };

  const handleRowClick = (customer: Customer) => {
    setEditingCustomer(customer);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (data: CustomerFormData) => {
    if (editingCustomer) {
      // Atualizar cliente existente
      const updatedCustomers = customers.map((c) =>
        c.id === editingCustomer.id
          ? {
              ...c,
              name: data.name,
              status: data.status,
              phone: data.phone,
              type: data.type,
              // Adicionar outros campos conforme necessário
            }
          : c
      );
      setCustomers(updatedCustomers);
    } else {
      // Adicionar novo cliente
      const newCustomer: Customer = {
        id: Date.now().toString(),
        name: data.name,
        email: "", // Adicionar campo no formulário se necessário
        phone: data.phone,
        type: data.type,
        status: data.status,
        createdAt: new Date().toLocaleDateString('pt-BR'),
      };
      setCustomers([...customers, newCustomer]);
    }
    handleCloseForm();
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="erp-page-title">Clientes</h1>
          <Button onClick={handleOpenForm}>
            <Plus className="mr-2 h-4 w-4" /> Novo Cliente
          </Button>
        </div>

        <div className="relative max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar por nome, CPF ou CNPJ..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <CustomerList customers={filteredCustomers} onRowClick={handleRowClick} />

        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingCustomer ? "Editar Cliente" : "Novo Cliente"}
              </DialogTitle>
              <DialogDescription>
                Preencha os dados do cliente no formulário abaixo.
              </DialogDescription>
            </DialogHeader>
            <CustomerForm
              initialData={
                editingCustomer
                  ? {
                      name: editingCustomer.name,
                      type: editingCustomer.type,
                      cpfCnpj: "", // Adicionar campos ao mock data
                      address: "",
                      number: "",
                      neighborhood: "",
                      city: "",
                      state: "",
                      zipCode: "",
                      phone: editingCustomer.phone,
                      contact: "",
                      status: editingCustomer.status,
                      registrationDate: editingCustomer.createdAt,
                    }
                  : undefined
              }
              onSubmit={handleFormSubmit}
              onCancel={handleCloseForm}
            />
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
}
