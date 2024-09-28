import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../../../types";

export const useRelatedDishes = makeStyles<Theme, CustomThemeProps>((theme: any) => ({
  root: {
    width: "85%",
    margin: "auto",
    maxWidth: theme.euStyles.maxWidth,
    marginTop: theme.spacing(10),
  },
  header: {
    fontSize: theme.euDesign.typography.h3,
    margin: 0,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.euDesign.typography.h4,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.h5,
    },
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));
