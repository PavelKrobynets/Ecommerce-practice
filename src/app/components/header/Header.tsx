import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
export default function Header() {
  return (
    <header className="flex items-center h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/*Mobile*/}
      <div className="md:hidden flex flex-row justify-between w-full items-center">
        <Link href="#" className="flex flex-row gap-1 items-center">
          <ShoppingBasket color="#b9284a" />
          <p className="text-3xl uppercase ">shop</p>
        </Link>
        <NavMenu />
      </div>
      {/*Desktop*/}
      <div className="hidden md:flex flex-row items-center w-full h-full justify-between gap-8">
        <div className="w-1/3">
          <Link href="#" className="flex flex-row gap-1 items-center">
            <ShoppingBasket color="#b9284a" />
            <p className="text-3xl uppercase ">shop</p>
          </Link>
        </div>
        <div className="w-2/3 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </header>
  );
}
