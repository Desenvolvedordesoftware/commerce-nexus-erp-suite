
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* Novas rotas serão implementadas conforme os módulos forem desenvolvidos */}
          <Route path="/pos" element={<NotFound />} />
          <Route path="/purchases" element={<NotFound />} />
          <Route path="/invoices" element={<NotFound />} />
          <Route path="/restaurant" element={<NotFound />} />
          <Route path="/transport" element={<NotFound />} />
          <Route path="/service" element={<NotFound />} />
          <Route path="/finance" element={<NotFound />} />
          <Route path="/receivables" element={<NotFound />} />
          <Route path="/payables" element={<NotFound />} />
          <Route path="/reports" element={<NotFound />} />
          <Route path="/commissions" element={<NotFound />} />
          <Route path="/companies" element={<NotFound />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
