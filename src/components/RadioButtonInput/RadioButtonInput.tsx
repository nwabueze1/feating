import { FC } from "react";
import { useBlockSelector } from "../../helpers";
import { BlockProviderType } from "../../types";
import { useRadioButtonInputStyles } from "./styles";
import { RadioButtonInputProps } from "./types";
import { Radio, InputLabel } from "@mui/material";
import clx from "classnames";

export const RadioButtonInput: FC<RadioButtonInputProps> = ({
  className,
  label,
  name,
  value,
  onChange,
}) => {
  const { colors, fonts } = useBlockSelector<BlockProviderType, BlockProviderType>((store) => store);
  const classes = useRadioButtonInputStyles({ colors, fonts });

  const handleChange = (event: React.ChangeEvent<{ checked: boolean }>) => {
    onChange?.({ name: name as string, value: event.target.checked });
  };

  return (
    <div className={clx(classes.root, className)}>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <Radio className={classes.radio} checked={value} onChange={handleChange} />
    </div>
  );
};
