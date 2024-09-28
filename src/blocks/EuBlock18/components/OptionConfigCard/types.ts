import { CoreMenuItemFields } from "../../../../models";

export type SelectionProps = {
  name: string;
  type: string;
  selectedChoices: { name: string; amount: string }[];
};

export type OptionConfigProps = {
  loading?: boolean;
  handleCloseModal: () => void;
  menuItemData: CoreMenuItemFields;
  handleSelectionOption: (newOption: SelectionProps) => void;
  selectionOption: SelectionProps[];
  buttonConfiguration: { fonts: any; colors: Record<string, string> };
  handleAddToOrder: () => void;
  currency: string;
};
