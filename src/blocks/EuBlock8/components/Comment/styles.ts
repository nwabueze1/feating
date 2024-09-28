import { CustomThemeProps } from "./../../../../types";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
export const useCommentStyles = makeStyles<Theme, CustomThemeProps>((theme: any) => ({
  testament: (props) => ({
    width: "48%",
    minWidth: "48%",
    minHeight: "100%",
    "&.layout-5": {
      border: `1px solid ${props?.colors?.[1100]}`,
      padding: theme.spacing(1.5),
      borderRadius: theme.spacing(1.5),
      minWidth: "48%",
      width: "48%",
    },
    [theme.breakpoints.down("xl")]: {
      minWidth: "45%",
    },
    [theme.breakpoints.down(1030)]: {
      minWidth: "65%",
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "100% !important",
    },
  }),
  testamentItem: {
    width: "100%",
    minWidth: "100%",
  },
  testimonySub: (props) => ({
    fontSize: theme.euDesign.typography.bodyMin,
    color: props?.colors?.[400],
    margin: theme.spacing(0.5, 0),
  }),
  testimony: (props) => ({
    fontSize: theme.euDesign.typography.bodySm,
    color: props?.colors?.[500],
    margin: 0,
    marginTop: theme.spacing(3),
  }),
  rating: (props) => ({
    fill: props?.colors?.[800],
    fontSize: theme.typography.fontSize + 3,
  }),
  ratingContainer: {
    display: "flex",
    gap: theme.spacing(0.4),
  },
  testimonyHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  titleContainer: {
    display: "flex",
    gap: theme.spacing(1),
    width: "100%",
    alignItems: "center",
  },
  avatarContainer: {
    height: 70,
    width: 70,
    overflow: "hidden",
    borderRadius: "100%",
  },
  avatar: {
    height: 70,
    width: 70,
  },
  titleHeading: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    "&.layout-2,&.layout-3,&.layout-4, &.layout-5": {
      flexDirection: "column",
    },
    [theme.breakpoints.down(1030)]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginBottom: theme.spacing(1),
    },
  },
  testimonyTitle: {
    fontSize: theme.euDesign.typography.h5,
    margin: 0,
    whiteSpace: "nowrap",
    [theme.breakpoints.down(1030)]: {
      fontSize: theme.euDesign.typography.h5 - 1,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.h5 - 3,
    },
  },
}));
