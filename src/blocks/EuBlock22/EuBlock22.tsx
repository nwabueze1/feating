import { BlockConfigType } from "../../types";
import { FC } from "react";
import { useEuBlock22Styles } from "./styles";
import { useGetColor } from "../../hooks";
import { useGetConfiguration } from "../../helpers";
import { BlockProvider } from "../../BlockProvider";

export const EuBlock22: FC<BlockConfigType> = ({ content, mode = "view", index, activeElement, handleSelect, ...props }) => {
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();

  const blockConfiguration = getConfiguration(props.configuration, "main", getMappedColor);
  const classes = useEuBlock22Styles(blockConfiguration);

  return (
    <BlockProvider {...blockConfiguration}>
      <div className={classes.container}>
        <div className={classes.leftSection}>
          <h1>Oops, we couldn’t find this page</h1>
          <p>Sorry the page you’re looking for does not exist or has been moved, try refreshing the page or go back home</p>
        </div>
        <div className={classes.rightSection}>
          <img src="https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Frame+8829.png" alt="404" />
        </div>
      </div>
    </BlockProvider>
  );
};
