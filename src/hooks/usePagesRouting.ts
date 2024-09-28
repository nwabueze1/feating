import { EuPageProps } from "../types";
import { Blocks } from "../enumerations/blockNames";

export const useGetEuPages = () => {
  return (): EuPageProps[] => [
    { 
      name: "home",
      pages: [Blocks?.BLOCK10, Blocks?.BLOCK1, Blocks?.BLOCK6, Blocks?.BLOCK4, Blocks?.BLOCK9, Blocks?.BLOCK8, Blocks?.BLOCK5, Blocks?.BLOCK7, Blocks?.BLOCK2, Blocks?.BLOCK3],
    },

    { 
      name: "menus",
      pages: [Blocks?.BLOCK10, Blocks?.BLOCK1, Blocks?.BLOCK13, Blocks?.BLOCK3],
    },
    {
      name: "dishes",
      pages: [Blocks?.BLOCK10, Blocks?.BLOCK1, Blocks?.BLOCK9, Blocks?.BLOCK5, Blocks?.BLOCK3],
    },
    {
      name: "cart",
      pages: [Blocks?.BLOCK10, Blocks?.BLOCK17, Blocks?.BLOCK3],
    },

    {
      name: "menu item",
      pages: [Blocks?.BLOCK10, Blocks?.BLOCK18, Blocks?.BLOCK3],
    },

    {
      name: "about",
      pages: [Blocks?.BLOCK10, Blocks?.BLOCK1, Blocks?.BLOCK14, Blocks?.BLOCK11, Blocks?.BLOCK16, Blocks?.BLOCK8, Blocks?.BLOCK5, Blocks?.BLOCK3],
    },

    {
      name: "contact",
      pages: [Blocks?.BLOCK10, Blocks?.BLOCK1, Blocks?.BLOCK12, Blocks?.BLOCK5, Blocks?.BLOCK3],
    },

    {
      name: "blog",
      pages: [Blocks?.BLOCK10, Blocks?.BLOCK1, "kiamoni-block-17", "kiamoni-block-3"],
    },

    {
      name: "blogContent",
      pages: ["kiamoni-block-1", "kiamoni-block-13", "kiamoni-block-18", "kiamoni-block-3"],
    },

    {
      name: "search",
      pages: [Blocks.BLOCK10, Blocks.BLOCK1, Blocks.BLOCK21, Blocks.BLOCK3],
    },
  ];
};
