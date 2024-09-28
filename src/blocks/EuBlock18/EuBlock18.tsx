import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BlockConfigType } from "../../types";
import { useAddToCart } from "./hooks";
import { useGetColor, useSelectedLayout } from "../../hooks";
import { useEuBlockStyles18 } from "./styles";
import { useGetConfiguration, getCurrency, notify, createResponsiveImage } from "../../helpers";
import { Button } from "../../components";
import { BlockProvider } from "../../BlockProvider";
import { Modal } from "../../components";
import { SelectionProps } from "./types";
import { OptionConfigCard } from "./components";
import clx from "classnames";
import { RelatedDishes } from "./components";
import { calculateCartItemOptionsTotal } from "@wazobia-tech/wazcom/dist/utilities";
import { useRecordMenuItemView } from "../../helpers";
import block18 from "../../mappings/block18";

const { uuid: BLOCK_UUID } = block18;

export const EuBlock18: FC<BlockConfigType> = ({ content, configuration, layouts, mode = "view", screenSize, index, activeElement, handleSelect }) => {
  const layout = useSelectedLayout(layouts);
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const blockConfiguration = getConfiguration(configuration, "main", getMappedColor);
  const buttonConfiguration = getConfiguration(configuration, "button", getMappedColor);
  const classes = useEuBlockStyles18(blockConfiguration);
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const menuItemData = content?.menu_item;
  const [selectionOption, setSelectionOption] = useState<SelectionProps[]>([]);
  const dispatch = useDispatch();
  const key = "blocks." + String(index);
  const recordMenuItemView = useRecordMenuItemView();
  const currency = content?.menu_item?.menu?.restaurant?.bank_info?.currency ?? "";

  const handleSelectionOption = (newOption: SelectionProps) => {
    const index = selectionOption.findIndex((option) => option.name.toString() === newOption.name.toString());
    let newOptions = [...selectionOption];
    if (index === -1) newOptions.push(newOption);
    else if (newOption.selectedChoices.length === 0) newOptions = newOptions.filter((option) => option.name.toString() !== newOption.name.toString());
    else newOptions[index] = newOption;
    setSelectionOption(newOptions);
  };

  useEffect(() => {
    dispatch({ type: "GET_MENU_ITEMS", payload: [content?.menu_item] });
    recordMenuItemView(menuItemData?.uuid);
  }, []);

  const calculateDishTotal = useCallback(() => {
    const stringifiedOptions = JSON.stringify(selectionOption);
    const result = (menuItemData?.price + calculateCartItemOptionsTotal(stringifiedOptions)) * quantity;

    return result.toFixed(2);
  }, [quantity, selectionOption]);

  const handleAddQuantity = (add: boolean) => {
    setQuantity(add ? quantity + 1 : quantity > 1 ? quantity - 1 : 1);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleOpenModal = () => {
    if (menuItemData?.options && menuItemData?.options?.length > 0) {
      setIsOpen(true);
    } else {
      handleAddToCart();
    }
  };
  const getNotification = (type: string) => {
    const successMessage = "Awesome, product successfully added to cart";
    const errorMessage = "Sorry, please try again";

    return type === "success" ? notify("success", successMessage) : notify("error", errorMessage);
  };

  const selectedItem = {
    menu_item_uuid: menuItemData?.uuid ?? "",
    quantity: quantity,
    detail: menuItemData?.description,
    options: selectionOption.length > 0 ? JSON.stringify(selectionOption) : undefined,
  };
  const addToCart = useAddToCart();

  const handleAddToCart = async () => {
    if (menuItemData?.options && menuItemData?.options?.length > 0) {
      if (selectionOption.length !== menuItemData?.options?.length) return notify("error", "Please select a choice from all options");
    }

    setLoading(true);
    const getCart = await addToCart(selectedItem);
    setLoading(false);
    setIsOpen(false);
    getCart ? getNotification("success") : getNotification("error");
    return;
  };

  return (
    <BlockProvider {...blockConfiguration} block_uuid={BLOCK_UUID}>
      <section
        className={clx(classes.root, mode === "edit" && key === activeElement && classes.block18ActiveElement)}
        onClick={() => {
          mode === "edit" && handleSelect?.(key);
        }}
      >
        <div className={clx(classes.container, layout)}>
          {createResponsiveImage(menuItemData?.image, {
            className: clx(classes.containerLeftSideImage, layout),
            classNames: {
              picture: clx(classes.containerLeftSide, layout),
            },
            screenSize,
          })}
          <div className={clx(classes.containerRightSide, layout)}>
            <h1 className={classes.header}>{menuItemData?.name}</h1>
            <p className={classes.textSubHeader}>{menuItemData?.menuCategory?.title}</p>
            <p className={classes.textPrice}>
              <span className={classes.textCurrency}>{getCurrency(menuItemData?.menu?.restaurant?.bank_info?.currency ?? "")}</span>
              <span>{calculateDishTotal()}</span>
            </p>
            <div className={classes.descriptionContainer}>
              <p className={classes.descriptionHeader}>Description</p>
              <p>{menuItemData?.description}</p>
            </div>
            <div className={classes.addToCartContainer}>
              <div className={classes.addQuantity}>
                <p className={classes.quantitySign} onClick={() => handleAddQuantity(false)}>
                  -
                </p>
                <p className={classes.quantity}>{quantity}</p>
                <p className={classes.quantitySign} onClick={() => handleAddQuantity(true)}>
                  +
                </p>
              </div>
              <BlockProvider {...buttonConfiguration} block_uuid={BLOCK_UUID}>
                <Button variant="contained" size="large" fullWidth onClick={handleOpenModal}>
                  {loading ? <span className={classes.spinner} /> : "Add to Cart"}
                </Button>
              </BlockProvider>
            </div>
          </div>
        </div>
        <RelatedDishes title={content?.text?.subHeader} currency={currency} relatedMenuData={menuItemData?.related_menu_items ?? []} />
        <Modal isOpen={isOpen} hasClose={false} onClose={handleCloseModal}>
          {
            <OptionConfigCard
              loading={loading}
              handleCloseModal={handleCloseModal}
              menuItemData={menuItemData}
              handleSelectionOption={handleSelectionOption}
              selectionOption={selectionOption}
              buttonConfiguration={buttonConfiguration}
              handleAddToOrder={handleAddToCart}
              currency={currency}
            />
          }
        </Modal>
      </section>
    </BlockProvider>
  );
};
