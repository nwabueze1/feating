import { makeStyles } from "@mui/styles";
export var usePaymentStyles = makeStyles(function (theme) { return ({
    root: function (props) {
        var _a;
        return ({
            border: "1px solid #FD6F87",
            padding: theme.spacing(4),
            borderRadius: "4px",
            fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body,
        });
    },
    paymentHeading: function (props) {
        var _a;
        return ({
            fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading,
            fontWeight: theme.euDesign.typography.fontWeightBold,
            fontSize: theme.euDesign.typography.fontSize * 1.5,
            marginBottom: theme.spacing(0.5),
            color: "#272727",
        });
    },
    paymentDescription: {
        fontSize: theme.euDesign.typography.fontSize,
        marginBottom: theme.spacing(3),
    },
    paymentAmount: {
        color: "#E32D4C",
        fontSize: theme.euDesign.typography.fontSize + 4,
        fontWeight: theme.euDesign.typography.fontWeightSemiBold,
        marginBottom: theme.spacing(3),
    },
    paymentComponentHeading: {
        display: "none",
    },
    paymentComponentSubheading: {
        display: "none",
    },
    paymentComponentOption: function (props) {
        var _a, _b;
        return ({
            borderBottom: "1px solid #F2F2F2",
            padding: "".concat(theme.spacing(2.5), " !important"),
            marginBottom: "0px !important",
            "& .custom__radio": {
                position: "relative",
                left: -4,
                width: "9px !important",
                height: "9px !important",
                opacity: "1 !important",
            },
            "& input:checked ~ .custom__radio": {
                backgroundColor: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300],
                outline: "2px solid ".concat((_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[300]),
            },
        });
    },
    paymentComponentButton: function (props) {
        var _a, _b, _c;
        return ({
            borderRadius: "100px !important",
            marginTop: "".concat(theme.spacing(4), " !important"),
            background: "".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300], " !important"),
            color: "".concat((_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[500], " !important"),
            fontFamily: (_c = props === null || props === void 0 ? void 0 : props.fonts) === null || _c === void 0 ? void 0 : _c.body,
            padding: "".concat(theme.spacing(2.5, 3), " !important"),
        });
    },
}); });
