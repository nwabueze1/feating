import { CoreCartFields, CoreCategoriesFields, CoreMenuFields, CorePostFields, CoreSiteFields } from "./../models";
export type ActionTypes = "GET_MENU" | "GET_BUTTON_COLOR" | "SET_LOADING" | "GET_EAT_UP" | "GET_MENU_ITEMS" | "SET_MENU_PAGINATION" | "GET_POSTS" | "SET_BLOG_PAGINATION";
export type RestaurantState = {
    menu?: CoreMenuFields;
    cart?: CoreCartFields;
    cartItemCount?: number;
};
type EuAction = {
    type: ActionTypes;
    payload: any;
};
export type CorePaginatorInfoProps = {
    currentPage: number;
    lastPage: number;
};
export type BlogState = {
    uuid?: string;
    posts?: CorePostFields[];
    paginatorInfo?: CorePaginatorInfoProps;
    categories?: CoreCategoriesFields[];
};
export type PageState = {
    uuid: string;
    title: string;
    status: boolean;
    description: string | null;
    metadata: string | null;
    site: CoreSiteFields;
};
export type EuState = {
    eu?: string[];
    colors?: Record<string, any>;
    fonts?: Record<string, string>;
    page?: PageState;
    restaurant?: RestaurantState;
    gatewayUrl?: string;
    loading?: boolean;
    networkOperation?: string;
    blog?: BlogState;
    main?: any;
};
export declare const euReducer: (state: EuState, action: EuAction) => EuState;
export declare const store: () => import("redux").Store<{
    gatewayUrl: string;
    colors: {
        primary: {
            main: string;
            100: string;
            200: string;
            300: string;
            400: string;
        };
        secondary: {
            main: string;
            100: string;
            200: string;
            300: string;
            400: string;
        };
        neutral: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            black: string;
        };
        alert: {
            positive: string;
            general: string;
            error: string;
        };
    };
    fonts: {
        heading: string;
        body: string;
        misc: string;
    };
    restaurant: {
        cartItemCount: number;
        cart: {
            __typename: string;
            uuid: string;
            currency: string;
            cartItems: {
                __typename: string;
                uuid: string;
                options: string;
                quantity: number;
                detail: string;
                menuItem: {
                    __typename: string;
                    uuid: string;
                    name: string;
                    description: string;
                    menuCategory: {
                        __typename: string;
                        id: string;
                    };
                    options: string[];
                    image: {
                        src: string;
                        width: number;
                        height: number;
                        source: string;
                        __typename: string;
                        coordinates: {
                            mobile: {
                                top: null;
                                left: null;
                                right: null;
                                bottom: null;
                            };
                            tablet: {
                                top: null;
                                left: null;
                                right: null;
                                bottom: null;
                            };
                            desktop: {
                                top: number;
                                left: number;
                                right: number;
                                bottom: number;
                            };
                        };
                        photographer: {
                            url: string;
                            name: string;
                        };
                    };
                    price: number;
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
            guest: {
                __typename: string;
                uuid: string;
                firstname: null;
                lastname: null;
                email: null;
                phone: null;
                address: null;
            };
        };
        menu: {
            uuid: string;
            menuItems: {
                __typename: string;
                uuid: string;
                price: number;
                name: string;
                image: {
                    src: string;
                    url: string;
                    width: number;
                    height: number;
                    source: string;
                    original: string;
                    __typename: string;
                    screenType: string;
                    coordinates: {
                        mobile: {
                            top: null;
                            left: null;
                            right: null;
                            bottom: null;
                        };
                        tablet: {
                            top: null;
                            left: null;
                            right: null;
                            bottom: null;
                        };
                        desktop: {
                            top: number;
                            left: number;
                            right: number;
                            bottom: number;
                        };
                    };
                    photographer: {
                        url: string;
                        name: string;
                    };
                };
                slug: string;
                description: string;
                menu: {
                    __typename: string;
                    restaurant: {
                        __typename: string;
                        bank_info: {
                            __typename: string;
                            currency: string;
                        };
                    };
                };
                menu_uuid: string;
            }[];
            paginatorInfo: {
                __typename: string;
                currentPage: number;
                lastPage: number;
            };
        };
    };
    blog: {
        categories: {
            __typename: string;
            uuid: string;
            name: string;
        }[];
        posts: {
            __typename: string;
            uuid: string;
            title: string;
            featured_image: {
                __typename: string;
                url: string;
                photographer: {
                    name: string;
                    url: string;
                };
                source: string;
                src: string;
                coordinates: {
                    desktop: {
                        left: number;
                        top: number;
                        right: number;
                        bottom: number;
                    };
                    tablet: {
                        left: null;
                        top: null;
                        right: null;
                        bottom: null;
                    };
                    mobile: {
                        left: null;
                        top: null;
                        right: null;
                        bottom: null;
                    };
                };
                screenType: string;
                width: number;
                height: number;
                original: string;
            };
            excerpt: string;
            published_at: string;
            slug: string;
            author: {
                __typename: string;
                uuid: string;
                name: string;
            };
            tags: never[];
            blog_uuid: string;
        }[];
        paginatorInfo: {
            __typename: string;
            currentPage: number;
            lastPage: number;
        };
    };
}, import("redux").Action<any>>;
export {};
