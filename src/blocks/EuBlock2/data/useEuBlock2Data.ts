import { BlockConfigType } from "../../../types";
import { EuBlock2Layout } from "./useEuBlock2Layout";
export const useEuBlock2Data = () => {
  const configuration: BlockConfigType = {
    content: {
      text: { overline: "Our blog" },
      post_uuid: null,
      post: {
        featured_image:
          { src:"http://res.cloudinary.com/olamileke/image/upload/v1686516856/noir/articles/2752.jpg" },
        slug: "/our-daily-blog/benefits-of-marinating-your-stock",
        excerpt:
          "<p>Benefits of Marinating Your Stock</p><p>Discover the secrets to creating mouthwatering dishes bursting with flavor and tenderness.",
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
      image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Rectangle_big.png",
    },
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
        name: EuBlock2Layout.layout1,
        isSelected: false,
      },
      {
        name: EuBlock2Layout.layout2,
        isSelected: false,
      },
      {
        name: EuBlock2Layout.layout3,
        isSelected: false,
      },
      {
        name: EuBlock2Layout.layout4,
        isSelected: false,
      },
      {
        name: EuBlock2Layout.layout5,
        isSelected: false,
      },
    ],
    mode: "edit",
    index: 0,
    activeElement: "blocks.0",
  };

  return { configuration };
};
