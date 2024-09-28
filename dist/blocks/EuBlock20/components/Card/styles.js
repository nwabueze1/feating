import { makeStyles } from "@mui/styles";
export var useCardStyles = makeStyles(function (theme) { return ({
    root: {
        width: "100%",
        overflowWrap: "anywhere",
        "&.contained": {
            padding: theme.spacing(2),
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[900]; },
            border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[1000]); },
            borderRadius: theme.spacing(1.4),
        },
    },
    imageContainer: {
        width: "100%",
        height: "200px",
        overflow: "hidden",
        position: "relative",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: theme.spacing(0.5),
    },
    anchorTag: {
        textDecoration: "none",
    },
    overlay: {
        background: function (props) { var _a; return "linear-gradient(180.39deg, ".concat(theme.euDesign.shadows[400], " 69.89%, ").concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200], " 99.66%)"); },
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
    },
    header: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1),
        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
    },
    lineSeparator: {
        width: 15,
        border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500]); },
    },
    overline: {
        color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500]; },
        fontSize: theme.euDesign.typography.overlineSmall,
        margin: theme.spacing(1, 0),
        textTransform: "uppercase",
        letterSpacing: "0.16em",
        fontWeight: 600,
    },
    timer: {
        fontWeight: 400,
        color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
        fontSize: theme.euDesign.typography.caption,
        margin: 0,
    },
    topic: {
        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        fontWeight: theme.euDesign.typography.fontWeightBold,
    },
    title: {
        margin: theme.spacing(1, 0, 1, 0),
        color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        fontSize: theme.euDesign.typography.bodyMin,
        textDecoration: "none",
        "&:hover": {
            cursor: "pointer",
            textDecoration: "underline",
        },
        "&.contained": {
            ":hover": {
                cursor: "auto",
                textDecoration: "none",
            },
        },
        display: "-webkit-box",
        "-webkit-line-clamp": 3,
        "-webkit-box-orient": "vertical",
        overflow: "hidden",
    },
    subtitle: {
        margin: theme.spacing(1, 0),
        color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500]; },
        fontSize: theme.euDesign.typography.bodyMin,
        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        display: "-webkit-box",
        "-webkit-line-clamp": 2,
        "-webkit-box-orient": "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    separator: {
        width: "100%",
        height: 1,
        margin: theme.spacing(1, 0),
        background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[700]; },
        opacity: 0.5,
    },
    datePosted: {
        color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
        fontSize: theme.euDesign.typography.caption,
        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        margin: theme.spacing(1, 0),
    },
}); });
