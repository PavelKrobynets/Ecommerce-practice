import SingleItemCard from "./SingleItemCard";
import ProductSkeleton from "./ProductSkeleton";
import { Suspense } from "react";
import { wixClientServer } from "lib/wixClientServer";
import { IProduct } from "../../types/type";

interface IProps {
  title: string;
  category: string;
  limit?: number;
  searchParams?: string;
}

export default async function ProductsList({ title, category, limit }: IProps) {
  const wixClient = await wixClientServer();
  try {
    const { collection } = await wixClient.collections.getCollectionBySlug(
      category
    );
    if (!collection?._id) {
      return null;
    }
    const wixProductsList = await wixClient.products
      .queryProducts()
      .hasSome("collectionIds", [collection._id])
      .descending("lastUpdated")
      .limit(limit ?? 20)
      .find();

    if (!wixProductsList.items.length) {
      return null;
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
