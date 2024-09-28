export default {
    uuid: "358d0bad-1f7c-4b44-b036-9e29f795966c",
    component: "EuBlock10",
    config: {
        content: {
            image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Logo+(2).png" },
            text: {
                main: "Eat up",
            },
            links: [
                {
                    text: "About",
                    url: "/about",
                },
                {
                    text: "Menu",
                    url: "/menu",
                },
                {
                    text: "Dishes",
                    url: "/dishes",
                },
                {
                    text: "Wish lists",
                    url: "/wish-list",
                },
                {
                    text: "Contact us",
                    url: "/contact-us",
                },
                {
                    text: "Blog",
                    url: "/blog",
                },
            ],
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
        animations: [],
        configuration: {
            colors: {
                main: {
                    100: "neutral.100",
                    200: "neutral.black",
                    300: "secondary.main",
                    400: "secondary.200",
                    500: "neutral.500",
                    600: "secondary.300",
                    700: "primary.main",
                    800: "primary.400",
                    900: "neutral.black",
                    1000: "neutral.black",
                },
            },
            fonts: {
                heading: "fonts.heading",
                body: "fonts.heading",
            },
        },
    },
};
