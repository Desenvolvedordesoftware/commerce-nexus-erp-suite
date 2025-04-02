
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  Users, 
  PackageSearch, 
  ShoppingCart, 
  FileText, 
  Settings, 
  DollarSign,
  Store,
  Truck,
  FileSpreadsheet,
  LogOut
} from "lucide-react";

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const SidebarItem = ({ to, icon, label, isActive }: SidebarItemProps) => (
  <Link to={to}>
    <div
      className={cn(
        "erp-sidebar-item",
        isActive && "active"
      )}
    >
      {icon}
      <span>{label}</span>
    </div>
  </Link>
);

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

const SidebarSection = ({ title, children }: SidebarSectionProps) => (
  <div className="mb-6">
    <h3 className="mb-2 px-3 text-xs font-semibold uppercase text-muted-foreground">
      {title}
    </h3>
    <div className="space-y-1">{children}</div>
  </div>
);

export default function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="flex h-screen flex-col border-r bg-card px-3 py-4">
      <div className="mb-6 flex items-center px-3">
        <Store className="h-6 w-6 text-primary" />
        <h1 className="ml-2 text-xl font-bold">Commerce Nexus</h1>
      </div>

      <div className="flex-1 overflow-auto">
        <SidebarSection title="Gerenciamento">
          <SidebarItem
            to="/"
            icon={<BarChart3 className="h-5 w-5" />}
            label="Dashboard"
            isActive={pathname === "/"}
          />
          <SidebarItem
            to="/customers"
            icon={<Users className="h-5 w-5" />}
            label="Clientes"
            isActive={pathname.startsWith("/customers")}
          />
          <SidebarItem
            to="/products"
            icon={<PackageSearch className="h-5 w-5" />}
            label="Produtos"
            isActive={pathname.startsWith("/products")}
          />
          <SidebarItem
            to="/sales"
            icon={<ShoppingCart className="h-5 w-5" />}
            label="Vendas"
            isActive={pathname.startsWith("/sales")}
          />
          <SidebarItem
            to="/invoices"
            icon={<FileText className="h-5 w-5" />}
            label="Notas Fiscais"
            isActive={pathname.startsWith("/invoices")}
          />
          <SidebarItem
            to="/finance"
            icon={<DollarSign className="h-5 w-5" />}
            label="Financeiro"
            isActive={pathname.startsWith("/finance")}
          />
          <SidebarItem
            to="/suppliers"
            icon={<Truck className="h-5 w-5" />}
            label="Fornecedores"
            isActive={pathname.startsWith("/suppliers")}
          />
          <SidebarItem
            to="/reports"
            icon={<FileSpreadsheet className="h-5 w-5" />}
            label="Relatórios"
            isActive={pathname.startsWith("/reports")}
          />
        </SidebarSection>

        <SidebarSection title="Sistema">
          <SidebarItem
            to="/settings"
            icon={<Settings className="h-5 w-5" />}
            label="Configurações"
            isActive={pathname.startsWith("/settings")}
          />
          <div className="erp-sidebar-item cursor-pointer">
            <LogOut className="h-5 w-5" />
            <span>Sair</span>
          </div>
        </SidebarSection>
      </div>
    </div>
  );
}
