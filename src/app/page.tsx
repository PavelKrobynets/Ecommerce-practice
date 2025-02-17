import { Slider, ProductList, Categories } from "../components/main/index";
export default function Home() {
  return (
    <div className="">
      <Slider />
      <ProductList
        title="Featured products"
        category="featured-products"
        limit={4}
      />
      <Categories />
      <ProductList title="New products" category="new-products" limit={4} />
    </div>
  );
}
