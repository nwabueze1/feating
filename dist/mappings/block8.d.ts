declare const _default: {
    uuid: string;
    component: string;
    config: {
        content: {
            text: {
                overline: string;
                title: string;
                secondaryText: string;
                avatarTitle: string;
            };
            image: {
                src: string;
            };
            comments: {
                comment: string;
                name: string;
                tag: string;
                image: {
                    src: string;
                };
            }[];
        };
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
                    900: string;
                    1000: string;
                    1100: string;
                    1200: string;
                    1300: string;
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
