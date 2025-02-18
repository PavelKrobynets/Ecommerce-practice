import Banner from "@components/shop/Banner";
import Filter from "@components/shop/Filter";
import ProductsList from "@components/globals/ProductsList";
import { wixClientServer } from "lib/wixClientServer";
import { ISearchParams } from "types/type";
import { Suspense } from "react";

export default async function Shop({
  searchParams,
}: {
  searchParams: ISearchParams;
}) {
  const wixClient = await wixClientServer();
  const category = searchParams?.cat || "all-products";
  const response = await wixClient.collections.getCollectionBySlug(category);
  if (!response.collection) {
    return null;
  }
  const collection = response.collection;
  return (
    <div className="flex flex-col gap-8">
      <Banner />
      <Filter />
      <Suspense fallback={"Loading..."}>
        <ProductsList
          title={collection.name || "All products"}
          category={collection.slug || "all-products"}
        />
      </Suspense>
    </div>
  );
}
