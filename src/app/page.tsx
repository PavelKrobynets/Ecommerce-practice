import { Slider, ProductList, Categories } from "./components/main/index";
export default function Home() {
  return (
    <div className="">
      <Slider />
      <ProductList title="Featured products" />
      <Categories />
      <ProductList title="New products" />
    </div>
  );
}
