import ProductFilter from "@components/product/ProductFilter";
import ProductImages from "@components/product/ProductImages";
import { wixClientServer } from "lib/wixClientServer";
import { IProduct } from "types/type";

export default async function SinglePage({
  params,
}: {
  params: { item: string };
}) {
  const wixClient = await wixClientServer();
  const response = await wixClient.products.getProduct(params.item);
  const product = response.product as IProduct;

  return (
    <section className="fixed-w relative flex flex-col lg:flex-row gap-16 py-8">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages {...product} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6 px-5">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>
        <hr className="w-[93%]" />
        {product.price.formatted.price ===
        product.price.formatted.discountedPrice ? (
          <div className="flex flex-row items-center gap-4">
            <h3 className="text-gray-800 text-3xl font-semibold">
              {product.price.formatted.price}
            </h3>
          </div>
        ) : (
          <div className="flex flex-row items-center gap-4">
            <h3 className="text-gray-500 line-through text-2xl">
              {product.price.formatted.price}
            </h3>
            <h2 className="text-gray-800  text-3xl font-semibold">
              {product.price.formatted.discountedPrice}
            </h2>
          </div>
        )}
        <hr className="w-[93%]" />
        {product.productOptions && product.variants && (
          <ProductFilter
            productId={product._id}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        )}
        <hr className="w-[93%]" />
        {product.additionalInfoSections.map((item, index) => (
          <div className="flex flex-col gap-4" key={index}>
            <h4 className="text-xl font-semibold uppercase">{item.title}</h4>
            <p className="text-md font-medium ">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
