import { BlockLayouts } from "../../../helpers";
export var useEuBlock12Data = function () {
    var configuration = {
        content: {
            form_uuid: null,
            form: {
                uuid: "2c149824-4595-49b4-b44c-277b568f52a6",
                site_uuid: "b7a6df60-3fd5-4666-b481-5055608228ad",
                title: "Contact us form",
                author: "createaccount@mail.com",
                status: "1",
                questions: [
                    {
                        uuid: "31618ad1-0957-453c-9f75-570c540191eb",
                        question: "Your name",
                        description: null,
                        type: "SHORT_TEXT",
                        is_required: true,
                        fields: {
                            character_limit: null,
                        },
                        __typename: "Question",
                    },
                    {
                        uuid: "17664899-0dc6-47e2-9ac4-829370b8f7e3",
                        question: "Your phone number",
                        description: null,
                        type: "PHONE_NUMBER",
                        is_required: true,
                        fields: {
                            default_country_code: "US",
                        },
                        __typename: "Question",
                    },
                    {
                        uuid: "a46bbda2-8c12-4a50-b097-79c236566b4a",
                        question: "Your Email",
                        description: null,
                        type: "EMAIL_ADDRESS",
                        is_required: true,
                        fields: [],
                        __typename: "Question",
                    },
                    {
                        uuid: "41a2d1a8-8910-428c-81d3-66fdd66a3662",
                        question: "Send us a message",
                        description: null,
                        type: "MULTILINE",
                        is_required: true,
                        fields: {
                            character_limit: "",
                        },
                        __typename: "Question",
                    },
                    {
                        uuid: "61d0d864-07dc-4a09-9f41-e35a4f9f148a",
                        question: "Upload Image",
                        description: null,
                        type: "PHOTO",
                        is_required: false,
                        fields: {
                            format: "",
                            max_size: "",
                        },
                        position: 4,
                        __typename: "Question",
                    },
                    {
                        uuid: "718f48d2-cf05-4340-97c6-240a7e9b7ec8",
                        question: "Upload a file",
                        description: null,
                        type: "DOC",
                        is_required: false,
                        fields: {
                            format: "pdf",
                            max_size: "10MB",
                        },
                        position: 5,
                        __typename: "Question",
                    },
                    {
                        uuid: "d13b256a-d15b-4f99-9986-3d0965998edc",
                        question: "Upload your video",
                        description: null,
                        type: "VIDEO",
                        is_required: false,
                        fields: {
                            format: "",
                            max_size: "10MB",
                        },
                        position: 6,
                        __typename: "Question",
                    },
                ],
                setting: {
                    uuid: "e8f4edf0-99f8-42f9-b5a2-d4675e8cf31b",
                    end_date: null,
                    allow_multiple_responses: true,
                    response_limit: 1000000,
                    submission_text: "",
                    notification_email: "",
                    __typename: "FormSetting",
                },
                __typename: "Form",
            },
            text: {
                main: "Get in",
                coloredMain: "Touch",
                subtext: "Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.",
                latitude: 6.432557,
                longitude: 3.4712118,
            },
            contactInfo: [
                {
                    type: "tel",
                    value: "09032295542",
                },
                {
                    type: "fax",
                    value: "03 5432 1234",
                },
                {
                    type: "email",
                    value: "info@mail.com",
                },
            ],
        },
        ssr_network_operation: "GET_FORM_BY_UUID",
        ssr_content_fields: ["form"],
        configuration: {
            colors: {
                main: {
                    100: "neutral.100",
                    200: "neutral.black",
                    300: "primary.main",
                    400: "neutral.600",
                },
                button: {
                    "100": "primary.main",
                    "200": "primary.400",
                    "300": "neutral.100",
                    "400": "neutral.200",
                },
            },
            fonts: {
                heading: "fonts.heading",
                body: "fonts.body",
            },
        },
        layouts: [
            {
                name: BlockLayouts.LAYOUT_1,
                isSelected: true,
            },
            {
                name: BlockLayouts.LAYOUT_2,
                isSelected: false,
            },
            {
                name: BlockLayouts.LAYOUT_3,
                isSelected: false,
            },
            {
                name: BlockLayouts.LAYOUT_4,
                isSelected: false,
            },
            {
                name: BlockLayouts.LAYOUT_5,
                isSelected: false,
            },
        ],
        mode: "edit",
        index: 3,
        activeElement: "blocks.3",
        handleSelect: function (key) {
            alert(key);
        },
    };
    return {
        configuration: configuration,
    };
};
