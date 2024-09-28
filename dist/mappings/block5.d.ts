declare const _default: {
    uuid: string;
    component: string;
    config: {
        content: {
            text: {
                overline: string;
                heading: string;
                caption: string;
            };
            backgroundImage: {
                src: string;
            };
            faqs: {
                question: string;
                answer: string;
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
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
            };
        };
        layouts: {
            name: string;
            isSelected: boolean;
        }[];
    };
};
export default _default;
