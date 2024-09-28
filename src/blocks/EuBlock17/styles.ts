import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../types";

export const useEuBlockStyles17 = makeStyles<Theme, CustomThemeProps>((theme: any) => ({
  root: (props) => ({
    fontFamily: props?.fonts?.body,
    colors: props?.colors?.[200],
    padding: theme.spacing(4, 0),
  }),
  cartHeader: (props) => ({
    fontSize: theme.euDesign.typography.h3,
    fontFamily: props?.fonts?.heading,
    marginBottom: theme.spacing(3),

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.euDesign.typography.h4,
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.h5,
      marginBottom: theme.spacing(2),
    },
  }),
  cartContainer: {
    width: "85%",
    maxWidth: theme.euStyles.maxWidth,
    margin: "auto",
  },
  cartContent: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      gap: theme.spacing(4),
    },
  },
  cartCheckout: {
    width: "100%",
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up("lg")]: {
      width: "55%",
      marginBottom: 0,
    },
  },
  cartSidebar: {
    width: "100%",

    [theme.breakpoints.up("lg")]: {
      width: "46%",
    },
  },
  cartContainerBack: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(4),
    cursor: "pointer",

    "& p": {
      fontSize: theme.euDesign.typography.fontSize + 4,
    },
  },
  cartLoaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(5),
  },
}));
