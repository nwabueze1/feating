import { FC } from "react";
import { BiSearch } from "react-icons/bi";
import { SearchBarPropsType, useSearchBarStyles } from ".";
import { BlockStoreType } from "../../../../types";
import { useBlockSelector } from "../../../../helpers";

export const SearchBar: FC<SearchBarPropsType> = ({ value, onChange, onSubmit }) => {
  const blockStore = useBlockSelector<BlockStoreType, BlockStoreType>((store) => store);
  const classes = useSearchBarStyles(blockStore);

  return (
    <div className={classes.container}>
      <input value={value} className={classes.searchInput} placeholder="search" onChange={onChange} />
      <button className={classes.searchButton} onClick={onSubmit}>
        <BiSearch className={classes.searchIcon} />
      </button>
    </div>
  );
};
