import { makeStyles } from "@mui/styles";

export const useGroupedInputStyles = makeStyles((theme: any) => ({
  inputs: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1.5),
  },
}));
