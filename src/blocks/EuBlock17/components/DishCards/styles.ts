import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../../../types";

export const useCartCardStyles = makeStyles<Theme, CustomThemeProps>((theme: any) => ({
  root: {
    "& p": {
      margin: 0,
    },
    border: "1px solid #F2F2F2",
    width: "100%",
  },
  container: (props) => ({
    display: "grid",
    justifyContent: "space-between",
    alignItems: "center",
    gridTemplateColumns: "18% 60% 14%",
    background: props?.colors?.[700],
    padding: theme.spacing(3),

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "25% 70%",
    },

    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "100% !important",
    },
  }),
  cartCardImage: {
    width: "100%",
    height: "120px",
    borderRadius: "5px",
    objectFit: "cover",
  },
  textContainer: {
    width: "100%",
  },
  textName: {
    fontSize: theme.typography.fontSize + 6,
    margin: theme.spacing(0, 0, 0.5, 0),
    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
  },
  optionContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    fontSize: theme.typography.fontSize - 2,
    marginBottom: theme.spacing(1),
  },
  optionText: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  priceContainer: {
    fontSize: theme.typography.fontSize + 6,
    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
  },
  currency: (props) => ({
    color: props?.colors?.[600],
  }),
  addQuantity: (props) => ({
    display: "flex",
    border: `1px solid ${props?.colors?.[600]}`,
    color: props?.colors?.[600],
    width: "100%",
    height: "32px",
    borderRadius: "30px",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontSize: theme.euDesign.typography.h5,
    "&.mobile": {
      display: "none",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        width: "100px",
        height: "25px",
        fontSize: theme.typography.fontSize + 3,
      },
    },
  }),
  addQuantityContainer: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  quantity: (props) => ({
    fontSize: theme.typography.fontSize + 1,
    color: props?.colors?.[200],
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize - 1,
    },
  }),
  removal: {
    paddingTop: theme.spacing(4),
    display: "flex",
    gap: theme.spacing(1.5),
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",

    "& span": {
      fontSize: theme.euDesign.typography.fontSize + 2,
    },

    "& .icon": {
      fontSize: theme.euDesign.typography.fontSize + 6,
    },
  },
  quantitySign: {
    cursor: "pointer",
  },
  priceWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  removalMobile: {
    paddingTop: theme.spacing(1),
    display: "none",
    fontSize: theme.euDesign.typography.fontSize + 10,

    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  optionName: {
    paddingRight: theme.spacing(0.5),
  },
  dishSpinnerParent: (props) => ({
    display: "inline",
    position: "relative",
    top: 1.5,
    marginLeft: theme.spacing(1.5),
    color: props?.colors?.[300],
  }),
}));
