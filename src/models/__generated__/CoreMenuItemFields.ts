/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoreMenuFields } from "./CoreMenuFields";
import { CoreRelatedMenuItemFields } from "./CoreRelatedMenuItems";

// ====================================================
// GraphQL fragment: CoreMenuItemFields
// ====================================================

export interface CoreMenuItemFields_menuCategory {
  uuid?: string;
  title?: string;
}

export type TScreen = "desktop" | "tablet" | "mobile";

export type TCoordinates = Record<TScreen, any>;

export type MediaValue = {
  name?: string;
  description?: string;
  alternative_text?: string;
  caption?: string;
  src: string;
  coordinates?: TCoordinates;
};

export interface CoreMenuItemFields {
  uuid?: string;
  name: string;
  description?: string;
  image: MediaValue;
  options?: string[];
  price: number;
  slug?: string;
  menuCategory?: CoreMenuItemFields_menuCategory;
  related_menu_items?: CoreRelatedMenuItemFields[];
  menu?: Partial<CoreMenuFields>;
}
