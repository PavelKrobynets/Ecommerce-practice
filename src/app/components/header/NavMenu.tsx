"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function NavMenu() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <Menu
        className="cursor-pointer"
        onClick={() => setOpen((open) => !open)}
      />
      {open && (
        <nav
          className={`absolute -top-3.5 pt-[10vh] left-0 w-full  transition-all duration-700 ease-in-out ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <Link href="#">Shop</Link>
          <Link href="#">Deals</Link>
          <Link href="#">About</Link>
          <Link href="#">Contacts</Link>
          <Link href="#">Logout</Link>
          <Link href="#">Cart(1)</Link>
        </nav>
      )}
    </div>
  );
}
