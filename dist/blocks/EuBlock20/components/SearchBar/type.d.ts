import { ChangeEvent } from "react";
export type SearchBarPropsType = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: () => void;
};
