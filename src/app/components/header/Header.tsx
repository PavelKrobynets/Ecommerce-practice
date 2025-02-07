import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
export default function Header() {
  return (
    <header className="flex items-center fixed-2 h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/*Mobile*/}
      <div className="md:hidden flex flex-row justify-between w-full items-center">
        <Link href="/" className="flex flex-row gap-1 items-center">
          <ShoppingBasket color="#b9284a" />
          <p className="text-3xl uppercase tracking-wider">seller</p>
        </Link>
        <NavMenu />
      </div>
      {/*Desktop*/}
      <div className="hidden md:flex flex-row items-center w-full h-full justify-between gap-8">
        <div className="w-1/3 xl:1/2 xl:flex xl:flex-row items-center gap-12">
          <Link href="#" className="flex flex-row gap-1 items-center">
            <ShoppingBasket color="#b9284a" />
            <p className="text-4xl font-medium uppercase tracking-wider">
              seller
            </p>
          </Link>
          <div className="hidden xl:flex gap-4 text-2xl uppercase text-gray-600 ">
            <Link
              href="#"
              className="hover:text-gray-800 hover:font-medium transition"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="hover:text-gray-800 hover:font-medium transition"
            >
              Details
            </Link>
            <Link
              href="#"
              className="hover:text-gray-800 hover:font-medium transition"
            >
              About
            </Link>
            <Link
              href="#"
              className="hover:text-gray-800 hover:font-medium transition"
            >
              Contacts
            </Link>
          </div>
        </div>
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </header>
  );
}
