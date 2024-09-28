import { jsx as _jsx } from "react/jsx-runtime";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useRatingStyles } from "./styles";
export var Rating = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "filled" : _b;
    var classes = useRatingStyles();
    return variant === "filled" ? _jsx(AiFillStar, { className: classes.rating }) : _jsx(AiOutlineStar, { className: classes.rating });
};
