"use client";
import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import useCartStore from "@/store";
const Cart = () => {
  const [isClient, setIsClient] = useState(false);

  const groupedItems = useCartStore((state) => state.getGroupedItems())
  useEffect(() => {
    setIsClient(true);
  },[]);
  if (!isClient) return null;
  return (
    <Link
      href={"/cart"}
      className="flex items-center md:text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none text-xs "
    >
      <ShoppingCart className="text-cyan-950 w-5 h-5 md:w-6 md:h-6 hoverEffect" />
      <div className="flex flex-col ">
        <p className="text-xs">
          <span className="font-semibold ">{groupedItems?.length ? groupedItems?. length : 0}</span>
          items
        </p>
        <p className="font-semibold md:text-base text-xs">Cart</p>
      </div>
    </Link>
  );
};

export default Cart;
