import { FormControlProps } from "./FormControl";

export type FormProps = {
  controls: FormControlProps[];
  onSubmit?: () => void;
};
