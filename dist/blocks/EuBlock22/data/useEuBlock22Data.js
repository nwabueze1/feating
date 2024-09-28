import theme from "../../../theme";
export var useEuBlock22Data = function () {
    var configuration = {
        content: {},
        configuration: {
            colors: {
                main: {
                    100: "neutral.black",
                },
            },
            fonts: {
                heading: theme.euDesign.font.poppins,
                body: theme.euDesign.font.poppins,
            },
        },
        layouts: [],
    };
    return {
        configuration: configuration,
    };
};
