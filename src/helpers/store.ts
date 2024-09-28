import { CoreCartFields, CoreCategoriesFields, CoreMenuFields, CorePostFields, CoreSiteFields } from "./../models";
import { createStore } from "redux";
import * as Palettes from "./../palettes";

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

export const euReducer = (state: EuState, action: EuAction): EuState => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "GET_MENU_ITEMS":
      return { ...state, restaurant: { menu: { ...state.restaurant?.menu, menuItems: action.payload } as any } };

    case "GET_EAT_UP":
      return { ...state, main: action.payload };

    default:
      return state;
  }
};

export const store = () =>
  createStore(euReducer as any, {
    gatewayUrl: "https://ploutonion.sytbuilder.com/graphql",
    colors: {
      ...Palettes.palette11.colors,
    },
    fonts: {
      heading: "Montserrat",
      body: "Poppins",
      misc: "Lobster",
    },
    restaurant: {
      cartItemCount: 3,
      cart: {
        __typename: "Cart",
        uuid: "b522d6e3-2195-4009-9ad2-6dcf13a54c98",
        currency: "GBP",
        cartItems: [
          {
            __typename: "CartItem",
            uuid: "8b11f629-06a5-49ca-92fb-1f29834c5115",
            options: '[{"name":"Dinks","type":"selection","selectedChoices":[{"name":"Pepsi","amount":"3"}]}]',
            quantity: 2,
            detail: "Excellent Yam porridge with a sweet, batty taste",
            menuItem: {
              __typename: "MenuItem",
              uuid: "2633caac-9fc4-4554-941e-4898b1976044",
              name: "Yam Porridge",
              description: "Excellent Yam porridge with a sweet, batty taste",
              menuCategory: {
                __typename: "MenuCategory",
                id: "340",
              },
              options: ["bea87ca6-0a03-48ef-91be-f8b2d9e2ecc2"],
              image: {
                src: "https://images.unsplash.com/photo-1710762633569-afeed9bfd781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ4ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTM4NjE0NzN8&ixlib=rb-4.0.3&q=80&w=400",
                width: 400,
                height: 267,
                source: "https://unsplash.com",
                __typename: "ExternalImage",
                coordinates: {
                  mobile: {
                    top: null,
                    left: null,
                    right: null,
                    bottom: null,
                  },
                  tablet: {
                    top: null,
                    left: null,
                    right: null,
                    bottom: null,
                  },
                  desktop: {
                    top: 0,
                    left: 0,
                    right: 1,
                    bottom: 0.67,
                  },
                },
                photographer: {
                  url: "https://unsplash.com/@k4media",
                  name: "Bingqi Huang",
                },
              },
              price: 50,
            },
          },
          {
            __typename: "CartItem",
            uuid: "8e1e5dca-11fb-4cf1-910b-a7de1fe71b32",
            options:
              '[{"name":"Meat","type":"extras","selectedChoices":[{"name":"Goat Meat","amount":"6"},{"name":"Asun","amount":"4"},{"name":"Cow meat","amount":"3"}]},{"name":"Dinks","type":"selection","selectedChoices":[{"name":"Fanta","amount":"1"}]}]',
            quantity: 2,
            detail: "Jollof rice sauted in marinated stew",
            menuItem: {
              __typename: "MenuItem",
              uuid: "5195c591-9f62-411e-8c34-944acbcb7a20",
              name: "Jollof Rice",
              description: "Jollof rice sauted in marinated stew",
              menuCategory: {
                __typename: "MenuCategory",
                id: "340",
              },
              options: ["bea87ca6-0a03-48ef-91be-f8b2d9e2ecc2", "c2f64276-1490-4b60-805d-5b83f87bb0a1"],
              image: {
                src: "https://images.pexels.com/photos/13915043/pexels-photo-13915043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                width: 940,
                height: 627,
                source: "https://pexels.com",
                __typename: "ExternalImage",
                coordinates: {
                  mobile: {
                    top: null,
                    left: null,
                    right: null,
                    bottom: null,
                  },
                  tablet: {
                    top: null,
                    left: null,
                    right: null,
                    bottom: null,
                  },
                  desktop: {
                    top: 0,
                    left: 0,
                    right: 1,
                    bottom: 0.67,
                  },
                },
                photographer: {
                  url: "https://www.pexels.com/@keesha-s-kitchen-22731136",
                  name: "Keesha's  Kitchen",
                },
              },
              price: 80,
            },
          },
          {
            __typename: "CartItem",
            uuid: "ae4bec58-6cba-40e6-b355-1161924c6ae3",
            options: '[{"name":"Dinks","type":"selection","selectedChoices":[{"name":"Fanta","amount":"1"}]},{"name":"Meat","type":"extras","selectedChoices":[{"name":"Goat Meat","amount":"6"}]}]',
            quantity: 3,
            detail: "Jollof rice sauted in marinated stew",
            menuItem: {
              __typename: "MenuItem",
              uuid: "5195c591-9f62-411e-8c34-944acbcb7a20",
              name: "Jollof Rice",
              description: "Jollof rice sauted in marinated stew",
              menuCategory: {
                __typename: "MenuCategory",
                id: "340",
              },
              options: ["bea87ca6-0a03-48ef-91be-f8b2d9e2ecc2", "c2f64276-1490-4b60-805d-5b83f87bb0a1"],
              image: {
                src: "https://images.pexels.com/photos/13915043/pexels-photo-13915043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                width: 940,
                height: 627,
                source: "https://pexels.com",
                __typename: "ExternalImage",
                coordinates: {
                  mobile: {
                    top: null,
                    left: null,
                    right: null,
                    bottom: null,
                  },
                  tablet: {
                    top: null,
                    left: null,
                    right: null,
                    bottom: null,
                  },
                  desktop: {
                    top: 0,
                    left: 0,
                    right: 1,
                    bottom: 0.67,
                  },
                },
                photographer: {
                  url: "https://www.pexels.com/@keesha-s-kitchen-22731136",
                  name: "Keesha's  Kitchen",
                },
              },
              price: 80,
            },
          },
        ],
        restaurant: {
          __typename: "Restaurant",
          uuid: "8eff1061-82d1-431b-873a-cad0e16305a5",
          site: {
            __typename: "Site",
            uuid: "62b7f0f3-acff-4058-88f4-ae6b51fbc74d",
          },
          bank_info: {
            __typename: "BankInfo",
            currency: "GBP",
            delivery_fee: 5,
          },
        },
        guest: {
          __typename: "Guest",
          uuid: "410512e9-9ade-4176-95a2-fadcfc290b94",
          firstname: null,
          lastname: null,
          email: null,
          phone: null,
          address: null,
        },
      },
      menu: {
        uuid: "517509f5-e8ad-446d-b1be-819bc69cd41e",
        menuItems: [
          {
            __typename: "MenuItem",
            uuid: "986a2bf9-c196-4b95-83e6-be518d85bb16",
            price: 300,
            name: "Yam and Egg",
            image: {
              src: "https://images.unsplash.com/photo-1610631087218-f784839e48f1?tr=w-400,cr-0.0.400.600",
              url: "https://images.unsplash.com/photo-1610631087218-f784839e48f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ4ODJ8MHwxfHNlYXJjaHw0fHxZYW18ZW58MHx8fHwxNzE2MzkxODIyfDA&ixlib=rb-4.0.3&q=80&w=400",
              width: 400,
              height: 600,
              source: "https://unsplash.com",
              original:
                "https://images.unsplash.com/photo-1610631087218-f784839e48f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ4ODJ8MHwxfHNlYXJjaHw0fHxZYW18ZW58MHx8fHwxNzE2MzkxODIyfDA&ixlib=rb-4.0.3&q=80&w=400",
              __typename: "ExternalImage",
              screenType: "desktop",
              coordinates: {
                mobile: {
                  top: null,
                  left: null,
                  right: null,
                  bottom: null,
                },
                tablet: {
                  top: null,
                  left: null,
                  right: null,
                  bottom: null,
                },
                desktop: {
                  top: 0,
                  left: 0,
                  right: 1,
                  bottom: 1.5,
                },
              },
              photographer: {
                url: "https://unsplash.com/@nate_dumlao",
                name: "Nathan Dumlao",
              },
            },
            slug: "/intercontinental/yam-and-egg",
            description: "Sweet yam and egg from the mountains",
            menu: {
              __typename: "Menu",
              restaurant: {
                __typename: "Restaurant",
                bank_info: {
                  __typename: "BankInfo",
                  currency: "NGN",
                },
              },
            },
            menu_uuid: "517509f5-e8ad-446d-b1be-819bc69cd41e",
          },
        ],
        paginatorInfo: {
          __typename: "PaginatorInfo",
          currentPage: 1,
          lastPage: 1,
        },
      },
    },
    blog: {
      categories: [
        {
          __typename: "Category",
          uuid: "8f06ce10-ed32-46f0-ae66-8c2c32dc5d1c",
          name: "Sport",
        },
        {
          __typename: "Category",
          uuid: "1531fafd-c2c7-40ff-a962-3739fa76317c",
          name: "Thoughts",
        },
      ],
      posts: [
        {
          __typename: "Post",
          uuid: "735ccfec-56ba-4f74-893e-c023402735ae",
          title: "Instant Gratification. Instant Gratification. Instant Gratification.",
          featured_image: {
            __typename: "ExternalImage",
            url: "https://images.unsplash.com/photo-1713727967827-b04e5eab7d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ4ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTYzMDAzNzh8&ixlib=rb-4.0.3&q=80&w=400",
            photographer: {
              name: "Museum of New Zealand Te Papa Tongarewa",
              url: "https://unsplash.com/@tepapa",
            },
            source: "https://unsplash.com",
            src: "https://images.unsplash.com/photo-1713727967827-b04e5eab7d3a?tr=w-400,cr-0.0.400.332",
            coordinates: {
              desktop: {
                left: 0,
                top: 0,
                right: 1,
                bottom: 0.83,
              },
              tablet: {
                left: null,
                top: null,
                right: null,
                bottom: null,
              },
              mobile: {
                left: null,
                top: null,
                right: null,
                bottom: null,
              },
            },
            screenType: "desktop",
            width: 400,
            height: 331,
            original:
              "https://images.unsplash.com/photo-1713727967827-b04e5eab7d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ4ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTYzMDAzNzh8&ixlib=rb-4.0.3&q=80&w=400",
          },
          excerpt: "Big smoke that everybody knows is big smoke. Pamper me all over. Interweebs babies mehn.",
          published_at: "2024-05-21 14:06:46",
          slug: "/thoughts/instant-gratification",
          author: {
            __typename: "User",
            uuid: "b4b04cd0-fda8-11ee-a957-47602d445c92",
            name: "Fambegbe Olaleke",
          },
          tags: [],
          blog_uuid: "6ab36d08-f843-46f4-9e2e-4870912b0139",
        },
        {
          __typename: "Post",
          uuid: "ab71fbf3-3a0c-419c-a016-5f6cad049a8c",
          title: "Morose Men",
          featured_image: {
            __typename: "ExternalImage",
            url: "https://images.unsplash.com/photo-1714423647936-6f31729c3dd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ4ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTYzMDAyNjh8&ixlib=rb-4.0.3&q=80&w=400",
            photographer: {
              name: "Alex Kolundzija",
              url: "https://unsplash.com/@alexkolund",
            },
            source: "https://unsplash.com",
            src: "https://images.unsplash.com/photo-1714423647936-6f31729c3dd0?tr=w-400,cr-0.0.400.600",
            coordinates: {
              desktop: {
                left: 0,
                top: 0,
                right: 1,
                bottom: 1.5,
              },
              tablet: {
                left: null,
                top: null,
                right: null,
                bottom: null,
              },
              mobile: {
                left: null,
                top: null,
                right: null,
                bottom: null,
              },
            },
            screenType: "desktop",
            width: 400,
            height: 600,
            original:
              "https://images.unsplash.com/photo-1714423647936-6f31729c3dd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ4ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTYzMDAyNjh8&ixlib=rb-4.0.3&q=80&w=400",
          },
          excerpt: "Halellujah",
          published_at: "2024-05-21 14:05:26",
          slug: "/sport/morose-men",
          author: {
            __typename: "User",
            uuid: "b4b04cd0-fda8-11ee-a957-47602d445c92",
            name: "Fambegbe Olaleke",
          },
          tags: [],
          blog_uuid: "6ab36d08-f843-46f4-9e2e-4870912b0139",
        },
        {
          __typename: "Post",
          uuid: "ae486240-6f27-42cf-b30f-fc51326e14c4",
          title: "Divine Timing",
          featured_image: {
            __typename: "ExternalImage",
            url: "https://images.unsplash.com/photo-1714659784722-1b8d820e2174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ4ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTYzMDAyNjh8&ixlib=rb-4.0.3&q=80&w=400",
            photographer: {
              name: "Artur Adilkhanian",
              url: "https://unsplash.com/@br00m",
            },
            source: "https://unsplash.com",
            src: "https://images.unsplash.com/photo-1714659784722-1b8d820e2174?tr=w-400,cr-0.0.400.644",
            coordinates: {
              desktop: {
                left: 0,
                top: 0,
                right: 1,
                bottom: 1.61,
              },
              tablet: {
                left: null,
                top: null,
                right: null,
                bottom: null,
              },
              mobile: {
                left: null,
                top: null,
                right: null,
                bottom: null,
              },
            },
            screenType: "desktop",
            width: 400,
            height: 643,
            original:
              "https://images.unsplash.com/photo-1714659784722-1b8d820e2174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ4ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTYzMDAyNjh8&ixlib=rb-4.0.3&q=80&w=400",
          },
          excerpt: "Know Thyself",
          published_at: "2024-05-21 14:04:37",
          slug: "/sport/divine-timing",
          author: {
            __typename: "User",
            uuid: "b4b04cd0-fda8-11ee-a957-47602d445c92",
            name: "Fambegbe Olaleke",
          },
          tags: [],
          blog_uuid: "6ab36d08-f843-46f4-9e2e-4870912b0139",
        },
        {
          __typename: "Post",
          uuid: "5880719d-4fda-4ab9-b925-d91413ee9f1b",
          title: "In the InterWeebs",
          featured_image: {
            __typename: "ExternalImage",
            url: "https://images.unsplash.com/photo-1713894708806-bc01a6bed8e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ4ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTYzMDAxOTN8&ixlib=rb-4.0.3&q=80&w=400",
            photographer: {
              name: "Meina Yin",
              url: "https://unsplash.com/@meinayin",
            },
            source: "https://unsplash.com",
            src: "https://images.unsplash.com/photo-1713894708806-bc01a6bed8e3?tr=w-400,cr-0.0.400.268",
            coordinates: {
              desktop: {
                left: 0,
                top: 0,
                right: 1,
                bottom: 0.67,
              },
              tablet: {
                left: null,
                top: null,
                right: null,
                bottom: null,
              },
              mobile: {
                left: null,
                top: null,
                right: null,
                bottom: null,
              },
            },
            screenType: "desktop",
            width: 400,
            height: 267,
            original:
              "https://images.unsplash.com/photo-1713894708806-bc01a6bed8e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ4ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTYzMDAxOTN8&ixlib=rb-4.0.3&q=80&w=400",
          },
          excerpt: "splits",
          published_at: "2024-05-21 14:03:27",
          slug: "/sport/in-the-interweebs",
          author: {
            __typename: "User",
            uuid: "b4b04cd0-fda8-11ee-a957-47602d445c92",
            name: "Fambegbe Olaleke",
          },
          tags: [],
          blog_uuid: "6ab36d08-f843-46f4-9e2e-4870912b0139",
        },
      ],
      paginatorInfo: {
        __typename: "PaginatorInfo",
        currentPage: 1,
        lastPage: 1,
      },
    },
  });
