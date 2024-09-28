import { Blocks } from "./../enumerations/blockNames";
export declare const getColorConfig: (payload?: {
    [key: string]: string;
} | undefined) => {
    type: string;
    payload: {
        [key: string]: string;
    };
};
export declare const getBlockConfiguration: (payload: {
    name: string;
    configuration: {
        fonts: {
            [key: string]: string;
        };
        colors: {
            [key: string]: Record<string, string>;
        };
    };
}) => {
    type: string;
    payload: {
        [x: string]: {
            fonts: {
                [key: string]: string;
            };
            colors: {
                [key: string]: Record<string, string>;
            };
        };
    };
};
export declare const storeConfiguration: (payload: {
    name: Blocks;
    configurations: {
        fonts: {
            [key: string]: string;
        };
        colors: {
            [key: string]: {
                [key: string]: any;
            };
        };
    };
}) => {
    type: string;
    payload: {
        [x: string]: {
            fonts: {
                [key: string]: string;
            };
            colors: {
                [key: string]: {
                    [key: string]: any;
                };
            };
        };
    };
};
export declare const getButtonConfiguration: (payload?: Record<string, string>) => {
    type: string;
    payload: Record<string, string>;
};
