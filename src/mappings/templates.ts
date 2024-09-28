const colors = {
  primary: {
    100: "#EDF9FF",
    200: "#CFF0FF",
    300: "#9FE1FF",
    400: "#51C9FF",
    main: "#35ACE1",
  },
  secondary: {
    100: "#FFEAEE",
    200: "#FEB7C3",
    300: "#FD6F87",
    400: "#EB5757",
    main: "#E32D4C",
  },
  neutral: {
    100: "#FFFFFF",
    200: "#FAFAFA",
    300: "#F2F2F2",
    400: "#C0C2CC",
    500: "#909199",
    600: "#5C5D66",
    700: "#2B2C33",
    black: "#272727",
  },
  alert: {
    positive: "#20E600",
    general: "#0076E6",
    error: "#E60E00",
  },
};

const fonts = {
  heading: {
    options: ["Open Sans", "Montserrat", "Poppins", "Losta Masta"],
    selected: "Montserrat",
  },
  body: {
    options: ["Open Sans", "Montserrat", "Poppins", "Losta Masta"],
    selected: "Poppins",
  },
};

export type TTemplate = {
  name: string;
  label: string;
  uuid: string;
  image: string;
  blocks: string[];
  colors: { [key: string]: any };
  fonts: { [key: string]: any };
  hive_identifiers?: { block: string; field: string }[];
  type?: string;
  unique_identifier?: string;
};

export const templateConfig: TTemplate[] = [
  {
    name: "home",
    label: "Home Page",
    uuid: "25ef34e7-10fe-48fa-9951-43415491a6fb",
    image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Screenshot+(357).png",
    blocks: [
      "d809563b-59a0-4ea7-9e82-40a181b27b05",
      "f3f49d35-7388-44c9-9540-101b30ca20b4",
      "966d76f5-fc2a-4097-90cc-e10d6af275de",
      "3cc6200c-5f4f-4113-b2c6-f3459b28369a",
      "1a024780-e374-48d1-b29d-9cbaf6a9a63b",
      "68ae74ce-8596-4b59-a7a0-ec42f8dc34b7",
      "43095f2e-2376-40a9-bfc9-216ca1c95e06",
    ],
    hive_identifiers: [
      { block: "966d76f5-fc2a-4097-90cc-e10d6af275de", field: "menu_item_uuids" },
      { block: "68ae74ce-8596-4b59-a7a0-ec42f8dc34b7", field: "menu_item_uuids" },
      { block: "43095f2e-2376-40a9-bfc9-216ca1c95e06", field: "post_uuid" },
    ],
    colors,
    fonts,
  },
  {
    name: "about",
    label: "About Page",
    uuid: "dccc18c1-9c05-482d-9704-441a26c95d93",
    image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Screenshot+(359)(I).png",
    blocks: [
      "d809563b-59a0-4ea7-9e82-40a181b27b05",
      "98cfbb25-5f17-4394-b793-c218fd3a7e06",
      "b46562e3-f098-4901-9f23-a96e117d5d76",
      "822b1402-d697-4686-857c-56f4e54e8ac4",
      "3cc6200c-5f4f-4113-b2c6-f3459b28369a",
      "1a024780-e374-48d1-b29d-9cbaf6a9a63b",
    ],
    hive_identifiers: [{ block: "b46562e3-f098-4901-9f23-a96e117d5d76", field: "menu_item_uuid" }],
    colors,
    fonts,
  },
  {
    name: "menu",
    label: "Menu Page",
    uuid: "84f0e2a3-e3fb-4975-a0c7-f774a2ea4e2a",
    image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Screenshot+(361)(I).png",
    blocks: ["d809563b-59a0-4ea7-9e82-40a181b27b05", "a44e5e70-84dc-4e36-8bce-03ca936307ba"],
    hive_identifiers: [{ block: "a44e5e70-84dc-4e36-8bce-03ca936307ba", field: "menu_uuid" }],
    colors,
    fonts,
  },
  {
    name: "dishes",
    label: "Dishes Page",
    uuid: "86498921-15f6-44fd-ba9f-a6f0edcadd98",
    image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Screenshot+(360)(I).png",
    blocks: ["d809563b-59a0-4ea7-9e82-40a181b27b05", "966d76f5-fc2a-4097-90cc-e10d6af275de", "1a024780-e374-48d1-b29d-9cbaf6a9a63b"],
    hive_identifiers: [{ block: "966d76f5-fc2a-4097-90cc-e10d6af275de", field: "menu_item_uuids" }],
    colors,
    fonts,
  },
  {
    name: "contact us",
    label: "Contact Us Page",
    uuid: "1bb63663-f5dc-443e-b601-500102f091f6",
    image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Screenshot+(364)(I).png",
    blocks: ["d809563b-59a0-4ea7-9e82-40a181b27b05", "62604d2a-ac77-4169-bdb8-1fb1ca1e7672", "1a024780-e374-48d1-b29d-9cbaf6a9a63b"],
    hive_identifiers: [{ block: "62604d2a-ac77-4169-bdb8-1fb1ca1e7672", field: "form_uuid" }],
    colors,
    fonts,
  },
];

