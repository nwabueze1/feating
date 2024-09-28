import { jsx as _jsx } from "react/jsx-runtime";
import { useNavButtonContainerStyles } from ".";
import clx from "classnames";
export var NavButtonContainer = function (_a) {
    var layout = _a.layout, children = _a.children;
    var classes = useNavButtonContainerStyles();
    return _jsx("div", { className: clx(classes.buttonContainer, layout), children: children });
};
