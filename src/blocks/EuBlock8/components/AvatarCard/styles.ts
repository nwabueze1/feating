import { CustomThemeProps } from "types";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useAvatarCardStyles = makeStyles<Theme, CustomThemeProps>((theme: any) => ({
  container: (props) => ({
    padding: theme.spacing(2),
    backgroundColor: props?.colors?.[700],
    boxShadow: `0px 4px 100px ${theme.euDesign.getShadow(0.1)}`,
    borderRadius: 12,
    width: 230,
    "&.layout-3": {
      width: "unset",
      padding: theme.spacing(2.4),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1),
      },
    },
    [theme.breakpoints.down("xl")]: {
      "&.layout-3": {
        width: "unset",
        padding: theme.spacing(1),
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      width: "unset",
    },
  }),
  avatarTitle: {
    fontSize: theme.euDesign.typography.h5 - 4,
    fontFamily: (props) => props?.fonts?.heading,
    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
    margin: theme.spacing(0),
    color: (props) => props?.colors?.[1300],
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize - 2,
    },
  },
  secondaryText: {
    fontSize: theme.typography.fontSize - 3,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize - 8,
    },
  },
  avatarContainer: {
    display: "flex",
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: "100%",
    position: "relative",
    overflow: "hidden",
    "&.layout-3": {
      height: 40,
      width: 40,
    },
    "&.background": {
      backgroundColor: (props) => props?.colors?.[1200],
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: (props) => props?.colors?.[700],
      fontSize: theme.euDesign.typography.bodySm - 2,
      fontWeight: theme.euDesign.typography.fontWeightSemiBold,
      margin: 0,
    },
    [theme.breakpoints.down("sm")]: {
      height: 22,
      width: 22,
      "&.layout-3": {
        width: 22,
        height: 22,
      },
    },
  },
  avatarImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
}));
