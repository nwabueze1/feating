import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "types";

export const useCardStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: {
    width: "100%",
    overflowWrap: "anywhere",
    
    "&.contained": {
      padding: theme.spacing(2),
      background: (props) => props?.colors?.[900],
      border: (props) => `1px solid ${props?.colors?.[1000]}`,
      borderRadius: theme.spacing(1.4),
    },
  },
  imageContainer: {
    width: "100%",
    height: "200px",
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: theme.spacing(0.5),
  },
  anchorTag:{
    textDecoration:"none"
  },
  overlay: {
    background: (props) => `linear-gradient(180.39deg, ${theme.euDesign.shadows[400]} 69.89%, ${props?.colors?.[200]} 99.66%)`,
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    fontFamily: (props) => props?.fonts?.body,
  },
  lineSeparator: {
    width: 15,
    border: (props) => `1px solid ${props?.colors?.[300]}`,
  },
  overline: {
    color: (props) => props?.colors?.[300],
    fontSize: theme.euDesign.typography.overlineSmall,
    margin: theme.spacing(1, 0),
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    fontWeight: 600,
  },
  timer: {
    fontWeight: 400,
    color: (props) => props?.colors?.[400],
    fontSize: theme.euDesign.typography.caption,
    margin: 0,
  },
  title: {
    margin: theme.spacing(0, 0, 1, 0),
    color: (props) => props?.colors?.[500],
    fontFamily: (props) => props?.fonts?.body,
    fontSize: theme.euDesign.typography.bodyMin,
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
    "&.contained": {
      fontWeight: 600,
      ":hover": {
        cursor: "auto",
        textDecoration: "none",
      },
    },
    display: "-webkit-box",
      "-webkit-line-clamp": 3,
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
  },
  subtitle: {
    margin: theme.spacing(1, 0),
    color: (props) => props?.colors?.[500],
    fontSize: theme.euDesign.typography.bodyMin,
    fontFamily: (props) => props?.fonts?.body,
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  separator: {
    width: "100%",
    height: 1,
    margin: theme.spacing(1, 0),
    background: (props) => props?.colors?.[700],
    opacity: 0.5,
  },
  datePosted: {
    color: (props) => props?.colors?.[600],
    fontSize: theme.euDesign.typography.caption,
    fontFamily: (props) => props?.fonts?.body,
    margin: theme.spacing(1, 0),
  },
}));
