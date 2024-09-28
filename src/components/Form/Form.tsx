import { FC } from "react";
import { FormProps } from "./types";
import { FormControl } from "./FormControl";
import { useFormStyles } from "./styles";

export const Form: FC<FormProps> = ({ controls }) => {
  const classes = useFormStyles();
  const displayControls = () => controls.map((control, index) => <FormControl key={index} {...control} />);

  return <div className={classes.root}>{displayControls()}</div>;
};
