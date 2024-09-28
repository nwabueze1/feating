import { BlockConfigType } from "./../../../types";
import { Block5Layouts } from "./useBlock5Layout";

export const useEuBlock5Data = () => {
  const answer = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod erat a ligula posuere tincidunt. Morbi dignissim risus eget condimentum vulputate. Vivamus ut maximus nisi. Mauris lobortis porttitor eros ac aliquet. Duis in tincidunt turpis. Nullam bibendum felis velit, eget porta lectus pretium eu. Sed metus leo, fringilla nec iaculis id, auctor commodo velit. Suspendisse ornare quam vel felis egestas sodales. Maecenas eros eros, rutrum eu nisl sed, mollis porttitor lacus. Morbi iaculis porttitor felis. Quisque iaculis tincidunt metus ut tincidunt. Aliquam neque libero, eleifend eu turpis ut, dictum convallis lacus.
`;
  const configuration: BlockConfigType = {
    content: {
      text: {
        overline: "FAQ",
        heading: "All your questions have been answered ",
        caption: `
        Lorem ipsum dolor sit amet consectetur. Tellus morbi ac eu suscipit faucibus interdum. Convallis malesuada augue.
        `,
      },
      backgroundImage: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Group.png" },
      faqs: [
        {
          question: "Do you have dispatch rider that delivers food?",
          answer,
        },
        {
          question: "Do you sell daily fresh food?",
          answer,
        },
        {
          question: `How long does it take food to be ready after an Order has been placed?
`,
          answer,
        },
        {
          question: "Do you have an Instagram page?",
          answer,
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
        name: Block5Layouts.layout1,
        isSelected: true,
      },
      {
        name: Block5Layouts.layout2,
        isSelected: false,
      },
      {
        name: Block5Layouts.layout3,
        isSelected: false,
      },
      {
        name: Block5Layouts.layout4,
        isSelected: false,
      },
      {
        name: Block5Layouts.layout5,
        isSelected: false,
      },
    ],
    mode: "edit",
    index: 0,
    activeElement: "blocks.0",
    handleSelect: (key: string) => {
      alert(key);
    },
  };
  return { configuration };
};
