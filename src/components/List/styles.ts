import { CustomThemeProps } from "./../../types";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useListStyle = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  list: {
    display: "flex",
    gap: theme.spacing(2),
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  listImage: {
    width: "149px",
    height: "127px",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "150px",
    },
  },
  listContent: {
    width: "calc(100% - 165px)",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  listHeading: (props) => {
    return {
      fontSize: theme.euDesign.typography.bodyLg,
      color: props?.colors?.[700],
      margin: theme.spacing(0, 0, 1, 0),
      fontWeight: theme.euDesign.typography.fontWeightBold,
      fontFamily: props?.fonts?.body,
      textTransform: "capitalize",
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.euDesign.typography.bodySm,
      },
    };
  },
  listBody: (props) => ({
    fontSize: theme.typography.fontSize,
    color: props?.colors?.[800],
    margin: 0,
    fontFamily: props?.fonts?.body,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.bodyMin - 2,
    },
  }),
  reverseItems: {
    flexDirection: "row-reverse",
  },
}));
