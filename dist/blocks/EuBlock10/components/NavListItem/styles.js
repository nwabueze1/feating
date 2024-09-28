import { makeStyles } from "@mui/styles";
export var useNavListItemStyles = makeStyles(function (theme) { return ({
    navListItem: {
        display: "inline-block",
        order: 0,
    },
    navLink: function (props) {
        var _a;
        var _b, _c, _d;
        return (_a = {
                fontSize: theme.euDesign.typography.bodySm,
                textDecoration: "none",
                color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[200],
                fontFamily: (_c = props === null || props === void 0 ? void 0 : props.fonts) === null || _c === void 0 ? void 0 : _c.body,
                cursor: "pointer",
                transition: "color .5s ease-in",
                "&:hover,&.active": {
                    color: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[700],
                }
            },
            _a[theme.breakpoints.down("sm")] = {
                fontSize: theme.euDesign.typography.h5 - 4,
            },
            _a.whiteSpace = "nowrap",
            _a);
    },
}); });
