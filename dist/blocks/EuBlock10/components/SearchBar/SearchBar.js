import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import clx from "classnames";
import { BiSearch } from "react-icons/bi";
import { useSearchBarStyles } from "./";
import { useBlockSelector } from "../../../../helpers";
export var SearchBar = forwardRef(function (_a, ref) {
    var layout = _a.layout, openSearch = _a.openSearch, toggleSearch = _a.toggleSearch, toggleSearchDisplay = _a.toggleSearchDisplay;
    var blockStore = useBlockSelector(function (store) { return store; });
    var classes = useSearchBarStyles(blockStore);
    var isLayout1Or3 = ["layout-1", "layout-3"].includes(layout);
    var handleInputKeyPress = function (event) {
        var _a;
        if (((_a = event.key) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "enter") {
            toggleSearch();
        }
    };
    var handleSearch = function () {
        var _a;
        if (!openSearch)
            return toggleSearchDisplay();
        if (isLayout1Or3)
            return toggleSearch();
        if (!((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.value))
            return toggleSearchDisplay();
        return toggleSearch();
    };
    return (_jsxs("div", { className: clx(classes.navSearch, layout, openSearch && "open-search", !layout && "layout-1"), children: [_jsx("input", { ref: ref, className: clx(classes.searchInput, layout, openSearch && "open-search"), onKeyPress: handleInputKeyPress, placeholder: "search" }), _jsx("button", { className: clx(classes.searchButton, layout), onClick: handleSearch, children: _jsx(BiSearch, { className: clx(classes.searchIcon, layout) }) })] }));
});
SearchBar.displayName = "SearchBar";
