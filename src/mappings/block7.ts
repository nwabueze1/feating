export default {
  uuid: "68ae74ce-8596-4b59-a7a0-ec42f8dc34b7",
  component: "EuBlock7",
  config: {
    content: {
      text: {
        overline: "Trending Food",
        title: "Buy from our specials",
        subtitle: "Lorem ipsum dolor sit amet consectetur. Tellus morbi ac eu suscipit faucibus interdum. Convallis malesuada augue.",
      },
      menu_item_uuids: null,
      menu_items: [
        {
          image:
            { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/H1h47cj4ouZwvQuaLOwQMws2fZmDYOdCtbV1EwRz.jpg" },
          description: "Adipisci enim facere consequatur voluptate.",
          name: "vero",
          price: 3,
          menu: {
            restaurant: {
              bank_info: {
                currency: "USD",
              },
            },
          },
        },
        {
          image:
            { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/rmIMU4uP1JWTGO49l0IO0L7rRqegZDbfDBxN3AGd.jpg" },
          description: "Savory Bacon-Wrapped Filet Mignon Savory Bacon-Wrapped Filet Mignon Savory Bacon-Wrapped Filet Mignon Savory Bacon-Wrapped Filet Mignon",
          name: "Savory Bacon-Wrapped Filet Mignon",
          price: 3.45,
          menu: {
            restaurant: {
              bank_info: {
                currency: "USD",
              },
            },
          },
        },
        {
          image:
            { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/bzcAdVU2jzROscwZkQfnlMTGHZxZiD4IB9qB6Nnu.jpg" },
          description: "Tender filet wrapped in crispy bacon and served with garlic mashed potatoes and seasonal vegetables",
          name: "Pasta",
          price: 1.5,
          menu: {
            restaurant: {
              bank_info: {
                currency: "USD",
              },
            },
          },
        },
        {
          image:
            { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/qQ5PrgRZQMCsMIcogpwcdlCB8bGpFmKWH3PhOnAt.jpg" },
          description: "Tender filet wrapped in crispy bacon and served with garlic mashed potatoes and seasonal vegetables",
          name: "Ice cream",
          price: 2.5,
          menu: {
            restaurant: {
              bank_info: {
                currency: "USD",
              },
            },
          },
        },
        {
          image:
            { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/tcfSaheVCmiTijZYDI6DWxp6hzNZJ5jPhnMqCxMe.jpg" },
          description: "Tender filet wrapped in crispy bacon and served with garlic mashed potatoes and seasonal vegetables",
          name: "Hot coffee",
          price: 1,
          menu: {
            restaurant: {
              bank_info: {
                currency: "USD",
              },
            },
          },
        },
        {
          image:
            { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/H8Kv8ULrwy6BHKBGlQOkuDXgo7qxGnjm04SCpMF0.jpg" },
          description: "Tender filet wrapped in crispy bacon and served with garlic mashed potatoes and seasonal vegetables",
          name: "Veggie rice",
          price: 2,
          menu: {
            restaurant: {
              bank_info: {
                currency: "USD",
              },
            },
          },
        },
        {
          image:
            { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/sEFLg4cLkFpih4kNOfkxNkVIE4p6HdCaUDXpBgCT.jpg" },
          description: "Tender filet wrapped in crispy bacon and served with garlic mashed potatoes and seasonal vegetables",
          name: "Chocolate Ice Cream",
          price: 3,
          menu: {
            restaurant: {
              bank_info: {
                currency: "USD",
              },
            },
          },
        },
        {
          image:
            { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/uC1yZCEBesGTxO9zt2MCZG7aToQc9ecUILKR3J0W.jpg" },
          description: "Tender filet wrapped in crispy bacon and served with garlic mashed potatoes and seasonal vegetables",
          name: "Chinese Hot Wings and Salmon",
          price: 3.5,
          menu: {
            restaurant: {
              bank_info: {
                currency: "USD",
              },
            },
          },
        },
      ],
      buttons: [{ text: "View menu", url: "menu" }],
    },
    ssr_content_fields: ["menu_items"],
    ssr_network_operation: "GET_MENU_ITEMS",
    layouts: [
      {
        name: "layout-1",
        isSelected: true,
      },
      {
        name: "layout-2",
        isSelected: false,
      },
    ],
    configuration: {
      colors: {
        main: {
          100: "neutral.100",
          200: "secondary.main",
          300: "neutral.black",
          400: "neutral.600",
          500: "neutral.100",
          600: "neutral.black",
          700: "primary.main",
          800: "primary.100",
          900: "primary.400",
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
  }
};
