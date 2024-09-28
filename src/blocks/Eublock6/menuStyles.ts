import { CustomThemeProps } from "../../types";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMenuStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  menuContent: (props) => ({
    position: "sticky",
    height: "100%",
    top: 0,
    zIndex: 10,
    background: props?.colors?.[300],
    marginBottom: theme.spacing(5),
    "&.layout-3": {
      marginTop: theme.spacing(5),
      [theme.breakpoints.down("lg")]: {
        marginBottom: theme.spacing(2.5),
      },
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(2),
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(1),
      },
    },
    [theme.breakpoints.down("lg")]: {
      marginBottom: theme.spacing(2.5),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.down("lg")]: {
      margin: theme.spacing(2.5, 0),
    },
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(1, 0),
    },
  }),
  [theme.breakpoints.down("lg")]: {
    margin: theme.spacing(2.5, 0),
  },
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(2, 0),
  },
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(1, 0),
  },
}));
