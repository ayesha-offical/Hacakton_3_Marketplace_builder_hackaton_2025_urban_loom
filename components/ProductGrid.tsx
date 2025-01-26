import React from "react";
import ProductsCard from "./ProductsCard";
import { Product } from "@/sanity.types";

interface Props {
  products: Product[];
}

const ProductGrid = ({ products }: Props) => {
  return (
    <div>
      {" "}
      <div className="grid items-center text-lg grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:text-sm sm:text-base">
        {products?.map((product) => (
          <ProductsCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
