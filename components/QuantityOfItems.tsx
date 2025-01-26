import { Product } from "@/sanity.types";
import { Button } from "./ui/button";
import { HiMinus, HiPlus } from "react-icons/hi2";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import useCartStore from "@/store";

interface Props {
  product: Product;
  className?: string;
  borderStyle?: string;
}

const QuantityOfItems = ({ product}: Props) => {
  const {addItem, removeItem, getItemCount} = useCartStore()
  const handleRemoveItem = () => {
    // implement logic to remove item from the cart
    removeItem (product?._id);
    if (itemsCount > 1){
      toast.success("Quantity Decreased");
    } else {
      toast.success(
        `${product?.name?.substring(0, 12)}....removed successfully`
      )
    }

    // TODO: check if item is out of stock and disable adding more
  };
  const handleAddItem = () => {
    // implement logic to add item to the cart
    addItem (product);
    toast.success("Quantity Increased");
  };
  const itemsCount =getItemCount(product._id);

  return (
    <div className={cn("flex items-center gap-1 pb-1 text-base")}>
      <Button
        variant="outline"
        size="icon"
        className="w-6 h-6"
        onClick={handleRemoveItem}
      >
        <HiMinus />
      </Button>

      <span className="font-semibold w-5 text-center text-slate-800">
        {itemsCount}
      </span>
      <Button
        variant="outline"
        size="icon"
        className="w-6 h-6"
        onClick={handleAddItem}
      >
        <HiPlus />
      </Button>
    </div>
  );
};

export default QuantityOfItems;
