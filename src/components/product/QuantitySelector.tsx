"use client";

interface QuantitySelectorProps {
  amount: number;
  setAmount: (amount: number) => void;
  stockQuantity?: number;
}

export default function QuantitySelector({
  amount,
  setAmount,
  stockQuantity,
}: QuantitySelectorProps) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row gap-4">
        <div className="flex flex-row items-center justify-between w-28 px-4 py-2 bg-gray-100 rounded-full text-2xl">
          <button
            className="text-1xl font-semibold"
            onClick={() => setAmount(amount > 0 ? amount - 1 : 0)}
          >
            -
          </button>
          {amount}
          <button
            className="text-1xl font-semibold"
            onClick={() => {
              if (stockQuantity) {
                setAmount(amount < stockQuantity ? amount + 1 : amount);
              }
            }}
          >
            +
          </button>
        </div>
        <div className="text-lg font-medium leading-6">
          Only{" "}
          <span className="text-yellow-500">
            {stockQuantity ?? "few"} items
          </span>{" "}
          left <br />
          {"Don't"} miss it
        </div>
      </div>
    </div>
  );
}
