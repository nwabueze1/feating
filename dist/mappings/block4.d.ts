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
            image: {
                src: string;
            };
            list: {
                heading: string;
                body: string;
                image: {
                    src: string;
                };
            }[];
        };
        configuration: {
            fonts: {
                heading: string;
                body: string;
            };
            colors: {
                main: {
                    "100": string;
                    "200": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                };
            };
        };
        layouts: ({
            name: string;
            isSelected: boolean;
            content: {
                backgroundImage: {
                    src: string;
                };
            };
        } | {
            name: string;
            isSelected: boolean;
            content?: undefined;
        })[];
    };
};
export default _default;
