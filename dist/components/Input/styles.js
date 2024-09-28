import { makeStyles } from "@mui/styles";
export var useInputStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        inputContainer: {
            position: "relative",
            width: "100%",
            "& input": (_a = {
                    background: "transparent",
                    paddingLeft: theme.spacing(2.5),
                    width: "100%",
                    outline: "none",
                    color: theme.euDesign.colors.black,
                    padding: theme.spacing(1.8, 0),
                    fontSize: theme.typography.fontSize + 2
                },
                _a[theme.breakpoints.down("lg")] = {
                    fontSize: theme.typography.fontSize,
                },
                _a[theme.breakpoints.down("sm")] = {
                    fontSize: theme.typography.fontSize - 2,
                },
                _a.border = "1px solid ".concat(theme.euDesign.colors.light_grey),
                _a["&.validate"] = {
                    border: "1px solid ".concat(theme.euDesign.colors.danger),
                },
                _a["&:focus"] = {
                    border: "1px solid ".concat(theme.euDesign.colors.light_grey),
                },
                _a["&.white"] = {
                    border: "1px solid ".concat(theme.euDesign.colors.light_grey),
                    "&::placeholder": {
                        color: theme.euDesign.colors.white,
                    },
                },
                _a["&::placeholder"] = (_b = {
                        color: theme.euDesign.colors.neutral_100,
                        fontSize: theme.typography.fontSize + 2
                    },
                    _b[theme.breakpoints.down("lg")] = {
                        fontSize: theme.typography.fontSize,
                    },
                    _b[theme.breakpoints.down("sm")] = {
                        fontSize: theme.typography.fontSize - 2,
                    },
                    _b),
                _a),
        },
        inputLabel: {
            position: "absolute",
            top: 14,
            left: 10,
            fontSize: theme.typography.fontSize,
            color: theme.euDesign.colors.black,
            transition: "top 0.5s, font-size 0.3s",
            pointerEvents: "none",
            transform: "translateY(0)",
        },
        activeLabel: {
            top: 6,
            transform: "translateY(-100%)",
            backgroundColor: theme.euDesign.colors.white,
            "&.error": {
                color: theme.euDesign.colors.error,
            },
        },
        inputStar: {
            color: theme.euDesign.colors.danger,
        },
        inputError: {
            border: "1px solid ".concat(theme.euDesign.colors.danger, " !important"),
        },
        helperTextDefault: {
            display: "flex",
            width: "100%",
            letterSpacing: 0,
            fontSize: theme.typography.fontSize - 1,
            textAlign: "left",
            marginTop: 4,
            fontFamily: "inherit",
        },
        helperTextError: {
            color: theme.euDesign.colors.danger,
        },
    });
});
