import { Category, Product } from "@/sanity.types";
import React from "react";
import Categories from "./categories";

import ProductGrid from "./ProductGrid";

interface Props {
  products: Product[];
  categories: Category[];
  title?: boolean;
}

const ProductItems = ({ products, title, categories }: Props) => {
  return (
    <div className="">
      <Categories categories={categories} />
      {/* {products} */}
  {title && 
      <div className="pb-9 gap-3 flex justify-center items-center flex-col ">
      <h2 className="text-3xl text-gray-800 font-bold ">Browse The Range</h2>
          <p className="text-base">ICONIC RE-EDITION</p>

       
      </div>}
      
<ProductGrid products={products}/>
    </div>
  );
};

export default ProductItems;
