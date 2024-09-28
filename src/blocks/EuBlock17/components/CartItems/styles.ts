import { makeStyles } from "@mui/styles";

export const useCartItemsStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
}));
