var answer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod erat a ligula posuere tincidunt. Morbi dignissim risus eget condimentum vulputate. Vivamus ut maximus nisi. Mauris lobortis porttitor eros ac aliquet. Duis in tincidunt turpis. Nullam bibendum felis velit, eget porta lectus pretium eu. Sed metus leo, fringilla nec iaculis id, auctor commodo velit. Suspendisse ornare quam vel felis egestas sodales. Maecenas eros eros, rutrum eu nisl sed, mollis porttitor lacus. Morbi iaculis porttitor felis. Quisque iaculis tincidunt metus ut tincidunt. Aliquam neque libero, eleifend eu turpis ut, dictum convallis lacus.\n";
export default {
    uuid: "1a024780-e374-48d1-b29d-9cbaf6a9a63b",
    component: "EuBlock5",
    config: {
        content: {
            text: {
                overline: "FAQ",
                heading: "All your questions have been answered ",
                caption: "\n        Lorem ipsum dolor sit amet consectetur. Tellus morbi ac eu suscipit faucibus interdum. Convallis malesuada augue.\n        ",
            },
            backgroundImage: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Group.png" },
            faqs: [
                {
                    question: "Do you have dispatch rider that delivers food?",
                    answer: answer,
                },
                {
                    question: "Do you sell daily fresh food?",
                    answer: answer,
                },
                {
                    question: "How long does it take food to be ready after an Order has been placed?",
                    answer: answer,
                },
                {
                    question: "Do you have an Instagram page?",
                    answer: answer,
                },
            ],
        },
        configuration: {
            fonts: {
                heading: "fonts.body",
                body: "fonts.body",
            },
            colors: {
                main: {
                    "100": "secondary.100",
                    "200": "neutral.200",
                    "300": "neutral.100",
                    "400": "secondary.main",
                    "500": "neutral.600",
                    "600": "secondary.300",
                    "700": "neutral.black",
                    "800": "neutral.700",
                    "900": "secondary.main",
                },
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
