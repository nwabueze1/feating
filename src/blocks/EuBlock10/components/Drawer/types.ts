export type DrawerPropsType = {
  links: { text: string; url: string }[];
  open: boolean;
  onClose: () => void;
  layout?: string;
  numberOfItemsInCart?: number;
  mode: "view" | "edit";
};
