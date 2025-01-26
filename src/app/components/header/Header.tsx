import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import NavMenu from "./NavMenu";
export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/*Mobile*/}
      <Link href="#" className="flex flex-row gap-1 items-center">
        <ShoppingBasket color="#b9284a" />
        <p className="text-3xl uppercase ">shop</p>
      </Link>
      <NavMenu />
      {/*Desktop*/}
    </header>
  );
}
