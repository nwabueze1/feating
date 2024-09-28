import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "types";

export const useEuBlock13Styles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: {
    padding: theme.spacing(6.25, 0),
  },
  container: {
    maxWidth: theme.euStyles.maxWidth,
    width: "85%",
    margin: "0 auto",
  },
  overline: {
    fontSize: theme.euDesign.typography.overline,
    color: (props) => props?.colors?.[100],
    margin: 0,
    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.overlineSmall,
    },
  },
  title: {
    fontSize: theme.euDesign.typography.h2,
    color: (props) => props?.colors?.[200],
    margin: 0,
    fontWeight: theme.euDesign.typography.fontWeightBold,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.h3,
      lineHeight: theme.spacing(5.75),
    },
  },
  caption: {
    fontSize: theme.euDesign.typography.bodyLg,
    color: (props) => props?.colors?.[300],
    margin: 0,
    fontWeight: theme.euDesign.typography.fontWeightRegular,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.bodySm,
    },
  },
  blockHeading: {
    textAlign: "center",
    maxWidth: "60%",
    margin: "0 auto",
    fontFamily: (props) => props?.fonts?.body,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1.3),
    "&.layout-4": {
      textAlign: "start",
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: "100%",
      "&.layout-4": {
        textAlign: "start",
      },
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      "&.layout-2, &.layout-3": {
        textAlign: "center",
      },
      gap: theme.spacing(1),
    },
  },
  menuHeader: {
    display: "flex",
    gap: theme.spacing(7.5),
    margin: theme.spacing(4.25, 0),
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(2.25),
      flexDirection: "column",
      margin: theme.spacing(2.25, 0),
    },
  },
  menuHeading: {
    width: "25%",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
      width: "100%",
    },
    "&.layout-2,&.layout-3,&.layout-4": {
      display: "none",
    },
  },
  menuTitle: {
    color: (props) => props?.colors?.[200],
    fontSize: theme.euDesign.typography.h4,
    fontWeight: theme.euDesign.typography.fontWeightBold,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.h5,
      margin: theme.spacing(3, 0, 1.5, 0),
    },
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuSearchBar: {
    width: "75%",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
    "&.layout-2,&.layout-3, &.layout-4": {
      margin: "0 auto",
      marginTop: theme.spacing(2.5),
    },
  },
  block: {
    display: "flex",
    gap: theme.spacing(7.5),
  },
  menuCategoryContainer: {
    width: "25%",
    "&.layout-2,&.layout-3,&.layout-4": {
      display: "none",
    },
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  menuItemsContainer: {
    width: "75%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: theme.spacing(2),
    "&.layout-2, &.layout-3, &.layout-4": {
      width: "100%",
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    [theme.breakpoints.only("xl")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.down("xl")]: {
      gridTemplateColumns: "repeat(2, 1fr) !important",
    },
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      gridTemplateColumns: "repeat(2, 1fr) !important",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      gridTemplateColumns: "repeat(1, 1fr) !important",
    },
  },
  menuCategory: {
    gridColumn: "1",
    gridRow: "span",
  },
  menuContent: {
    gridColumn: "span 3",
  },
  horizontalMenuContainer: {
    width: "60%",
    position: "sticky",
    top: 0,
    margin: "0 auto",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2.5, 0),
    },
    zIndex: 10,
  },
  productsContainer: {
    position: "relative",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(5),
  },
  spinner: {
    width: "17px",
    height: "17px",
    border: `2px solid white`,
    borderTop: `2px solid transparent`,
    borderRadius: "50%",
    animation: "$spin 1s linear infinite",
  },
  "@keyframes spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
}));
