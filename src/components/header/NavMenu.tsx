"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function NavMenu() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <Menu
        className={`cursor-pointer transition-transform duration-300 ease-in-out ${
          open ? "rotate-90" : ""
        }`}
        onClick={() => setOpen((open) => !open)}
      />
      <nav
        className={`absolute pt-[10vh] bg-black text-white left-0 top-20 h-[calc(100vh-80px)] w-full flex flex-col items-center text-4xl gap-6 transition-all duration-700 ease-in-out ${
          open ? "opacity-100 translate-z-0" : "opacity-0 -translate-z-4"
        }`}
      >
        <Link href="#">Shop</Link>
        <Link href="#">Deals</Link>
        <Link href="#">About</Link>
        <Link href="#">Contacts</Link>
        <Link href="#">Logout</Link>
        <Link href="#">Cart(1)</Link>
      </nav>
    </div>
  );
}
