import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BiSearch } from "react-icons/bi";
import { useSearchBarStyles } from ".";
import { useBlockSelector } from "../../../../helpers";
export var SearchBar = function (_a) {
    var value = _a.value, onChange = _a.onChange, onSubmit = _a.onSubmit;
    var blockStore = useBlockSelector(function (store) { return store; });
    var classes = useSearchBarStyles(blockStore);
    return (_jsxs("div", { className: classes.container, children: [_jsx("input", { value: value, className: classes.searchInput, placeholder: "search", onChange: onChange }), _jsx("button", { className: classes.searchButton, onClick: onSubmit, children: _jsx(BiSearch, { className: classes.searchIcon }) })] }));
};
