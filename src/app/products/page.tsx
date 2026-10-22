"use client";

import { useState } from "react";
import CardComponents from "@/components/products/CardComponents";
import ProductList from "@/lib/product";
import AlphabetDisplayComponent from "@/components/products/AlphabetDisplayComponent";
import { ProductType } from "@/lib/product";
export default function ProductCardPage() {
 
    
  return (
    <main className="space-y-6 p-5">
        <h1 className="mb-4 text-2xl font-bold">Our Products</h1>
        <AlphabetDisplayComponent/>
    </main>
  );
}