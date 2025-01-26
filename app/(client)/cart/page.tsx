// "use client";
// import Container from "@/components/container";
// import EmptyCart from "@/components/emptycart";
// import NoAccessToCart from "@/components/NoAccessToCart";
// import PriceFormat from "@/components/PriceFormat";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { urlFor } from "@/sanity/lib/image";
// import useCartStore from "@/store";
// import { useAuth, useUser } from "@clerk/nextjs";
// import Image from "next/image";
// import {
//   ShoppingBasket,
//   ShoppingCart,
//   ShoppingCartIcon,
//   Trash2,
// } from "lucide-react";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { Triangle } from "react-loader-spinner";

// const CartPage = () => {
//   const {
//     deleteCartProduct,
//     getTotalPrice,
//     getItemCount,
//     getSubTotalPrice,
//     resetCart,
//   } = useCartStore();

//   const [isClient, setIsClient] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const groupedItems = useCartStore((state) => state.getGroupedItems());
//   const { user } = useUser();
//   const { isSignedIn } = useAuth();
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <Triangle
//           visible={true}
//           height="100"
//           width="100"
//           color="#000"
//           ariaLabel="triangle-loading"
//           wrapperStyle={{}}
//           wrapperClass=""
//         />
//       </div>
//     );
//   }

//   const handleDeleteProduct = (id: string) => {
//     deleteCartProduct(id);
//     toast.success("Product removed from cart");
//   }

//   const handleCheckout = () => {
//     toast.success(
//       "Checkout is disabled for now but soon you will be able to checkout your cart items"
//     );
//   };
//   return (
//     <div className="">
//       {isSignedIn ? (
//         <Container>
//           {groupedItems?.length ? (
//             <>
//               <div className="flex items-center gap-2 py-5">
//                 <ShoppingCartIcon className="h-8 w-8 text-cyan-950" />
//                 <h1 className="text-2xl font-semibold">Shopping Cart</h1>
//               </div>
//               <div className="grid lg:grid-cols-3 md:grid-cols-8 gap-10">
//                 <div className="lg:col-span-1 flex ">
//                   <div className="hidden md:inline-block w-full bg-gray-100 p-6 rounded-lg border ">
//                     <h2 className="text-xl font-semibold mb-4">
//                       Order Summary
//                     </h2>

//                     <div className="mb-3">
//                       <div className="flex justify-between items-center">
//                         <span>SubTotal</span>
//                         <PriceFormat amount={getSubTotalPrice()} />
//                       </div>
//                     </div>
//                     <div className="space-y-4 mb-4">
//                       <div className="flex justify-between items-center">
//                         <span>Discount</span>
//                         <PriceFormat
//                           amount={getSubTotalPrice() - getTotalPrice()}
//                         />
//                       </div>
//                     </div>
//                     <Separator />
//                     <div className="flex justify-between items-center my-4">
//                       <span>Total</span>
//                       <PriceFormat amount={getTotalPrice()} />
//                     </div>
//                     <div className="flex flex-col gap-2 ">
//                       <Button onClick={handleCheckout}>
//                         Proceed to Checkout
//                       </Button>
//                       <Link
//                         href={"/"}
//                         className="text-center text-sm text-cyan-950 hover:underline hoverEffect hover:text-cyan-900"
//                       >
//                         Continue Shopping
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="lg:col-span-2 ">
//                   <div className="grid grid-cols-5 md:grid-cols-6 border rounded-tr-lg rounded-tl-lg bg-gray-100 p-2.5 text-base font-semibold">
//                     <h2>Product</h2>
//                     <h2>Price</h2>
//                     <h2>Quantitiy</h2>
//                     <h2>Total</h2>
//                   </div>
//                   <div className="bg-gray-100 border border-t-0 rounded-br-lg rounded-bl-lg">
//                     {groupedItems?.map(({ product }) => {
//                       const itemCount = getItemCount(product?._id);
//                       return (
//                         <div
//                           key={product?._id}
//                           className="grid grid-cols-5 md:grid-cols-6 border-b p-2.5 last:border-b-0"
//                         >
//                           <div className="col-span-2  md:col-span-3 flex items-center">
//                             <Trash2 onClick={()=> {
//                               handleDeleteProduct(product?._id)
//                             }}  className="w-4 h-4 md:w-5 md:h-5 mr-1 text-gray-500 hover:text-red-600 cursor-pointer hoverEffect" />
//                             {product?.image && (
//                               <Link href={`/product/${product?.slug?.current}`} className="border p-0.5 md:p-1 mr-2 rounded-md overflow-hidden group">
//                                 <Image
//                                   src={urlFor(product?.image).url()}
//                                   alt={product?.name || "Product image"}
//                                   width={300}
//                                   height={300}
//                                   className="w-10 h-10 md:w-full md:h-14 object-cover group-hover:scale-105 overflow:hidden hoverEffect rounded-md"
//                                 />
//                               </Link>
//                             )}
//                             <h2 className="text-sm">{product?.name}</h2>
//                           </div>
//                           <div className="col-span-1 md:col-span-1">
//                             <PriceFormat amount={product?.price? product?.price * itemCount:0} />
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </>
//           ) : (
//             <EmptyCart />
//           )}
//         </Container>
//       ) : (
//         <NoAccessToCart />
//       )}
//     </div>
//   );
// };

// export default CartPage;

