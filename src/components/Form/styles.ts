import { makeStyles } from "@mui/styles";

export const useFormStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1.5),
  },
}));
