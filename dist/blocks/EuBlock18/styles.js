import { makeStyles } from "@mui/styles";
export var useEuBlockStyles18 = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: function (props) {
            var _a, _b, _c;
            return ({
                fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body,
                color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[100],
                background: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[500],
                padding: theme.spacing(7, 0),
            });
        },
        container: (_a = {
                width: "85%",
                margin: "auto",
                maxWidth: theme.euStyles.maxWidth,
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: theme.spacing(8),
                alignItems: "center"
            },
            _a[theme.breakpoints.down("lg")] = {
                width: "90%",
                gridTemplateColumns: "1fr",
                gap: theme.spacing(6),
            },
            _a[theme.breakpoints.down("sm")] = {
                gap: theme.spacing(4),
            },
            _a),
        containerLeftSideImage: (_b = {
                width: "100%",
                height: "600px"
            },
            _b[theme.breakpoints.down("sm")] = {
                height: "400px",
            },
            _b.borderRadius = "4px",
            _b.objectFit = "cover",
            _b["&.layout-5,&.layout-3,&.layout-2"] = {
                borderRadius: "unset",
            },
            _b),
        containerLeftSide: function (props) {
            var _a, _b, _c, _d, _e, _f;
            return ({
                display: "flex",
                "&.layout-2": {
                    border: "25px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[600]),
                },
                "&.layout-3": {
                    borderBottom: "25px solid ".concat((_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[600]),
                    borderLeft: "25px solid ".concat((_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[600]),
                    borderTop: "25px solid ".concat((_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[500]),
                    borderRight: "25px solid ".concat((_e = props === null || props === void 0 ? void 0 : props.colors) === null || _e === void 0 ? void 0 : _e[500]),
                },
                "&.layout-4,&.layout-5": {
                    gridColumn: "2/3",
                    gridRow: "1/2",
                },
                "&.layout-5": {
                    padding: theme.spacing(2.5, 3),
                    border: "1px solid ".concat((_f = props === null || props === void 0 ? void 0 : props.colors) === null || _f === void 0 ? void 0 : _f[700]),
                },
            });
        },
        containerRightSide: {
            "&.layout-4,&.layout-5": {
                gridColumn: "1/2",
                gridRow: "1/2",
            },
        },
        header: function (props) {
            var _a;
            var _b;
            return (_a = {
                    fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.heading,
                    fontSize: theme.euDesign.typography.h1
                },
                _a[theme.breakpoints.down("sm")] = {
                    fontSize: theme.euDesign.typography.h3,
                    lineHeight: "45px",
                },
                _a.margin = 0,
                _a.lineHeight = "72.8px",
                _a);
        },
        textSubHeader: function (props) {
            var _a;
            return ({
                fontWeight: theme.euDesign.typography.fontWeightSemiBold,
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200],
                textTransform: "uppercase",
                fontSize: theme.typography.fontSize - 2,
            });
        },
        textCurrency: function (props) {
            var _a;
            return ({
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300],
            });
        },
        textPrice: function (props) {
            var _a;
            return ({
                fontSize: theme.euDesign.typography.h2,
                margin: 0,
                fontWeight: theme.euDesign.typography.fontWeightBold,
                paddingTop: theme.spacing(3),
                marginTop: theme.spacing(3),
                borderTop: "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]),
            });
        },
        addToCartContainer: function (props) {
            var _a;
            var _b;
            return (_a = {
                    borderTop: "1px solid ".concat((_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[400]),
                    paddingTop: theme.spacing(3),
                    marginTop: theme.spacing(3),
                    display: "flex",
                    justifyContent: "center",
                    gap: theme.spacing(2.5),
                    flexWrap: "wrap"
                },
                _a[theme.breakpoints.up("sm")] = {
                    flexWrap: "nowrap",
                },
                _a);
        },
        addQuantity: function (props) {
            var _a;
            var _b, _c;
            return (_a = {
                    display: "flex",
                    border: "1px solid ".concat((_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[600]),
                    color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[600],
                    width: "170px",
                    height: "59px",
                    borderRadius: "30px",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    fontSize: theme.euDesign.typography.h5
                },
                _a[theme.breakpoints.down("sm")] = {
                    width: "200px",
                },
                _a);
        },
        divisionLine: function (props) {
            var _a;
            return ({
                width: "100%",
                height: "2px",
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400],
            });
        },
        descriptionHeader: {
            fontWeight: theme.euDesign.typography.fontWeightBold,
        },
        descriptionContainer: function (props) {
            var _a;
            return ({
                paddingTop: theme.spacing(2),
                marginTop: theme.spacing(2),
                borderTop: "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]),
            });
        },
        successModal: function (props) {
            var _a;
            var _b, _c, _d;
            return (_a = {
                    color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[300],
                    fontSize: theme.euDesign.typography.h5,
                    display: "flex",
                    gap: theme.spacing(1),
                    marginTop: "20vh",
                    padding: theme.spacing(2, 4),
                    alignItems: "center",
                    justifyContent: "space-between",
                    "&.success": {
                        color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[600],
                    },
                    "& .options": {
                        fontSize: theme.typography.fontSize + 6,
                        fontWeight: theme.euDesign.typography.fontWeightSemiBold,
                        color: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[100],
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
        quantitySign: {
            cursor: "pointer",
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
        block18ActiveElement: {
            border: "1px dashed",
            borderColor: theme.euDesign.colors.green_primary,
        },
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
