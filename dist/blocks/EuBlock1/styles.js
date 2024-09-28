import { makeStyles } from "@mui/styles";
export var useEuBlock1Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return ({
        root: function (props) {
            var _a;
            return ({
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100],
                boxSizing: "border-box",
            });
        },
        container: (_a = {
                width: "85%",
                maxWidth: theme.euStyles.maxWidth,
                margin: "0 auto",
                padding: theme.spacing(4, 0.5)
            },
            _a[theme.breakpoints.between("md", "xl")] = {
                padding: theme.spacing(4, 0.5),
            },
            _a[theme.breakpoints.down("md")] = {
                padding: theme.spacing(7, 0),
            },
            _a),
        items_container: (_b = {
                display: "flex",
                alignItems: "center"
            },
            _b[theme.breakpoints.down("md")] = {
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            },
            _b["&.variation-b"] = (_c = {
                    display: "flex",
                    flexDirection: "row-reverse",
                    "& h1": {
                        textAlign: "end",
                    },
                    "& p": {
                        textAlign: "end",
                        marginLeft: "auto",
                    }
                },
                _c[theme.breakpoints.down("md")] = {
                    display: "flex",
                    flexDirection: "column-reverse",
                    "& h1": {
                        textAlign: "center",
                    },
                    "& p": {
                        textAlign: "center",
                    },
                },
                _c),
            _b["&.variation-c"] = {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                "& h1": {
                    textAlign: "center",
                },
                "& p": {
                    textAlign: "center",
                    maxWidth: "unset !important",
                },
            },
            _b["&.variation-d"] = {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                "& h1": {
                    textAlign: "center",
                },
                "& p": {
                    textAlign: "center",
                },
            },
            _b),
        blockSection: {
            flex: 1,
            width: "100%",
            "&.image-container": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
            },
            "& .overline-5": {
                position: "absolute",
                bottom: "13%",
            },
        },
        sectionContainer: (_d = {},
            _d[theme.breakpoints.down("md")] = {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            },
            _d),
        overlineContainer: function (props) {
            var _a, _b;
            var _c;
            return (_a = {
                    background: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[200],
                    padding: theme.spacing(1, 2),
                    borderRadius: theme.spacing(0.5),
                    alignSelf: "center",
                    display: "flex",
                    alignItems: "center",
                    maxWidth: "fit-content"
                },
                _a[theme.breakpoints.between("md", "xl")] = {
                    fontSize: theme.typography.fontSize,
                    padding: theme.spacing(1.5, 2),
                },
                _a[theme.breakpoints.down("md")] = {
                    margin: "0 auto",
                },
                _a["&.variation-b"] = (_b = {
                        marginLeft: "auto"
                    },
                    _b[theme.breakpoints.down("md")] = {
                        marginLeft: "none",
                    },
                    _b),
                _a["&.variation-c"] = {
                    margin: "0 auto",
                },
                _a["&.variation-d"] = {
                    margin: "0 auto",
                },
                _a);
        },
        overline: function (props) {
            var _a;
            var _b, _c;
            return (_a = {
                    color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[300],
                    fontFamily: (_c = props === null || props === void 0 ? void 0 : props.fonts) === null || _c === void 0 ? void 0 : _c.body,
                    fontSize: theme.typography.fontSize + 2,
                    margin: 0
                },
                _a[theme.breakpoints.between("md", "xl")] = {
                    fontSize: theme.typography.fontSize,
                },
                _a[theme.breakpoints.down("md")] = {
                    fontSize: theme.typography.fontSize - 2,
                },
                _a);
        },
        title: function (props) {
            var _a;
            var _b, _c;
            return (_a = {
                    fontSize: theme.typography.fontSize * 4 + 8,
                    fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.heading,
                    fontWeight: 700,
                    color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[400],
                    margin: theme.spacing(1, 0, 0, 0),
                    maxWidth: 864,
                    lineHeight: "90px",
                    "&.variation-c, &.variation-d": {
                        maxWidth: "unset !important",
                    }
                },
                _a[theme.breakpoints.down("lg")] = {
                    lineHeight: "60px",
                },
                _a[theme.breakpoints.between("md", "lg")] = {
                    fontSize: theme.typography.fontSize * 3 + 4,
                },
                _a[theme.breakpoints.down("md")] = {
                    fontSize: theme.typography.fontSize * 3 + 6,
                    textAlign: "center",
                },
                _a);
        },
        animatedTitle: function (props) {
            var _a, _b, _c;
            return ({
                fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.misc,
                fontWeight: 400,
                background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[500],
                color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[300],
                borderRadius: theme.spacing(0.5),
                padding: theme.spacing(1),
            });
        },
        subTitle: function (props) {
            var _a, _b;
            var _c, _d;
            return (_a = {
                    color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[600],
                    fontSize: theme.typography.fontSize + 6,
                    maxWidth: "761px",
                    margin: theme.spacing(2, 0),
                    fontFamily: (_d = props === null || props === void 0 ? void 0 : props.fonts) === null || _d === void 0 ? void 0 : _d.body
                },
                _a[theme.breakpoints.between("md", "lg")] = {
                    fontSize: theme.typography.fontSize + 2,
                    lineHeight: "24px",
                },
                _a[theme.breakpoints.down("md")] = {
                    fontSize: theme.typography.fontSize,
                    lineHeight: "21px",
                    textAlign: "center",
                },
                _a["&.variation-d"] = (_b = {
                        marginTop: theme.spacing(2.5)
                    },
                    _b[theme.breakpoints.down("sm")] = {
                        marginTop: "".concat(theme.spacing(1.5), " !important"),
                    },
                    _b),
                _a);
        },
        buttonContainer: (_e = {
                whiteSpace: "nowrap"
            },
            _e[theme.breakpoints.down("md")] = {
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
            },
            _e["&.variation-b"] = (_f = {
                    display: "flex",
                    justifyContent: "flex-end"
                },
                _f[theme.breakpoints.down("md")] = {
                    justifyContent: "center",
                },
                _f),
            _e["&.variation-c"] = {
                display: "flex",
                justifyContent: "center",
            },
            _e["&.variation-d"] = {
                display: "flex",
                justifyContent: "center",
                marginTop: 0,
            },
            _e),
        image: (_g = {
                display: "block",
                height: 600,
                width: "100%",
                objectFit: "cover"
            },
            _g[theme.breakpoints.between("md", "lg")] = {
                width: "100%",
                ObjectFit: "cover",
            },
            _g[theme.breakpoints.down("md")] = {
                width: "100%",
                height: 450,
                marginTop: theme.spacing(3),
            },
            _g[theme.breakpoints.down("sm")] = {
                height: 300,
            },
            _g["&.variation-b"] = (_h = {},
                _h[theme.breakpoints.down("md")] = {
                    marginTop: "0 !important",
                    marginBottom: theme.spacing(3),
                },
                _h),
            _g["&.variation-c"] = {
                marginTop: theme.spacing(3),
            },
            _g["&.variation-d"] = {
                marginTop: theme.spacing(2),
            },
            _g),
        block1ActiveElement: {
            border: "1px dashed",
            borderColor: theme.euDesign.colors.green_primary,
        },
    });
});
