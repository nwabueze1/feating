import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useAnimationStyle = makeStyles((theme: Theme) => ({
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
    "@keyframes fadeInAndSpin": {
      "0%": {
        opacity: 0,
        transform: "rotate(30deg)",
      },
      "100%": {
        opacity: 1,
        transform: "rotate(0deg)",
      },
    },
    "@keyframes growIn": {
      "0%": {
        transform: "scale(0.6)",
      },
      "100%": {
        transform: "scale(1)",
      },
    },
    "@keyframes growInAndSpin": {
      "0%": {
        transform: "scale(0.7) rotate(15deg)",
      },
      "100%": {
        transform: "scale(1) rotate(0deg)",
      },
    },
    "@keyframes slideFromTop": {
      "0%": {
        transform: "translateY(-100%)",
      },
      "100%": {
        transform: "translateY(0%)",
      },
    },
    "@keyframes maskCenter": {
      "0%": {
        transform: "translate(-50%, -50%)",
      },
      "100%": {
        transform: "translate(0, 0)",
      },
    },
    "@keyframes slideInLeft": {
      "0%": {
        transform: "translateX(-100%)",
        opacity: 0,
      },
      "80%": { opacity: 1 },
      "100%": {
        transform: "translateX(0)",
      },
    },
    "@keyframes slideInRight": {
      "0%": {
        transform: "translateX(100%)",
        opacity: 0,
      },
      "80%": { opacity: 1 },
      "100%": {
        transform: "translateX(0)",
      },
    },
  },
}));
