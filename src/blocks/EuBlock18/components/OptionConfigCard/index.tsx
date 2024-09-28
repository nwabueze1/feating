import { getCurrency, useBlockSelector } from "../../../../helpers";
import { FC } from "react";
import { BlockStoreType } from "../../../../types";
import clx from "classnames";
import { IoCloseOutline } from "react-icons/io5";
import { BlockProvider } from "../../../../BlockProvider";
import { Button } from "../../../../components";
import { OptionConfigProps } from "./types";
import { useOptionConfigStyles } from "./styles";

export const OptionConfigCard: FC<OptionConfigProps> = ({ loading, currency, handleCloseModal, menuItemData, handleSelectionOption, selectionOption, buttonConfiguration, handleAddToOrder }) => {
  const blockConfiguration = useBlockSelector<BlockStoreType, BlockStoreType>((state) => state);
  const classes = useOptionConfigStyles(blockConfiguration);

  return (
    <div className={classes.modalContainer}>
      <div className={classes.successModal}>
        <div className={clx(classes.successModalText, "options")}>Available options</div>
        <div className={classes.close} onClick={handleCloseModal}>
          <IoCloseOutline size={24} color={"black"} />
        </div>
      </div>
      <div className={classes.divisionLine} />
      <div className={classes.optionStyles}>
        {menuItemData?.options?.map((item, index: number) => {
          const option_config = menuItemData?.menu?.options_config?.filter((option) => {
            return option?.uuid === item;
          })[0];

          return (
            <div className={classes.option} key={index}>
              <p className={classes.optionHeader}>{option_config?.name}</p>
              <div className={classes.optionSubHeader}>
                {Object.entries(option_config?.options ?? [])?.map(([keys, values], index: number) => {
                  return (
                    values?.[0]?.name && (
                      <div key={index}>
                        <p className={classes.optionsDescription}>
                          {keys === "selection"
                            ? "Select your preferred choice option(s), you can only select one option here"
                            : keys === "extras"
                            ? "Select your preferred choice option(s), you can select more than one options here"
                            : "De-select from the list below, of option(s) to remove from your order."}
                        </p>
                        <div>
                          {values?.map((value: { name: string; amount: number }, index: number) => {
                            const isSelection = keys === "selection";
                            const isDeselection = keys === "deselection";
                            const isChecked = Boolean(
                              selectionOption?.filter((obj) => {
                                return obj?.name === option_config?.name && obj?.selectedChoices?.filter((choice) => choice?.name === value?.name)?.[0];
                              })?.[0]
                            );

                            let selectedChoices: {
                              name: string;
                              amount: string;
                            }[];
                            const currentChoice = {
                              name: value?.name,
                              amount: String(value?.amount),
                            };

                            if (!isChecked && isSelection) selectedChoices = [currentChoice];

                            if (isChecked && isSelection) selectedChoices = [];

                            if (!isChecked && !isSelection) selectedChoices = [...(selectionOption.find((option) => option?.name === option_config?.name)?.selectedChoices ?? []), currentChoice];

                            if (isChecked && !isSelection)
                              selectedChoices = (selectionOption.find((option) => option?.name === option_config?.name)?.selectedChoices ?? []).filter(({ name }) => name !== value?.name);

                            return (
                              <div className={classes.optionsTypes} key={index}>
                                <input
                                  type={isSelection ? "radio" : "checkbox"}
                                  checked={isChecked}
                                  onChange={() =>
                                    handleSelectionOption({
                                      type: keys,
                                      name: option_config?.name ?? "",
                                      selectedChoices,
                                    })
                                  }
                                />
                                <div className={classes.optionPriceBox}>
                                  <p className={classes.optionsTypesName}>{value?.name}</p>
                                  <p>
                                    {isDeselection ? "-" : "+"}
                                    {getCurrency(currency)}
                                    {value?.amount}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.divisionLine} />
      <div className={classes.optionsButtonContainer}>
        <BlockProvider {...buttonConfiguration}>
          <Button variant="contained" size="medium" fullWidth onClick={handleAddToOrder}>
            {loading ? <span className={classes.spinner} /> : "Add to Order"}
          </Button>
        </BlockProvider>
      </div>
    </div>
  );
};
