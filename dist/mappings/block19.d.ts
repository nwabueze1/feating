declare const _default: {
    uuid: string;
    component: string;
    config: {
        content: {
            post_uuid: null;
            post: {
                __typename: string;
                uuid: string;
                title: string;
                featured_image: {
                    src: string;
                };
                published_at: string;
                content: string;
                category_name: string;
                author: {
                    __typename: string;
                    uuid: string;
                    name: string;
                    avatar: {
                        src: string;
                    };
                };
                related_posts: {
                    __typename: string;
                    title: string;
                    uuid: string;
                    featured_image: {
                        src: string;
                    };
                    content: string;
                    slug: string;
                    category_name: string;
                }[];
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
                    700: string;
                    800: string;
                    900: string;
                    950: string;
                    1000: string;
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
        ssr_content_fields: string[];
        ssr_network_operation: string;
    };
};
export default _default;
