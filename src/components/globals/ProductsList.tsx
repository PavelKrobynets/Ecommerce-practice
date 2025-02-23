import SingleItemCard from "./SingleItemCard";
import ProductSkeleton from "./ProductSkeleton";
import { Suspense } from "react";
import { wixClientServer } from "lib/wixClientServer";
import { IProduct } from "../../types/type";

interface IProps {
  title: string;
  category?: string;
  limit?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchParams?: any;
}

export default async function ProductsList({
  title,
  category,
  limit,
  searchParams,
}: IProps) {
  const wixClient = await wixClientServer();
  try {
    let wixProductsList;
    if (category) {
      const { collection } = await wixClient.collections.getCollectionBySlug(
        category
      );
      wixProductsList = await wixClient.products
        .queryProducts()
        .hasSome("collectionIds", [collection?._id])
        .descending("lastUpdated")
        .limit(limit ?? 20)
        .find();
    } else {
      wixProductsList = await wixClient.products
        .queryProducts()
        .startsWith("name", searchParams.name || "")
        .descending("lastUpdated")
        .limit(limit ?? 20)
        .find();
      console.log(wixProductsList.items);
      console.log(searchParams);
    }

    if (!wixProductsList.items.length) {
      return <>Failed to fetch products</>;
    }

    const products = (await wixProductsList.items) as IProduct[];
    return (
      <section className="flex flex-col my-16 lg:my-5 fixed-w px-5 gap-7">
        <h4 className="font-medium text-4xl capitalize">{title}</h4>
        <div className="flex flex-row items-center justify-between flex-wrap gap-4">
          <Suspense
            fallback={
              <div className="flex flex-row items-center justify-between flex-wrap gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <ProductSkeleton key={i} />
                ))}
              </div>
            }
          >
            {products.map((product) => (
              <SingleItemCard key={product._id} {...product} />
            ))}
          </Suspense>
        </div>
      </section>
    );
  } catch (e) {
    console.error(e);
    return <div>Failed fetching products</div>;
  }
}
