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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { FormPallette, PlugInForm } from "@wazobia-tech/wazcom/dist/io";
import clx from "classnames";
import { useEuBlock12Styles } from ".";
import { useGetConfiguration } from "../../helpers";
import { useGetColor, useSelectedLayout } from "../../hooks";
import { ContactInfo } from "./components";
import { decodeText } from "../../helpers/decodeText";
export var EuBlock12 = function (_a) {
    var _b, _c, _d, _e, _f;
    var content = _a.content, _g = _a.mode, mode = _g === void 0 ? "view" : _g, index = _a.index, activeElement = _a.activeElement, handleSelect = _a.handleSelect, props = __rest(_a, ["content", "mode", "index", "activeElement", "handleSelect"]);
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var configuration = getConfiguration(props.configuration, "main", getMappedColor);
    var classes = useEuBlock12Styles(configuration);
    var layout = useSelectedLayout(props.layouts);
    var renderContactInfo = function () { return content === null || content === void 0 ? void 0 : content.contactInfo.map(function (info, index) { return _jsx(ContactInfo, { subtitle: info.value, type: info.type }, index); }); };
    var key = "blocks." + String(index);
    // const palette: FormPallette = {
    //   colors: {
    //     main: configuration?.colors?.[300],
    //     hover: configuration?.colors?.[300],
    //     error: theme?.euDesign?.colors?.danger,
    //   },
    //   typography: {
    //     input: {
    //       fontFamily: configuration?.fonts?.body?.concat?.("!important"),
    //       fontSize: theme?.typography?.fontSize,
    //       color: configuration?.colors?.[400],
    //     },
    //     label: {
    //       fontFamily: configuration?.fonts?.body?.concat?.("!important"),
    //       fontSize: theme?.typography?.fontSize,
    //       color: configuration?.colors?.[400],
    //     },
    //   },
    // };
    return (_jsx("section", { className: clx(classes.root, layout, mode === "edit" && key === activeElement && classes.block12ActiveElement), onClick: function () {
            mode === "edit" && (handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key));
        }, children: _jsx("div", { className: classes.container, children: _jsxs("div", { className: clx(classes.block, layout), children: [_jsxs("div", { className: clx(classes.blockContent, classes.blockText), children: [_jsxs("h2", { className: classes.heading, children: [decodeText((_b = content === null || content === void 0 ? void 0 : content.text) === null || _b === void 0 ? void 0 : _b.main), " ", _jsx("span", { className: classes.headingColored, children: decodeText((_c = content === null || content === void 0 ? void 0 : content.text) === null || _c === void 0 ? void 0 : _c.coloredMain) })] }), _jsx("p", { className: classes.subtext, children: (_d = content === null || content === void 0 ? void 0 : content.text) === null || _d === void 0 ? void 0 : _d.subtext }), _jsx("div", { className: classes.contactInfoContainer, children: renderContactInfo() })] }), _jsx("div", { className: classes.blockContent, children: _jsx("div", { className: clx(classes.mapContainer, layout), children: _jsx("div", { className: clx(classes.mapBox, layout), children: _jsx("iframe", { src: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=".concat((_e = content === null || content === void 0 ? void 0 : content.text) === null || _e === void 0 ? void 0 : _e.latitude, ",").concat((_f = content === null || content === void 0 ? void 0 : content.text) === null || _f === void 0 ? void 0 : _f.longitude, "(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"), allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", className: clx(classes.map, layout) }) }) }) })] }) }) }));
};
