export default function ProductSkeleton() {
  return (
    <div className="flex flex-col w-[45%] lg:w-[23%] gap-4 animate-pulse">
      <div className="h-80 w-full bg-gray-200 rounded-md" />
      <div className="flex justify-between">
        <div className="h-6 w-32 bg-gray-200 rounded" />
        <div className="h-6 w-20 bg-gray-200 rounded" />
      </div>
      <div className="h-4 w-full bg-gray-200 rounded" />
      <div className="h-4 w-3/4 bg-gray-200 rounded" />
      <div className="h-10 w-24 mt-3 bg-gray-200 rounded-2xl" />
    </div>
  );
}
