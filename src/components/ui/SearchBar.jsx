import React from "react";

const SearchBar = ({
  inputClassName,
  inputPlaceholder,
  inputValue,
  onInputChange,
  buttonClassName,
  onButtonClick,
  buttonText,
}) => {
  return (
    <div className="bg-whisper flex items-center justify-evenly p-1">
      <input
        type="text"
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={onInputChange}
        className={`focus:outline-none ${inputClassName}`}
      />
      <button className={`tracking-wider ${buttonClassName}`} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default SearchBar;
