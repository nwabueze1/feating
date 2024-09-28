export type InputProps = {
    value: string | undefined;
    type: string | undefined;
    name: string | undefined;
    onChange?: (data: {
        name: string;
        value: string;
    }) => void;
    onBlur?: (...args: any[]) => void;
    placeholder?: string;
    label: string;
    required?: boolean;
    isError?: boolean;
    helperText?: string;
};
