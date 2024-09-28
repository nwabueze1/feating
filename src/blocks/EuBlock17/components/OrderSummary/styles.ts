import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../../../types";

export const useOrderSummaryStyles = makeStyles<Theme, CustomThemeProps>((theme: any) => ({
  root: (props) => ({
    border: "1px solid #FD6F87",
    padding: theme.spacing(4),
    borderRadius: "4px",
    fontFamily: props?.fonts?.body,
  }),
  summaryHeading: (props) => ({
    fontFamily: props?.fonts?.heading,
    fontWeight: theme.euDesign.typography.fontWeightBold,
    fontSize: theme.euDesign.typography.fontSize * 1.5,
    textAlign: "center",
    color: "#272727",
    marginBottom: theme.spacing(4),
  }),
  summaryParent: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
  },
  summary: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: theme.euDesign.typography.fontSize + 2,
  },
  summaryTotal: {
    fontSize: theme.euDesign.typography.fontSize + 4,
  },
  summaryItemBold: {
    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
  },
  summaryButton: (props) => ({
    background: `${props?.colors?.[300]} !important`,
    color: `${props?.colors?.[1000]} !important`,
    marginRight: "0 !important",

    "&:hover,&:focus, &:active": {
      borderColor: "unset !important",
    },
  }),
}));
