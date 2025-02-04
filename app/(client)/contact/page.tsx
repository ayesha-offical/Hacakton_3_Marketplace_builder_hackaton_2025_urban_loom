import { Button } from "@/components/ui/button";
import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-6 my-5  py-12 bg-gray-100  rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
        Have questions or need assistance? Get in touch with us and lets bring your dream space to life.
      </p>

      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Get in Touch</h2>
        <form className="mt-4 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input type="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" rows={4} placeholder="Write your message"></textarea>
          </div>
          <Button className="w-full  text-white py-5 rounded-lg  transition duration-300">
            Send Message
          </Button>
        </form>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Our Contact Details</h2>
        <p className="text-gray-600 mt-3">📍 123 Urban Loom Street, City, Country</p>
        <p className="text-gray-600">📞 +123 456 7890</p>
        <p className="text-gray-600">✉ contact@urbanloom.com</p>
      </div>
    </div>
  );
};

export default Contact;
