declare const _default: {
    uuid: string;
    component: string;
    config: {
        content: {
            text: {
                main: string;
                overline: string;
                body: string;
            };
            image: {
                src: string;
            };
        };
        configuration: {
            colors: {
                main: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
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
