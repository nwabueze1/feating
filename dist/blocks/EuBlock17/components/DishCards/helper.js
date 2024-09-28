export var handlePriceAddition = function (price, selectionOption) {
    return (price +
        (selectionOption === null || selectionOption === void 0 ? void 0 : selectionOption.reduce(function (a, b) {
            return Number(a) + Number(b === null || b === void 0 ? void 0 : b.price);
        }, 0)));
};
export var parseOptionString = function (options) {
    var parsedOptions = options.map(function (option) { return option.selectedChoices.map(function (choice) { return choice.name; }).join(", "); }).join(", ");
    return parsedOptions.length > 150 ? parsedOptions.slice(0, 145) + "..." : parsedOptions;
};
