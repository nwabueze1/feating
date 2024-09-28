import { BlockConfigType } from "../../../types";
import { EuBlock10Layouts } from "./useEuBlock10Layout";

export const useEuBlock10Data = () => {
  const configuration: BlockConfigType = {
    content: {
      image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Logo+(2).png" },
      text: {
        main: "Eat up",
      },
      links: [
        {
          text: "About",
          url: "/about",
        },
        {
          text: "Menu",
          url: "/menu",
        },
        {
          text: "Dishes",
          url: "/dishes",
        },
        {
          text: "Wish lists",
          url: "#",
        },
        {
          text: "Contact us",
          url: "#",
        },
        {
          text: "Blog",
          url: "/blog",
        },
      ],
      cart: {
        numberOfItems: 0,
      },
    },
    layouts: [
      {
        name: EuBlock10Layouts.layout1,
        isSelected: true,
      },
      {
        name: EuBlock10Layouts.layout2,
        isSelected: false,
      },
      {
        name: EuBlock10Layouts.layout3,
        isSelected: false,
      },
      {
        name: EuBlock10Layouts.layout4,
        isSelected: false,
      },
      {
        name: EuBlock10Layouts.layout5,
        isSelected: false,
      },
    ],
    animations: [],
    configuration: {
      colors: {
        main: {
          100: "neutral.100",
          200: "neutral.black",
          300: "secondary.main",
          400: "secondary.200",
          500: "neutral.500",
          600: "secondary.300",
          700: "primary.main",
          800: "primary.400",
          900: "neutral.black",
          1000: "neutral.black",
        },
      },
      fonts: {
        heading: "fonts.heading",
        body: "fonts.heading",
      },
    },
    index: 0,
    activeElement: "blocks.0",
  };

  return {
    configuration,
  };
};
