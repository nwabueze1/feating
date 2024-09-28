declare const _default: {
    uuid: string;
    component: string;
    config: {
        content: {
            text: {
                overline: string;
                main: string;
                subtext: string;
                menuTitle: string;
            };
            menu_uuid: null;
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
        configuration: {
            colors: {
                main: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                    600: string;
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
        ssr_content_fields: string[];
        ssr_network_operation: string;
        layouts: {
            name: string;
            isSelected: boolean;
        }[];
    };
};
export default _default;
