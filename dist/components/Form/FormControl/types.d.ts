import { InputProps } from "components/Input/type";
import { GroupedInputProps as EuGroupedInputProps } from "../GroupedInput";
type TextInputProps = {
    type: "text";
    properties: InputProps;
};
type GroupedInputProps = {
    type: "grouped";
    properties: EuGroupedInputProps;
};
export type FormControlProps = TextInputProps | GroupedInputProps;
export {};
