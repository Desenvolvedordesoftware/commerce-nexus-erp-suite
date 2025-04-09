
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import EmployeeList, { Employee } from "@/components/employees/EmployeeList";
import EmployeeForm, { EmployeeFormData } from "@/components/employees/EmployeeForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Mock data
const mockEmployees: Employee[] = [
  {
    id: "1",
    name: "Carlos Oliveira",
    cpf: "123.456.789-00",
    phone: "(11) 99999-8888",
    position: "Vendedor",
    status: "active",
    createdAt: "10/01/2023",
  },
  {
    id: "2",
    name: "Ana Silva",
    cpf: "987.654.321-00",
    phone: "(11) 97777-6666",
    position: "Gerente",
    status: "active",
    createdAt: "15/02/2023",
  },
  {
    id: "3",
    name: "Pedro Santos",
    cpf: "111.222.333-44",
    phone: "(11) 95555-4444",
    position: "Caixa",
    status: "inactive",
    createdAt: "05/03/2023",
  },
];

export default function Employees() {
  const [employees, setEmployees] = useState<Employee[]>(mockEmployees);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  // Filtra funcionários com base no termo de busca (nome ou CPF)
  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.cpf.includes(searchTerm)
  );

  const handleOpenForm = () => {
    setEditingEmployee(null);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingEmployee(null);
  };

  const handleRowClick = (employee: Employee) => {
    setEditingEmployee(employee);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (data: EmployeeFormData) => {
    if (editingEmployee) {
      // Atualizar funcionário existente
      const updatedEmployees = employees.map((e) =>
        e.id === editingEmployee.id
          ? {
              ...e,
              name: data.name,
              cpf: data.cpf,
              phone: data.phone,
              position: data.position,
              status: data.status,
            }
          : e
      );
      setEmployees(updatedEmployees);
    } else {
      // Adicionar novo funcionário
      const newEmployee: Employee = {
        id: Date.now().toString(),
        name: data.name,
        cpf: data.cpf,
        phone: data.phone,
        position: data.position,
        status: data.status,
        createdAt: new Date().toLocaleDateString('pt-BR'),
      };
      setEmployees([...employees, newEmployee]);
    }
    handleCloseForm();
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="erp-page-title">Funcionários</h1>
          <Button onClick={handleOpenForm}>
            <Plus className="mr-2 h-4 w-4" /> Novo Funcionário
          </Button>
        </div>

        <div className="relative max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar por nome ou CPF..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <EmployeeList employees={filteredEmployees} onRowClick={handleRowClick} />

        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingEmployee ? "Editar Funcionário" : "Novo Funcionário"}
              </DialogTitle>
              <DialogDescription>
                Preencha os dados do funcionário no formulário abaixo.
              </DialogDescription>
            </DialogHeader>
            <EmployeeForm
              initialData={
                editingEmployee
                  ? {
                      name: editingEmployee.name,
                      cpf: editingEmployee.cpf,
                      rg: "",
                      address: "",
                      number: "",
                      neighborhood: "",
                      city: "",
                      state: "",
                      zipCode: "",
                      phone: editingEmployee.phone,
                      contact: "",
                      position: editingEmployee.position,
                      salary: "",
                      commission: "",
                      password: "",
                      status: editingEmployee.status,
                      registrationDate: editingEmployee.createdAt,
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
