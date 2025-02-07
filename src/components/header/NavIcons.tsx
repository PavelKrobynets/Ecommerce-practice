"use client";
import { CircleUserRound, Bell, ShoppingCart } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import CartModal from "./CartModal";

export default function NavIcons() {
  const [profileOpened, setProfileOpened] = useState<boolean>(false);
  const [cartOpened, setCartOpened] = useState<boolean>(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  const handleProfileClick = () => {
    if (cartOpened) {
      setCartOpened(false);
    }
    setProfileOpened(!profileOpened);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpened(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setCartOpened(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex flex-row items-center gap-4 xl:gap-6">
      <div className="relative" ref={profileRef}>
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
      </div>
      <Bell strokeWidth={1.2} className="cursor-pointer" />
      <div ref={cartRef} className="flex items-center gap-4 xl:gap-6 relative">
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
        {cartOpened && <CartModal />}
      </div>
    </div>
  );
}
