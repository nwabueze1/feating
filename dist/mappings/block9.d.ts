declare const _default: {
    uuid: string;
    component: string;
    config: {
        content: {
            text: {
                overline: string;
                title: string;
                subtitle: string;
            };
            menu_item_uuids: null;
            menu_items: {
                image: {
                    src: string;
                };
                description: string;
                name: string;
                price: number;
                menu: {
                    restaurant: {
                        bank_info: {
                            currency: string;
                        };
                    };
                };
            }[];
        };
        ssr_content_fields: string[];
        ssr_network_operation: string;
        layouts: {
            name: string;
            isSelected: boolean;
        }[];
        configuration: {
            colors: {
                main: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                    600: string;
                    700: string;
                    800: string;
                    900: string;
                };
                button: {
                    "100": string;
                    "300": string;
                };
            };
            fonts: {
                heading: string;
                body: string;
            };
        };
    };
};
export default _default;
