import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
const EmptyCart = () => {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col gap-2'>
        <Image
        src={'/emptycart.png'}
        alt={'Empty Cart'}
        width={500}
        height={500}
     
        />
        <h1 className='text-2xl font-semibold'>Your Cart is Empty</h1>
        <p className='text-gray-500 mb-2'>Looks like you haven&apos;t added any items to your cart yet.</p>
        <Link href={"./"}>
        <Button>Go to Shopping</Button>
        </Link>
    </div>
  )
}

export default EmptyCart