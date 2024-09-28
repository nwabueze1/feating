declare const _default: {
    uuid: string;
    component: string;
    config: {
        content: {
            menu_item_uuid: null;
            menu_item: {
                __typename: string;
                image: {
                    src: string;
                };
                price: number;
                description: string;
                name: string;
                options: string[];
                uuid: string;
                menuCategory: {
                    __typename: string;
                    title: string;
                };
                related_menu_items: {
                    __typename: string;
                    image: {
                        src: string;
                    };
                    price: number;
                    description: string;
                    name: string;
                    options: never[];
                    uuid: string;
                }[];
                menu: {
                    __typename: string;
                    options_config: {
                        __typename: string;
                        name: string;
                        uuid: string;
                        options: {
                            __typename: string;
                            deselection: {
                                __typename: string;
                                amount: number;
                                name: string;
                            }[];
                            extras: {
                                __typename: string;
                                amount: number;
                                name: string;
                            }[];
                            selection: {
                                __typename: string;
                                amount: number;
                                name: string;
                            }[];
                        };
                    }[];
                    restaurant: {
                        __typename: string;
                        uuid: string;
                        site: {
                            __typename: string;
                            uuid: string;
                        };
                        bank_info: {
                            __typename: string;
                            currency: string;
                            delivery_fee: number;
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
                    500: string;
                    600: string;
                    700: string;
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
        layouts: {
            name: string;
            isSelected: boolean;
        }[];
    };
};
export default _default;
