import { BlockLayouts as Layouts } from "../../../helpers";
export var useEuBlock18Data = function () {
    var configuration = {
        content: {
            menu_item_uuid: null,
            menu_item: {
                __typename: "MenuItem",
                image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/rmIMU4uP1JWTGO49l0IO0L7rRqegZDbfDBxN3AGd.jpg" },
                price: 3.45,
                description: "Savory Bacon-Wrapped Filet Mignon Savory Bacon-Wrapped Filet Mignon Savory Bacon-Wrapped Filet Mignon Savory Bacon-Wrapped Filet Mignon",
                name: "Savory Bacon-Wrapped Filet Mignon",
                options: ["c9518c57-771e-4378-9c5b-d30b34853a34", "a34202f0-9c58-4bd0-9bb6-ef971c84574b", "bb0b622c-2e62-4281-8d6b-ec505ad70fc2", "250d48b6-fd87-4c9f-9683-197b79bc8f35"],
                uuid: "2cb8ac48-3860-4389-b40c-06232c0cb340",
                menuCategory: {
                    __typename: "MenuCategory",
                    title: "Intercontinental",
                },
                related_menu_items: [
                    {
                        __typename: "MenuItem",
                        image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/bzcAdVU2jzROscwZkQfnlMTGHZxZiD4IB9qB6Nnu.jpg" },
                        price: 1.5,
                        description: "Tender filet wrapped in crispy bacon and served with garlic mashed potatoes and seasonal vegetables",
                        name: "Pasta",
                        options: [],
                        slug: "/pasta-chicken",
                        uuid: "68e4cd57-65ff-4f8e-98bc-bd8d8c6d1f1e",
                    },
                    {
                        __typename: "MenuItem",
                        image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/qQ5PrgRZQMCsMIcogpwcdlCB8bGpFmKWH3PhOnAt.jpg" },
                        price: 2.5,
                        description: "Tender filet wrapped in crispy bacon and served with garlic mashed potatoes and seasonal vegetables",
                        name: "Ice cream",
                        options: [],
                        slug: "/ice-cream/maize",
                        uuid: "6a833512-0fa8-4daa-8f7a-7af9fedd4c58",
                    },
                    {
                        __typename: "MenuItem",
                        image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/tcfSaheVCmiTijZYDI6DWxp6hzNZJ5jPhnMqCxMe.jpg" },
                        price: 1,
                        description: "Tender filet wrapped in crispy bacon and served with garlic mashed potatoes and seasonal vegetables",
                        name: "Hot coffee",
                        options: [],
                        uuid: "1acd7d87-0311-42f5-90a8-fb1320e08013",
                    },
                    {
                        __typename: "MenuItem",
                        image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/H8Kv8ULrwy6BHKBGlQOkuDXgo7qxGnjm04SCpMF0.jpg" },
                        price: 2,
                        description: "Tender filet wrapped in crispy bacon and served with garlic mashed potatoes and seasonal vegetables",
                        name: "Veggie rice",
                        options: [],
                        uuid: "0d60a701-3698-4296-b17d-0b0af3d7124b",
                    },
                    {
                        __typename: "MenuItem",
                        image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/sEFLg4cLkFpih4kNOfkxNkVIE4p6HdCaUDXpBgCT.jpg" },
                        price: 3,
                        description: "Tender filet wrapped in crispy bacon and served with garlic mashed potatoes and seasonal vegetables",
                        name: "Chocolate Ice Cream",
                        options: [],
                        uuid: "2a39677b-a71a-4229-a579-905fe9becf8b",
                    },
                    {
                        __typename: "MenuItem",
                        image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/8lKJfJboAMN5sICxEzgG4XoDgppfIBf1L8gVCqIW.jpg" },
                        price: 3.5,
                        description: "Tender filet wrapped in crispy bacon and served with garlic mashed potatoes and seasonal vegetables",
                        name: "Chinese Hot Wings and Salmon",
                        options: [],
                        uuid: "f8591de4-21fc-4f69-a58a-39f647c5e35e",
                    },
                ],
                menu: {
                    __typename: "Menu",
                    options_config: [
                        {
                            __typename: "MenuOptionsConfig",
                            name: "Size",
                            uuid: "c9518c57-771e-4378-9c5b-d30b34853a34",
                            options: {
                                __typename: "OptionsConfig",
                                deselection: [
                                    {
                                        __typename: "DishOption",
                                        amount: 0,
                                        name: "",
                                    },
                                ],
                                extras: [
                                    {
                                        __typename: "DishOption",
                                        amount: 0,
                                        name: "",
                                    },
                                ],
                                selection: [
                                    {
                                        __typename: "DishOption",
                                        amount: 0,
                                        name: "Small",
                                    },
                                    {
                                        __typename: "DishOption",
                                        amount: 0.5,
                                        name: "Medium",
                                    },
                                    {
                                        __typename: "DishOption",
                                        amount: 1,
                                        name: "Large",
                                    },
                                    {
                                        __typename: "DishOption",
                                        amount: 2,
                                        name: "Extra Large",
                                    },
                                ],
                            },
                        },
                        {
                            __typename: "MenuOptionsConfig",
                            name: "Type",
                            uuid: "a34202f0-9c58-4bd0-9bb6-ef971c84574b",
                            options: {
                                __typename: "OptionsConfig",
                                deselection: [
                                    {
                                        __typename: "DishOption",
                                        amount: 0,
                                        name: "",
                                    },
                                ],
                                extras: [
                                    {
                                        __typename: "DishOption",
                                        amount: 0,
                                        name: "",
                                    },
                                ],
                                selection: [
                                    {
                                        __typename: "DishOption",
                                        amount: 0.2,
                                        name: "Barbeque",
                                    },
                                    {
                                        __typename: "DishOption",
                                        amount: 0.15,
                                        name: "Spicy",
                                    },
                                    {
                                        __typename: "DishOption",
                                        amount: 0.22,
                                        name: "Smoked",
                                    },
                                ],
                            },
                        },
                        {
                            __typename: "MenuOptionsConfig",
                            name: "Your Toppings",
                            uuid: "ed5538dc-0c70-4e3a-887a-94c8da266e34",
                            options: {
                                __typename: "OptionsConfig",
                                deselection: [
                                    {
                                        __typename: "DishOption",
                                        amount: 0,
                                        name: "",
                                    },
                                ],
                                extras: [
                                    {
                                        __typename: "DishOption",
                                        amount: 0,
                                        name: "",
                                    },
                                ],
                                selection: [
                                    {
                                        __typename: "DishOption",
                                        amount: 1.5,
                                        name: "Cocoa and Coffee",
                                    },
                                    {
                                        __typename: "DishOption",
                                        amount: 0.23,
                                        name: "Sriracha-Sesame Spiced",
                                    },
                                    {
                                        __typename: "DishOption",
                                        amount: 1,
                                        name: "Roasted Garlic",
                                    },
                                ],
                            },
                        },
                        {
                            __typename: "MenuOptionsConfig",
                            name: "Your ingredient",
                            uuid: "004e107d-c025-45b9-917f-585e886ed487",
                            options: {
                                __typename: "OptionsConfig",
                                deselection: [
                                    {
                                        __typename: "DishOption",
                                        amount: 0,
                                        name: "",
                                    },
                                ],
                                extras: [
                                    {
                                        __typename: "DishOption",
                                        amount: 0,
                                        name: "",
                                    },
                                ],
                                selection: [
                                    {
                                        __typename: "DishOption",
                                        amount: 0.12,
                                        name: "Garlic",
                                    },
                                    {
                                        __typename: "DishOption",
                                        amount: 0.1,
                                        name: "Coloring",
                                    },
                                    {
                                        __typename: "DishOption",
                                        amount: 0.05,
                                        name: "Onions",
                                    },
                                    {
                                        __typename: "DishOption",
                                        amount: 0.2,
                                        name: "Brown sugar",
                                    },
                                ],
                            },
                        },
                        {
                            __typename: "MenuOptionsConfig",
                            name: "Your Ingredient",
                            uuid: "bb0b622c-2e62-4281-8d6b-ec505ad70fc2",
                            options: {
                                __typename: "OptionsConfig",
                                deselection: [
                                    {
                                        __typename: "DishOption",
                                        amount: 0.12,
                                        name: "Garlic",
                                    },
                                    {
                                        __typename: "DishOption",
                                        amount: 0.2,
                                        name: "Onions",
                                    },
                                    {
                                        __typename: "DishOption",
                                        amount: 0.18,
                                        name: "Brown Sugar",
                                    },
                                    {
                                        __typename: "DishOption",
                                        amount: 0.5,
                                        name: "Honey",
                                    },
                                ],
                                extras: [
                                    {
                                        __typename: "DishOption",
                                        amount: 0,
                                        name: "",
                                    },
                                ],
                                selection: [
                                    {
                                        __typename: "DishOption",
                                        amount: 0,
                                        name: "",
                                    },
                                ],
                            },
                        },
                        {
                            __typename: "MenuOptionsConfig",
                            name: "Your Toppings",
                            uuid: "250d48b6-fd87-4c9f-9683-197b79bc8f35",
                            options: {
                                __typename: "OptionsConfig",
                                deselection: [
                                    {
                                        __typename: "DishOption",
                                        amount: 0,
                                        name: "",
                                    },
                                ],
                                extras: [
                                    {
                                        __typename: "DishOption",
                                        amount: 1,
                                        name: "Roasted Garlic",
                                    },
                                    {
                                        __typename: "DishOption",
                                        amount: 1.55,
                                        name: "Seamic nut",
                                    },
                                    {
                                        __typename: "DishOption",
                                        amount: 0.95,
                                        name: "Coconut Beacon",
                                    },
                                ],
                                selection: [
                                    {
                                        __typename: "DishOption",
                                        amount: 0,
                                        name: "",
                                    },
                                ],
                            },
                        },
                    ],
                    restaurant: {
                        __typename: "Restaurant",
                        uuid: "e5d6e409-7710-49d8-ac9e-f119f38d1923",
                        site: {
                            __typename: "Site",
                            uuid: "2556ae45-279c-49e0-ba5f-83d3a41fe0c4",
                        },
                        bank_info: {
                            __typename: "BankInfo",
                            currency: "USD",
                            delivery_fee: 4.55,
                        },
                    },
                },
            },
        },
        configuration: {
            colors: {
                main: {
                    100: "neutral.black",
                    200: "secondary.300",
                    300: "secondary.main",
                    400: "neutral.400",
                    500: "neutral.100",
                    600: "primary.main",
                    700: "neutral.400",
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
        layouts: [
            {
                name: Layouts.LAYOUT_1,
                isSelected: true,
            },
            {
                name: Layouts.LAYOUT_2,
                isSelected: false,
            },
            {
                name: Layouts.LAYOUT_3,
                isSelected: false,
            },
            {
                name: Layouts.LAYOUT_4,
                isSelected: false,
            },
            {
                name: Layouts.LAYOUT_5,
                isSelected: false,
            },
        ],
        // mode: "edit",
        index: 5,
        activeElement: "blocks.5",
        handleSelect: function (key) {
            alert(key);
        },
    };
    return {
        configuration: configuration,
    };
};
