import { FC } from "react";
import { FormControlProps } from "./types";
import { Input } from "../../Input";
import { GroupedInput } from "../GroupedInput";

export const FormControl: FC<FormControlProps> = ({ type, properties }) => {
  const getControl = () => {
    const controlProps: any = properties;

    switch (type) {
      case "text":
        return <Input {...controlProps} />;
      case "grouped":
        return <GroupedInput {...controlProps} />;
      default:
        return <Input {...controlProps} />;
    }
  };

  return getControl();
};
