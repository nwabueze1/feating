export type SelectInputPropsType = {
    value: string;
    onChange: (e: SelectOptionType) => void;
    label: string;
    options: SelectOptionType[];
    name?: string;
};
export type SelectOptionType = {
    label: string;
    value: any;
};
