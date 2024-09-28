import { useState } from "react";
import { useSelectInputStyles, SelectInputPropsType, SelectOptionType } from ".";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { FC } from "react";
export const SelectInput: FC<SelectInputPropsType> = ({ onChange, options, label }) => {
  const classes = useSelectInputStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: SelectOptionType) => {
    setIsOpen(false);
    setSelectedLabel(option.label);
    onChange(option);
  };

  return (
    <div className={classes.customSelect}>
      <div className={classes.select} onClick={handleToggleDropdown}>
        {selectedLabel || label}
        {isOpen ? <MdArrowDropUp className={classes.selectIcon} /> : <MdArrowDropDown className={classes.selectIcon} />}
      </div>
      {isOpen && (
        <div className={classes.dropdownContainer}>
          {options.map((option, index) => (
            <div key={index} className={classes.dropdownItem} onClick={() => handleOptionSelect(option)}>
              {option?.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
