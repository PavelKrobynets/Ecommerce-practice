"use client";
import { CircleUserRound, Bell, ShoppingCart } from "lucide-react";
import { useState } from "react";
import CartModal from "./CartModal";

export default function NavIcons() {
  const [profileOpened, setProfileOpened] = useState<boolean>(false);
  const [cartOpened, setCartOpened] = useState<boolean>(false);

  const handleProfileClick = () => {
    if (cartOpened) {
      setCartOpened(false);
    }
    setProfileOpened(!profileOpened);
  };

  return (
    <div className="flex flex-row items-center gap-4 xl:gap-6 relative">
      <CircleUserRound
        strokeWidth={1.2}
        onClick={() => handleProfileClick()}
        className="cursor-pointer"
      />
      {profileOpened && (
        <div
          className="absolute  top-10 right-20 bg-white  p-4 rounded-md shadow
						w-24 z-10"
        >
          <p className="text-gray-600 text-lg hover:text-black cursor-pointer">
            Profile
          </p>
          <p className="text-gray-600 text-lg hover:text-black cursor-pointer">
            Logout
          </p>
        </div>
      )}
      <Bell strokeWidth={1.2} className="cursor-pointer" />
      <div className="flex items-center gap-4 xl:gap-6 relative">
        <ShoppingCart
          strokeWidth={1.2}
          className="cursor-pointer"
          onClick={() =>
            setCartOpened((cartOpened) => {
              if (profileOpened) {
                setProfileOpened(false);
              }
              return !cartOpened;
            })
          }
        />
        <div className="absolute -top-3 -right-3 bg-redish text-white w-5 h-5 rounded-full flex items-center justify-center font-bold">
          2
        </div>
      </div>
      {cartOpened && <CartModal />}
    </div>
  );
}
