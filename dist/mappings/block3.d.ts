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
                questions: {
                    uuid: string;
                    question: string;
                    description: null;
                    type: string;
                    is_required: boolean;
                    fields: never[];
                    __typename: string;
                }[];
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
            icons: {
                type: string;
                url: string;
            }[];
            text: {
                main: string;
                caption: string;
                subtitle: string;
                contact: string;
            };
            image: {
                src: string;
            };
            footerLinks: {
                name: string;
                links: {
                    text: string;
                    url: string;
                }[];
            }[];
        };
        ssr_network_operation: string;
        ssr_content_fields: string[];
        configuration: {
            colors: {
                main: {
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                };
                button: {
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
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
