
import React from "react";
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="border-t py-8">
      <div className="container  mx-auto flex flex-wrap justify-between items-center">
        
        <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">Urban Loom</h3>
          <p className="mt-2 ">
            Elegant furniture, crafted for modern living spaces.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-cyan-900">
                About Urban Loom
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:hover:text-cyan-900">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:hover:text-cyan-900">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="w-full md:w-1/3 text-center md:text-right">
          <p className="text-sm hover:text-cyan-900">© 2025 Urban Loom. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
