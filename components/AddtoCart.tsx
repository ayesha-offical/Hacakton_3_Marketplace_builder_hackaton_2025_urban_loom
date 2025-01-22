"use client";
import { Product } from "@/sanity.types";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import QuantityOfItems from "./QuantityOfItems";
import PriceFormat from "./PriceFormat";
import { useEffect, useState } from "react";
// Adjust the import path as necessary

interface Props {
  product: Product;
  className?: string;
}

const AddtoCart = ({ product }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  const handleAddtoCart = () => {
    // Add the logic to add the product to the cart
    // You can use the provided product object as a reference
    toast.success("Cart added successfully");
  };
  const itemsCount = 0;
  return (
    <div>
      {itemsCount ? (
        <div className="text-sm">
          <div className="mr-5 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Quantity</span>
            <QuantityOfItems product={product} />
          </div>
          <div className="flex items-center justify-between mr-5 border-t  pt-1">
            <span>Subtotal </span>
            <PriceFormat
              amount={product?.price ? product?.price * itemsCount : 0}
            />
          </div>
        </div>
      ) : (
        <Button
          onClick={handleAddtoCart}
          className={cn(
            "bg-black  w-[93%] hoverEffect shadow-md disabled:hover:cursor-not-allowed disabled:bg-slate-800 disabled:hover:text-gray-400 disabled:border-slate-800"
          )}
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
};

export default AddtoCart;
