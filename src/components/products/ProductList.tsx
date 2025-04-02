
import DataTable, { Column } from "../ui/DataTable";
import { Badge } from "@/components/ui/badge";
import { Package } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stockQuantity: number;
  category: string;
  status: "active" | "inactive";
}

interface ProductListProps {
  products: Product[];
  onRowClick?: (product: Product) => void;
}

export default function ProductList({ products, onRowClick }: ProductListProps) {
  const columns: Column<Product>[] = [
    {
      header: "Produto",
      accessorKey: "name",
      cell: (product) => (
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            <Package className="h-4 w-4" />
          </div>
          <div>
            <div className="font-medium">{product.name}</div>
            <div className="text-sm text-muted-foreground">
              SKU: {product.sku}
            </div>
          </div>
        </div>
      ),
    },
    {
      header: "Preço",
      accessorKey: "price",
      cell: (product) => (
        <div>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </div>
      ),
    },
    {
      header: "Estoque",
      accessorKey: "stockQuantity",
      cell: (product) => (
        <div>
          <Badge
            variant={
              product.stockQuantity > 10
                ? "default"
                : product.stockQuantity > 0
                ? "secondary"
                : "destructive"
            }
          >
            {product.stockQuantity}
          </Badge>
        </div>
      ),
    },
    {
      header: "Categoria",
      accessorKey: "category",
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (product) => (
        <Badge
          variant={product.status === "active" ? "default" : "secondary"}
        >
          {product.status === "active" ? "Ativo" : "Inativo"}
        </Badge>
      ),
    },
  ];

  return <DataTable columns={columns} data={products} onRowClick={onRowClick} />;
}
