import SingleItemCard from "./SingleItemCard";

interface IProps {
  title: string;
}

export default function ProductsList({ title }: IProps) {
  return (
    <section className="flex flex-col my-16 lg:my-5 fixed-w px-5 gap-7">
      <h4 className="font-medium text-4xl capitalize">{title}</h4>
      <div className="flex flex-row items-center justify-between flex-wrap gap-4">
        <SingleItemCard />
        <SingleItemCard />
        <SingleItemCard />
        <SingleItemCard />
      </div>
    </section>
  );
}
