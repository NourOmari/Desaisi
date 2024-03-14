import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Button } from "@material-tailwind/react";

const DropdownButton = ({ options, onSelect, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        className="px-3 py-2 rounded-md bg-Cyan text-left text-gray-50 font-bold focus:outline-none hover:bg-gray-200 hover:text-Cyan flex items-center"
        onClick={toggleDropdown}
      >
        {selectedOption?.label || "Select Tasks"}
        <FaChevronDown className="ml-2 -mr-1 text-gray-50" />
      </Button>
      {isOpen && (
        <ul className="absolute z-50 bg-white shadow-md rounded-md mt-2 w-full">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => onSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
