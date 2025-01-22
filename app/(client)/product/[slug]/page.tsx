import AddtoCart from "@/components/AddtoCart";
import Container from "@/components/container";
import Price from "@/components/Price";
import { getProductsBySlug } from "@/sanity/helpers/main";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import { LuStar } from "react-icons/lu";
import { RxBorderSplit } from "react-icons/rx";
import { FaRegQuestionCircle } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FiShare2 } from "react-icons/fi";

const SingleItemPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductsBySlug(slug);

  if (!product) {
    return <div>Product not found </div>;
  }
  return (
    <div>
      <Container className="flex flex-col md:flex-row gap-10 py-10 ">
        {product?.image && (
          <div className="w-full md:w-1/2 h-auto justify-center flex  rounded-lg ">
            <Image
              src={urlFor(product?.image).url()}
              alt="Product_image"
              width={500}
              height={500}
              className="rounded-lg hoverEffect w-full max-h-[500px] object-cover hover:scale-110"
            />
          </div>
        )}
        <div className="w-full md:w-1/2 flex flex-col gap-4 mr-8">
          <div>
            <p className="text-4xl font-bold mb-2">{product?.name}</p>
            <div className="flex items-center ">
              <div className="flex items-center text-[#fca903]  mr-6 gap-1">
                {Array.from({ length: 5 }).map((_, index) => {
                  const isLastStar = index === 4;
                  return (
                    <LuStar
                      fill={!isLastStar ? "#fcad03" : "transparent"}
                      key={index}
                    />
                  );
                })}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{`(25 reviews)`}</p>
              </div>
            </div>
          </div>
          <Price
            price ={product?.price}
            discount={product?.discount}
            className="font-bold text-sm "
          />
          {product?.stock && (
            <p className=" rounded-lg  text-center font-semibold  flex text-green-600 py-2.5">
            <span className="pr-1">Availablity: </span>  In Stock
            </p>
          )}
         
          <p className="text-sm text-gray-600 tracking-wide font-medium">{product?.description}</p>
          <p className="text-base text-gray-800 ">
            <span className="bg-gray-600 text-white px-3 py-1 text-sm font-semibold rounded-md mr-2">
              245k
            </span>
          Most viewing Product
          </p>
         {product &&  <AddtoCart  product={product}/>}
         <div className="flex flex-wrap item-center justify-between gap-3 border-b border-b-gray-400 py-5 -mt-3">
             <div className="flex items-center gap-2 text-sm text-black hover:text-amber-500 hoverEffect">
                 <RxBorderSplit className=" text-lg" /> 
                 <span>Compare Color</span>
             </div>
             <div className="flex items-center gap-2 text-sm text-black hover:text-amber-500 hoverEffect">
                 <FaRegQuestionCircle className=" text-lg" /> 
                 <span>Ask a Question</span>
             </div>
             <div className="flex items-center gap-2 text-sm text-black hover:text-amber-500 hoverEffect">
                 <TbTruckDelivery className=" text-lg" /> 
                 <span>Delivery and Return</span>
             </div>
             <div className="flex items-center gap-2 text-sm text-black hover:text-amber-500 hoverEffect">
                 <FiShare2 className=" text-lg" /> 
                 <span>share</span>
             </div>
             <div className="flex flex-wrap items-center gap-5">
            <div className="border border-gray-400 mt-7 text-center bg-white hover:bg-zinc-400 p-3 hover:border-gray-900 hoverEffect rounded-md">
              <p className="text-base font-semibold text-black">
                Free Shipping
              </p>
              <p className="text-sm text-gray-500 hover:text-black">
                Free shipping over order $100
              </p>
            </div>
            <div className="border mt-7 border-gray-300 bg-white hover:bg-zinc-400 text-center p-3 hover:border-gray-900  hoverEffect rounded-md">
              <p className="text-base font-semibold text-black">
                Flexible Payment
              </p>
              <p className="text-sm text-gray-500 hover:text-black">
                Pay with Multiple Credit Cards
              </p>
            </div>
          </div>
 </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleItemPage;
