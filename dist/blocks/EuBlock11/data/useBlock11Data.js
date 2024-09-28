import { BlockLayouts } from "../../../helpers";
export var useEuBlock11Data = function () {
    var configuration = {
        content: {
            text: "Our signature food",
            menu_item_uuid: null,
            menu_item: {
                name: "Jollof Rice",
                image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/H1h47cj4ouZwvQuaLOwQMws2fZmDYOdCtbV1EwRz.jpg" },
                description: "Jollof Rice is an excellent meal for the early part of the day",
                price: 600,
                slug: "/white-stew",
                menu: {
                    restaurant: {
                        bank_info: {
                            currency: "NGN",
                        },
                    },
                },
            },
        },
        ssr_network_operation: "GET_MENU_ITEM",
        configuration: {
            colors: {
                main: {
                    100: "neutral.black",
                    200: "neutral.100",
                    300: "neutral.200",
                    400: "secondary.main",
                },
                button: {
                    "100": "primary.main",
                    "200": "primary.400",
                    "300": "neutral.100",
                    "400": "neutral.500",
                    "500": "neutral.100",
                },
            },
            fonts: {
                heading: "fonts.body",
                body: "fonts.body",
            },
        },
        layouts: [
            {
                name: BlockLayouts.LAYOUT_1,
                isSelected: true,
            },
            {
                name: BlockLayouts.LAYOUT_2,
                isSelected: false,
            },
            {
                name: BlockLayouts.LAYOUT_3,
                isSelected: false,
            },
            {
                name: BlockLayouts.LAYOUT_4,
                isSelected: false,
            },
            {
                name: BlockLayouts.LAYOUT_5,
                isSelected: false,
            },
        ],
        animations: [
            {
                name: "animation-1",
                isSelected: false,
            },
            {
                name: "animation-2",
                isSelected: true,
            },
            {
                name: "animation-3",
                isSelected: false,
            },
        ],
        mode: "edit",
        index: 2,
        activeElement: "blocks.2",
        handleSelect: function (key) {
            alert(key);
        },
    };
    return {
        configuration: configuration,
    };
};
