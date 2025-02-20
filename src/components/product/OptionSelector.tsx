"use client";

import { IProductOptions } from "types/type";

interface OptionSelectorProps {
  option: IProductOptions;
  selectedOptions: { [key: string]: string };
  isInStock: (choices: { [key: string]: string }) => boolean;
  handleOptionSelect: (optionType: string, choice: string) => void;
}

export default function OptionSelector({
  option,
  selectedOptions,
  isInStock,
  handleOptionSelect,
}: OptionSelectorProps) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium text-lg">Choose {option.name}</h4>
      <ul className="flex items-center gap-4">
        {option.choices.map((choice) => {
          const disabled = !isInStock({
            ...selectedOptions,
            [option.name!]: choice.description,
          });
          const selected = selectedOptions[option.name!] === choice.description;
          return option.name === "Color" ? (
            <li
              key={choice.value}
              className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
              style={{
                backgroundColor: choice.value,
                cursor: disabled ? "not-allowed" : "pointer",
              }}
              onClick={() =>
                !disabled
                  ? handleOptionSelect(option.name, choice.description)
                  : null
              }
            >
              {disabled && (
                <div className="absolute w-10 h-[2px] bg-red-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
              )}
              {selected && (
                <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              )}
            </li>
          ) : (
            <li
              key={choice.value}
              onClick={() =>
                !disabled
                  ? handleOptionSelect(option.name, choice.description)
                  : null
              }
              className="ring-1 ring-redish text-white bg-redish rounded-md py-1 px-4 text-md"
              style={{
                cursor: disabled ? "not-allowed" : "pointer",
                backgroundColor: selected
                  ? "#F35B7B"
                  : disabled
                  ? "#f0829ad7"
                  : "white",
                color: disabled || selected ? "white" : "#F35B7B",
              }}
            >
              {choice.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
