import Banner from "@components/shop/Banner";
import Filter from "@components/shop/Filter";
import ProductsList from "@components/globals/ProductsList";
export default function Shop() {
  return (
    <div className="">
      <Banner />
      <Filter />
      <ProductsList title="Items for you" />
    </div>
  );
}
