import Container from "@/components/container";
import ProductItems from "@/components/ProductItems";
import { getAllCategories, getProductByCategory } from "@/sanity/helpers/main";

interface Props {
  params: Promise<{ slug: string }>;
}

const CategoriesPage = async ({ params }: Props) => {
  const { slug } = await params;
  const categories = await getAllCategories();
  const products = await getProductByCategory(slug);
  console.log(products)

  return (
    <div className="">
      <Container className="p-8 text-2xl bg-white mt-3 mb-3 ">
        <h1 className="font-bold text-2xl md:text-3xl">
         Search result for <span className="text-cyan-800">{slug .split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} Collection</span>
        </h1>

        <ProductItems products={products} categories={categories} />

      </Container>

    </div>

  );
};



export default CategoriesPage;
