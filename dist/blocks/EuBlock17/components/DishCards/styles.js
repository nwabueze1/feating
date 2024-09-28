import { makeStyles } from "@mui/styles";
export var useCartCardStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: {
            "& p": {
                margin: 0,
            },
            border: "1px solid #F2F2F2",
            width: "100%",
        },
        container: function (props) {
            var _a;
            var _b;
            return (_a = {
                    display: "grid",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gridTemplateColumns: "18% 60% 14%",
                    background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[700],
                    padding: theme.spacing(3)
                },
                _a[theme.breakpoints.down("md")] = {
                    gridTemplateColumns: "25% 70%",
                },
                _a[theme.breakpoints.down("sm")] = {
                    gridTemplateColumns: "100% !important",
                },
                _a);
        },
        cartCardImage: {
            width: "100%",
            height: "120px",
            borderRadius: "5px",
            objectFit: "cover",
        },
        textContainer: {
            width: "100%",
        },
        textName: {
            fontSize: theme.typography.fontSize + 6,
            margin: theme.spacing(0, 0, 0.5, 0),
            fontWeight: theme.euDesign.typography.fontWeightSemiBold,
        },
        optionContainer: {
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(1),
            fontSize: theme.typography.fontSize - 2,
            marginBottom: theme.spacing(1),
        },
        optionText: {
            fontWeight: theme.typography.fontWeightMedium,
        },
        priceContainer: {
            fontSize: theme.typography.fontSize + 6,
            fontWeight: theme.euDesign.typography.fontWeightSemiBold,
        },
        currency: function (props) {
            var _a;
            return ({
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[600],
            });
        },
        addQuantity: function (props) {
            var _a;
            var _b, _c;
            return ({
                display: "flex",
                border: "1px solid ".concat((_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[600]),
                color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[600],
                width: "100%",
                height: "32px",
                borderRadius: "30px",
                justifyContent: "space-evenly",
                alignItems: "center",
                fontSize: theme.euDesign.typography.h5,
                "&.mobile": (_a = {
                        display: "none"
                    },
                    _a[theme.breakpoints.down("md")] = {
                        display: "flex",
                        width: "100px",
                        height: "25px",
                        fontSize: theme.typography.fontSize + 3,
                    },
                    _a),
            });
        },
        addQuantityContainer: (_a = {},
            _a[theme.breakpoints.down("md")] = {
                display: "none",
            },
            _a),
        quantity: function (props) {
            var _a;
            var _b;
            return (_a = {
                    fontSize: theme.typography.fontSize + 1,
                    color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[200]
                },
                _a[theme.breakpoints.down("md")] = {
                    fontSize: theme.typography.fontSize - 1,
                },
                _a);
        },
        removal: {
            paddingTop: theme.spacing(4),
            display: "flex",
            gap: theme.spacing(1.5),
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "& span": {
                fontSize: theme.euDesign.typography.fontSize + 2,
            },
            "& .icon": {
                fontSize: theme.euDesign.typography.fontSize + 6,
            },
        },
        quantitySign: {
            cursor: "pointer",
        },
        priceWrapper: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        removalMobile: (_b = {
                paddingTop: theme.spacing(1),
                display: "none",
                fontSize: theme.euDesign.typography.fontSize + 10
            },
            _b[theme.breakpoints.down("md")] = {
                display: "block",
            },
            _b),
        optionName: {
            paddingRight: theme.spacing(0.5),
        },
        dishSpinnerParent: function (props) {
            var _a;
            return ({
                display: "inline",
                position: "relative",
                top: 1.5,
                marginLeft: theme.spacing(1.5),
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300],
            });
        },
    });
});
