import { makeStyles } from "@mui/styles";
export var useEuBlock22Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f;
    return ({
        container: (_a = {
                width: "85%",
                margin: "0 auto",
                maxWidth: theme.euStyles.maxWidth,
                padding: theme.spacing(7, 0),
                display: "flex",
                justifyContent: "space-between"
            },
            _a[theme.breakpoints.down("lg")] = {
                flexDirection: "column",
                padding: theme.spacing(4, 0),
            },
            _a),
        leftSection: (_b = {
                width: "47%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                "& h1": (_c = {
                        fontSize: theme.typography.fontSize + 52,
                        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
                        color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
                        lineHeight: "85px",
                        marginBottom: theme.spacing(2)
                    },
                    _c[theme.breakpoints.down("lg")] = {
                        fontSize: theme.typography.fontSize + 20,
                        textAlign: "center",
                        lineHeight: "normal !important",
                    },
                    _c),
                "& p": (_d = {
                        fontSize: theme.typography.fontSize + 12,
                        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
                        color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; }
                    },
                    _d[theme.breakpoints.down("lg")] = {
                        fontSize: theme.typography.fontSize + 8,
                        textAlign: "center",
                        paddingBottom: theme.spacing(8),
                    },
                    _d)
            },
            _b[theme.breakpoints.down("lg")] = {
                width: "100%",
            },
            _b),
        rightSection: (_e = {
                width: "47%",
                "& img": (_f = {
                        width: "100%",
                        height: 590,
                        objectFit: "cover"
                    },
                    _f[theme.breakpoints.down("lg")] = {
                        height: 461,
                    },
                    _f[theme.breakpoints.down("sm")] = {
                        height: 243,
                    },
                    _f)
            },
            _e[theme.breakpoints.down("lg")] = {
                width: "100%",
            },
            _e),
    });
});
