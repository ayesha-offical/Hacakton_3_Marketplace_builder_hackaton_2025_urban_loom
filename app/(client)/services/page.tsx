import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto my-5 px-6 py-12 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">Our Services</h1>
      <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
        At <strong className="text-gray-900">Urban Loom</strong>, we offer a range of services to ensure you get the best furniture solutions tailored to your needs. 
        From custom furniture design to professional consultation, we are dedicated to making your space elegant and functional.
      </p>

      <div className="mt-10 space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Custom Furniture Design</h2>
          <p className="text-gray-600 mt-3">
            We provide personalized furniture solutions that match your unique style and space requirements. Our team works closely with you to bring your vision to life.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Interior Consultation</h2>
          <p className="text-gray-600 mt-3">
            Need help designing your space? Our experts provide professional advice to optimize your home or office with the perfect furniture selections.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Fast & Reliable Delivery</h2>
          <p className="text-gray-600 mt-3">
            Enjoy hassle-free furniture delivery with our efficient logistics network. We ensure your items reach you safely and on time.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">After-Sales Support</h2>
          <p className="text-gray-600 mt-3">
            Our relationship doesnt end with a sale. We offer ongoing support, maintenance tips, and assistance to keep your furniture in top condition.
          </p>
        </section>
      </div>

      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">Experience Excellence with Urban Loom</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore our services and let us help you create the perfect living or working environment with high-quality, stylish, and functional furniture.
        </p>
        <p className="mt-6 text-xl font-bold text-gray-800">Your space, your style - perfected by Urban Loom.</p>
      </div>
    </div>
  );
};

export default Services;
