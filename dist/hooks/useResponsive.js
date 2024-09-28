/** @format */
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
export var useResponsive = function () {
    var theme = useTheme();
    var md = useMediaQuery(theme.breakpoints.between("md", "lg"));
    var sm = useMediaQuery(theme.breakpoints.down("md"));
    return { sm: sm, md: md };
};
