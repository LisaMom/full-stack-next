"use client";

import PaginationOfCardComponent from "@/components/PaginationOfCardComponent";
import { ProductCardListComponent } from "@/components/products/ProductCardListComponent";

export default function ProductsPage() {
    return (
        <div> 
          <ProductCardListComponent />
          <PaginationOfCardComponent />
        </div>
    )
}