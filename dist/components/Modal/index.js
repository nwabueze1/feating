import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useModalStyles } from "./styles";
import clx from "classnames";
import { useBlockSelector } from "../../helpers";
export var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, children = _a.children, position = _a.position, _b = _a.hasClose, hasClose = _b === void 0 ? true : _b;
    var blockConfiguration = useBlockSelector(function (state) { return state; });
    var classes = useModalStyles(blockConfiguration);
    var closeModal = function () {
        onClose();
    };
    return isOpen ? (_jsxs("div", { className: clx(classes.container, position), children: [_jsx("div", { className: clx(classes.modal, position), children: _jsxs("div", { className: classes.modalContent, children: [children, hasClose && _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Close-icon.svg", alt: "close icon", className: classes.closeButton, onClick: closeModal })] }) }), _jsx("div", { className: classes.modalOverlay, onClick: closeModal })] })) : null;
};
