import { makeStyles } from "@mui/styles";
export var useEuBlock7Styles = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        rootParent: function (props) {
            var _a, _b;
            return ({
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100],
                fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body,
            });
        },
        root: {
            maxWidth: theme.euStyles.maxWidth,
            width: "85%",
            margin: "0 auto",
        },
        blockContainer: {
            padding: theme.spacing(6.25, 0),
        },
        blockHeader: function (props) {
            var _a;
            return ({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: theme.spacing(1),
                textAlign: "center",
                fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading,
                "&.layout-2": {
                    alignItems: "start",
                    textAlign: "start",
                },
            });
        },
        blockOverline: function (props) {
            var _a;
            var _b;
            return (_a = {
                    textTransform: "uppercase",
                    color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[200],
                    fontSize: theme.euDesign.typography.overline,
                    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
                    margin: 0
                },
                _a[theme.breakpoints.down("lg")] = {
                    fontSize: theme.euDesign.typography.overline - 2,
                },
                _a[theme.breakpoints.down("sm")] = {
                    fontSize: theme.euDesign.typography.overline - 4,
                },
                _a);
        },
        blockHeading: function (props) {
            var _a;
            var _b;
            return (_a = {
                    margin: 0,
                    fontSize: theme.euDesign.typography.h2,
                    color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[300]
                },
                _a[theme.breakpoints.down("lg")] = {
                    fontSize: theme.euDesign.typography.h2 - 4,
                },
                _a[theme.breakpoints.down("sm")] = {
                    fontSize: theme.euDesign.typography.h2 - 6,
                },
                _a);
        },
        blockCaption: function (props) {
            var _a;
            var _b;
            return (_a = {
                    maxWidth: "45%",
                    "&.layout-2": {
                        maxWidth: "50%",
                    },
                    fontSize: theme.euDesign.typography.bodyLg,
                    color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[400],
                    margin: 0
                },
                _a[theme.breakpoints.down("xl")] = {
                    maxWidth: "80%",
                },
                _a[theme.breakpoints.down("lg")] = {
                    fontSize: theme.euDesign.typography.bodyLg - 2,
                    maxWidth: "100%",
                },
                _a[theme.breakpoints.down("lg")] = {
                    fontSize: theme.euDesign.typography.bodyLg - 4,
                    maxWidth: "100%",
                },
                _a);
        },
        productBlock: (_a = {
                display: "flex",
                marginTop: theme.spacing(6),
                gap: theme.spacing(2),
                flexWrap: "wrap"
            },
            _a[theme.breakpoints.down("md")] = {
                gap: theme.spacing(2),
                justifyContent: "center",
            },
            _a),
        button: (_b = {
                width: "35%",
                margin: "0 auto",
                marginTop: theme.spacing(1.5)
            },
            _b[theme.breakpoints.down("lg")] = {
                width: "50%",
            },
            _b[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _b),
        cardContent: (_c = {
                width: "23%",
                maxWidth: "23%"
            },
            _c[theme.breakpoints.only("xl")] = {
                width: "32%",
                maxWidth: "32%",
            },
            _c[theme.breakpoints.down("xl")] = {
                width: "32%",
                maxWidth: "32%",
            },
            _c[theme.breakpoints.down("lg")] = {
                width: "47%",
                maxWidth: "47%",
            },
            _c[theme.breakpoints.down("md")] = {
                width: "100%",
                maxWidth: "100%",
            },
            _c),
        listButtonContainer: {
            display: "flex",
            justifyContent: "center",
            textDecoration: "none",
            border: "none",
            background: "none",
            width: "fit-content",
            marginRight: "0 !important",
        },
        layout3Heading: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        listButton: function (props) {
            var _a, _b;
            return ({
                padding: theme.spacing(2.2, 3.2),
                outline: "none",
                cursor: "pointer",
                fontFamily: (_a = props.fonts) === null || _a === void 0 ? void 0 : _a.body,
                fontSize: theme.typography.fontSize + 4,
                border: "none",
                background: (_b = props.colors) === null || _b === void 0 ? void 0 : _b[700],
                color: theme.euDesign.colors.white,
                borderRadius: theme.spacing(80),
                width: "40%",
                margin: "16px auto 0 auto",
                textDecoration: "none",
            });
        },
        buttonContainer: {
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: theme.spacing(2),
            paddingTop: theme.spacing(5),
        },
        "@keyframes moveAndScaleIn": {
            "0%": {
                transform: "translateX(-100px) scale(0.5)",
                opacity: 0,
            },
            "100%": {
                transform: "translateX(0) scale(1)",
                opacity: 1,
            },
        },
        "@keyframes maskAndReveal": {
            "0%": {
                clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
                opacity: 0,
            },
            "50%": {
                clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
                opacity: 1,
            },
            "100%": {
                clipPath: "polygon(50% 0, 50% 100%, 50% 100%, 50% 0)",
                opacity: 1,
            },
        },
        block7ActiveElement: {
            border: "1px dashed",
            borderColor: theme.euDesign.colors.green_primary,
        },
    });
});
