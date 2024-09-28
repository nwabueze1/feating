export default {
    uuid: "088768ba-09dd-4c0f-b40b-3a9a355ea772",
    component: "EuBlock17",
    config: {
        content: {
            text: {
                header: "Your Cart",
            },
            site_uuid: null,
        },
        ssr_network_operation: "GET_CART",
        ssr_network_identifier: "site_uuid",
        configuration: {
            colors: {
                main: {
                    100: "secondary.100",
                    200: "neutral.black",
                    300: "primary.main",
                    400: "neutral.400",
                    500: "neutral.100",
                    600: "alert.error",
                    700: "neutral.300",
                    800: "neutral.200",
                    900: "secondary.300",
                    1000: "neutral.100",
                    1100: "primary.300",
                },
                button: {
                    "100": "primary.main",
                    "200": "primary.400",
                    "300": "neutral.100",
                    "400": "neutral.200",
                },
            },
            fonts: {
                heading: "fonts.body",
                body: "fonts.body",
            },
        },
        layouts: [
            {
                name: "layout-1",
                isSelected: true,
            },
            {
                name: "layout-2",
                isSelected: false,
            },
            {
                name: "layout-3",
                isSelected: false,
            },
            {
                name: "layout-4",
                isSelected: false,
            },
            {
                name: "layout-5",
                isSelected: false,
            },
        ],
    },
};
