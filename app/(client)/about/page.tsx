import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12 my-5 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
        About Urban Loom
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
        Welcome to <strong className="text-gray-900">Urban Loom</strong>, your
        go-to destination for stylish and high-quality furniture. We believe
        that furniture is more than just decor; its an expression of
        personality, comfort, and functionality. Our mission is to bring modern,
        durable, and elegant furniture pieces that fit seamlessly into your
        living and workspace.
      </p>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
            Our Vision
          </h2>
          <p className="text-gray-600 mt-3">
            At Urban Loom, we strive to redefine the way people experience
            furniture by offering a perfect blend of aesthetics, quality, and
            affordability. We are committed to making stylish furniture
            accessible to everyone, ensuring that each piece adds value to your
            space.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
            Why Choose Us?
          </h2>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              <strong> Quality Craftsmanship:</strong> Every piece is crafted
              with attention to detail and premium materials.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              <strong> Modern Designs:</strong> Our collection is curated to
              keep up with contemporary trends while maintaining timeless
              appeal.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              <strong> Customization:</strong> We provide furniture options that
              cater to different tastes and needs.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              <strong> Seamless Experience:</strong> With our user-friendly
              website, exploring and selecting furniture has never been easier.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
            Our Technology
          </h2>
          <p className="text-gray-600 mt-3">
            Urban Loom is built using{" "}
            <strong className="text-gray-900">Next.js 15</strong> with{" "}
            <strong className="text-gray-900">TypeScript</strong>, ensuring a
            smooth and efficient browsing experience. We utilize{" "}
            <strong className="text-gray-900">Sanity</strong> for managing our
            product data, allowing us to update and showcase our latest
            collections effortlessly.
          </p>
        </section>
      </div>

      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">
          Join the Urban Loom Experience
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          We invite you to explore our carefully designed furniture collections
          and transform your space with elegance and comfort. Whether youre
          looking for minimalist, contemporary, or classic designs, Urban Loom
          has something for everyone.
        </p>
        <p className="mt-6 text-xl font-bold text-gray-800">
          Discover the art of fine furniture with Urban Loom!
        </p>
      </div>
    </div>
  );
};

export default About;
