"use client";

interface AddToCartButtonProps {
  productId: string;
  variantId: string;
  quantity: number;
  onClick: () => void;
}

export default function AddToCartButton({
  productId,
  variantId,
  quantity,
  onClick,
}: AddToCartButtonProps) {
  console.log(productId);
  console.log(variantId);
  console.log(quantity);
  return (
    <button
      className="text-lg font-medium py-2 w-36 border border-redish text-redish rounded-full hover:bg-redish hover:text-white disabled:cursor-not-allowed disabled:bg-redish_d disabled:text-white disabled:border-redish_d"
      disabled={quantity > 0 ? false : true}
      onClick={() => onClick}
    >
      Add to Cart
    </button>
  );
}
