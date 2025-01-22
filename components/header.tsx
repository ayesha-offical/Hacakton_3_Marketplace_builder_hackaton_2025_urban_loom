import React from "react";
import Image from "next/image";
import Form from "next/form";
import Container from "./container";
import Link from "next/link";
import Cart from "./cart";
import { ShoppingBasket,  User } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

const Header = async () => {
  const user = await currentUser();


  return (
    <header className="w-full py-4 border-b border-gray-400 sticky top-0 z-50 bg-white ">
      <Container className="flex md:items-center justify-between gap-6 flex-col md:flex-row ">
        <Link href={"/"} className="font-bold text-3xl hover:text-gray-600"> 
     <Image
      src="/Urban Loom.png"
      alt="Urban Loom Logo"
      width={200}
      height={60}
      
     />
        </Link>

        <Form action={"/search"} className="flex-1 ">
          <input
            type="text"
            name="query"
            placeholder="Search for a store "
            className="w-full Font- font-light text-black  border border-gray-400 rounded-full px-4 py-2.5 "
          />
        </Form>

        <div className="flex items-center gap-5">
          <Cart />
          <ClerkLoaded>
         <SignedIn>
         <Link
              href={"/orders"}
              className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect"
            >
              <ShoppingBasket className="text-cyan-950 w-6 h-6 " />
              <div className="flex flex-col ">
                <p className="text-xs">
                  <span className="font-semibold">0 </span>
                  items
                </p>
                <p className="font-semibold">Orders</p>
              </div>
            </Link>
         </SignedIn>
            {user ? (
              <div  className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect">
                <UserButton />
                <div className="hidden md:inline-flex flex-col ">
                  <p className="text-xs">
                  Account Login!
                </p>
                  <p className="font-semibold">{user?.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal">
                <div className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect">
                  <User />
                  <div className="flex flex-col ">
                    <p className="text-xs">Account</p>
                    <p className="font-semibold">Login</p>
                  </div>
                </div>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
