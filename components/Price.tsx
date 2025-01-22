import { cn } from "@/lib/utils"
import PriceFormat from "./PriceFormat"

interface Props{
    price:number|undefined,
    discount:number|undefined,
    className?:string,

}

const Price = ({price,discount,className}:Props) => {
  return (
    <div className="flex items-center justify-between gap-5 mr-4">
        
        <div className="flex items-center gap-2 text-black">
            <PriceFormat amount={price} className={className} />
            {price && discount && (
                      <PriceFormat amount={price + (discount * price)/ 100} className={cn('text-xs text-gray-600 font-medium line-through',className)}/>
            )}
        </div>
      
    </div>
  )
}

export default Price