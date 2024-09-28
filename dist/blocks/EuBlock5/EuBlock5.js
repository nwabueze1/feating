var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useEuBlock5Styles } from "./styles";
import clx from "classnames";
import { useSelectedLayout } from "../../hooks";
import { useEuBlock5AnimationStyle } from "./useBlock5AnimationStyle";
import { useGetColor } from "../../hooks/useGetColor";
import { useGetConfiguration, createImageSrcset, imageSizes } from "../../helpers";
import { useQuestionStyles } from "./questionStyles";
import { useBackgroundStyles } from "./backgroundStyles";
import { decodeText } from "../../helpers/decodeText";
export var EuBlock5 = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var content = _a.content, configuration = _a.configuration, _h = _a.mode, mode = _h === void 0 ? "view" : _h, index = _a.index, activeElement = _a.activeElement, handleSelect = _a.handleSelect, props = __rest(_a, ["content", "configuration", "mode", "index", "activeElement", "handleSelect"]);
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var blockConfig = getConfiguration(configuration, "main", getMappedColor);
    var classes = useEuBlock5Styles(blockConfig);
    var questionClass = useQuestionStyles(blockConfig);
    var backgroundClass = useBackgroundStyles(blockConfig);
    var _j = __read(useState(0), 2), activeIndex = _j[0], setActiveIndex = _j[1];
    var layout = useSelectedLayout(props.layouts);
    var block5AnimationClass = useEuBlock5AnimationStyle();
    var selectedAnimation = block5AnimationClass.growIn;
    var key = "blocks." + String(index);
    var getAnswer = function (className) { var _a; return _jsx("p", { className: clx(questionClass.faqAnswer, className), children: decodeText((_a = content === null || content === void 0 ? void 0 : content.faqs) === null || _a === void 0 ? void 0 : _a[activeIndex].answer) }); };
    var renderFAQ = function () { return (_jsx("ul", { className: questionClass.faqMenu, children: content === null || content === void 0 ? void 0 : content.faqs.map(function (c, index) { return (_jsxs("li", { className: clx(questionClass.faqMenuList, activeIndex === index && "active"), onClick: function () { return setActiveIndex(index); }, children: [_jsx("p", { className: clx(questionClass.faqQuestion, activeIndex === index && "active"), children: c.question }), activeIndex === index && getAnswer("mobile")] }, index)); }) })); };
    return (_jsx("section", { className: clx(classes.root, mode === "edit" && key === activeElement && classes.block5ActiveElement), onClick: function () {
            mode === "edit" && (handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key));
        }, children: _jsx("div", { className: clx(classes.container, layout), children: _jsxs("div", { className: clx(classes.block, layout), children: [_jsxs("header", { className: clx(classes.blockHeader, layout, selectedAnimation), children: [_jsx("p", { className: classes.blockOverline, children: decodeText((_b = content === null || content === void 0 ? void 0 : content.text) === null || _b === void 0 ? void 0 : _b.overline) }), _jsx("h4", { className: classes.blockHeading, children: decodeText((_c = content === null || content === void 0 ? void 0 : content.text) === null || _c === void 0 ? void 0 : _c.heading) }), _jsx("p", { className: classes.blockCaption, children: decodeText((_d = content === null || content === void 0 ? void 0 : content.text) === null || _d === void 0 ? void 0 : _d.caption) })] }), _jsx("article", { className: clx(classes.blockContent, layout, selectedAnimation), style: { animationDuration: "3s" }, children: _jsxs("div", { className: questionClass.faqBlock, children: [_jsx("aside", { className: questionClass.faqContent, children: renderFAQ() }), _jsxs("aside", { className: clx(questionClass.faqContent, "answer"), children: [_jsx("h5", { className: questionClass.faqQuestionHeading, children: decodeText((_e = content === null || content === void 0 ? void 0 : content.faqs) === null || _e === void 0 ? void 0 : _e[activeIndex].question) }), getAnswer()] })] }) }), _jsx("img", { className: clx(backgroundClass.backgroundImage, layout, selectedAnimation), srcSet: createImageSrcset(content === null || content === void 0 ? void 0 : content.backgroundImage), src: (_f = content === null || content === void 0 ? void 0 : content.backgroundImage) === null || _f === void 0 ? void 0 : _f.src, sizes: imageSizes, alt: (_g = content === null || content === void 0 ? void 0 : content.backgroundImage) === null || _g === void 0 ? void 0 : _g.alternative_text }), _jsx("div", { className: clx(backgroundClass.redBackground, layout, selectedAnimation) }), _jsx("div", { className: clx(backgroundClass.redBackground, layout, "dot-2", selectedAnimation) }), _jsx("div", { className: clx(backgroundClass.goldBackground, layout, selectedAnimation) }), _jsx("div", { className: clx(backgroundClass.goldBackground, layout, "dot-2", selectedAnimation) })] }) }) }));
};
