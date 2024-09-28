import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "types";

export const useNavListItemStyles = makeStyles<Theme, CustomThemeProps>((theme: any) => ({
  navListItem: {
    display: "inline-block",
    order: 0,
  },
  navLink: (props) => ({
    fontSize: theme.euDesign.typography.bodySm,
    textDecoration: "none",
    color: props?.colors?.[200],
    fontFamily: props?.fonts?.body,
    cursor: "pointer",
    transition: "color .5s ease-in",
    "&:hover,&.active": {
      color: props?.colors?.[700],
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.h5 - 4,
    },
    whiteSpace: "nowrap",
  }),
}));
