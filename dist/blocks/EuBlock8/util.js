export var getScrollAmount = function (container, layout, md, sm, onlyLg) {
    var _a;
    var itemWidth = ((_a = container.querySelector(".item")) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
    if (layout === "layout-5") {
        if (onlyLg)
            return itemWidth + 20;
        if (md) {
            return itemWidth + 40;
        }
        else {
            var multiplier = md || sm ? 1 : 2;
            return (itemWidth + 40) * multiplier;
        }
    }
    return itemWidth + 40;
};
