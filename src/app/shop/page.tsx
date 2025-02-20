import Banner from "@components/shop/Banner";
import ProductsList from "@components/globals/ProductsList";
import Filter from "@components/shop/Filter";
import { wixClientServer } from "lib/wixClientServer";
import { Suspense } from "react";
import { TCat } from "types/type";

export default async function Shop({
  searchParams,
}: {
  searchParams: Promise<{ cat?: TCat }>;
}) {
  const wixClient = await wixClientServer();
  const category = (await searchParams) || "all-products";
  const response = await wixClient.collections.getCollectionBySlug(
    category.cat!
  );
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
          searchParams={(await searchParams).cat}
        />
      </Suspense>
    </div>
  );
}
