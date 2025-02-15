import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" bg-[#e4d5c781]">
      <div className="flex flex-col py-20 px-5 fixed-w">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/4 gap-9">
            <Link href="#" className="flex flex-row gap-1 items-center">
              <p className="text-4xl font-medium uppercase tracking-wider">
                seller
              </p>
            </Link>
            <p className="text-lg">
              161 S 2nd Rd, Hammonton, NJ 08037, United States
            </p>
            <p className="text-lg font-bold cursor-pointer">
              somemail@gmai.com
            </p>
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
          <div className="hidden lg:flex lg:flex-row lg:w-1/2 lg:justify-between px-8">
            <div className="flex flex-col justify-between gap-10">
              <p className="text-3xl font-semibold uppercase ">company</p>
              <ul className="flex flex-col gap-3">
                <li className="text-2xl font-normal hover:font-semibold cursor-pointer capitalize">
                  about us
                </li>
                <li className="text-2xl font-normal hover:font-semibold cursor-pointer capitalize">
                  careers
                </li>
                <li className="text-2xl font-normal hover:font-semibold cursor-pointer capitalize">
                  branches
                </li>
                <li className="text-2xl font-normal hover:font-semibold cursor-pointer capitalize">
                  blog
                </li>
                <li className="text-2xl font-normal hover:font-semibold cursor-pointer capitalize">
                  contact us
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between gap-10">
              <p className="text-3xl font-semibold uppercase ">shop</p>
              <ul className="flex flex-col gap-3">
                <li className="text-2xl font-normal hover:font-semibold cursor-pointer capitalize">
                  new arrivals
                </li>
                <li className="text-2xl font-normal hover:font-semibold cursor-pointer capitalize">
                  accessories
                </li>
                <li className="text-2xl font-normal hover:font-semibold cursor-pointer capitalize">
                  man
                </li>
                <li className="text-2xl font-normal hover:font-semibold cursor-pointer capitalize">
                  woman
                </li>
                <li className="text-2xl font-normal hover:font-semibold cursor-pointer capitalize">
                  all products
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between gap-10">
              <p className="text-3xl font-semibold uppercase ">help</p>
              <ul className="flex flex-col gap-3">
                <li className="text-2xl font-normal hover:font-semibold cursor-pointer capitalize">
                  customer service
                </li>
                <li className="text-2xl font-normal hover:font-semibold cursor-pointer capitalize">
                  my account
                </li>
                <li className="text-2xl font-normal hover:font-semibold cursor-pointer capitalize">
                  find store
                </li>
                <li className="text-2xl font-normal hover:font-semibold cursor-pointer capitalize">
                  privacy policy
                </li>
                <li className="text-2xl font-normal hover:font-semibold cursor-pointer capitalize">
                  gitft card
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-1/4">
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
                  style={{ objectFit: "contain" }}
                />
              </li>
              <li>
                <Image
                  src={"/visa.png"}
                  alt="payment-icon"
                  width={50}
                  height={50}
                  style={{ objectFit: "contain" }}
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
      </div>
    </footer>
  );
}
