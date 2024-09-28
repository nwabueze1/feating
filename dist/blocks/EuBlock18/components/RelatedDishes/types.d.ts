import { CoreRelatedMenuItemFields } from "../../../../models";
export type RelatedDishesProps = {
    title: string;
    mode?: "view" | "edit";
    currency: string;
    relatedMenuData: CoreRelatedMenuItemFields[];
};
