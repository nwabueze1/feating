import { makeStyles } from "@mui/styles";
export var useEuBlock4ListStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return ({
        blockList: {
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(3),
        },
        blockImage: {
            height: "90%",
            width: "90%",
            zIndex: 11,
            position: "relative",
            "&.leaves": (_a = {
                    width: "70%",
                    height: "70%"
                },
                _a[theme.breakpoints.down("xl")] = {
                    width: "80%",
                    height: "80%",
                },
                _a[theme.breakpoints.down("lg")] = {
                    display: "none",
                },
                _a),
            "&.layout-3,&.layout-4,&.layout-2": (_b = {},
                _b[theme.breakpoints.only("xl")] = {
                    width: "100%",
                    height: "100%",
                },
                _b),
            "&.layout-5": (_c = {
                    width: "100%",
                    height: "100%",
                    right: 0
                },
                _c[theme.breakpoints.up("xl")] = {
                    right: 62,
                    top: 22,
                },
                _c[theme.breakpoints.only("xl")] = {
                    width: "107%",
                    right: 34,
                    top: 61,
                },
                _c[theme.breakpoints.down("lg")] = {},
                _c),
            "&.layout-3,&.layout-2,&.layout-4,&.layout-1,&.layout-5": {
                "@media(min-width:1280px)": {
                    width: "100%",
                    height: "100%",
                },
            },
        },
        imageOverlay: (_d = {
                width: "411px",
                height: "397px",
                background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
                position: "absolute",
                borderRadius: theme.spacing(12.5, 12.5, 0, 12.5),
                top: "-19%",
                zIndex: 2,
                "&.layout-1": {
                    right: 0,
                },
                "&.layout-3, &.layout-4,&.layout-2": (_e = {
                        top: "-4%"
                    },
                    _e[theme.breakpoints.only("xs")] = {
                        width: "411px",
                        height: "397px",
                    },
                    _e[theme.breakpoints.down("lg")] = {
                        top: "6%",
                        width: "54%",
                        height: "74%",
                    },
                    _e),
                "&.layout-5": (_f = {},
                    _f[theme.breakpoints.up("xl")] = {
                        top: "0px",
                    },
                    _f[theme.breakpoints.only("xl")] = {
                        width: " 422px",
                        height: "425px",
                    },
                    _f[theme.breakpoints.down("lg")] = {
                        top: 28,
                        right: "2%",
                        width: "57%",
                        height: "70%",
                    },
                    _f),
                "&.layout-4,&.layout-3,&.layout-2": (_g = {},
                    _g[theme.breakpoints.down("sm")] = {
                        right: "8%",
                    },
                    _g)
            },
            _d[theme.breakpoints.between("lg", "xl")] = {
                top: "-5%",
            },
            _d[theme.breakpoints.down("lg")] = {
                height: "70%",
                width: "70%",
                top: "0%",
                right: "0%",
            },
            _d),
        layout5Container: {
            display: "flex",
            gap: "36px",
            alignItems: "center",
            flexDirection: "row-reverse",
            "&.layout-5": (_h = {
                    alignItems: "center !important"
                },
                _h[theme.breakpoints.down("lg")] = {
                    flexDirection: "column",
                },
                _h),
        },
        layout5Content: {
            flex: 1,
        },
        listItemContainer: {
            "&.layout-4": {
                flexDirection: "row-reverse",
            },
        },
        list: {
            display: "flex",
            gap: theme.spacing(2),
            alignItems: "center",
        },
        listImage: (_j = {
                width: "149px",
                height: "127px"
            },
            _j[theme.breakpoints.down("sm")] = {
                width: "60%",
                height: "80px",
            },
            _j),
        listHeading: (_k = {
                fontSize: theme.euDesign.typography.bodyLg,
                color: theme.euDesign.colors.neutral_black,
                margin: theme.spacing(0, 0, 1, 0),
                fontWeight: 700,
                fontFamily: theme.euDesign.font.poppins,
                textTransform: "capitalize"
            },
            _k[theme.breakpoints.down("sm")] = {
                fontSize: theme.euDesign.typography.bodySm,
            },
            _k),
        listBody: (_l = {
                fontSize: theme.typography.fontSize,
                color: theme.euDesign.colors.black_neutral_700,
                margin: 0,
                fontFamily: theme.euDesign.font.poppins
            },
            _l[theme.breakpoints.down("sm")] = {
                fontSize: theme.euDesign.typography.bodyMin - 2,
            },
            _l),
    });
});
