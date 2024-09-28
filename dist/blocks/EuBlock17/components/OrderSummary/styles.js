import { makeStyles } from "@mui/styles";
export var useOrderSummaryStyles = makeStyles(function (theme) { return ({
    root: function (props) {
        var _a;
        return ({
            border: "1px solid #FD6F87",
            padding: theme.spacing(4),
            borderRadius: "4px",
            fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body,
        });
    },
    summaryHeading: function (props) {
        var _a;
        return ({
            fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading,
            fontWeight: theme.euDesign.typography.fontWeightBold,
            fontSize: theme.euDesign.typography.fontSize * 1.5,
            textAlign: "center",
            color: "#272727",
            marginBottom: theme.spacing(4),
        });
    },
    summaryParent: {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(3),
    },
    summary: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: theme.euDesign.typography.fontSize + 2,
    },
    summaryTotal: {
        fontSize: theme.euDesign.typography.fontSize + 4,
    },
    summaryItemBold: {
        fontWeight: theme.euDesign.typography.fontWeightSemiBold,
    },
    summaryButton: function (props) {
        var _a, _b;
        return ({
            background: "".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300], " !important"),
            color: "".concat((_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[1000], " !important"),
            marginRight: "0 !important",
            "&:hover,&:focus, &:active": {
                borderColor: "unset !important",
            },
        });
    },
}); });
