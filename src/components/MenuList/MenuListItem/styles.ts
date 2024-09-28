import { CustomThemeProps } from "./../../../types";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMenuListItem = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  container: (props) => ({
    padding: theme.spacing(2.2, 2),
    width: "auto",
    borderRadius: "0px 50px 50px 0px",
    display: "flex",
    gap: theme.spacing(2),
    alignItems: "center",
    margin: theme.spacing(0.5, 0),
    transition: "background .3s ease-in",
    "&:hover": {
      cursor: "pointer",
      background: props?.colors?.[400],
    },
    "&.active": {
      background: props?.colors?.[500],
    },
    [theme.breakpoints.down("lg")]: { width: "auto" },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1, 1.2),
      borderRadius: theme.spacing(6.25),
      maxWidth: "auto",
      gap: theme.spacing(1),
      border: `1px solid ${props?.colors?.[400]}`,
      whiteSpace: "nowrap",
      marginRight: theme.spacing(1),
      width: "auto",
    },
    "&.mobile": {
      padding: theme.spacing(1),
      borderRadius: theme.spacing(7.5),
      gap: theme.spacing(1),
      border: `1px solid ${props?.colors?.[400]}`,
      whiteSpace: "nowrap",
      marginRight: theme.spacing(1),
      width: "auto",
      justifyContent: "center",
    },
  }),
  image_container: (props) => ({
    height: 48,
    width: 48,
    borderRadius: "100%",
    padding: theme.spacing(1) + 1,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    background: props?.colors?.[600],
    "&.active": {
      background: props?.colors?.[300],
    },
    [theme.breakpoints.down("md")]: {
      height: 32,
      width: 32,
      padding: theme.spacing(0.5),
    },
    "&.mobile": {
      height: 28,
      width: 28,
      padding: theme.spacing(0.5),
    },
  }),
  image: {
    height: "80%",
    width: "80%",
    objectFit: "cover",
    borderRadius: "100%",
  },
  title: (props) => ({
    fontSize: theme.typography.fontSize,
    fontWeight: 400,
    color: props?.colors?.[700],
    margin: 0,
    fontFamily: props?.fonts?.body,
    "&.active": {
      fontWeight: 600,
      color: props?.colors?.[100],
    },
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize,
    },
    "&.mobile": {
      fontSize: theme.typography.fontSize,
    },
  }),
}));
