import { euBlock1Layouts } from "./euBlock1Layout";
export var useEuBlock1Data = function () {
    var config = {
        configuration: {
            fonts: {
                heading: "fonts.heading",
                body: "fonts.body",
                misc: "fonts.misc",
            },
            colors: {
                main: {
                    "100": "neutral.200",
                    "200": "secondary.main",
                    "300": "neutral.100",
                    "400": "neutral.black",
                    "500": "primary.main",
                    "600": "neutral.600",
                },
                button: {
                    "100": "primary.main",
                    "200": "primary.400",
                    "300": "neutral.100",
                    "400": "neutral.200",
                },
            },
        },
        content: {
            text: {
                overline: "10% cashback on orders above $200",
                main: "Satisfy your deepest",
                animated: "cravings",
                sub: "Lorem ipsum dolor sit amet consectetur. Tellus morbi ac eu suscipit faucibus interdum. Convallis malesuada augue.",
            },
            buttons: [
                { variant: "primary", text: "Buy now", url: "/" },
                { variant: "secondary", text: "Learn more", url: "/" },
            ],
            image: {
                src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/food720.png",
                alternative_text: "image of desert",
            },
        },
        layouts: [
            {
                name: euBlock1Layouts.layout1,
                isSelected: false,
            },
            {
                name: euBlock1Layouts.layout2,
                isSelected: false,
            },
            {
                name: euBlock1Layouts.layout3,
                isSelected: false,
            },
            {
                name: euBlock1Layouts.layout4,
                isSelected: false,
            },
            {
                name: euBlock1Layouts.layout5,
                isSelected: false,
            },
        ],
        mode: "edit",
        index: 0,
        activeElement: "blocks.0",
    };
    return {
        config: config,
    };
};
