import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavLogoStyles } from "./";
import clx from "classnames";
import { useBlockSelector, createResponsiveImage } from "../../../../helpers";
export var NavLogo = function (_a) {
    var layout = _a.layout, image = _a.image, text = _a.text, url = _a.url, screenSize = _a.screenSize;
    var blockConfig = useBlockSelector(function (store) { return store; });
    var classes = useNavLogoStyles(blockConfig);
    return (_jsxs("a", { href: url, className: clx(classes.navLogo, layout), children: [createResponsiveImage(image, {
                className: clx(classes.navLogoImage, layout),
                screenSize: screenSize,
                styles: {
                    picture: {
                        display: "inline-flex",
                    },
                },
            }), _jsx("span", { className: classes.navLogoText, children: text })] }));
};
