import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "types";

export const useNavLogoStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  navLogo: (props) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    fontSize: theme.euDesign.typography.h5,
    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
    textDecoration: "none",
    color: props?.colors?.[200],
    order: 1,
    "& h4": {
      margin: 0,
    },
    "&.layout-5": {
      order: 2,
      flex: 1,
      justifyContent: "center",
    },
    [theme.breakpoints.down(1200)]: {
      "&.layout-5": {
        justifyContent: "flex-start",
      },
    },
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 4,
      width: "48%",
      "&.layout-3": {
        width: "unset",
        flex: "0 !important",
      },
      "&.layout-3,&.layout-2": {
        flex: 1,
      },
    },
  }),
  navLogoText: (props) => ({
    margin: 0,
    whiteSpace: "nowrap",
    fontFamily: props?.fonts?.heading,
    [theme.breakpoints.down("md")]: {
      display: "none",
      "&.layout-2,&.layout-3,&.layout-4,&.layout-5": {
        display: "unset",
      },
    },
  }),
  navLogoImage: {
    width: 48,
    height: 48,
  },
}));
