import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "types";

export const useEuBlock17Styles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  root: (props) => ({
    padding: theme.spacing(5, 0, 8.5, 0),
    background: props?.colors?.[900],
    overflowWrap: "anywhere",
    [theme.breakpoints.down("lg")]: {
      paddingBottom: 0,
    },
  }),
  container: {
    maxWidth: theme.euStyles.maxWidth,
    width: "85%",
    margin: "0 auto",
    position: "relative",
    display: "flex",
    gap: theme.spacing(14),
    "&.layout-2": {
      flexDirection: "row-reverse",
      gap: theme.spacing(4),
      [theme.breakpoints.down("lg")]: {
        width: "100%",
        flexDirection: "column",
        gap: 0,
      },
    },
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      flexDirection: "column",
      gap: 0,
    },
  },
  innerHeader: {
    "&.layout-1": {
      display: "none",
    },
  },
  categoryContainer: {
    display: "flex",
    gap: theme.spacing(1),
    alignItems: "center",
    fontFamily: (props) => props?.fonts?.heading,
    "&.layout-1": {
      width: "85%",
      margin: "0 auto",
      [theme.breakpoints.down("lg")]: {
        width: "100%",
      },
    },
    "&.layout-2, &.layout-3": {
      display: "none",
    },
  },
  category: {
    margin: 0,
    fontSize: theme.typography.fontSize - 2,
    fontWeight: theme.typography.fontWeightMedium,
    textTransform: "uppercase",
    color: (props) => props?.colors?.[950],
  },
  dash: {
    height: 0.5,
    background: (props) => props?.colors?.[950],
    width: 15,
  },
  readTime: {
    margin: 0,
    fontSize: theme.typography.fontSize - 2,
    color: (props) => props?.colors?.[200],
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize * 4,
    lineHeight: "72px",
    fontFamily: (props) => props?.fonts?.heading,
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.fontSize + 34,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 6,
      lineHeight: "32px",
    },
  },
  postedTime: {
    width: "35%",
    marginTop: theme.spacing(2),
    color: (props) => props?.colors?.[600],
    fontSize: theme.typography.fontSize - 2,
    fontFamily: (props) => props?.fonts?.heading,
    padding: theme.spacing(0.5, 0),
    borderTop: (props) => `0.5px solid ${props?.colors?.[700]}`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  leftSection: {
    width: "70%",
    boxSizing: "border-box",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      padding: theme.spacing(0, 5),
    },
  },
  rightSection: {
    width: "35%",
    height: "fit-content",
    position: "sticky",
    boxSizing: "border-box",
    top: 0,
    background: (props) => props?.colors?.[100],
    marginTop: theme.spacing(6),
    padding: theme.spacing(6.5, 6, 12, 6),
    "&.layout-2": {
      marginTop: 0,
      [theme.breakpoints.down("lg")]: {
        width: "100%",
        padding: theme.spacing(10, 5),
        marginTop: theme.spacing(9.5),
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        padding: theme.spacing(5, 2),
      },
    },
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      padding: theme.spacing(10, 5),
      marginTop: theme.spacing(9.5),
    },
    "&.layout-3": {
      marginTop: 0,
      [theme.breakpoints.down("lg")]: {
        width: "100%",
        padding: theme.spacing(10, 5),
        marginTop: theme.spacing(9.5),
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        padding: theme.spacing(5, 2),
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: theme.spacing(5, 2),
    },
  },
  headerImageContainer: {
    padding: theme.spacing(6, 0),

    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(5, 0),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 0),
    },
  },
  headerImage: {
    width: "100%",
    aspectRatio: "3 / 2.5",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  featuredImageAttribution: {
    margin: theme.spacing(2, 0, 0, 0),
    fontSize: theme.typography.fontSize + 1,
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[400],

    "& a": {
      color: (props) => props?.colors?.[400],
    }
  },
  latestArticleHeading: {
    fontSize: theme.typography.fontSize + 10,
    margin: 0,
  },
  bottomIcon: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 80,
    margin: "0 auto",
    paddingTop: theme.spacing(2),
    borderTop: (props) => `0.5px solid ${props?.colors?.[400]}`,
    "& svg": {
      fontSize: theme.typography.fontSize * 2,
    },
  },
  engagementContainer: {
    display: "flex",
    gap: theme.spacing(3),
    alignItems: "center",
  },
  iconBox: {
    display: "flex",
    alignItems: "center",
  },
  loadContent: (props) => ({
    marginTop: theme.spacing(5, 0, 6, 0),
    fontFamily: props?.fonts?.body,
    
    "& img": {
      width: "100%",
      height: 450,
      objectFit: "cover",

      [theme.breakpoints.down("sm")]: {
        height: 250,
      }
    },
    "& iframe": {
      width: "100%",
      height: "500px",
      [theme.breakpoints.down("lg")]: {
        height: "300px",
      },
    },
    "&.layout_5, &.layout_4": {
      marginTop: 0,
    },
    "& p": {
      letterSpacing: "0.2px",
      fontFamily: (props) => props?.fonts?.body,
      fontSize: theme.typography.fontSize + 3,
      color: props?.colors?.[400],
      
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSize,
        lineHeight: "21px",
      },
    },
  }),
  block19ActiveElement: {
    border: "1px dashed",
    borderColor: theme.euDesign.colors.green_primary,
  },
  horizontalLine: {
    display: "block",
    height: "1px",
    border: "0",
    borderTop: "1px solid #acf0e6",
    padding: "0"
  },
  authorContainer: (props) => ({
    padding: theme.spacing(2, 0),
    display: "flex",
    fontFamily: props?.fonts?.body,

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    }
  }),
  authorItem: {
    display: "flex",
    marginRight: theme.spacing(4),

    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    }
  },
  authorImageContainer: {
    marginRight: "10px",
    width: "48px",
    height: "48px",

    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    }
  },
  authorImage: {
    borderRadius: "100%",
    width: "48px",
    height: "48px",
    objectFit: "cover",
  },
  authorTitle: {
    fontSize: theme.typography.fontSize,
    marginBottom: "5px"
  },
  authorContent: {
    fontWeight: "600",
    fontSize: theme.typography.fontSize + 3
  }
}));
