import { makeStyles } from "@mui/styles";
export var useButtonStyles = makeStyles(function (theme) { return ({
    button: function (props) {
        var _a;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        return _a = {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: theme.spacing(1),
                outline: "none",
                border: "1px solid ".concat((_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[100]),
                color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[100],
                fontFamily: theme.euDesign.font.montserrat,
                borderRadius: theme.spacing(125),
                fontWeight: theme.euDesign.typography.fontWeightSemiBold,
                textDecoration: "none",
                marginRight: theme.spacing(2),
                background: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[400],
                transition: "all .5s ease-in",
                cursor: "pointer",
                padding: theme.spacing(2.5, 4),
                whiteSpace: "nowrap",
                fontSize: theme.euDesign.typography.buttonLg
            },
            _a[theme.breakpoints.between("md", "lg")] = {
                padding: theme.spacing(2, 3),
                fontSize: theme.euDesign.typography.buttonLg,
                fontWeight: theme.euDesign.typography.fontWeightRegularExtra,
            },
            _a[theme.breakpoints.down("md")] = {
                padding: theme.spacing(1.8, 2.8),
                marginRight: theme.spacing(0.8),
                fontSize: theme.euDesign.typography.buttonLg,
                fontWeight: theme.euDesign.typography.fontWeightRegularExtra,
            },
            _a["&.small"] = {
                padding: theme.spacing(1, 2),
            },
            _a["&.medium"] = {
                padding: theme.spacing(1.5, 2.5),
            },
            _a["&.large"] = {
                padding: theme.spacing(2, 3),
            },
            _a["&:hover,&:focus, &:active"] = {
                borderColor: (_e = props === null || props === void 0 ? void 0 : props.colors) === null || _e === void 0 ? void 0 : _e[200],
                color: (_f = props === null || props === void 0 ? void 0 : props.colors) === null || _f === void 0 ? void 0 : _f[200],
            },
            _a["&.contained"] = {
                background: (_g = props === null || props === void 0 ? void 0 : props.colors) === null || _g === void 0 ? void 0 : _g[100],
                color: (_h = props === null || props === void 0 ? void 0 : props.colors) === null || _h === void 0 ? void 0 : _h[300],
                transition: "all .5s ease-in",
                "&:hover": {
                    background: (_j = props === null || props === void 0 ? void 0 : props.colors) === null || _j === void 0 ? void 0 : _j[200],
                    color: (_k = props === null || props === void 0 ? void 0 : props.colors) === null || _k === void 0 ? void 0 : _k[300],
                },
                "&:focus": {
                    background: (_l = props === null || props === void 0 ? void 0 : props.colors) === null || _l === void 0 ? void 0 : _l[200],
                    color: (_m = props === null || props === void 0 ? void 0 : props.colors) === null || _m === void 0 ? void 0 : _m[300],
                },
                "&:active": {
                    background: (_o = props === null || props === void 0 ? void 0 : props.colors) === null || _o === void 0 ? void 0 : _o[200],
                    color: (_p = props === null || props === void 0 ? void 0 : props.colors) === null || _p === void 0 ? void 0 : _p[300],
                },
            },
            _a["&.text"] = {
                backgroundColor: (_q = props === null || props === void 0 ? void 0 : props.colors) === null || _q === void 0 ? void 0 : _q[300],
                color: (_r = props === null || props === void 0 ? void 0 : props.colors) === null || _r === void 0 ? void 0 : _r[100],
                border: (_s = props === null || props === void 0 ? void 0 : props.colors) === null || _s === void 0 ? void 0 : _s[300],
                "&:hover,&:active, &:focus": {
                    background: (_t = props === null || props === void 0 ? void 0 : props.colors) === null || _t === void 0 ? void 0 : _t[300],
                    color: (_u = props === null || props === void 0 ? void 0 : props.colors) === null || _u === void 0 ? void 0 : _u[100],
                },
            },
            _a;
    },
}); });
