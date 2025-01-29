"use client"
import React from 'react'
import {MdFavoriteBorder} from "react-icons/md"
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'


const ProductCartBar = () => {
  const handleAddtoWishList = () => {
    // Add the logic to add the product to the cart
    // You can use the provided product object as a reference
    toast.success("Added In Wish List");
  };
  return (
    <div className='text-gray-500 w-[170%] text-lg flex items-center justify-center gap-2.5
    '>
      
    <Button 
        onClick={handleAddtoWishList}
    
    className={cn('border mb-2 w-6 h-7 shadow-md bg-black  text-white hover:bg-white hover:text-black hoverEffect rounded-full ')}
    aria-label="Add to Wishlist">
<MdFavoriteBorder/>
</Button>




    </div>
  )
}

export default ProductCartBar
