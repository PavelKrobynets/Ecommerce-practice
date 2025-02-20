"use client";

import { useState, useEffect } from "react";
import { IProductOptions, IVariant } from "types/type";
import OptionSelector from "./OptionSelector";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCartButton";

export default function ProductFilter({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: IVariant[];
  productOptions: IProductOptions[];
}) {
  const [amount, setAmount] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const [selectedVariant, setSelectedVariant] = useState<IVariant>();

  useEffect(() => {
    const variant = variants.find((v) => {
      const variantChoices = v.choices;
      if (!variantChoices) {
        return false;
      }
      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value
      );
    });
    setSelectedVariant(variant);
  }, [selectedOptions, variants]);

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionType]: choice,
    }));
  };

  const isInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock.inStock &&
        variant.stock.quantity > 0
      );
    });
  };
  console.log(variants);

  return (
    <div className="flex flex-col gap-4">
      {productOptions.map((option) => (
        <OptionSelector
          key={option.name}
          option={option}
          selectedOptions={selectedOptions}
          isInStock={isInStock}
          handleOptionSelect={handleOptionSelect}
        />
      ))}
      <h4 className="font-medium text-lg">Choose amount</h4>
      <div className="flex flex-row items-center justify-between">
        <QuantitySelector
          amount={amount}
          setAmount={setAmount}
          stockQuantity={selectedVariant?.stock.quantity}
        />
        <AddToCartButton
          productId={productId}
          variantId={
            selectedVariant?._id || "00000000-0000-0000-0000-000000000000"
          }
          quantity={amount || 0}
          onClick={() => console.log("Add to cart clicked")}
        />
      </div>
    </div>
  );
}
