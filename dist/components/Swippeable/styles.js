import { makeStyles } from "@mui/styles";
export var useSwipeAble = makeStyles(function (theme) {
    var _a;
    return ({
        container: (_a = {
                display: "flex",
                gap: "30px",
                flexWrap: "nowrap",
                "&::-webkit-scrollbar": {
                    display: "none",
                },
                overflowX: "scroll",
                scrollbarWidth: "none",
                width: "100%",
                height: "100%"
            },
            _a[theme.breakpoints.down("lg")] = {
                width: "100%",
                gap: "24px",
            },
            _a),
    });
});
