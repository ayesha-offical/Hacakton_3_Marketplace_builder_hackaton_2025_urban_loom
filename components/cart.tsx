"use client"
import React, { useEffect, useState } from 'react'
import { ShoppingCart} from 'lucide-react';
import Link from 'next/link';
const Cart = () => {
  const [isClient , setIsClient] = useState(false)
  useEffect(() =>{
    setIsClient(true)
  })
  if (!isClient) 
    return null;
  return (
    <Link href={"/cart"} className='flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none'>
        <ShoppingCart className='text-cyan-950 w-6 h-6 hoverEffect'/>
        <div className='flex flex-col '>
            <p className='text-xs'><span className='font-semibold'>0 </span>
            items</p>
           <p className='font-semibold'>Cart</p>
        </div>
    </Link>
  )
}

export default Cart