import SingleItemCard from "./SingleItemCard";
export default function Featured() {
  return (
    <div className="flex flex-col my-16 fixed-w px-5">
      <h4 className="font-medium text-3xl capitalize">Featured products</h4>
      <div className="flex flex-row items-center justify-between gap-10">
        <SingleItemCard />
        <SingleItemCard />
        <SingleItemCard />
        <SingleItemCard />
      </div>
    </div>
  );
}
