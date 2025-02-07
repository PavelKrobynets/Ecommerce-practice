import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-[#e4d5c781] py-20 px-5 fixed-w">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex flex-col items-center w-full lg:w-1/4 gap-4">
          <Link href="#" className="flex flex-row gap-1 items-center">
            <p className="text-4xl font-medium uppercase tracking-wider">
              seller
            </p>
          </Link>
          <p className="text-lg">
            161 S 2nd Rd, Hammonton, NJ 08037, United States
          </p>
          <p className="text-lg font-bold cursor-pointer">somemail@gmai.com</p>
          <p className="text-lg font-bold cursor-pointer">+1 234 567 890</p>
          <ul className="flex flex-row gap-4 items-center">
            <li className="cursor-pointer">
              <Facebook size={20} />
            </li>
            <li className="cursor-pointer">
              <Instagram size={20} />
            </li>
            <li className="cursor-pointer">
              <Youtube size={20} />
            </li>
            <li className="cursor-pointer">
              <Linkedin size={20} />
            </li>
            <li className="cursor-pointer">
              <Image src={"/x.png"} alt="x-logo" width={20} height={20} />
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex lg:flex-row lg:w-1/2"></div>
        <div className="flex flex-col items-center gap-4 w-full lg:w-1/4">
          <p className="text-3xl font-semibold uppercase">subscribe</p>
          <p className="text-lg">
            Get out latest news about trends, promotions and much more
          </p>
          <form action="" className="flex flex-row gap-0">
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-2 focus:outline-none"
            />
            <button className="bg-redish px-4 text-white p-2 hover:bg-redish_active transition duration-300 ease-in-out text-lg font-semibold">
              Join
            </button>
          </form>
          <p className="font-bold text-2xl">Secure payments</p>
          <ul className="flex flex-row gap-2">
            <li>
              <Image
                src={"/paypal.png"}
                alt="payment-icon"
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src={"/mastercard.png"}
                alt="payment-icon"
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src={"/visa.png"}
                alt="payment-icon"
                width={50}
                height={50}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-between pt-10">
        <p className="font-semibold">@ 2025 Seller Shop</p>
        <div className="flex flex-row gap-5">
          <dl className="flex flex-row gap-2">
            <dt className="font-medium text-gray-500 text-lg">Language</dt>
            <dd className="font-semibold text-gray-900 text-lg">English</dd>
          </dl>
          <dl className="flex flex-row gap-2">
            <dt className="font-medium text-gray-500 text-lg">Currency</dt>
            <dd className="font-semibold text-gray-900 text-lg">$ USD</dd>
          </dl>
        </div>
      </div>
    </footer>
  );
}
