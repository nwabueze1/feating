import { BlockConfigType } from "../../../types";
import { BlockLayouts } from "../../../helpers";
export const useEuBlock13Data = () => {
  const configuration: BlockConfigType = {
    content: {
      text: {
        overline: "our dishes",
        main: "Curated just for you",
        subtext: "Lorem ipsum dolor sit amet consectetur. Tellus morbi ac eu suscipit faucibus interdum. Convallis malesuada augue.",
        menuTitle: "The Menu that you can not resist",
      },
      menu_uuid: null,
      menu: {
        menuCategories: [
          {
            id: "48",
            uuid: "dccd89b7-b5e6-49c6-a752-1cddf4160bc7",
            description: "Get your meal started off right with one of our delicious appetizers. From classic favorites like wings and nachos to more unique options like our roasted",
            title: "Appetizers",
          },
          {
            id: "49",
            uuid: "0e689f37-b986-4c91-801d-57b7f25c6a47",
            description:
              "Our entrees are made with the freshest ingredients and a whole lot of love. From our juicy burgers to our hand-rolled pasta dishes, there's something for every taste bud on our menu.",
            title: "Entrees",
          },
          {
            id: "50",
            uuid: "0064348a-8ae1-4d12-a547-6d4e914b3484",
            description: "Our sides are the perfect complement to any meal. Whether you're in the mood for something crispy, creamy, or savory, we've got you covered.",
            title: "Sides",
          },
          {
            id: "51",
            uuid: "0a4d665e-1a79-4ed1-ab38-bda5b919e574",
            description: "Our sides are the perfect complement to any meal. Whether you're in the mood for something crispy, creamy, or savory, we've got you covered.",
            title: "Desserts",
          },
          {
            id: "52",
            uuid: "9bb7143f-60ba-407d-b165-640911cb58f9",
            description:
              "Get your day started off right with one of our delicious meal. From classic favorites like wings and nachos to more unique options like our roasted cauliflower, we have something for everyone.",
            title: "Breakfast",
          },
        ],
        menuItems: [
          {
            description:
              "From craft cocktails to local beers, we have a beverage to pair perfectly with your meal. From craft cocktails to local beers, we have a beverage to pair perfectly with your meal. From craft cocktails to local beers, we have a beverage to pair perfectly with your meal.",
            image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/olc8GCVObe472KyTXZmiZmoNn1pFJ7E87gxbTDrR.jpg" },
            price: 300,
            name: "Hot coffee",
            slug: "/hot-coffee",
            menuCategory: {
              uuid: "9bb7143f-60ba-407d-b165-640911cb58f9",
            },
          },
          {
            description:
              "Get your day started off right with one of our delicious meal. From classic favorites like wings and nachos to more unique options like our roasted cauliflower, we have something for everyone. Get your day started off right with one of our delicious meal. From classic favorites like wings and nachos to more unique options like our roasted cauliflower, we have something for everyone.",
            image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/wI526TVKB3mScYzG07UKPIKiQiID9d8CSU40yZTR.jpg" },
            price: 400,
            name: "Veggie rice",
            menuCategory: {
              uuid: "9bb7143f-60ba-407d-b165-640911cb58f9",
            },
          },
          {
            description:
              "Save room for one of our decadent desserts. Our pastry chef has created an array of sweet treats that will leave you feeling satisfied and indulged. Save room for one of our decadent desserts. Our pastry chef has created an array of sweet treats that will leave you feeling satisfied and indulged.",
            image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/H1h47cj4ouZwvQuaLOwQMws2fZmDYOdCtbV1EwRz.jpg" },
            price: 400,
            name: "Chocolate Ice Cream",
            menuCategory: {
              uuid: "0e689f37-b986-4c91-801d-57b7f25c6a47",
            },
          },
          {
            description: "Grilled chicken breast served over a bed of crisp romaine lettuce, topped with shredded Parmesan cheese, croutons, and our house-made Caesar dressing.",
            image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/jyPI1psjaIOkGe9xLu7Ln81xFMYAnHC2UYSo7duV.jpg" },
            price: 1500,
            name: "Grilled Chicken Caesar Salad",
            menuCategory: {
              uuid: "0e689f37-b986-4c91-801d-57b7f25c6a47",
            },
          },
          {
            description:
              "Our sides are the perfect complement to any meal. Whether you're in the mood for something crispy, creamy, or savory, we've got you covered. Our sides are the perfect complement to any meal. Whether you're in the mood for something crispy, creamy, or savory, we've got you covered.",
            image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/uC1yZCEBesGTxO9zt2MCZG7aToQc9ecUILKR3J0W.jpg" },
            price: 2000,
            name: "Ice cream",
            menuCategory: {
              uuid: "0e689f37-b986-4c91-801d-57b7f25c6a47",
            },
          },
          {
            description:
              "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.",
            image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/ca2291e7-7789-43c5-8ab3-5bbb01228b07/rpa634VFYGAdpIV3qq5cPHJFvY6veBK9HHIkQ0PG.jpg" },
            price: 1000,
            name: "Pasta",
            menuCategory: {
              uuid: "0e689f37-b986-4c91-801d-57b7f25c6a47",
            },
          },
          {
            description:
              "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.",
            image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/rmIMU4uP1JWTGO49l0IO0L7rRqegZDbfDBxN3AGd.jpg" },
            price: 1000,
            name: "Chinese Hot Wings and Salmon",
            slug: "Chinese-Hot-Wings-and-Salmon",
            menuCategory: {
              uuid: "dccd89b7-b5e6-49c6-a752-1cddf4160bc7",
            },
          },
          {
            description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing., Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing., Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.",
            image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/bzcAdVU2jzROscwZkQfnlMTGHZxZiD4IB9qB6Nnu.jpg" },
            price: 4000,
            name: "Veggie Rice",
            menuCategory: {
              uuid: "dccd89b7-b5e6-49c6-a752-1cddf4160bc7",
            },
          },
          {
            description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing., Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.",
            image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/qQ5PrgRZQMCsMIcogpwcdlCB8bGpFmKWH3PhOnAt.jpg" },
            price: 200,
            name: "Meshed Rice",
            menuCategory: {
              uuid: "dccd89b7-b5e6-49c6-a752-1cddf4160bc7",
            },
          },
          {
            description:
              "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.",
            image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/tcfSaheVCmiTijZYDI6DWxp6hzNZJ5jPhnMqCxMe.jpg" },
            price: 500,
            name: "White rice",
            menuCategory: {
              uuid: "0a4d665e-1a79-4ed1-ab38-bda5b919e574",
            },
          },
          {
            description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.",
            image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/H8Kv8ULrwy6BHKBGlQOkuDXgo7qxGnjm04SCpMF0.jpg" },
            price: 400,
            name: "Jollof Rice",
            menuCategory: {
              uuid: "0a4d665e-1a79-4ed1-ab38-bda5b919e574",
            },
          },
          {
            description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.",
            image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/sEFLg4cLkFpih4kNOfkxNkVIE4p6HdCaUDXpBgCT.jpg" },
            price: 300,
            name: "Green rice",
            menuCategory: {
              uuid: "0064348a-8ae1-4d12-a547-6d4e914b3484",
            },
          },
          {
            description:
              "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.",
            image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/8lKJfJboAMN5sICxEzgG4XoDgppfIBf1L8gVCqIW.jpg" },
            price: 3000,
            name: "Chinese Rice",
            menuCategory: {
              uuid: "0064348a-8ae1-4d12-a547-6d4e914b3484",
            },
          },
        ],
        restaurant: {
          bank_info: {
            currency: "NGN",
          },
        },
      },
    },
    configuration: {
      colors: {
        main: {
          100: "secondary.main",
          200: "neutral.black",
          300: "neutral.black",
          400: "neutral.500",
          500: "secondary.300",
          600: "neutral.100",
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
      },
      fonts: {
        heading: "fonts.body",
        body: "fonts.body",
      },
    },
    ssr_network_operation: "GET_MENU",
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
    index: 4,
    activeElement: "blocks.4",
    handleSelect: (key: string) => {
      alert(key);
    },
  };
  return {
    configuration,
  };
};
