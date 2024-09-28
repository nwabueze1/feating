import { SelectionProps } from "../../../../blocks/EuBlock18/types";

export const handlePriceAddition = (price: number, selectionOption: { price: number }[]) => {
  return (
    price +
    selectionOption?.reduce((a, b) => {
      return Number(a) + Number(b?.price);
    }, 0)
  );
};

export const parseOptionString = (options: SelectionProps[]) => {
  const parsedOptions = options.map((option) => option.selectedChoices.map((choice) => choice.name).join(", ")).join(", ");
  return parsedOptions.length > 150 ? parsedOptions.slice(0, 145) + "..." : parsedOptions;
};
