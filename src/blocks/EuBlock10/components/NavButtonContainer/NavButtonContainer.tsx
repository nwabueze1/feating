import { FC } from "react";
import { NavButtonContainerPropsType, useNavButtonContainerStyles } from ".";
import clx from "classnames";

export const NavButtonContainer: FC<NavButtonContainerPropsType> = ({ layout, children }) => {
  const classes = useNavButtonContainerStyles();
  return <div className={clx(classes.buttonContainer, layout)}>{children}</div>;
};
