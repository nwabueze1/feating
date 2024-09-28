import { makeStyles } from "@mui/styles";
export var useMenuListStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: function (props) {
            var _a;
            var _b, _c, _d, _e, _f, _g;
            return (_a = {
                    height: "350px",
                    overflowY: "scroll",
                    scrollbarColor: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[100],
                    padding: theme.spacing(0, 5, 0, 0),
                    flex: "0 0 auto",
                    "&::-webkit-scrollbar": {
                        width: "0.4em",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        borderRadius: "20px",
                        backgroundColor: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[200],
                    },
                    "&::-webkit-scrollbar-track": {
                        borderRadius: "4px",
                        backgroundColor: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[100],
                    }
                },
                _a[theme.breakpoints.down("md")] = {
                    display: "flex",
                    flexDirection: "row",
                    height: "auto",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                    padding: theme.spacing(3),
                    background: (_e = props === null || props === void 0 ? void 0 : props.colors) === null || _e === void 0 ? void 0 : _e[300],
                    boxShadow: "0px 4px 64px rgba(0, 0, 0, 0.1)",
                    borderRadius: "100px",
                    margin: theme.spacing(0, 1),
                },
                _a["&.mobile"] = {
                    display: "flex",
                    minWidth: "100%",
                    flexDirection: "row",
                    height: "auto",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                    padding: theme.spacing(1),
                    background: (_f = props === null || props === void 0 ? void 0 : props.colors) === null || _f === void 0 ? void 0 : _f[300],
                    borderRadius: theme.spacing(12.5),
                    margin: theme.spacing(0, 1),
                },
                _a.background = (_g = props === null || props === void 0 ? void 0 : props.colors) === null || _g === void 0 ? void 0 : _g[300],
                _a.zIndex = 10,
                _a);
        },
        container: function (props) {
            var _a;
            var _b, _c;
            return (_a = {
                    position: "sticky",
                    top: 0
                },
                _a[theme.breakpoints.down("md")] = {
                    display: "flex",
                    flexDirection: "row",
                    height: "auto",
                    overflowX: "auto",
                    touchAction: "pan-y",
                    scrollBehavior: "smooth",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                    background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[300],
                    zIndex: 10,
                },
                _a["&.mobile"] = {
                    display: "flex",
                    flexDirection: "row",
                    height: "auto",
                    overflowX: "scroll",
                    touchAction: "pan-y",
                    scrollBehavior: "smooth",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                    padding: theme.spacing(3, 0),
                    background: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[300],
                    boxShadow: theme.shadows[10],
                },
                _a);
        },
        mobileContainer: (_a = {
                position: "sticky",
                top: 0,
                padding: theme.spacing(1, 2),
                boxShadow: "0px 4px 64px rgba(0, 0, 0, 0.1)",
                minWidth: "100%",
                display: "flex",
                flexDirection: "row",
                height: "auto",
                overflowX: "auto",
                touchAction: "pan-y",
                scrollBehavior: "smooth",
                flexWrap: "nowrap",
                boxSizing: "border-box"
            },
            _a[theme.breakpoints.up("lg")] = {
                width: "auto",
            },
            _a["&::-webkit-scrollbar"] = {
                display: "none",
            },
            _a.scrollbarWidth = "none",
            _a.margin = "0 auto",
            _a.justifyContent = "center",
            _a.alignItems = "center",
            _a.borderRadius = theme.spacing(4.5),
            _a.marginTop = theme.spacing(2),
            _a[theme.breakpoints.down("sm")] = {
                marginTop: 0,
                margin: 0,
                minWidth: "100%",
                gap: 1,
            },
            _a.background = function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]; },
            _a.zIndex = 10,
            _a),
    });
});
