import { DrawerPropsType, useDrawerStyles } from ".";
import clx from "classnames";
import { BlockStoreType } from "../../../../types";
import { BiShoppingBag } from "react-icons/bi";
import { useNavActionStyles } from "../../";
import { useBlockSelector } from "../../../../helpers";
import { IoMdClose } from "react-icons/io";

export const Drawer = ({ links, mode, open, onClose, layout, ...props }: DrawerPropsType) => {
  const config = useBlockSelector<BlockStoreType, BlockStoreType>((store) => store);
  const classes = useDrawerStyles(config);
  const actionClass = useNavActionStyles(config);

  const renderNavLinks = () =>
    links.map((link, index) => (
      <li key={index} className={classes.navListItem} onClick={onClose}>
        {mode === "view" ? (
          <a href={link?.url} className={classes.navLink}>
            {link?.text}
          </a>
        ) : (
          <p className={classes.navLink}>{link?.text}</p>
        )}
      </li>
    ));

  return open ? (
    <div className={clx(classes.root, open && "active", layout)}>
      <div className={classes.container}>
        <div className={classes.navCloseParent} onClick={onClose}>
          <IoMdClose className="close-icon" />
        </div>
        <ul className={classes.navList}>
          {layout === "layout-3" && (
            <li className={classes.navListItem}>
              <a href="/cart" className={clx(actionClass.cartButton, layout, "drawer")}>
                <div className={actionClass.cartIconContainer}>
                  <BiShoppingBag className={actionClass.cartIcon} />
                  <span className={actionClass.badge}>{props.numberOfItemsInCart}</span>
                </div>
                <span>Cart</span>
              </a>
            </li>
          )}
          {renderNavLinks()}
        </ul>
      </div>
    </div>
  ) : null;
};
