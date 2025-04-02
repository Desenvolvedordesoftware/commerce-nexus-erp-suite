
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ProductList, { Product } from "@/components/products/ProductList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

// Mock data
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Notebook Ultra Pro",
    sku: "NB-001",
    price: 4599.99,
    stockQuantity: 15,
    category: "Eletrônicos",
    status: "active",
  },
  {
    id: "2",
    name: "Smartphone X20",
    sku: "SP-002",
    price: 2899.99,
    stockQuantity: 8,
    category: "Eletrônicos",
    status: "active",
  },
  {
    id: "3",
    name: "Mesa de Escritório",
    sku: "MV-003",
    price: 799.9,
    stockQuantity: 5,
    category: "Móveis",
    status: "active",
  },
  {
    id: "4",
    name: "Cadeira Ergonômica",
    sku: "MV-004",
    price: 1299.9,
    stockQuantity: 3,
    category: "Móveis",
    status: "active",
  },
  {
    id: "5",
    name: "Monitor 32 Polegadas",
    sku: "EL-005",
    price: 1899.9,
    stockQuantity: 0,
    category: "Eletrônicos",
    status: "inactive",
  },
];

export default function Products() {
  const [products] = useState<Product[]>(mockProducts);

  const handleRowClick = (product: Product) => {
    console.log("Product clicked:", product);
    // Here you would navigate to product details or open a modal
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="erp-page-title">Produtos</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Novo Produto
          </Button>
        </div>

        <ProductList products={products} onRowClick={handleRowClick} />
      </div>
    </Layout>
  );
}
