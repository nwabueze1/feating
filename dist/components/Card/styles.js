import { makeStyles } from "@mui/styles";
export var useCardStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        card: function (props) { return ({
            position: "relative",
            backgroundColor: theme.euDesign.colors.white,
            borderRadius: "12px",
            border: "1px solid ".concat(theme.euDesign.colors.neutral300),
            flex: "0 0 auto",
            boxSizing: "border-box",
            padding: theme.spacing(2),
            transition: "box-shadow .3s ease-out",
            boxShadow: (props === null || props === void 0 ? void 0 : props.hasShadow) ? "0px 4px 64px ".concat(theme.euDesign.shadows[100]) : "unset",
            "&:hover": {
                boxShadow: "0px 4px 64px ".concat(theme.euDesign.shadows[100]),
            },
        }); },
        card_image_container: {
            overflow: "hidden",
            borderRadius: theme.spacing(1.5),
            position: "relative",
            maxHeight: 200,
        },
        overlay: {
            background: "linear-gradient(180.39deg, ".concat(theme.euDesign.shadows[200], " 69.89%, ").concat(theme.euDesign.colors.black, " 99.66%)"),
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
        card_image: {
            width: "100%",
            height: "200px",
            objectFit: "cover",
        },
        card_title: (_a = {
                margin: theme.spacing(1.5, 0, 0, 0),
                color: theme.euDesign.colors.neutral_black,
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: theme.euDesign.typography.cardHeading - 3
            },
            _a[theme.breakpoints.down("lg")] = {
                fontSize: theme.euDesign.typography.cardHeading - 5,
            },
            _a[theme.breakpoints.down("sm")] = {
                fontSize: theme.euDesign.typography.cardHeading - 7,
            },
            _a),
        card_subtitle: (_b = {
                fontSize: theme.euDesign.typography.bodyMin,
                fontWeight: 400,
                fontFamily: "Poppins",
                display: "-webkit-box",
                "-webkit-line-clamp": 2,
                "-webkit-box-orient": "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                margin: theme.spacing(1, 0)
            },
            _b[theme.breakpoints.down("lg")] = {
                fontSize: theme.euDesign.typography.bodyMin - 2,
            },
            _b[theme.breakpoints.down("sm")] = {
                fontSize: theme.euDesign.typography.bodyMin - 3,
            },
            _b),
        card_button: function (props) {
            var _a;
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
            return (_a = {
                    outline: "none",
                    padding: theme.spacing(1, 2),
                    color: (_d = (_c = (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b.action) === null || _c === void 0 ? void 0 : _c.color) !== null && _d !== void 0 ? _d : theme.euDesign.colors.primary,
                    border: "1px solid ".concat((_g = (_f = (_e = props === null || props === void 0 ? void 0 : props.colors) === null || _e === void 0 ? void 0 : _e.action) === null || _f === void 0 ? void 0 : _f.color) !== null && _g !== void 0 ? _g : theme.euDesign.colors.primary),
                    fontSize: theme.typography.fontSize,
                    background: (_k = (_j = (_h = props === null || props === void 0 ? void 0 : props.colors) === null || _h === void 0 ? void 0 : _h.action) === null || _j === void 0 ? void 0 : _j.background) !== null && _k !== void 0 ? _k : "transparent",
                    fontWeight: 500,
                    fontFamily: "Poppins",
                    borderRadius: "100px",
                    display: "inline-flex",
                    alignItems: "center",
                    textDecoration: "none",
                    "&:hover,&:focus,&:active": {
                        background: (_o = (_m = (_l = props === null || props === void 0 ? void 0 : props.colors) === null || _l === void 0 ? void 0 : _l.action) === null || _m === void 0 ? void 0 : _m.color) !== null && _o !== void 0 ? _o : theme.euDesign.colors.primary,
                        border: "1px solid ".concat((_r = (_q = (_p = props === null || props === void 0 ? void 0 : props.colors) === null || _p === void 0 ? void 0 : _p.action) === null || _q === void 0 ? void 0 : _q.color) !== null && _r !== void 0 ? _r : theme.euDesign.colors.primary),
                        cursor: "pointer",
                        color: (_u = (_t = (_s = props === null || props === void 0 ? void 0 : props.colors) === null || _s === void 0 ? void 0 : _s.action) === null || _t === void 0 ? void 0 : _t.background) !== null && _u !== void 0 ? _u : theme.euDesign.colors.white,
                    }
                },
                _a[theme.breakpoints.down("xl")] = {
                    fontSize: theme.typography.fontSize - 2,
                },
                _a);
        },
        card_button_icon: {
            fontWeight: "bolder",
            fontSize: theme.typography.fontSize + 2,
            display: "flex",
            alignItems: "center",
            transition: "transform .4s ease-in-out",
            translateStyle: "preserve-3d",
            marginLeft: theme.spacing(0.5),
            "&:hover": {
                transform: "translateZ(10px)",
                cursor: "pointer",
            },
        },
        rating_container: {
            display: "flex",
            gap: theme.spacing(0.5),
        },
        rating: {
            fill: theme.euDesign.colors.gold,
            fontSize: theme.typography.fontSize + 3,
        },
        price: {
            fontFamily: "Poppins",
            fontSize: theme.euDesign.typography.price - 4,
            color: theme.euDesign.colors.neutral_black,
            margin: theme.spacing(1.1, 0),
        },
        currency: function (props) {
            var _a, _b;
            return ({
                color: (_b = (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a.currency) !== null && _b !== void 0 ? _b : theme.euDesign.colors.secondary_main,
            });
        },
        cardPriceAndButton: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: theme.spacing(1),
        },
    });
});
