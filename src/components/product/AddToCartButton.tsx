"use client";

interface AddToCartButtonProps {
  disabled?: boolean;
  onClick: () => void;
}

export default function AddToCartButton({
  disabled,
  onClick,
}: AddToCartButtonProps) {
  return (
    <button
      className="text-lg font-medium py-2 w-36 border border-redish text-redish rounded-full hover:bg-redish hover:text-white disabled:cursor-not-allowed disabled:bg-redish_d disabled:text-white disabled:border-redish_d"
      disabled={disabled}
      onClick={() => onClick}
    >
      Add to Cart
    </button>
  );
}
