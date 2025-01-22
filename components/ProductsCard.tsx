import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { LuStar } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import ProductCartBar from "./ProductCartBar";
import Price from "./Price";
import AddtoCart from "./AddtoCart";
interface Props {
  product: Product;
}
const ProductsCard = ({ product }: Props) => {
  const isStock = product?.stock !== 0;
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden group tex-sm">
      <div className="border-b border-gray-300 relative  ">
        {product?.image && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product?.image).url()}
              alt="product"
              width={500}
              height={500}
              loading="lazy"
              className={`w-full max-h-96  object-cover overflow-hidden transition-transform duration-500 ${product?.stock !== 0 && " group-hover:scale-105"}`}
            />
          </Link>
        )}
        {isStock && (
          <div className=" absolute bottom-0 left-0 w-full translate-y-12">
            <ProductCartBar />
          </div>
        )}

        {product?.stock === 0 && (
          <div className=" flex justify-center  bg-black   text-white   cursor-not-allowed">
            <p className="">Out of Stock</p>
          </div>
        )}
      </div>
      {/* description */}

      {product?.status && (
        <div className="pl-5 pt-3 ">
          {product?.status?.split("").map((char, index) => (
            <span key={index} className="font-semibold uppercase">
              {char}
            </span>
          ))}
        </div>
      )}

      <div className="pl-5 pt-2 pb-2 flex flex-col gap-2">
        <div className="flex  justify-between flex-col gap-1">
          <p className="text-gray  font-medium">{product.name}</p>
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
        </div>

        <p className="text-gray-600 tracking-wide font-semibold text-base line-clamp-1 capitalize ">
          {product.description}
        </p>
        <Price 
          price={product?.price}
          discount={product?.discount}
        
        />

        <AddtoCart  
        product={product}
        />
      </div>
    </div>
  );
};

export default ProductsCard;
