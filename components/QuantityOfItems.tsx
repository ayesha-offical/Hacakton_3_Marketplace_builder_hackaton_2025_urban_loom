import { Product } from "@/sanity.types";
import { Button } from "./ui/button";
import {HiMinus, HiPlus} from "react-icons/hi2";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  className?: string;
  borderStyle?: string;
}

const QuantityOfItems = ({product,className,borderStyle}:Props) => {
    const handleRemoveItem = () => {
        // implement logic to remove item from the cart
        toast.success("Item removed")
    };
    const handleAddItem = () => {
        // implement logic to add item to the cart
        toast.success("Item added")
    };
    const itemCount=5;
  return (
    <div className={cn('flex items-center gap-1 pb-1 text-base')}>
        <Button variant="outline" size="icon" className="w-6 h-6"onClick={handleRemoveItem}>
            <HiMinus/>
        </Button>

    <span className="font-semibold w-5 text-center text-slate-800">{itemCount}</span>
    <Button variant="outline" size="icon" className="w-6 h-6"onClick={handleAddItem}>
            <HiPlus/>
        </Button>
    </div>
  )
}

export default QuantityOfItems 