import { makeStyles } from "@mui/styles";
export var useBackgroundStyles = makeStyles(function (theme) {
    var _a;
    return ({
        backgroundImage: (_a = {
                position: "absolute",
                right: "-5%",
                bottom: "-11%",
                width: "8%",
                "&.layout-3,&.layout-4,&.layout-5": {
                    right: "unset",
                    left: "-5%",
                }
            },
            _a[theme.breakpoints.down("xl")] = {
                bottom: "unset",
                top: "-3%",
                right: "-3%",
                "&.layout-3": {
                    right: "-5%",
                    left: "unset",
                },
                "&.layout-4,&.layout-5": {
                    top: "unset",
                    left: "2%",
                    bottom: "-5%",
                },
            },
            _a[theme.breakpoints.down("sm")] = {
                display: "none",
            },
            _a["&.layout-1"] = {
                position: "absolute",
            },
            _a),
        redBackground: function (props) {
            var _a, _b;
            return (_a = {
                    background: props.colors[900],
                    height: 15,
                    width: 15,
                    borderRadius: 5,
                    transform: "matrix(0.91, -0.42, 0.42, 0.91, 0, 0)",
                    position: "absolute",
                    top: "-7%",
                    right: "-3%",
                    "&.layout-3,&.layout-2,&.layout-1": {
                        top: "-3%",
                        right: "-2%",
                    },
                    "&.dot-2": (_b = {
                            left: "35%",
                            bottom: "-7%",
                            top: "unset"
                        },
                        _b[theme.breakpoints.down("sm")] = {
                            display: "none",
                        },
                        _b)
                },
                _a[theme.breakpoints.down("xl")] = {
                    display: "none",
                },
                _a);
        },
        goldBackground: function (props) {
            var _a, _b;
            return (_a = {
                    background: props.colors[900],
                    height: 15,
                    width: 15,
                    borderRadius: 5,
                    transform: "matrix(0.91, -0.42, 0.42, 0.91, 0, 0)",
                    position: "absolute",
                    top: "-10%",
                    left: "40%"
                },
                _a[theme.breakpoints.down("xl")] = {
                    bottom: "-4%",
                    right: "-2%",
                    top: "unset",
                    left: "unset",
                    "&.dot-2": {
                        bottom: "-2%",
                        right: "8%",
                    },
                    zIndex: 0.5,
                },
                _a["&.dot-2"] = (_b = {
                        top: "44%",
                        left: "-4%"
                    },
                    _b[theme.breakpoints.down("xl")] = {
                        top: "-2%",
                        bottom: "-4%",
                        "&.layout-4,&.layout-5": {
                            top: "-4% !important",
                            left: "-4% !important",
                        },
                        "&.dot-2": {
                            top: "-3%",
                            left: "-3%",
                        },
                    },
                    _b),
                _a[theme.breakpoints.down("sm")] = {
                    display: "none",
                },
                _a);
        },
    });
});
