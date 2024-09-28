import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../helpers/getResponsiveFontSize";
export var useBlock21Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f;
    return ({
        root: (_a = {
                padding: theme.spacing(4)
            },
            _a[theme.breakpoints.up("md")] = {
                padding: theme.spacing(6),
            },
            _a[theme.breakpoints.up("lg")] = {
                padding: theme.spacing(8),
            },
            _a),
        container: {
            maxWidth: theme.euStyles.maxWidth,
            width: "85%",
            margin: "0 auto",
        },
        searchContainer: function (props) {
            var _a;
            return ({
                position: "relative",
                border: "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[800]),
                borderRadius: 4,
                paddingLeft: theme.spacing(2.5),
                display: "flex",
                justifyContent: "space-between",
            });
        },
        input: (_b = {
                height: 46,
                border: 0,
                outline: "none",
                fontSize: theme.typography.fontSize + 2,
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[900]; },
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
                flex: 1
            },
            _b[theme.breakpoints.up("md")] = {
                height: 56,
                width: 56,
            },
            _b),
        searchButton: function (props) {
            var _a;
            var _b, _c;
            return (_a = {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    height: "100%",
                    width: 48,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[600],
                    border: 0,
                    "& > svg": {
                        fill: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[700],
                        fontSize: theme.typography.fontSize + 6,
                    }
                },
                _a[theme.breakpoints.up("md")] = {
                    height: 56,
                    width: 56,
                },
                _a.cursor = "pointer",
                _a);
        },
        header: (_c = {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            },
            _c[theme.breakpoints.down("sm")] = {
                marginBottom: theme.spacing(2),
            },
            _c),
        tagsContainer: (_d = {
                padding: theme.spacing(2),
                borderRadius: 100,
                display: "flex",
                gap: theme.spacing(3),
                margin: theme.spacing(1, 0)
            },
            _d[theme.breakpoints.up("md")] = {
                boxShadow: "0px 4px 64px 0px rgba(0, 0, 0, 0.10)",
                width: "100%",
                margin: theme.spacing(3, 0),
                gap: theme.spacing(5),
            },
            _d),
        tag: function (props) {
            var _a, _b, _c, _d, _e, _f;
            return ({
                padding: theme.spacing(1, 3),
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[700],
                fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body,
                cursor: "pointer",
                border: "1px solid ".concat((_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[300]),
                borderRadius: 50,
                color: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[500],
                fontSize: theme.typography.fontSize + 2,
                margin: 0,
                "&.active": {
                    background: (_e = props === null || props === void 0 ? void 0 : props.colors) === null || _e === void 0 ? void 0 : _e[100],
                    color: (_f = props === null || props === void 0 ? void 0 : props.colors) === null || _f === void 0 ? void 0 : _f[700],
                    fontWeight: "bold",
                },
                textTransform: "capitalize",
            });
        },
        searchResultText: function (props) {
            var _a, _b;
            return ({
                fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 20),
                fontWeight: theme.typography.fontWeightBold,
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500],
                fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.heading,
                margin: 0,
            });
        },
        loadMoreBtnParent: {
            padding: theme.spacing(3),
            display: "flex",
            justifyContent: "center",
        },
        loadMoreBtn: function (props) {
            var _a, _b, _c;
            return ({
                padding: theme.spacing(2, 3),
                borderRadius: 1000,
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100],
                color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[700],
                fontSize: theme.typography.fontSize + 2,
                fontWeight: theme.typography.fontWeightBold,
                fontFamily: (_c = props === null || props === void 0 ? void 0 : props.fonts) === null || _c === void 0 ? void 0 : _c.body,
                cursor: "pointer",
                border: "none",
            });
        },
        cardContainer: (_e = {
                display: "grid",
                gap: theme.spacing(3),
                margin: theme.spacing(2, 0)
            },
            _e[theme.breakpoints.up("md")] = {
                margin: theme.spacing(2.5, 0),
                gridTemplateColumns: "repeat(2, 1fr)",
            },
            _e[theme.breakpoints.up("lg")] = {
                margin: theme.spacing(3, 0),
                gridTemplateColumns: "repeat(3, 1fr)",
            },
            _e[theme.breakpoints.up("xl")] = {
                gridTemplateColumns: "repeat(4, 1fr)",
            },
            _e),
        title: function (props) {
            var _a, _b;
            return ({
                fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 16),
                fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading,
                color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[500],
                margin: 0,
            });
        },
        blockHeader: (_f = {},
            _f[theme.breakpoints.up("md")] = {
                width: "85%",
                margin: "0 auto",
            },
            _f[theme.breakpoints.up("lg")] = {
                width: "65%",
                margin: "0 auto",
            },
            _f),
    });
});
