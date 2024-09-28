import { makeStyles } from "@mui/styles";
export var useEuBlock16Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d;
    return ({
        root: function (props) {
            var _a;
            return ({
                padding: theme.spacing(3.75, 0),
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400],
            });
        },
        container: {
            maxWidth: theme.euStyles.maxWidth,
            width: "85%",
            margin: "0 auto",
        },
        block: (_a = {
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "4%",
                "&.layout-2,&.layout-3,&.layout-4": {
                    flexDirection: "row-reverse",
                }
            },
            _a[theme.breakpoints.down("lg")] = {
                "&.layout-3,&.layout-4,&.layout-5": {
                    width: "100%",
                },
                "&.layout-3, &.layout-4, &.layout-5": {
                    flexDirection: "column",
                    gap: theme.spacing(2),
                },
            },
            _a[theme.breakpoints.down("md")] = {
                flexDirection: "column",
                gap: theme.spacing(2),
                "&.layout-2": {
                    flexDirection: "column",
                },
            },
            _a),
        blockContent: (_b = {
                width: "48%",
                display: "flex",
                flexDirection: "column",
                "& img": {
                    minHeight: 600,
                }
            },
            _b[theme.breakpoints.down("lg")] = {
                "&.layout-3,&.layout-4,&.layout-5": {
                    width: "100%",
                },
            },
            _b[theme.breakpoints.down("md")] = {
                width: "100%",
            },
            _b),
        overline: {
            fontSize: theme.euDesign.typography.overline,
            margin: 0,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            fontWeight: 600,
        },
        heading: (_c = {
                fontSize: theme.euDesign.typography.h2,
                fontWeight: 700,
                margin: 0,
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; }
            },
            _c[theme.breakpoints.down("lg")] = {
                fontSize: theme.euDesign.typography.h3,
                "&.layout-4, &.layout-5": {
                    maxWidth: "100%",
                    marginBottom: theme.spacing(3),
                },
            },
            _c[theme.breakpoints.down("md")] = {
                "&.layout-4, &.layout-5": {
                    maxWidth: "100%",
                },
            },
            _c),
        body: (_d = {
                fontSize: theme.euDesign.typography.bodyLg,
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]; },
                margin: 0,
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; }
            },
            _d[theme.breakpoints.down("lg")] = {
                fontSize: theme.euDesign.typography.bodySm,
            },
            _d),
        block16ActiveElement: {
            border: "1px dashed",
            borderColor: theme.euDesign.colors.green_primary,
        },
    });
});