export const blogTemplate = {
  name: "blog",
  label: "Blog Page",
  uuid: "af33b865-f3ac-4824-903a-357cdb20f53d",
  image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Screenshot+(365)(I).png",
  blocks: ["d809563b-59a0-4ea7-9e82-40a181b27b05", "ba334218-fabd-4705-abbc-e2a8bccefdbf"],
  colors,
  fonts,
};

export const menuItemTemplate: TTemplate = {
  name: "menu item",
  label: "Menu Item Page",
  uuid: "250a04d5-557d-4c82-ae79-32f75c809145",
  image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Screenshot+(362)(I).png",
  type: "restaurant.menu_item",
  unique_identifier: "blocks.eublock18.content.menu_item_uuid",
  blocks: ["c97d2bcd-decc-4cd2-b498-4280a147f584"],
  hive_identifiers: [{ block: "c97d2bcd-decc-4cd2-b498-4280a147f584", field: "menu_item_uuid" }],
  colors,
  fonts,
};

export const blogPostTemplate: TTemplate = {
  name: "blog post",
  label: "Blog Post Page",
  uuid: "272e07c3-ff31-4017-89f5-4d914442b6db",
  image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Screenshot+(363)(I).png",
  type: "blog.post",
  unique_identifier: "blocks.eublock19.content.post_uuid",
  blocks: ["225c0ce9-dedd-4020-be16-21c3f8a86afa"],
  hive_identifiers: [{ block: "225c0ce9-dedd-4020-be16-21c3f8a86afa", field: "post_uuid" }],
  colors,
  fonts,
};

export const cartTemplate = {
  name: "cart",
  label: "Cart Page",
  uuid: "4dd289b5-06db-47fe-a3d6-3cba27e284bb",
  image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Screenshot+(366)(I).png",
  blocks: ["088768ba-09dd-4c0f-b40b-3a9a355ea772"],
  colors,
  fonts,
};

export const searchTemplate = {
  name: "search",
  label: "Search Page",
  uuid: "2526b67c-4a7b-441c-9d75-601563b215e6",
  image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Screenshot+(367)(I).png",
  blocks: ["d809563b-59a0-4ea7-9e82-40a181b27b05", "3eb518af-5e2a-4139-b003-2e207a70f67d"],
  colors,
  fonts,
};

export const errorTemplate = {
  name: "error",
  label: "Error Page",
  uuid: "f07a56c8-cd89-4ff1-8a40-08e8dec865f0",
  image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/kiamoni/Screenshot+(171).png",
  blocks: ["fdda26a1-3e41-4287-84ef-3884d276491d"],
  colors,
  fonts,
};
