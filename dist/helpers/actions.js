export var getColorConfig = function (payload) {
    if (payload === void 0) { payload = {
        "100": "#35ACE1",
        "200": "#51C9FF",
        "300": "#FFFFFF",
        "400": "#FAFAFA",
    }; }
    return ({
        type: "GET_COLOR_CONFIG",
        payload: payload,
    });
};
export var getBlockConfiguration = function (payload) {
    var _a;
    return ({
        type: "GET_BLOCK_CONFIGURATION",
        payload: (_a = {},
            _a[payload.name] = payload.configuration,
            _a),
    });
};
export var storeConfiguration = function (payload) {
    var _a;
    return ({
        type: "STORE_CONFIGURATION",
        payload: (_a = {},
            _a[payload.name] = payload.configurations,
            _a),
    });
};
export var getButtonConfiguration = function (payload) {
    if (payload === void 0) { payload = {
        "100": "#35ACE1",
        "200": "#51C9FF",
        "300": "#FFFFFF",
        "400": "#FAFAFA",
    }; }
    return ({
        type: "GET_BUTTON_CONFIGURATION",
        payload: payload,
    });
};
