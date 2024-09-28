import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEmptyStateStyles } from "./styles";
export var EmptyState = function () {
    var classes = useEmptyStateStyles();
    return (_jsx("article", { children: _jsxs("div", { className: classes.root, children: [_jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/336+1.svg", alt: "empty cart" }), _jsx("p", { className: classes.description, children: "You do not have any item in your cart" })] }) }));
};
