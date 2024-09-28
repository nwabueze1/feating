import { CustomThemeProps } from "types";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useLayoutStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  block: {
    marginTop: theme.spacing(4),
    justifyContent: "start",
    gap: "5%",
    "&.layout-5": {
      flexDirection: "row",
      alignItems: "start",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: theme.spacing(1),
    "&.layout-4": {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      textAlign: "start",
      marginBottom: theme.spacing(3),

      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        marginBottom: theme.spacing(1),
      },
    },

    "&.layout-5": {
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(2),
      },
    }
  },
  blockOverline: {
    "&.layout-4, &.layout-5": {
      textAlign: "start",
    },
  },
  ratingContainer: {
    margin: "0 auto",
    "&.layout-4": {
      margin: 0,
      marginLeft: "auto",
      [theme.breakpoints.down("sm")]: {
        margin: 0,
      },
    },
    "&.layout-5": {
      margin: 0,
    },
  },
  header: (props) => ({
    display: "flex",
    color: props?.colors?.[100],
    "&.layout-3": {
      justifyContent: "center",
    },
    "&.layout-4,&.layout-5": {
      justifyContent: "start",
    },
  }),
  blockHeading: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(0.5),
    width: "100%",
  },
  heading: {
    "&.layout-5": {
      textAlign: "start",
    },
  },
  blockAction: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(0.5),
    width: "100%",
    "&.layout-4": {
      justifyContent: "center",
      alignItems: "end",
    },
    "&.layout-5": {
      alignItems: "start",
    },
  },
  blockSub: (props) => ({
    color: props?.colors?.[100],
    "&.layout-4,&.layout-5": {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
    },
    "&.layout-5": {
      textAlign: "start",
    },
  }),
  price: (props) => ({
    color: props?.colors?.[100],
  }),
  image: {
    width: "100%",
    height: "500px",
    objectFit: "cover",
    "&.layout-5": {
      width: "48%",
      objectFit: "cover",
      height: 430,
      [theme.breakpoints.down(1030)]: {
        height: "60%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  },
}));
