import { makeStyles } from "@mui/styles";
/** !!-- Remember to update the function name !! */
export var useRadioButtonInputStyles = makeStyles(function (theme) { return ({
    root: {
        color: theme.design.colors.waz_dangerColor300,
    },
    radio: function (props) {
        var _a;
        return ({
            "&.Mui-checked": {
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300],
            },
            "& span": {
                "& svg:first-child": {
                    width: "24px",
                    height: "24px",
                },
                "& svg": {
                    width: "100%",
                    height: "100%",
                },
            },
        });
    },
}); });
