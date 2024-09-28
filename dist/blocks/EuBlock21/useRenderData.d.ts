import { CoreMenuItemFields } from "../../models";
import { CardPropsType } from "../../components";
import { CorePostFields } from "../../models/__generated__/CorePostFields";
import { ClassNameMap } from "@mui/styles";
import { TagType } from "./EuBlock21";
import { Dispatch, SetStateAction } from "react";
export declare const useRenderData: (mode: "view" | "edit", classes: ClassNameMap<string>) => {
    renderPosts: (blogPosts: CorePostFields[]) => import("react/jsx-runtime").JSX.Element[];
    renderMenuItems: (menuItems: CoreMenuItemFields[], colors?: CardPropsType["colors"]) => import("react/jsx-runtime").JSX.Element[];
    renderImageSkeleton: () => import("react/jsx-runtime").JSX.Element;
    renderTags: ({ activeTag, tags, setActiveTag }: {
        tags: TagType[];
        activeTag: TagType;
        setActiveTag: Dispatch<SetStateAction<TagType>>;
    }) => import("react/jsx-runtime").JSX.Element[];
};
