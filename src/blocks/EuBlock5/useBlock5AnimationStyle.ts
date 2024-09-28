import { makeStyles } from "@mui/styles";

export const useEuBlock5AnimationStyle = makeStyles(() => ({
  growIn: {
    animation: `$growIn 2s forwards`,
  },
  maskCenter: {
    animation: `$maskCenter 2s forwards`,
  },
  maskResizeBottom: {
    animation: `$maskResizeBottom 2s forwards`,
  },
  "@keyframes growIn": {
    "0%": {
      transform: "scale(0)",
      opacity: 0,
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1,
    },
  },
  "@keyframes maskCenter": {
    "0%": {
      transform: "scale(1)",
      clipPath: "circle(0%)",
    },
    "100%": {
      transform: "scale(1)",
      clipPath: "circle(100%)",
    },
  },
  "@keyframes maskResizeBottom": {
    "0%": {
      transform: "scaleY(0)",
      transformOrigin: "bottom",
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    },
    "100%": {
      transform: "scaleY(1)",
      transformOrigin: "bottom",
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
  },
}));
