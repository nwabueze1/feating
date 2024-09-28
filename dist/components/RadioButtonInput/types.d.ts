import { RadioProps } from "@mui/material";
/** !!-- Remember to update the interface name !! */
export type RadioButtonInputProps = Omit<RadioProps, "onChange"> & {
    label?: string;
    value?: boolean;
    name?: string;
    onChange?: (data: {
        name: string;
        value: any;
    }) => void;
};
