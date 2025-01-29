"use client";
import { CircleUserRound, Bell, ShoppingCart } from "lucide-react";
export default function NavIcons() {
  return (
    <div className="flex flex-row items-center gap-4 xl:gap-6">
      <CircleUserRound strokeWidth={1.2} />
      <Bell strokeWidth={1.2} />
      <ShoppingCart strokeWidth={1.2} />
    </div>
  );
}
