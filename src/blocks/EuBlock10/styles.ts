import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../types";

export const useEuBlock10Styles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  base: {
    position: "relative",
  },
  root: (props) => ({
    background: props?.colors?.[100],
    boxShadow: `0px 1px 2px ${theme.euDesign.getShadow(0.1)}`,
    padding: theme.spacing(2, 0),
    zIndex: 9999,
    overflowX: "hidden",
  }),
  block: {
    position: "relative",
  },
  container: {
    maxWidth: theme.euStyles.maxWidth,
    width: "85%",
    margin: "0 auto",
    position: "relative",
  },
  navBar: (props) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    fontFamily: props?.fonts?.heading,
    gap: theme.spacing(3),
    [theme.breakpoints.down("xl")]: {
      gap: theme.spacing(2),
    },
    [theme.breakpoints.down("lg")]: {
      "&.layout-2": {
        gap: theme.spacing(2),
      },
    },
    [theme.breakpoints.down("md")]: {
      gap: theme.spacing(1.2),
      flexWrap: "wrap",

      "&.layout-2,&.layout-3,&.layout-4,&.layout-5": {
        flexWrap: "nowrap",
      },
      "&.layout-3,&.layout-2": {
        justifyContent: "unset",
        "&::first-child": {
          flex: 1,
        },
      },
      "&.layout-2,&.layout-5,&.layout-4": {
        gap: 0,
      },
    },
  }),
  navList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    gap: theme.spacing(3),
    justifyContent: "flex-end",
    marginLeft: "auto",
    "&.layout-2": {
      order: 1,
      flex: 1,
      justifyContent: "flex-end",
      marginLeft: "unset",
    },
    "&.layout-3": {
      marginLeft: "unset",
      order: 2,
    },
    "&.layout-4": {
      marginLeft: "unset",
      order: 1,
    },
    "&.layout-5": {
      order: 1,
      marginLeft: "unset",
      padding: 0,
    },
    order: 3,
    [theme.breakpoints.down(1200)]: {
      display: "none",
    },
  },
  block10ActiveElement: {
    border: "1px dashed",
    borderColor: theme.euDesign.colors.green_primary,
  },
}));
