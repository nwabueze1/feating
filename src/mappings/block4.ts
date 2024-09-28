export default {
  uuid: "f3f49d35-7388-44c9-9540-101b30ca20b4",
  component: "EuBlock4",
  config: {
    content: {
      text: {
        overline: "How we work",
        title: "We are not the regular restaurants you know",
        subtitle: `Lorem ipsum dolor sit amet consectetur. Tellus morbi ac eu
        suscipit faucibus interdum. Convallis malesuada augue.`,
      },
      image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/img.png" },
      list: [
        {
          heading: "Easy To Order",
          body: "Lorem ipsum dolor sit amet consectetur. Nascetur rutrum vestibulum porttitor amet cras tellus sit justo sed. Amet viverra sodales et blandit.",
          image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Order+food-pana+1.png" },
        },
        {
          heading: "Fastest Delivery",
          body: "Lorem ipsum dolor sit amet consectetur. Nascetur rutrum vestibulum porttitor amet cras tellus sit justo sed. Amet viverra sodales et blandit.",
          image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Take+Away-rafiki+1.png" },
        },
        {
          heading: "Best Quality",
          body: "Lorem ipsum dolor sit amet consectetur. Nascetur rutrum vestibulum porttitor amet cras tellus sit justo sed. Amet viverra sodales et blandit.",
          image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Waiters-rafiki+1.png" },
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
          "100": "neutral.200",
          "200": "alert.error",
          "400": "secondary.main",
          "500": "neutral.700",
          "600": "neutral.600",
          "700": "neutral.black",
          "800": "neutral.700",
        },
      },
    },
    layouts: [
      {
        name: "layout-1",
        isSelected: true,
        content: {
          backgroundImage: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/leaf.png" },
        },
      },
      {
        name: "layout-2",
        isSelected: false,
        content: {
          backgroundImage: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/leaf.png" },
        },
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
