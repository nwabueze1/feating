import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useListStyle } from "./styles";
import clx from "classnames";
import { useBlockSelector, createResponsiveImage } from "../../helpers";
import { decodeText } from "../../helpers/decodeText";
export var List = function (props) {
    var store = useBlockSelector(function (store) { return store; });
    var classes = useListStyle(store);
    return (_jsxs("div", { className: clx(classes.list, props.reverseItems && classes.reverseItems), children: [createResponsiveImage(props === null || props === void 0 ? void 0 : props.image, {
                className: classes.listImage,
            }), _jsxs("div", { className: classes.listContent, children: [_jsx("h4", { className: classes.listHeading, children: decodeText(props.heading) }), _jsx("p", { className: classes.listBody, children: decodeText(props.body) })] })] }));
};
