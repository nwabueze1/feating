import { FC } from "react";
import { FormControl } from "../FormControl";
import { GroupedInputProps } from "./types";
import { useGroupedInputStyles } from "./styles";

export const GroupedInput: FC<GroupedInputProps> = ({ name, controls }) => {
  const classes = useGroupedInputStyles();
  const displayControls = () => controls.map((control, index) => <FormControl key={index} {...control} />);

  return (
    <div>
      {name}
      <div className={classes.inputs}>
        {displayControls()}
      </div>
    </div>
  );
};
