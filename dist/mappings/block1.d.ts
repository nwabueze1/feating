declare const _default: {
    uuid: string;
    component: string;
    config: {
        configuration: {
            fonts: {
                heading: string;
                body: string;
                misc: string;
            };
            colors: {
                main: {
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                };
                button: {
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                };
            };
        };
        content: {
            text: {
                overline: string;
                main: string;
                animated: string;
                sub: string;
            };
            buttons: {
                variant: string;
                text: string;
                url: string;
            }[];
            image: {
                src: string;
                alternative_text: string;
            };
        };
        layouts: {
            name: string;
            isSelected: boolean;
        }[];
    };
};
export default _default;
