export default {
    uuid: "43095f2e-2376-40a9-bfc9-216ca1c95e06",
    component: "EuBlock2",
    config: {
        content: {
            text: { overline: "Our blog" },
            post_uuid: null,
            post: {
                featured_image: { src: "http://res.cloudinary.com/olamileke/image/upload/v1686516856/noir/articles/2752.jpg" },
                slug: "/our-daily-blog/benefits-of-marinating-your-stock",
                excerpt: "<p>Benefits of Marinating Your Stock</p><p>Discover the secrets to creating mouthwatering dishes bursting with flavor and tenderness.",
                title: "Benefits of Marinating your stock",
            },
            buttons: [
                {
                    text: "Explore our blog",
                    url: "/blog",
                    variant: "primary",
                },
                {
                    text: "Read more.",
                    url: "/",
                    variant: "secondary",
                },
            ],
        },
        ssr_content_fields: ["post"],
        ssr_network_operation: "GET_POST",
        configuration: {
            colors: {
                main: {
                    "100": "neutral.200",
                    "200": "secondary.main",
                    "300": "neutral.black",
                    "400": "neutral.black",
                    "500": "primary.main",
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
    }
};
