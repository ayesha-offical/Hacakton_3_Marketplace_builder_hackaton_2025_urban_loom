import { Button } from "@/components/ui/button";
import { getAllCategories, searchProductsByName } from "@/sanity/helpers/main";
import Link from "next/link";
import Container from "@/components/container";
import { BiSolidError } from "react-icons/bi";
import ProductGrid from "@/components/ProductGrid";


interface Props {
  searchParams: {
    query: string;
  };
}

const SearchPage = async ({ searchParams }: Props) => {
  const  {query} = await  searchParams
  const products = await searchProductsByName (query);

 const categories = await getAllCategories()
  if (!products?.length) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 flex-col gap-2 font-medium text-2xl">
        <span>
          <BiSolidError className="w-14 h-14 text-red-600" />
        </span>
        <h1>
          No results found for <span className="text-red-500">"{query}"</span>!
        </h1>

        <p>Please try a different search term.</p>
        <Link href="/">
          <Button> Go back to the homepage</Button>
        </Link>
      </div>
    );
  }
  // Fetch products using the search query

  // Render the search results or display a message if no products found
  return (
    <div>
      <Container>
        <h1 className="text-xl font-semibold mb-20">
          Search results for {""}

          <span className="text-red-500 text-xl">"{query}"</span> :
        </h1>

        <ProductGrid products={products} />
      </Container>
    </div>

);

};

export default SearchPage;
