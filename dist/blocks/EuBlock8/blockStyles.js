import { makeStyles } from "@mui/styles";
export var useBlockStyles = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        container: {
            maxWidth: theme.euStyles.maxWidth,
            width: "85%",
            margin: "0 auto",
            overflow: "hidden",
        },
        block: (_a = {
                display: "flex",
                alignItems: "center",
                gap: "8%",
                "&.layout-2": {
                    flexDirection: "row-reverse",
                },
                "&.layout-3": {
                    flexDirection: "row-reverse",
                    justifyContent: "space-between",
                }
            },
            _a[theme.breakpoints.down(1030)] = {
                flexDirection: "column",
                gap: theme.spacing(5),
                "&.layout-2": {
                    flexDirection: "column-reverse",
                },
                "&.layout-3": {
                    flexDirection: "column",
                    alignItems: "center",
                },
            },
            _a),
        blockImage: (_b = {
                width: "100%",
                height: "100%",
                "&.layout-3": {
                    width: "80%",
                }
            },
            _b[theme.breakpoints.down(1030)] = {
                "&.layout-3": {
                    width: "80%",
                    margin: "0 auto",
                },
            },
            _b[theme.breakpoints.down("sm")] = {
                width: "100% !important",
                "&.layout-3": {
                    width: "100%",
                },
            },
            _b),
        testimonyContainer: (_c = {
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing(9)
            },
            _c[theme.breakpoints.up(1545)] = {
                gap: theme.spacing(16.25),
                "&.layout-5": {
                    gap: "0 !important",
                },
            },
            _c[theme.breakpoints.down("xl")] = {
                gap: theme.spacing(4),
            },
            _c[theme.breakpoints.down("sm")] = {
                gap: theme.spacing(3),
            },
            _c),
        testamentItem: {
            width: "100%",
            minWidth: "100%",
        },
    });
});
