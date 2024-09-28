import { ModalProps } from "./types";
import { FC } from "react";
import { useModalStyles } from "./styles";
import { BlockStoreType, CustomThemeProps } from "../../types";
import clx from "classnames";
import { useBlockSelector } from "../../helpers";

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children, position, hasClose = true }) => {
  const blockConfiguration = useBlockSelector((state: BlockStoreType) => state);
  const classes = useModalStyles(blockConfiguration as CustomThemeProps);
  const closeModal = () => {
    onClose();
  };

  return isOpen ? (
    <div className={clx(classes.container, position)}>
      <div className={clx(classes.modal, position)}>
        <div className={classes.modalContent}>
          {children}
          {hasClose && <img src="https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Close-icon.svg" alt="close icon" className={classes.closeButton} onClick={closeModal} />}
        </div>
      </div>
      <div className={classes.modalOverlay} onClick={closeModal} />
    </div>
  ) : null;
};
