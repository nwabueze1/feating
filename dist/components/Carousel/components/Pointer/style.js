import { makeStyles } from "@mui/styles";
export var usePointerStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        pointers: {
            display: "flex",
            gap: theme.spacing(1.26),
            justifyContent: "center",
            paddingBottom: theme.spacing(7),
            cursor: "pointer",
        },
        pointerImg: (_a = {
                width: "10px",
                height: "10px"
            },
            _a[theme.breakpoints.down("md")] = {
                width: "7px",
                height: "7px",
            },
            _a),
        pointerImgActive: (_b = {
                width: "10px",
                height: "10px"
            },
            _b[theme.breakpoints.down("md")] = {
                width: "7px",
                height: "7px",
            },
            _b),
    });
});
