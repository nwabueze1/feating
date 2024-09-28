import { CustomThemeProps } from "./../../types";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useButtonStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  button: (props) => {
    return {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing(1),
      outline: "none",
      border: `1px solid ${props?.colors?.[100]}`,
      color: props?.colors?.[100],
      fontFamily: theme.euDesign.font.montserrat,
      borderRadius: theme.spacing(125),
      fontWeight: theme.euDesign.typography.fontWeightSemiBold,
      textDecoration: "none",
      marginRight: theme.spacing(2),
      background: props?.colors?.[400],
      transition: "all .5s ease-in",
      cursor: "pointer",
      padding: theme.spacing(2.5, 4),
      whiteSpace: "nowrap",
      fontSize: theme.euDesign.typography.buttonLg,
      [theme.breakpoints.between("md", "lg")]: {
        padding: theme.spacing(2, 3),
        fontSize: theme.euDesign.typography.buttonLg,
        fontWeight: theme.euDesign.typography.fontWeightRegularExtra,
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(1.8, 2.8),
        marginRight: theme.spacing(0.8),
        fontSize: theme.euDesign.typography.buttonLg,
        fontWeight: theme.euDesign.typography.fontWeightRegularExtra,
      },
      "&.small": {
        padding: theme.spacing(1, 2),
      },
      "&.medium": {
        padding: theme.spacing(1.5, 2.5),
      },
      "&.large": {
        padding: theme.spacing(2, 3),
      },
      "&:hover,&:focus, &:active": {
        borderColor: props?.colors?.[200],
        color: props?.colors?.[200],
      },
      "&.contained": {
        background: props?.colors?.[100],
        color: props?.colors?.[300],
        transition: "all .5s ease-in",
        "&:hover": {
          background: props?.colors?.[200],
          color: props?.colors?.[300],
        },
        "&:focus": {
          background: props?.colors?.[200],
          color: props?.colors?.[300],
        },
        "&:active": {
          background: props?.colors?.[200],
          color: props?.colors?.[300],
        },
      },
      "&.text": {
        backgroundColor: props?.colors?.[300],
        color: props?.colors?.[100],
        border: props?.colors?.[300],
        "&:hover,&:active, &:focus": {
          background: props?.colors?.[300],
          color: props?.colors?.[100],
        },
      },
    };
  },
}));
