import { BlockConfigType } from "../../../types";
import { BlockLayouts as Layouts } from "../../../helpers";

export const useEuBlock14Data = () => {
  const configuration: BlockConfigType = {
    content: {
      text: {
        overline: "About us",
        main: "We are your first choice on every list",
        body: `
        Integer orci velit, porttitor id imperdiet nec, maximus vitae tortor. Integer viverra, est aliquet viverra eleifend, tellus risus condimentum sem, sit amet faucibus justo lectus condimentum libero. Quisque at ullamcorper ipsum. Aliquam erat volutpat. Phasellus maximus, diam in aliquet porta, magna massa venenatis ante, at posuere elit tellus non enim. Etiam ut condimentum nulla. Integer volutpat ex nec nibh volutpat semper vel sed ex. Sed faucibus nisi ut arcu convallis, id volutpat elit placerat. Fusce ullamcorper lacus in tellus rhoncus vehicula. Sed odio augue, aliquet sit amet iaculis vel, eleifend ac neque. Nunc consectetur lobortis lorem, non pharetra tellus pulvinar a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        `,
      },
      image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/image+(2).png" },
    },
    configuration: {
      colors: {
        main: {
          100: "secondary.main",
          200: "neutral.black",
          300: "neutral.600",
          "400": "neutral.100",
        },
      },
      fonts: {
        heading: "fonts.heading",
        body: "fonts.body",
      },
    },
    layouts: [
      {
        name: Layouts.LAYOUT_1,
        isSelected: true,
      },
      {
        name: Layouts.LAYOUT_2,
        isSelected: false,
      },
      {
        name: Layouts.LAYOUT_3,
        isSelected: false,
      },
      {
        name: Layouts.LAYOUT_4,
        isSelected: false,
      },
      {
        name: Layouts.LAYOUT_5,
        isSelected: false,
      },
    ],
    mode: "edit",
    index: 3,
    activeElement: "blocks.3",
    handleSelect: (key: string) => { alert(key) },
  };
  return {
    configuration,
  };
};
