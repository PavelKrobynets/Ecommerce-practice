"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  }
  return (
    <form
      className="flex flex-row gap-4 bg-gray-100 px-3 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent border-none outline-none p-2 text-[1.3rem] text-gray-600"
      />
      <button type="submit">
        <Search width={"16px"} />
      </button>
    </form>
  );
}
