export var useSelectedLayout = function (layouts) {
    var _a, _b;
    var params = typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search)
        : undefined;
    var queryParam = params ? params.get('layout') : undefined;
    var selectedLayout = !queryParam
        ? (_a = layouts === null || layouts === void 0 ? void 0 : layouts.find(function (c) { return c.isSelected; })) === null || _a === void 0 ? void 0 : _a.name
        : ((_b = layouts === null || layouts === void 0 ? void 0 : layouts.find(function (c) { return c.name === queryParam; })) === null || _b === void 0 ? void 0 : _b.name) || undefined;
    return selectedLayout;
};
