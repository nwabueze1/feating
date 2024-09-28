import { makeStyles } from "@mui/styles";
export var useEuBlock17Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    return ({
        root: function (props) {
            var _a;
            var _b;
            return (_a = {
                    padding: theme.spacing(5, 0, 8.5, 0),
                    background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[900],
                    overflowWrap: "anywhere"
                },
                _a[theme.breakpoints.down("lg")] = {
                    paddingBottom: 0,
                },
                _a);
        },
        container: (_a = {
                maxWidth: theme.euStyles.maxWidth,
                width: "85%",
                margin: "0 auto",
                position: "relative",
                display: "flex",
                gap: theme.spacing(14),
                "&.layout-2": (_b = {
                        flexDirection: "row-reverse",
                        gap: theme.spacing(4)
                    },
                    _b[theme.breakpoints.down("lg")] = {
                        width: "100%",
                        flexDirection: "column",
                        gap: 0,
                    },
                    _b)
            },
            _a[theme.breakpoints.down("lg")] = {
                width: "100%",
                flexDirection: "column",
                gap: 0,
            },
            _a),
        innerHeader: {
            "&.layout-1": {
                display: "none",
            },
        },
        categoryContainer: {
            display: "flex",
            gap: theme.spacing(1),
            alignItems: "center",
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            "&.layout-1": (_c = {
                    width: "85%",
                    margin: "0 auto"
                },
                _c[theme.breakpoints.down("lg")] = {
                    width: "100%",
                },
                _c),
            "&.layout-2, &.layout-3": {
                display: "none",
            },
        },
        category: {
            margin: 0,
            fontSize: theme.typography.fontSize - 2,
            fontWeight: theme.typography.fontWeightMedium,
            textTransform: "uppercase",
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[950]; },
        },
        dash: {
            height: 0.5,
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[950]; },
            width: 15,
        },
        readTime: {
            margin: 0,
            fontSize: theme.typography.fontSize - 2,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
        },
        title: (_d = {
                fontWeight: theme.typography.fontWeightBold,
                fontSize: theme.typography.fontSize * 4,
                lineHeight: "72px",
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
                margin: theme.spacing(2, 0)
            },
            _d[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize + 34,
            },
            _d[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize + 6,
                lineHeight: "32px",
            },
            _d),
        postedTime: (_e = {
                width: "35%",
                marginTop: theme.spacing(2),
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[600]; },
                fontSize: theme.typography.fontSize - 2,
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
                padding: theme.spacing(0.5, 0),
                borderTop: function (props) { var _a; return "0.5px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[700]); }
            },
            _e[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _e),
        leftSection: (_f = {
                width: "70%",
                boxSizing: "border-box"
            },
            _f[theme.breakpoints.down("lg")] = {
                width: "100%",
                padding: theme.spacing(0, 5),
            },
            _f),
        rightSection: (_g = {
                width: "35%",
                height: "fit-content",
                position: "sticky",
                boxSizing: "border-box",
                top: 0,
                background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
                marginTop: theme.spacing(6),
                padding: theme.spacing(6.5, 6, 12, 6),
                "&.layout-2": (_h = {
                        marginTop: 0
                    },
                    _h[theme.breakpoints.down("lg")] = {
                        width: "100%",
                        padding: theme.spacing(10, 5),
                        marginTop: theme.spacing(9.5),
                    },
                    _h[theme.breakpoints.down("sm")] = {
                        width: "100%",
                        padding: theme.spacing(5, 2),
                    },
                    _h)
            },
            _g[theme.breakpoints.down("lg")] = {
                width: "100%",
                padding: theme.spacing(10, 5),
                marginTop: theme.spacing(9.5),
            },
            _g["&.layout-3"] = (_j = {
                    marginTop: 0
                },
                _j[theme.breakpoints.down("lg")] = {
                    width: "100%",
                    padding: theme.spacing(10, 5),
                    marginTop: theme.spacing(9.5),
                },
                _j[theme.breakpoints.down("sm")] = {
                    width: "100%",
                    padding: theme.spacing(5, 2),
                },
                _j),
            _g[theme.breakpoints.down("sm")] = {
                width: "100%",
                padding: theme.spacing(5, 2),
            },
            _g),
        headerImageContainer: (_k = {
                padding: theme.spacing(6, 0)
            },
            _k[theme.breakpoints.down("lg")] = {
                padding: theme.spacing(5, 0),
            },
            _k[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(2, 0),
            },
            _k),
        headerImage: {
            width: "100%",
            aspectRatio: "3 / 2.5",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        },
        featuredImageAttribution: {
            margin: theme.spacing(2, 0, 0, 0),
            fontSize: theme.typography.fontSize + 1,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
            "& a": {
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
            }
        },
        latestArticleHeading: {
            fontSize: theme.typography.fontSize + 10,
            margin: 0,
        },
        bottomIcon: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: 80,
            margin: "0 auto",
            paddingTop: theme.spacing(2),
            borderTop: function (props) { var _a; return "0.5px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]); },
            "& svg": {
                fontSize: theme.typography.fontSize * 2,
            },
        },
        engagementContainer: {
            display: "flex",
            gap: theme.spacing(3),
            alignItems: "center",
        },
        iconBox: {
            display: "flex",
            alignItems: "center",
        },
        loadContent: function (props) {
            var _a, _b, _c;
            var _d, _e;
            return ({
                marginTop: theme.spacing(5, 0, 6, 0),
                fontFamily: (_d = props === null || props === void 0 ? void 0 : props.fonts) === null || _d === void 0 ? void 0 : _d.body,
                "& img": (_a = {
                        width: "100%",
                        height: 450,
                        objectFit: "cover"
                    },
                    _a[theme.breakpoints.down("sm")] = {
                        height: 250,
                    },
                    _a),
                "& iframe": (_b = {
                        width: "100%",
                        height: "500px"
                    },
                    _b[theme.breakpoints.down("lg")] = {
                        height: "300px",
                    },
                    _b),
                "&.layout_5, &.layout_4": {
                    marginTop: 0,
                },
                "& p": (_c = {
                        letterSpacing: "0.2px",
                        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
                        fontSize: theme.typography.fontSize + 3,
                        color: (_e = props === null || props === void 0 ? void 0 : props.colors) === null || _e === void 0 ? void 0 : _e[400]
                    },
                    _c[theme.breakpoints.down("sm")] = {
                        fontSize: theme.typography.fontSize,
                        lineHeight: "21px",
                    },
                    _c),
            });
        },
        block19ActiveElement: {
            border: "1px dashed",
            borderColor: theme.euDesign.colors.green_primary,
        },
        horizontalLine: {
            display: "block",
            height: "1px",
            border: "0",
            borderTop: "1px solid #acf0e6",
            padding: "0"
        },
        authorContainer: function (props) {
            var _a;
            var _b;
            return (_a = {
                    padding: theme.spacing(2, 0),
                    display: "flex",
                    fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body
                },
                _a[theme.breakpoints.down("sm")] = {
                    flexDirection: "column",
                },
                _a);
        },
        authorItem: (_l = {
                display: "flex",
                marginRight: theme.spacing(4)
            },
            _l[theme.breakpoints.down("sm")] = {
                marginBottom: theme.spacing(2),
            },
            _l),
        authorImageContainer: (_m = {
                marginRight: "10px",
                width: "48px",
                height: "48px"
            },
            _m[theme.breakpoints.down("sm")] = {
                marginBottom: theme.spacing(2),
            },
            _m),
        authorImage: {
            borderRadius: "100%",
            width: "48px",
            height: "48px",
            objectFit: "cover",
        },
        authorTitle: {
            fontSize: theme.typography.fontSize,
            marginBottom: "5px"
        },
        authorContent: {
            fontWeight: "600",
            fontSize: theme.typography.fontSize + 3
        }
    });
});
