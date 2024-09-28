import { BlockConfigType } from "./../../../types";
import { Block4Layouts } from "./useBlock4Layout";

export const useEuBlock4Data = () => {
  const configuration: BlockConfigType = {
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
          image: { src: "https://images.pexels.com/photos/19620956/pexels-photo-19620956.jpeg" },
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
      backgroundImage: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/leaf.png" },
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
        name: Block4Layouts.layout1,
        isSelected: true,
      },
      {
        name: Block4Layouts.layout2,
        isSelected: false,
      },
      {
        name: Block4Layouts.layout3,
        isSelected: false,
      },
      {
        name: Block4Layouts.layout4,
        isSelected: false,
      },
      {
        name: Block4Layouts.layout5,
        isSelected: false,
      },
    ],
    index: 3,
    activeElement: "blocks.2",
    handleSelect: (key: string) => {
      alert(key);
    },
  };
  return { configuration };
};
