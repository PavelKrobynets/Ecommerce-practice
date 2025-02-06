import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-[#e4d5c781] py-20 px-5 fixed-w">
      <div className="grid-flow-row grid">
        <div className="flex flex-col w-1/4 gap-4">
          <Link href="#" className="flex flex-row gap-1 items-center">
            <p className="text-4xl font-medium uppercase ">seller</p>
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
        <div className="flex flex-row w-1/2"></div>
        <div className="flex flex-col w-1/4"></div>
      </div>
      <div className="flex flex-row"></div>
    </footer>
  );
}
