export default {
    uuid: "ba334218-fabd-4705-abbc-e2a8bccefdbf",
    component: "EuBlock20",
    config: {
        content: {
            text: {
                overline: "All Articles",
                main: "Curated just for you",
                subtext: "",
            },
            blog_uuid: null,
        },
        configuration: {
            colors: {
                main: {
                    100: "primary.main",
                    200: "neutral.black",
                    300: "neutral.black",
                    400: "neutral.100",
                    500: "secondary.300",
                    600: "neutral.100",
                    700: "secondary.100",
                },
                menu: {
                    100: "neutral.300",
                    200: "secondary.400",
                    300: "neutral.100",
                    400: "primary.100",
                    500: "primary.main",
                    600: "neutral.200",
                    700: "neutral.black",
                },
                button: {
                    "100": "primary.main",
                    "300": "neutral.100",
                },
            },
            fonts: {
                heading: "fonts.body",
                body: "fonts.body",
            },
        },
        ssr_network_operation: "GET_BLOG",
        ssr_network_identifier: "blog_uuid",
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
