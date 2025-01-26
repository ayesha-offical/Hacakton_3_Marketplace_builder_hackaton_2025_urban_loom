import Container from "@/components/container";
import DiscountBanner from "@/components/DiscountBanner";
import ProductItems from "@/components/ProductItems";
import {
  getAllCategories,
  getAllproducts,
  getSale,
} from "@/sanity/helpers/main";

export default async function Home() {
  const sales = await getSale();
  const products = await getAllproducts();
  const categories = await getAllCategories();

  return (
    <div>
      <Container>
        {sales ? (
          <DiscountBanner sales={sales} />
        ) : (
          <div> No sales data available due to network issue </div>
        )}
        <ProductItems
          products={products}
          title={true}
          categories={categories}
        />
      </Container>
    </div>
  );
}
