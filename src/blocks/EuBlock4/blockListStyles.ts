import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../types";

export const useEuBlock4ListStyles = makeStyles<Theme, CustomThemeProps>((theme: any) => ({
  blockList: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
  },
  blockImage: {
    height: "90%",
    width: "90%",
    zIndex: 11,
    position: "relative",
    "&.leaves": {
      width: "70%",
      height: "70%",
      [theme.breakpoints.down("xl")]: {
        width: "80%",
        height: "80%",
      },
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
    },
    "&.layout-3,&.layout-4,&.layout-2": {
      [theme.breakpoints.only("xl")]: {
        width: "100%",
        height: "100%",
      },
    },
    "&.layout-5": {
      width: "100%",
      height: "100%",
      right: 0,
      [theme.breakpoints.up("xl")]: {
        right: 62,
        top: 22,
      },
      [theme.breakpoints.only("xl")]: {
        width: "107%",
        right: 34,
        top: 61,
      },
      [theme.breakpoints.down("lg")]: {},
    },
    "&.layout-3,&.layout-2,&.layout-4,&.layout-1,&.layout-5": {
      "@media(min-width:1280px)": {
        width: "100%",
        height: "100%",
      },
    },
  },
  imageOverlay: {
    width: "411px",
    height: "397px",
    background: (props) => props?.colors?.[400],
    position: "absolute",
    borderRadius: theme.spacing(12.5, 12.5, 0, 12.5),
    top: "-19%",
    zIndex: 2,
    "&.layout-1": {
      right: 0,
    },
    "&.layout-3, &.layout-4,&.layout-2": {
      top: "-4%",
      [theme.breakpoints.only("xs")]: {
        width: "411px",
        height: "397px",
      },
      [theme.breakpoints.down("lg")]: {
        top: "6%",
        width: "54%",
        height: "74%",
      },
    },
    "&.layout-5": {
      [theme.breakpoints.up("xl")]: {
        top: "0px",
      },
      [theme.breakpoints.only("xl")]: {
        width: " 422px",
        height: "425px",
      },
      [theme.breakpoints.down("lg")]: {
        top: 28,
        right: "2%",
        width: "57%",
        height: "70%",
      },
    },
    "&.layout-4,&.layout-3,&.layout-2": {
      [theme.breakpoints.down("sm")]: {
        right: "8%",
      },
    },
    [theme.breakpoints.between("lg", "xl")]: {
      top: "-5%",
    },
    [theme.breakpoints.down("lg")]: {
      height: "70%",
      width: "70%",
      top: "0%",
      right: "0%",
    },
  },
  layout5Container: {
    display: "flex",
    gap: "36px",
    alignItems: "center",
    flexDirection: "row-reverse",
    "&.layout-5": {
      alignItems: "center !important",
      [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
      },
    },
  },
  layout5Content: {
    flex: 1,
  },
  listItemContainer: {
    "&.layout-4": {
      flexDirection: "row-reverse",
    },
  },
  list: {
    display: "flex",
    gap: theme.spacing(2),
    alignItems: "center",
  },
  listImage: {
    width: "149px",
    height: "127px",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      height: "80px",
    },
  },
  listHeading: {
    fontSize: theme.euDesign.typography.bodyLg,
    color: theme.euDesign.colors.neutral_black,
    margin: theme.spacing(0, 0, 1, 0),
    fontWeight: 700,
    fontFamily: theme.euDesign.font.poppins,
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.bodySm,
    },
  },
  listBody: {
    fontSize: theme.typography.fontSize,
    color: theme.euDesign.colors.black_neutral_700,
    margin: 0,
    fontFamily: theme.euDesign.font.poppins,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.bodyMin - 2,
    },
  },
}));
