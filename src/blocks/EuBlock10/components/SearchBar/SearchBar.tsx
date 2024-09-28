import { forwardRef, KeyboardEvent } from "react";
import clx from "classnames";
import { BiSearch } from "react-icons/bi";
import { SearchBarPropsType, useSearchBarStyles, Ref } from "./";
import { BlockStoreType } from "../../../../types";
import { useBlockSelector } from "../../../../helpers";

export const SearchBar = forwardRef<Ref, SearchBarPropsType>(({ layout, openSearch, toggleSearch, toggleSearchDisplay }, ref) => {
  const blockStore = useBlockSelector<BlockStoreType, BlockStoreType>((store) => store);
  const classes = useSearchBarStyles(blockStore);
  const isLayout1Or3 = ["layout-1", "layout-3"].includes(layout);

  const handleInputKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key?.toLowerCase() === "enter") {
      toggleSearch();
    }
  };

  const handleSearch = () => {
    if (!openSearch) return toggleSearchDisplay();

    if (isLayout1Or3) return toggleSearch();

    if (!(ref as unknown as any)?.current?.value) return toggleSearchDisplay();

    return toggleSearch();
  };

  return (
    <div className={clx(classes.navSearch, layout, openSearch && "open-search", !layout && "layout-1")}>
      <input ref={ref} className={clx(classes.searchInput, layout, openSearch && "open-search")} onKeyPress={handleInputKeyPress} placeholder="search" />
      <button className={clx(classes.searchButton, layout)} onClick={handleSearch}>
        <BiSearch className={clx(classes.searchIcon, layout)} />
      </button>
    </div>
  );
});
SearchBar.displayName = "SearchBar";
