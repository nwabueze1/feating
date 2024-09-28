import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CardPropsType } from "./type";

type CustomStyleProps = {
  hasShadow?: boolean;
  colors?: CardPropsType["colors"];
};

export const useCardStyles = makeStyles<Theme, CustomStyleProps>((theme: Theme) => ({
  card: (props) => ({
    position: "relative",
    backgroundColor: theme.euDesign.colors.white,
    borderRadius: "12px",
    border: `1px solid ${theme.euDesign.colors.neutral300}`,
    flex: "0 0 auto",
    boxSizing: "border-box",
    padding: theme.spacing(2),
    transition: "box-shadow .3s ease-out",
    boxShadow: props?.hasShadow ? `0px 4px 64px ${theme.euDesign.shadows[100]}` : "unset",

    "&:hover": {
      boxShadow: `0px 4px 64px ${theme.euDesign.shadows[100]}`,
    },
  }),
  card_image_container: {
    overflow: "hidden",
    borderRadius: theme.spacing(1.5),
    position: "relative",
    maxHeight: 200,
  },
  overlay: {
    background: `linear-gradient(180.39deg, ${theme.euDesign.shadows[200]} 69.89%, ${theme.euDesign.colors.black} 99.66%)`,
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
  },
  card_image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  card_title: {
    margin: theme.spacing(1.5, 0, 0, 0),
    color: theme.euDesign.colors.neutral_black,
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: theme.euDesign.typography.cardHeading - 3,
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.euDesign.typography.cardHeading - 5,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.cardHeading - 7,
    },
  },
  card_subtitle: {
    fontSize: theme.euDesign.typography.bodyMin,
    fontWeight: 400,
    fontFamily: "Poppins",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.euDesign.typography.bodyMin - 2,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.bodyMin - 3,
    },
  },
  card_button: (props) => ({
    outline: "none",
    padding: theme.spacing(1, 2),
    color: props?.colors?.action?.color ?? theme.euDesign.colors.primary,
    border: `1px solid ${props?.colors?.action?.color ?? theme.euDesign.colors.primary}`,
    fontSize: theme.typography.fontSize,
    background: props?.colors?.action?.background ?? "transparent",
    fontWeight: 500,
    fontFamily: "Poppins",
    borderRadius: "100px",
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
    "&:hover,&:focus,&:active": {
      background: props?.colors?.action?.color ?? theme.euDesign.colors.primary,
      border: `1px solid ${props?.colors?.action?.color ?? theme.euDesign.colors.primary}`,
      cursor: "pointer",
      color: props?.colors?.action?.background ?? theme.euDesign.colors.white,
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: theme.typography.fontSize - 2,
    },
  }),
  card_button_icon: {
    fontWeight: "bolder",
    fontSize: theme.typography.fontSize + 2,
    display: "flex",
    alignItems: "center",
    transition: "transform .4s ease-in-out",
    translateStyle: "preserve-3d",
    marginLeft: theme.spacing(0.5),
    "&:hover": {
      transform: "translateZ(10px)",
      cursor: "pointer",
    },
  },
  rating_container: {
    display: "flex",
    gap: theme.spacing(0.5),
  },
  rating: {
    fill: theme.euDesign.colors.gold,
    fontSize: theme.typography.fontSize + 3,
  },
  price: {
    fontFamily: "Poppins",
    fontSize: theme.euDesign.typography.price - 4,
    color: theme.euDesign.colors.neutral_black,
    margin: theme.spacing(1.1, 0),
  },
  currency: (props) => ({
    color: props?.colors?.currency ?? theme.euDesign.colors.secondary_main,
  }),
  cardPriceAndButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(1),
  },
}));
