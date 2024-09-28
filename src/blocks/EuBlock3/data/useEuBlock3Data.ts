import { BlockConfigType } from "../../../types";
import { EuBlock3Layout } from "./useBlock3Layout";
export const useEuBlock3Data = () => {
  const configuration: BlockConfigType = {
    content: {
      form_uuid: null,
      form: {
        uuid: "51e87773-d1e1-4b5f-9fe4-8b908f5dd9b5",
        site_uuid: "170f9fbc-27fc-4ab5-8f91-61346818a5db",
        title: "newsletter subscription",
        author: "testauser@mail.com",
        status: "1",
        questions: [
          {
            uuid: "dad0bc14-e746-4189-b091-0b22441bc310",
            question: "Your email address",
            description: null,
            type: "EMAIL_ADDRESS",
            is_required: true,
            fields: [],
            __typename: "Question",
          },
        ],
        setting: {
          uuid: "52ddd7fa-789f-4573-8029-811ece17e866",
          end_date: null,
          allow_multiple_responses: true,
          response_limit: 1000000,
          submission_text: "",
          notification_email: "",
          __typename: "FormSetting",
        },
        __typename: "Form",
      },
      icons: [
        {
          type: "FACEBOOK",
          url: "https://facebook.com",
        },
        {
          type: "INSTAGRAM",
          url: "https://instagram.com",
        },
        {
          type: "TWITTER",
          url: "https://twitter.com",
        },
      ],
      text: {
        main: "Eat Up",
        caption: "Our job is to fill your tummy with delicious food and with fast and free delivery.",
        subtitle: "We’d love to hear from you",
        contact: "Get in Touch",
      },
      image: { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Logo+(1).png" },
      footerLinks: [
        {
          name: "About",
          links: [
            { text: "Features", url: "/features" },
            { text: "Blog", url: "/blog" },
            { text: "Menu", url: "/menu" },
          ],
        },
        {
          name: "Company",
          links: [
            {
              text: "What we do",
              url: "/what-we-do",
            },
            {
              text: "Partner with us",
              url: "partner with us",
            },
            {
              text: "FAQ",
              url: "/",
            },
          ],
        },
        {
          name: "Support",
          links: [
            {
              text: "Orders",
              url: "/",
            },
            {
              text: "Feedback",
              url: "/",
            },
            {
              text: "Contact Us",
              url: "/",
            },
          ],
        },
      ],
    },
    ssr_network_operation: "GET_FORM_BY_UUID",
    ssr_content_fields: ["form"],
    configuration: {
      colors: {
        main: {
          "100": "secondary.main",
          "200": "neutral.100",
          "300": "neutral.400",
          "400": "neutral.500",
        },
        button: {
          "100": "primary.main",
          "200": "primary.400",
          "300": "neutral.100",
          "400": "neutral.500",
          "500": "neutral.100",
        },
      },
      fonts: {
        heading: "fonts.body",
        body: "fonts.body",
      },
    },
    layouts: [
      {
        name: EuBlock3Layout.layout1,
        isSelected: false,
      },
      {
        name: EuBlock3Layout.layout2,
        isSelected: false,
      },
      {
        name: EuBlock3Layout.layout3,
        isSelected: false,
      },
      {
        name: EuBlock3Layout.layout4,
        isSelected: false,
      },
      {
        name: EuBlock3Layout.layout5,
        isSelected: false,
      },
    ],
    mode: "view",
    index: 1,
    activeElement: "blocks.1",
  };

  return { configuration };
};
