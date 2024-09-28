import { makeStyles } from "@mui/styles";
export var useEuBlock13Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return ({
        root: function (props) {
            var _a;
            return ({
                padding: theme.spacing(6.25, 0),
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[600],
            });
        },
        container: {
            maxWidth: theme.euStyles.maxWidth,
            width: "85%",
            margin: "0 auto",
        },
        overline: (_a = {
                fontSize: theme.euDesign.typography.overline,
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
                margin: 0,
                fontWeight: theme.euDesign.typography.fontWeightSemiBold,
                textTransform: "uppercase"
            },
            _a[theme.breakpoints.down("sm")] = {
                fontSize: theme.euDesign.typography.overlineSmall,
            },
            _a),
        title: (_b = {
                fontSize: theme.euDesign.typography.h2,
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
                margin: 0,
                fontWeight: theme.euDesign.typography.fontWeightBold
            },
            _b[theme.breakpoints.down("sm")] = {
                fontSize: theme.euDesign.typography.h3,
                lineHeight: theme.spacing(5.75),
            },
            _b),
        caption: (_c = {
                fontSize: theme.euDesign.typography.bodyLg,
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]; },
                margin: 0,
                fontWeight: theme.euDesign.typography.fontWeightRegular
            },
            _c[theme.breakpoints.down("sm")] = {
                fontSize: theme.euDesign.typography.bodySm,
            },
            _c),
        blockHeading: (_d = {
                textAlign: "center",
                maxWidth: "60%",
                margin: "0 auto",
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing(1.3),
                "&.layout-4": {
                    textAlign: "start",
                }
            },
            _d[theme.breakpoints.down("lg")] = {
                maxWidth: "100%",
                "&.layout-4": {
                    textAlign: "start",
                },
            },
            _d[theme.breakpoints.down("sm")] = {
                textAlign: "center",
                "&.layout-2, &.layout-3": {
                    textAlign: "center",
                },
                gap: theme.spacing(1),
            },
            _d),
        menuHeader: (_e = {
                display: "flex",
                gap: theme.spacing(7.5),
                margin: theme.spacing(4.25, 0),
                alignItems: "center"
            },
            _e[theme.breakpoints.down("sm")] = {
                flexDirection: "column",
            },
            _e[theme.breakpoints.down("sm")] = {
                gap: theme.spacing(2.25),
                flexDirection: "column",
                margin: theme.spacing(2.25, 0),
            },
            _e),
        menuHeading: (_f = {
                width: "25%"
            },
            _f[theme.breakpoints.down("lg")] = {
                display: "none",
            },
            _f[theme.breakpoints.down("sm")] = {
                display: "none",
                width: "100%",
            },
            _f["&.layout-2,&.layout-3,&.layout-4"] = {
                display: "none",
            },
            _f),
        menuTitle: (_g = {
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
                fontSize: theme.euDesign.typography.h4,
                fontWeight: theme.euDesign.typography.fontWeightBold,
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; }
            },
            _g[theme.breakpoints.down("sm")] = {
                fontSize: theme.euDesign.typography.h5,
                margin: theme.spacing(3, 0, 1.5, 0),
            },
            _g.margin = 0,
            _g[theme.breakpoints.down("sm")] = {
                display: "none",
            },
            _g),
        menuSearchBar: (_h = {
                width: "75%"
            },
            _h[theme.breakpoints.down("lg")] = {
                width: "100%",
            },
            _h["&.layout-2,&.layout-3, &.layout-4"] = {
                margin: "0 auto",
                marginTop: theme.spacing(2.5),
            },
            _h),
        block: {
            display: "flex",
            gap: theme.spacing(7.5),
        },
        menuCategoryContainer: (_j = {
                width: "25%",
                "&.layout-2,&.layout-3,&.layout-4": {
                    display: "none",
                }
            },
            _j[theme.breakpoints.down("lg")] = {
                display: "none",
            },
            _j),
        menuItemsContainer: (_k = {
                width: "75%",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: theme.spacing(2),
                "&.layout-2, &.layout-3, &.layout-4": {
                    width: "100%",
                    gridTemplateColumns: "repeat(4, 1fr)",
                }
            },
            _k[theme.breakpoints.only("xl")] = {
                gridTemplateColumns: "repeat(3, 1fr)",
            },
            _k[theme.breakpoints.down("xl")] = {
                gridTemplateColumns: "repeat(2, 1fr) !important",
            },
            _k[theme.breakpoints.down("lg")] = {
                width: "100%",
                gridTemplateColumns: "repeat(2, 1fr) !important",
            },
            _k[theme.breakpoints.down("md")] = {
                width: "100%",
                gridTemplateColumns: "repeat(1, 1fr) !important",
            },
            _k),
        menuCategory: {
            gridColumn: "1",
            gridRow: "span",
        },
        menuContent: {
            gridColumn: "span 3",
        },
        horizontalMenuContainer: (_l = {
                width: "60%",
                position: "sticky",
                top: 0,
                margin: "0 auto"
            },
            _l[theme.breakpoints.down("lg")] = {
                width: "100%",
            },
            _l[theme.breakpoints.down("sm")] = {
                margin: theme.spacing(2.5, 0),
            },
            _l.zIndex = 10,
            _l),
        productsContainer: {
            position: "relative",
        },
        block13ActiveElement: {
            border: "1px dashed",
            borderColor: theme.euDesign.colors.green_primary,
        },
    });
});
