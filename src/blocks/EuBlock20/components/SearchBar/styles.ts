import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "types";

export const useSearchBarStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  container: {
    display: "flex",
    boxSizing: "border-box",
    borderRadius: theme.spacing(0.5),
    border: (props) => `1px solid ${props?.colors?.[500]}`,
    overflow: "hidden",
    justifyContent: "space-between",
    width: "100%",
  },
  searchInput: {
    outline: "none",
    padding: theme.spacing(1, 1.5),
    fontFamily: theme.euDesign.font.poppins,
    fontSize: theme.typography.fontSize - 2,
    transition: "width 0.5s ease-in",
    width: "100%",
    "&::placeholder": {
      color: (props) => props?.colors?.[400],
    },
    border: 0,
  },
  searchButton: (props) => ({
    outline: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: props?.colors?.[500],
    border: `1px solid ${props?.colors?.[500]}`,
    borderRadius: theme.spacing(0, 0.5, 0.5, 0),
    padding: theme.spacing(2, 2.5),
    cursor: "pointer",
    "&:hover": {
      background: props?.colors?.[100],
    },
  }),
  searchIcon: {
    color: theme.euDesign.colors.white,
    fontSize: theme.euDesign.typography.bodySm,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 8,
    },
  },
}));
