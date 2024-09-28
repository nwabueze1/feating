declare const _default: {
    uuid: string;
    component: string;
    config: {
        content: {
            form_uuid: null;
            form: {
                uuid: string;
                site_uuid: string;
                title: string;
                author: string;
                status: string;
                questions: ({
                    uuid: string;
                    question: string;
                    description: null;
                    type: string;
                    is_required: boolean;
                    fields: {
                        character_limit: null;
                        default_country_code?: undefined;
                    };
                    __typename: string;
                } | {
                    uuid: string;
                    question: string;
                    description: null;
                    type: string;
                    is_required: boolean;
                    fields: {
                        default_country_code: string;
                        character_limit?: undefined;
                    };
                    __typename: string;
                } | {
                    uuid: string;
                    question: string;
                    description: null;
                    type: string;
                    is_required: boolean;
                    fields: never[];
                    __typename: string;
                } | {
                    uuid: string;
                    question: string;
                    description: null;
                    type: string;
                    is_required: boolean;
                    fields: {
                        character_limit: string;
                        default_country_code?: undefined;
                    };
                    __typename: string;
                })[];
                setting: {
                    uuid: string;
                    end_date: null;
                    allow_multiple_responses: boolean;
                    response_limit: number;
                    submission_text: string;
                    notification_email: string;
                    __typename: string;
                };
                __typename: string;
            };
            text: {
                main: string;
                coloredMain: string;
                subtext: string;
                latitude: number;
                longitude: number;
            };
            contactInfo: {
                type: string;
                value: string;
            }[];
        };
        ssr_network_operation: string;
        ssr_content_fields: string[];
        configuration: {
            colors: {
                main: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                };
                button: {
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                };
            };
            fonts: {
                heading: string;
                body: string;
            };
        };
        layouts: {
            name: string;
            isSelected: boolean;
        }[];
    };
};
export default _default;
