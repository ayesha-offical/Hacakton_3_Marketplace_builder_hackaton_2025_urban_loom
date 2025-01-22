import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='border-t border-gray-400'>
        <footer className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap md:text-left text-center order-first">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
           Services
          </h2>
          <nav className="list-none mb-10">
            <li>
              <Link href={'/'} className="text-gray-600 hover:text-gray-800">First Link</Link>
            </li>
            <li>
              <Link href={'/'}  className="text-gray-600 hover:text-gray-800">Second Link</Link>
            </li>
            <li>
              <Link href={'/'}  className="text-gray-600 hover:text-gray-800">Third Link</Link>
            </li>
            <li>
              <Link href={'/'}  className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
        About Urban Loom
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
           Links
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <Button className="my-4 rounded-full">
            SUBSCRIBE
          </Button>
          <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              <label
                htmlFor="footer-field"
                className="leading-7 text-sm text-gray-600"
              >
                
              </label>
              <input
              placeholder='Enter your email'
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded-full border border-gray-300 font-thin text-base text-gray-700 py-1 px-3 leading-8 "
              />
            </div>
            <Button className="p-5 w-28 rounded-full mt-4">
              Submit
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
          Get the updates of Urban Loom 

            <br className="lg:block hidden" />
             on new products and upcoming sales.
          </p>
        </div>
        
      </div>
    </div>
    <div className='flex items-center justify-center border-t border-gray-400 py-9'>     
            <Link href={"/"}>
          <Image
              src="/Urban Loom.png"
              alt="Urban Loom Logo"
              width={200}
              height={60}
                loading="lazy"
             />
        </Link></div>
 
  </footer>
  </div>
  )
}

export default Footer