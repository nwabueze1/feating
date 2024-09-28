import { makeStyles } from "@mui/styles";
export var useRelatedPostStyles = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        root: {
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            "& a": {
                textDecoration: "none",
            },
        },
        thumbnailContainer: (_a = {
                position: "relative"
            },
            _a[theme.breakpoints.down("lg")] = {
                display: "flex",
            },
            _a),
        cardContent: (_b = {
                marginBottom: theme.spacing(3)
            },
            _b[theme.breakpoints.down("lg")] = {
                minWidth: 360,
            },
            _b[theme.breakpoints.down("sm")] = {
                minWidth: 300,
            },
            _b["&.layout-3"] = (_c = {
                    padding: theme.spacing(2),
                    background: theme.euDesign.colors.white,
                    borderRadius: "12px"
                },
                _c[theme.breakpoints.down("lg")] = {
                    minWidth: 400,
                },
                _c[theme.breakpoints.down("sm")] = {
                    minWidth: 300,
                },
                _c),
            _b),
        latestArticleHeading: {
            fontSize: theme.typography.fontSize + 10,
            marginBottom: theme.spacing(3),
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            fontWeight: theme.typography.fontWeightBold,
        },
        datePosted: {
            opacity: 0.5,
            color: theme.euDesign.colors.neutral_500,
            marginTop: theme.spacing(0.5),
            fontSize: theme.typography.fontSize - 2,
        },
        categoryContainer: {
            display: "flex",
            gap: theme.spacing(1),
            alignItems: "center",
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
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
        backgroundImage: {
            height: 240,
            marginBottom: theme.spacing(2),
            backgroundSize: "cover",
            "&.layout-3": {
                borderRadius: "12px",
            },
        },
        title: {
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500]; },
            fontSize: theme.typography.fontSize + 3,
            display: "-webkit-box",
            "-webkit-line-clamp": 2,
            "-webkit-box-orient": "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        separator: {
            width: "100%",
            height: 0.5,
            margin: theme.spacing(0.5, 0),
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[700]; },
            opacity: 0.5,
        },
        scrollButton: function (props) {
            var _a;
            var _b, _c, _d, _e, _f;
            return (_a = {
                    width: 64,
                    height: 64,
                    background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[300],
                    color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[900],
                    fontSize: theme.typography.fontSize - 4,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "100%",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    transition: "all ease-in .5s",
                    position: "absolute",
                    top: "30%",
                    right: "-2%",
                    bottom: "50%",
                    "&:hover": {
                        color: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[500],
                        cursor: "pointer",
                    },
                    "& svg": {
                        fontSize: theme.typography.fontSize,
                        fontWeight: 600,
                    },
                    "&.left": {
                        right: "unset",
                        left: "-2%",
                    },
                    "&:disabled": {
                        color: (_e = props === null || props === void 0 ? void 0 : props.colors) === null || _e === void 0 ? void 0 : _e[200],
                        background: (_f = props === null || props === void 0 ? void 0 : props.colors) === null || _f === void 0 ? void 0 : _f[800],
                        cursor: "auto",
                    }
                },
                _a[theme.breakpoints.down("sm")] = {
                    display: "none",
                },
                _a);
        },
        button: {
            marginTop: theme.spacing(1),
        }
    });
});
