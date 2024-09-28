import { lighten, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../../types";

export const useInputStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  inputContainer: {
    width: "100%",
    borderRadius: theme.spacing(0.5),
    position: "relative",
  },
  textField: {
    padding: theme.spacing(0.8, 0),
    "&::placeholder": {
      color: theme.euDesign.colors.neutral_500,
    },
  },
  input: {
    outline: "none",
    width: "100%",
    "&::placeholder": {
      color: theme.euDesign.colors.neutral_500,
    },
  },
  selectContainer: {
    "& > div": {
      height: "auto !important",
      fontFamily: theme.euDesign.font.poppins,
    },
  },
  checkBoxLabel: {
    color: theme.euDesign.colors.neutral_500,
    fontFamily: theme.euDesign.font.poppins,
  },
  checkBoxOrRadioInput: {
    accentColor: theme.euDesign.colors.primary,
    fontFamily: theme.euDesign.font.poppins,
  },
  selectInput: {
    outline: "none",
    width: "100%",
    fontSize: theme.euDesign.typography.bodyMin,
    color: theme.euDesign.colors.neutral_black,
    fontFamily: theme.euDesign.font.poppins,
    transition: "border-color 0.3s",
    padding: theme.spacing(0.6, 1.2),
    border: `1px solid ${theme.euDesign.colors.light_grey}`,
    "&::placeholder": {
      color: theme.euDesign.colors.neutral_500,
      fontSize: theme.euDesign.typography.bodyMin,
    },
    "&:hover, &:active, &:focus": {
      borderColor: `${theme.euDesign.colors.primary} !important`,
    },
  },
  radioLabel: {
    fontFamily: (props) => props?.fonts?.body,
    marginBottom: theme.spacing(0.5),
  },
  legend: {
    fontFamily: (props) => props?.fonts?.body,
  },
  radioInput: {
    "&:checked ~ .custom__radio": {
      backgroundColor: theme.euDesign.colors.primary.concat("!important"),
      borderColor: theme.euDesign.colors.primary.concat("!important"),
    },
  },
  checkboxInput: {
    "&:checked ~ .custom__checkbox": {
      backgroundColor: theme.euDesign.colors.primary.concat("!important"),
      borderColor: theme.euDesign.colors.primary.concat("!important"),
    },
  },
  rating: {
    "& > svg": {
      fill: lighten(theme.euDesign.colors.primary, 0.8),
      "&.filled": {
        fill: theme.euDesign.colors.primary,
      },
    },
  },
  ratingLabel: {
    fontFamily: (props) => props?.fonts?.body,
    fontSize: theme.typography.fontSize,
  },
  opinionScale: {
    background: lighten(theme.euDesign.colors.primary, 0.8),
    "&.active": {
      background: theme.euDesign.colors.primary,
    },
  },
  opinionScaleText: {
    color: theme.euDesign.colors.white,
  },
  uploadImageContainer: {
    width: "auto",
  },
}));
