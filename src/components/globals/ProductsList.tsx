"use client";
import { useState, useEffect } from "react";
import getWixClient from "lib/wix-client.base";
import SingleItemCard from "./SingleItemCard";
import { Suspense } from "react";
import { IProduct } from "../../types/type";

interface IProps {
  title: string;
  category: string;
}

export default function ProductsList({ title, category }: IProps) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const wixClient = getWixClient();
        const { collection } = await wixClient.collections.getCollectionBySlug(
          category
        );

        if (!collection?._id) {
          return null;
        }
        const productsList = await wixClient.products
          .queryProducts()
          .hasSome("collectionIds", [collection._id])
          .descending("lastUpdated")
          .find();

        if (!productsList.items.length) {
          return null;
        }

        setProducts(productsList.items as IProduct[]);
      } catch (err) {
        setError("Failed to fetch products");
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="flex flex-col my-16 lg:my-5 fixed-w px-5 gap-7">
      <h4 className="font-medium text-4xl capitalize">{title}</h4>
      <div className="flex flex-row items-center justify-between flex-wrap gap-4">
        <Suspense fallback={"Loading..."}>
          {products.map((product) => (
            <SingleItemCard key={product._id} {...product} />
          ))}
        </Suspense>
      </div>
    </section>
  );
}
