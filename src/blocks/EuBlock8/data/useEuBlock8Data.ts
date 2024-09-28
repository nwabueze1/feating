import { BlockConfigType } from "../../../types";

export const useEuBlock8Data = () => {
  const configuration: BlockConfigType = {
    content: {
      text: {
        overline: "testimonial",
        title: " What our customers are saying about our food",
        secondaryText: "12K+",
        avatarTitle: "Our Reviewers",
      },
      image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/cook.png" },
      comments: [
        {
          comment: `
          “Lorem ipsum dolor sit amet consectetur. Amet integer
          dui viverra sed viverra. Nullam donec in dis dui cras.
          Integer donec lectus faucibus ultricies cursus. Proin
          cursus rutrum tempus amet ultrices aliquam tortor sit
          integer. Sem arcu vehicula orci malesuada elit ac ac.
          Risus quis a orci amet tincidunt. Vitae aliquet ipsum
          blandit malesuada volutpat viverra sollicitudin. Sed
          magna eros purus.”
          `,
          name: "Theresa May",
          tag: "Food Enthusiast",
          image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Ellipse+10.png" },
        },
        {
          comment: `
          “Lorem ipsum dolor sit amet consectetur. Amet integer
          dui viverra sed viverra. Nullam donec in dis dui cras.
          Integer donec lectus faucibus ultricies cursus. Proin
          cursus rutrum tempus amet ultrices aliquam tortor sit
          integer. Sem arcu vehicula orci malesuada elit ac ac.
          Risus quis a orci amet tincidunt. Vitae aliquet ipsum
          blandit malesuada volutpat viverra sollicitudin. Sed
          magna eros purus.”
          `,
          name: "Esther Wanchope",
          tag: "Food Enthusiast",
          image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Ellipse+10.png" },
        },
        {
          comment: `
          “Lorem ipsum dolor sit amet consectetur. Amet integer
          dui viverra sed viverra. Nullam donec in dis dui cras.
          Integer donec lectus faucibus ultricies cursus. Proin
          cursus rutrum tempus amet ultrices aliquam tortor sit
          integer. Sem arcu vehicula orci malesuada elit ac ac.
          Risus quis a orci amet tincidunt. Vitae aliquet ipsum
          blandit malesuada volutpat viverra sollicitudin. Sed
          magna eros purus.”
          `,
          name: "Kate Manning",
          tag: "Food Enthusiast",
          image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Ellipse+10.png" },
        },
      ],
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
    configuration: {
      colors: {
        main: {
          100: "neutral.200",
          200: "secondary.main",
          300: "neutral.black",
          400: "neutral.700",
          500: "neutral.600",
          600: "secondary.300",
          700: "neutral.100",
          900: "neutral.black",
          1000: "secondary.100",
          1100: "secondary.200",
          1200: "secondary.main",
          1300: "neutral.black",
        },
      },
      fonts: {
        heading: "fonts.heading",
        body: "fonts.body",
      },
    },
    mode: "edit",
    index: 23,
    activeElement: "blocks.23",
    handleSelect: (key: string) => {
      alert(key);
    },
  };

  return {
    configuration,
  };
};
