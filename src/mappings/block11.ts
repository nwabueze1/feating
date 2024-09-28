export default {
  uuid: "b46562e3-f098-4901-9f23-a96e117d5d76",
  component: "EuBlock11",
  config: {
    content: {
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
    ssr_content_fields: ["menu_item"],
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
