import React from 'react'

import Image from 'next/image'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { SignInButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const NoAccessToCart = () => {
  return (
    <div className='flex items-center justify-center py-12 md:py-32 bg-gray-100 p-4 '>

     <Card className='w-full max-w-md'>   
      <CardHeader className='space-y-1'> 
        <div className="flex justify-center"> 
        <Link href={"/"} className="font-bold text-3xl hover:text-gray-600"> 
          <Image
            src="/Urban Loom.png"
            alt="Urban Loom Logo"
            width={200}
            height={60}
            className='rounded-md mb-4'
          />
        </Link>
        </div>
        <CardTitle className='text-2xl font-bold text-center'>
          Welcome Back!
        </CardTitle>
     
        </CardHeader>

        <CardContent className='space-y-4 '>
          <p className='text-muted-foreground text-center'>Log in to view your Cart items. Don&apos;t miss out on your favourite products</p>
          <SignInButton mode="modal">
            <Button className='w-full' size="lg">
                Sign In
            </Button>
          </SignInButton>
        </CardContent>
    
      </Card>
     
    </div>
      
   
  )
}

export default NoAccessToCart