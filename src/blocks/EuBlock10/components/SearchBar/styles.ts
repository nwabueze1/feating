import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "types";

export const useSearchBarStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  navSearch: (props) => ({
    display: "flex",
    boxSizing: "border-box",
    borderRadius: theme.spacing(0.5),
    border: `1px solid ${props?.colors?.[400]}`,
    overflow: "hidden",
    justifyContent: "space-between",
    width: "85%",
    transition: "width 0.5s ease",
    [theme.breakpoints.up("xl")]: { maxWidth: 519 },
    "&.layout-1": {
      order: 2,
      flex: 1,
      margin: "0 auto !important",
    },
    "&.layout-2": {
      width: "auto",
      minWidth: "auto",
      transition: "width 0.4s ease-in",
      "&.open-search": {
        width: "100%",
      },
    },
    "&.layout-3": {
      order: 4,
      maxWidth: "auto",
      width: "auto",
      flex: 1,
      display: "flex",
      justifyContent: "flex-end",
    },
    "&.layout-4,&.layout-5": {
      border: 0,
      order: 3,
      justifyContent: "flex-end",
      width: "inherit",
      "&.open-search": {
        width: "100%",
        border: `1px solid ${props?.colors?.[400]}`,
      },
    },
    order: 3,
    [theme.breakpoints.down(1200)]: {
      "&.layout-3": {
        flex: 1,
        order: 2,
        display: "flex",
        justifyContent: "flex-end",
      },
      "&.layout-4": {
        marginLeft: "auto",
      },
      "&.layout-5": {
        border: `1px solid ${props?.colors?.[400]}`,
      },
    },
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0, 1.5),

      "&.layout-1": {
        order: 4,
        width: "100%",
        minWidth: "100%",
      },
      "&.layout-2": {
        order: 2,
        display: "flex",
        justifyContent: "flex-end",
        border: "none",
        margin: `${theme.spacing(0, 0, 0, 1.5)} !important`,
        "&.open-search": {
          minWidth: "50%",
          width: "50%",
          border: `1px solid ${props?.colors?.[400]}`,
        },
      },
      "&.layout-4": {
        margin: `${theme.spacing(0, 1.5, 0, 1.5)} !important`,
      },
      "&.layout-4,&.layout-5": {
        order: 3,
        display: "flex",
        justifyContent: "flex-end",
        border: "none",
      },
    },
  }),
  searchInput: (props) => ({
    outline: "none",
    padding: theme.spacing(1, 1.5),
    fontFamily: props?.fonts?.body,
    fontSize: theme.typography.fontSize - 2,
    transition: "width 0.5s ease-in",
    width: "100%",
    "&::placeholder": {
      color: props?.colors?.[500],
    },
    border: 0,
    "&.layout-2,&.layout-4,&.layout-5": {
      width: 0,
      display: "none",
      "&.open-search": {
        display: "flex",
        width: "100%",
      },
    },
    [theme.breakpoints.down(1200)]: {
      "&.layout-5": {
        display: "none",
      },
      padding: theme.spacing(0.2, 1),
    },
    [theme.breakpoints.down("md")]: {
      "&.layout-2,&.layout-4,&.layout-5": {
        width: "10px",
        display: "none",
      },

      "&.layout-2": {
        "&.open-search": {
          minWidth: "30%",
        },
      },
      "&.open-search": {
        width: "100%",
        display: "flex",
      },
    },
  }),
  searchButton: (props) => ({
    outline: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: props?.colors?.[600],
    border: `1px solid ${props?.colors?.[600]}`,
    borderRadius: theme.spacing(0, 0.5, 0.5, 0),
    padding: theme.spacing(2, 2.5),
    cursor: "pointer",
    transition: "background .3s ease-in",
    "&:hover": {
      background: props?.colors?.[300],
    },
    [theme.breakpoints.down(1200)]: {
      padding: theme.spacing(0.9, 2),
      "&.layout-2,&.layout-3": {
        borderRadius: theme.spacing(0.5),
        padding: theme.spacing(0.9, 2),
      },
      "&.layout-4": {
        borderRadius: "100%",
        padding: theme.spacing(1),
        background: "none",
        border: 0,
        "& svg": {
          fill: props?.colors?.[600],
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      "&.layout-2,&.layout-3,&.layout-4,&.layout-5": {
        borderRadius: "100%",
        padding: theme.spacing(1),
        border: "none",
        background: "none",
        color: props?.colors?.[600],
      },
    },
  }),
  searchIcon: (props) => ({
    color: theme.euDesign.colors.white,
    fontSize: theme.euDesign.typography.bodySm,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 8,
      "&.layout-2,&.layout-3,&.layout-4,&.layout-5": {
        color: props?.colors?.[600],
      },
    },
  }),
}));