"use client";
import { Triangle } from "react-loader-spinner";
import Container from "@/components/container";
import PriceFormat from "@/components/PriceFormat";
import QuantityButtons from "@/components/QuantityOfItems";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { urlFor } from "@/sanity/lib/image";
import useCartStore from "@/store";
import { useAuth} from "@clerk/nextjs";
import {  ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import EmptyCart from "@/components/emptycart";
import NoAccessToCart from "@/components/NoAccessToCart";

// import {
//   createCheckoutSession,
//   Metadata,
// } from "@/actions/createCheckoutSession";

const CartPage = () => {
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
  } = useCartStore();
  const [isClient, setIsClient] = useState(false);

  const groupedItems = useCartStore((state) => state.getGroupedItems());
  const { isSignedIn } = useAuth();


  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Triangle
          visible={true}
          height="100"
          width="100"
          color="#000"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  const handleCheckout = () => {
    toast.success(
      "Checkout is disabled for now but soon you will be able to checkout your cart items"
    );
  };
  const handleResetCart = () => {
    const confirmed = window.confirm("Are you sure to reset your Cart?");
    if (confirmed) {
      resetCart();
      toast.success("Your cart reset successfully!");
    }
  };

  const handleDeleteProduct = (id: string) => {
    deleteCartProduct(id);
    toast.success("Product deleted successfully!");
  };
  return (
    <div className=" pb-10">
      {isSignedIn ? (
        <Container>
          {groupedItems?.length ? (
            <>
              <div className="flex items-center gap-2 py-5">
                <ShoppingCart className="h-6 w-6 text-primary" />
                <h1 className="text-2xl font-semibold">Shopping Cart</h1>
              </div>
              <div className="grid lg:grid-cols-3 md:gap-8">
                <div className="lg:col-span-1">
                  <div className="hidden md:inline-block w-full bg-gray-100 p-6 rounded-lg border">
                    <h2 className="text-xl font-semibold mb-4">
                      Order Summary
                    </h2>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>SubTotal</span>
                        <PriceFormat amount={getSubTotalPrice()} />
                      </div>
                      <div className="flex justify-between">
                        <span>Discount</span>
                        <PriceFormat
                          amount={getSubTotalPrice() - getTotalPrice()}
                        />
                      </div>

                      <Separator />
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>

                        <PriceFormat
                          amount={useCartStore?.getState().getTotalPrice()}
                          className="text-lg font-bold text-black"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Product View start */}
                <div className="lg:col-span-2 rounded-lg">
                  <div className="grid grid-cols-5 md:grid-cols-6 border rounded-tr-lg rounded-tl-lg bg-gray-100 p-2.5 text-base font-semibold">
                    <h2 className="col-span-2 md:col-span-3">Product</h2>
                    <h2>Price</h2>
                    <h2>Quantity</h2>
                    <h2>Total</h2>
                  </div>
                  <div className="border bg-gray-100 border-t-0 rounded-br-lg rounded-bl-lg">
                    {groupedItems?.map(({ product }) => {
                      const itemCount = getItemCount(product?._id);
                      return (
                        <div
                          key={product?._id}
                          className="grid grid-cols-5 md:grid-cols-6 border-b p-2.5 last:border-b-0"
                        >
                          <div className="col-span-2 md:col-span-3 flex items-center">
                            <Trash2
                              onClick={() => handleDeleteProduct(product?._id)}
                              className="w-4 h-4 md:w-5 md:h-5 mr-1 text-gray-500 hover:text-red-600 hoverEffect"
                            />
                            {product?.image && (
                              <div className="border p-0.5 md:p-1 mr-2 rounded-md overflow-hidden group">
                                <Image
                                  src={urlFor(product.image).url()}
                                  alt="productImage"
                                  width={300}
                                  height={300}
                                  loading="lazy"
                                  className="w-10 h-10 md:w-full md:h-14 object-cover group-hover:scale-105 overflow-hidden transition-transform duration-500"
                                />
                              </div>
                            )}
                            <h2 className="text-sm">{product?.name}</h2>
                          </div>
                          <div className="flex items-center">
                            <PriceFormat amount={product?.price} />
                          </div>
                          <QuantityButtons
                            product={product}
                            className="text-sm gap-0 md:gap-1"
                          />
                          <div className="flex items-center">
                            <PriceFormat
                              amount={
                                product?.price ? product.price * itemCount : 0
                              }
                            />
                          </div>
                        </div>
                      );
                    })}
                    <Button
                      onClick={handleResetCart}
                      className="m-5 font-semibold"
                      variant="destructive"
                    >
                      Reset Cart
                    </Button>
                  </div>
                </div>

                <div className="md:hidden fixed bottom-0 left-0 w-full bg-lightBg">
                  <div className="bg-white p-4 rounded-lg border mx-4">
                    <h2 className="text-lg font-semibold mb-2">
                      Order Summary
                    </h2>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>SubTotal</span>
                        <PriceFormat amount={getSubTotalPrice()} />
                      </div>
                      <div className="flex justify-between">
                        <span>Discount</span>
                        <PriceFormat
                          amount={getSubTotalPrice() - getTotalPrice()}
                        />
                      </div>

                      <Separator />
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>

                        <PriceFormat
                          amount={useCartStore?.getState().getTotalPrice()}
                          className="text-lg font-bold text-black"
                        />
                      </div>
                      <div className="flex flex-col gap-2 ">
                       <Button onClick={handleCheckout}>
                         Proceed to Checkout
                       </Button>
                       <Link
                         href={"/"}
                         className="text-center text-sm text-cyan-950 hover:underline hoverEffect hover:text-cyan-900"
                       >
                         Continue Shopping
                       </Link>
                    </div>
                   
                    </div>
                  </div>
                </div>
                {/* Product View end */}
              </div>
            </>
          ) : (
            <EmptyCart />
          )}
        </Container>
      ) : (
        <NoAccessToCart />
      )}
    </div>
  );
};

export default CartPage;
