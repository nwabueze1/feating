import { makeStyles } from "@mui/styles";
export var useOptionConfigStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        modalContainer: {
            width: "100%",
            height: "100%",
        },
        optionStyles: (_a = {
                padding: theme.spacing(2),
                height: "60vh",
                overflowY: "scroll"
            },
            _a[theme.breakpoints.up("md")] = {
                padding: theme.spacing(2, 4),
            },
            _a),
        successModal: function (props) {
            var _a;
            var _b, _c;
            return (_a = {
                    color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[600],
                    fontSize: theme.euDesign.typography.h5,
                    display: "flex",
                    gap: theme.spacing(1),
                    padding: theme.spacing(2, 4),
                    alignItems: "center",
                    justifyContent: "space-between",
                    "& .options": {
                        fontSize: theme.typography.fontSize + 6,
                        fontWeight: theme.euDesign.typography.fontWeightSemiBold,
                        color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[100],
                    }
                },
                _a[theme.breakpoints.down("lg")] = {
                    fontSize: theme.typography.fontSize + 2,
                },
                _a[theme.breakpoints.down("md")] = {
                    fontSize: theme.typography.fontSize + 2,
                    padding: theme.spacing(2),
                },
                _a);
        },
        successModalText: {
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(1),
        },
        close: function (props) {
            var _a;
            return ({
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[700],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                padding: theme.spacing(0.5),
                cursor: "pointer",
            });
        },
        quantity: function (props) {
            var _a;
            var _b;
            return (_a = {
                    fontSize: theme.typography.fontSize + 1,
                    color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[100]
                },
                _a[theme.breakpoints.down("md")] = {
                    fontSize: theme.typography.fontSize - 1,
                },
                _a[theme.breakpoints.down("sm")] = {
                    fontSize: theme.typography.fontSize + 4,
                },
                _a.fontWeight = theme.euDesign.typography.fontWeightBold,
                _a);
        },
        quantitySign: {
            cursor: "pointer",
        },
        divisionLine: function (props) {
            var _a;
            return ({
                width: "100%",
                height: "2px",
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400],
            });
        },
        option: {
            marginBottom: theme.spacing(2),
        },
        optionHeader: {
            fontSize: theme.typography.fontSize + 4,
            fontWeight: theme.euDesign.typography.fontWeightSemiBold,
            marginBottom: theme.spacing(2),
        },
        optionsDescription: {
            marginTop: theme.spacing(-1.6),
        },
        optionsTypes: {
            display: "flex",
            gap: theme.spacing(1),
            alignItems: "center",
        },
        optionsTypesName: {
            margin: theme.spacing(0.4, 0),
        },
        optionsButtonContainer: {
            padding: theme.spacing(3, 4),
        },
        optionPriceBox: (_b = {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "40%"
            },
            _b[theme.breakpoints.down("sm")] = {
                width: "60%",
            },
            _b),
        spinner: {
            width: "17px",
            height: "17px",
            border: "2px solid white",
            borderTop: "2px solid transparent",
            borderRadius: "50%",
            animation: "$spin 1s linear infinite",
        },
        "@keyframes spin": {
            from: {
                transform: "rotate(0deg)",
            },
            to: {
                transform: "rotate(360deg)",
            },
        },
    });
});
