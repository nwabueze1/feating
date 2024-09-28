import { makeStyles } from "@mui/styles";
export var useCartSummaryStyles = makeStyles(function (theme) { return ({
    root: function (props) {
        var _a;
        return ({
            border: "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[800]),
            borderRadius: "4px",
            padding: theme.spacing(5, 6),
        });
    },
    header: {
        fontSize: theme.euDesign.typography.h5,
        fontWeight: theme.euDesign.typography.fontWeightBold,
        textAlign: "center",
        paddingBottom: theme.spacing(2.5),
        "& p": {
            paddingBottom: theme.spacing(2),
        },
    },
    subtotal: {
        display: "flex",
        justifyContent: "space-between",
    },
    buttonContainer: {
        paddingTop: theme.spacing(5),
    },
    subtotalValue: {
        fontWeight: theme.euDesign.typography.fontWeightSemiBold,
    },
    buttonText: {
        textTransform: "capitalize",
        margin: 0,
    },
}); });
