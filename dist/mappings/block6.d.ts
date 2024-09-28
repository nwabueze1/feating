declare const _default: {
    uuid: string;
    component: string;
    config: {
        content: {
            menu_uuid: null;
            text: {
                overline: string;
                heading: string;
                caption: string;
            };
            menu: {
                menuCategories: {
                    id: string;
                    uuid: string;
                    description: string;
                    title: string;
                }[];
                menuItems: ({
                    description: string;
                    image: {
                        src: string;
                    };
                    price: number;
                    name: string;
                    menuCategory: {
                        uuid: string;
                    };
                    slug?: undefined;
                } | {
                    description: string;
                    image: {
                        src: string;
                    };
                    price: number;
                    name: string;
                    slug: string;
                    menuCategory: {
                        uuid: string;
                    };
                })[];
                restaurant: {
                    bank_info: {
                        currency: string;
                    };
                };
            };
        };
        ssr_network_operation: string;
        ssr_content_fields: string[];
        isSsr: boolean;
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
                };
                menu: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                    600: string;
                    700: string;
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
