import { makeStyles } from "@mui/styles";
export var useEuBlock16AnimationStyles = makeStyles(function () { return ({
    base: {
        animation: "$mask 1s ease-in",
    },
    "@keyframes mask": {
        "0%": {
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },
        "100%": {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        },
    },
    "@keyframes fadeIn": {
        "0%": {
            opacity: 0,
            transform: "scaleX(0.8)",
        },
        "100%": {
            opacity: 1,
            transform: "scaleX(1)",
        },
    },
    "@keyframes shrinkIn": {
        "0%": {
            opacity: 0,
            transform: "scale(1.2)",
        },
        "50%": {
            opacity: 0,
        },
        "100%": {
            opacity: 1,
            transform: "scale(1)",
        },
    },
    "@keyframes grow": {
        "0%": {
            opacity: 0,
            transform: "scale(0.5)",
        },
        "100%": {
            opacity: 1,
            transform: "scale(1)",
        },
    },
    "@keyframes twistIn": {
        "0%": {
            transform: "rotate(-10deg)",
            opacity: 0,
        },
        "40%": {
            transform: "rotate(0)",
            opacity: 1,
        },
        "100%": {
            transform: "rotate(0)",
            opacity: 1,
        },
    },
}); });
