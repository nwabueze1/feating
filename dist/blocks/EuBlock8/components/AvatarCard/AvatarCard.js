import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAvatarCardStyles } from "./styles";
import clx from "classnames";
import { createImageSrcset, imageSizes, useBlockSelector } from "../../../../helpers";
export var AvatarCard = function (_a) {
    var images = _a.images, layout = _a.layout, secondaryText = _a.secondaryText, title = _a.title;
    var config = useBlockSelector(function (state) { return state; });
    var classes = useAvatarCardStyles(config);
    var renderImages = function () {
        return images.map(function (image, index) { return (_jsx("div", { className: clx(classes.avatar, layout), style: { left: "-".concat(8 * index + 1, "%") }, children: _jsx("img", { srcSet: createImageSrcset(image), src: image === null || image === void 0 ? void 0 : image.src, sizes: imageSizes, alt: image === null || image === void 0 ? void 0 : image.alternative_text, className: classes.avatarImage }) }, index)); });
    };
    return (_jsxs("article", { className: clx(classes.container, layout), children: [_jsx("h6", { className: classes.avatarTitle, children: title }), _jsxs("div", { className: classes.avatarContainer, children: [renderImages(), secondaryText && (_jsx("div", { className: clx(classes.avatar, "background", layout), style: { left: "-".concat(8 * 3, "%") }, children: _jsx("h6", { className: classes.secondaryText, children: secondaryText }) }))] })] }));
};
