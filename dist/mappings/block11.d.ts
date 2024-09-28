declare const _default: {
    uuid: string;
    component: string;
    config: {
        content: {
            menu_item_uuid: null;
            menu_item: {
                name: string;
                image: {
                    src: string;
                };
                description: string;
                price: number;
                slug: string;
                menu: {
                    restaurant: {
                        bank_info: {
                            currency: string;
                        };
                    };
                };
            };
        };
        ssr_content_fields: string[];
        ssr_network_operation: string;
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
