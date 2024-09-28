import React, { Dispatch, SetStateAction } from "react";
type Props = {
    children: React.ReactNode;
    gap?: string;
    styles?: React.CSSProperties;
    classNames?: string;
};
export type SwipeAbleRef = {
    handleScroll: (delta: number) => void;
    smooth: boolean;
    setSmooth: Dispatch<SetStateAction<boolean>>;
    isEndReached: boolean;
    isStartReached: boolean;
};
export declare const SwipeAble: React.ForwardRefExoticComponent<Props & React.RefAttributes<SwipeAbleRef>>;
export {};
