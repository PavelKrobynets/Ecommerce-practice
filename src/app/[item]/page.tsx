import ProductFilter from "@components/product/ProductFilter";
import ProductImages from "@components/product/ProductImages";

export default function SinglePage() {
  return (
    <section className="fixed-w relative flex flex-col lg:flex-row gap-16 py-8">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6 px-5">
        <h1 className="text-4xl font-medium">Product name</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut a nostrum
          deleniti incidunt ea at. Molestiae unde tempora inventore ut. Quam
          aliquid voluptatem autem mollitia corrupti possimus totam distinctio
          eum.
        </p>
        <hr className="w-[93%]" />
        <div className="flex flex-row items-center gap-4">
          <h3 className="text-gray-500 line-through text-2xl">59$</h3>
          <h2 className="text-gray-800  text-3xl font-semibold">39$</h2>
        </div>
        <hr className="w-[93%]" />
        <ProductFilter />
        <hr className="w-[93%]" />
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-semibold uppercase">Product info</h4>
          <p className="text-md font-medium ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit blanditiis ea quasi repellendus nemo exercitationem
            repellat sint corrupti, tempore dolores id nulla in aliquam deserunt
            nobis vel maxime nostrum dolorem.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-semibold uppercase">
            return and refund policy
          </h4>
          <p className="text-md font-medium ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit blanditiis ea quasi repellendus nemo exercitationem
            repellat sint corrupti, tempore dolores id nulla in aliquam deserunt
            nobis vel maxime nostrum dolorem.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-semibold uppercase">Shipping info</h4>
          <p className="text-md font-medium ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit blanditiis ea quasi repellendus nemo exercitationem
            repellat sint corrupti, tempore dolores id nulla in aliquam deserunt
            nobis vel maxime nostrum dolorem.
          </p>
        </div>
      </div>
    </section>
  );
}
