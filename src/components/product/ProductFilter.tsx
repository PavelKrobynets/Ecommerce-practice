"use client";

import { useState } from "react";

export default function ProductFilter() {
  const [amount, setAmount] = useState(0);
  // placeholder
  const stock = 4;
  return (
    <div className="flex flex-col gap-4 ">
      <h4 className="font-medium text-lg">Choose color</h4>
      <ul className="flex items-center gap-4">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-green-500"></li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-blue-500">
          <div className="absolute w-10 h-[2px] bg-red-400  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
        </li>
      </ul>
      <h4 className="font-medium text-lg">Choose size</h4>
      <ul className="flex items-center gap-4 font-semibold ">
        <li className="ring-1 ring-redish text-redish rounded-md py-1 px-4 text-md cursor-pointer">
          Small
        </li>
        <li className="ring-1 ring-redish text-white bg-redish rounded-md py-1 px-4 text-md cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-redish_d text-white bg-redish_d rounded-md py-1 px-4 text-md cursor-not-allowed">
          Large
        </li>
      </ul>
      <h4 className="font-medium text-lg">Choose amount</h4>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-4">
          <div className="flex flex-row items-center justify-between w-28 px-4 py-2 bg-gray-100 rounded-full text-2xl">
            <button
              className="text-1xl font-semibold"
              onClick={() =>
                setAmount((amount) => (amount > 0 ? amount - 1 : 0))
              }
            >
              -
            </button>
            {amount}
            <button
              className="text-1xl font-semibold"
              onClick={() =>
                setAmount((amount) => (amount < stock ? amount + 1 : stock))
              }
            >
              +
            </button>
          </div>
          <div className="text-lg font-medium leading-6">
            Only <span className="text-yellow-500">4 items</span> left <br />
            {"Don't"} miss it
          </div>
        </div>
        <button className="text-lg font-medium py-2 w-36 border border-redish text-redish rounded-full hover:bg-redish hover:text-white disabled:cursor-not-allowed disabled:bg-redish_d disabled:text-white disabled:border-redish_d">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
