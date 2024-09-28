import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../types";
import { Theme } from "@mui/material";

export const useCartSummaryStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: (props) => ({
    border: `1px solid ${props?.colors?.[800]}`,
    borderRadius: "4px",
    padding: theme.spacing(5, 6),
  }),
  header: {
    fontSize: theme.euDesign.typography.h5,
    fontWeight: theme.euDesign.typography.fontWeightBold,
    textAlign: "center",
    paddingBottom: theme.spacing(2.5),
    "& p": {
      paddingBottom: theme.spacing(2),
    },
  },
  subtotal: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttonContainer: {
    paddingTop: theme.spacing(5),
  },
  subtotalValue: {
    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
  },
  buttonText: {
    textTransform: "capitalize",
    margin: 0,
  },
}));
