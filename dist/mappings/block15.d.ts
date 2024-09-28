declare const _default: {
    uuid: string;
    component: string;
    config: {
        content: {
            text: string;
            post_uuids: null;
            posts: {
                __typename: string;
                excerpt: string;
                uuid: string;
                slug: string;
                title: string;
                featured_image: string;
                published_at: string;
            }[];
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
    };
};
export default _default;
