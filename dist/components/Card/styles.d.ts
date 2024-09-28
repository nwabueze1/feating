import { CardPropsType } from "./type";
type CustomStyleProps = {
    hasShadow?: boolean;
    colors?: CardPropsType["colors"];
};
export declare const useCardStyles: (props: CustomStyleProps) => import("@mui/styles").ClassNameMap<string>;
export {};
