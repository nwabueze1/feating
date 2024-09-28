import { makeStyles } from "@mui/styles";
export var useEuBlock5Styles = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        root: function (props) {
            var _a;
            return ({
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300],
                padding: theme.spacing(4, 0),
            });
        },
        container: function (props) {
            var _a;
            var _b, _c;
            return (_a = {
                    padding: theme.spacing(12.5),
                    background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[100],
                    borderRadius: theme.spacing(1.4),
                    maxWidth: theme.euStyles.maxWidth,
                    width: "85%",
                    margin: "0 auto",
                    "&.layout-3,&.layout-4,&.layout-5": {
                        background: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[200],
                    }
                },
                _a[theme.breakpoints.down("xl")] = {
                    padding: theme.spacing(5),
                },
                _a[theme.breakpoints.down("sm")] = {
                    padding: theme.spacing(1),
                },
                _a);
        },
        block: (_a = {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                gap: theme.spacing(6)
            },
            _a[theme.breakpoints.down("xl")] = {
                gap: theme.spacing(3),
            },
            _a["&.layout-4,&.layout-5"] = (_b = {
                    flexDirection: "row"
                },
                _b[theme.breakpoints.down("xl")] = {
                    flexDirection: "column",
                },
                _b),
            _a["&.layout-4"] = {
                alignItems: "flex-start",
            },
            _a),
        blockHeader: function (props) {
            var _a, _b;
            var _c;
            return ({
                fontFamily: (_c = props === null || props === void 0 ? void 0 : props.fonts) === null || _c === void 0 ? void 0 : _c.heading,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                "&.layout-4,&.layout-5": (_a = {
                        alignItems: "start",
                        textAlign: "start"
                    },
                    _a[theme.breakpoints.up("xl")] = {
                        maxWidth: 500,
                    },
                    _a),
                "&.layout-5": (_b = {},
                    _b[theme.breakpoints.down("xl")] = {
                        alignItems: "center",
                        textAlign: "center",
                    },
                    _b),
            });
        },
        blockContent: function (props) {
            var _a;
            var _b, _c, _d, _e, _f;
            return (_a = {
                    fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body,
                    textAlign: "center",
                    zIndex: 10,
                    "&.layout-2": {
                        background: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[300],
                        padding: theme.spacing(2, 4),
                        borderRadius: "12px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        border: "1px solid ".concat((_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[400]),
                    },
                    "&.layout-3,&.layout-4,&.layout-5": {
                        background: (_e = props === null || props === void 0 ? void 0 : props.colors) === null || _e === void 0 ? void 0 : _e[100],
                        padding: theme.spacing(2, 4),
                        borderRadius: "12px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        border: "1px solid ".concat((_f = props === null || props === void 0 ? void 0 : props.colors) === null || _f === void 0 ? void 0 : _f[400]),
                    }
                },
                _a[theme.breakpoints.down("sm")] = {
                    "&.layout-2,&.layout-3,&.layout-4,&.layout-5": {
                        padding: theme.spacing(1),
                        border: 0,
                    },
                },
                _a);
        },
        blockOverline: function (props) {
            var _a;
            var _b;
            return (_a = {
                    fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body,
                    fontSize: theme.euDesign.typography.bodySm,
                    color: props.fonts[400],
                    textTransform: "uppercase",
                    fontWeight: 600,
                    margin: 0
                },
                _a[theme.breakpoints.down("lg")] = {
                    fontSize: theme.typography.fontSize,
                },
                _a);
        },
        blockHeading: (_c = {
                fontSize: theme.euDesign.typography.h2,
                margin: theme.spacing(2, 0, 0, 0),
                maxWidth: 657
            },
            _c[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize * 2 + 4,
            },
            _c[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _c),
        blockCaption: function (props) {
            var _a;
            return (_a = {
                    maxWidth: 761,
                    fontSize: theme.typography.fontSize + 6,
                    margin: 0,
                    color: props.colors[500]
                },
                _a[theme.breakpoints.down("lg")] = {
                    fontSize: theme.typography.fontSize + 2,
                },
                _a);
        },
        block5ActiveElement: {
            border: "1px dashed",
            borderColor: theme.euDesign.colors.green_primary,
        },
    });
});
