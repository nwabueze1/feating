import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useOrderDetailsStyles = makeStyles((theme: Theme) => ({
  root: {
    border: "1px solid #FD6F87",
    padding: theme.spacing(4),
    borderRadius: "4px",
    fontSize: theme.euDesign.typography.fontSize + 3,
    color: "#272727",
  },
  heading: {
    fontSize: theme.euDesign.typography.fontSize + 10,
    fontWeight: theme.typography.fontWeightBold,
    paddingBottom: theme.spacing(3),
    marginBottom: theme.spacing(3),
    borderBottom: "1px solid",
    borderBottomColor: theme.design.colors.waz_greyColor150,
  },
  detailsParent: {
    borderBottom: "1px solid",
    borderBottomColor: theme.design.colors.waz_greyColor150,
    marginBottom: theme.spacing(3),
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: theme.spacing(0, 0, 3, 0),
  },
  detailsInfo: {
    fontWeight: theme.typography.fontWeightBold,
  },
  detailsBadge: {
    fontSize: theme.typography.fontSize,
    padding: theme.spacing(1),
    border: "1px solid",
    borderColor: "#FF22FF",
    borderRadius: 16,
  },
  detailsNotification: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: theme.typography.fontSize + 4,
    gap: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
}));
