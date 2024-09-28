import { ReactNode } from "react";
export type ButtonPropsType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant: "contained" | "outlined" | "text";
  href?: string;
  mode?: "view" | "edit";
  size: "small" | "medium" | "large";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  iconSpacing?: number;
  fullWidth?: boolean;
  isLoading?: boolean;
};
