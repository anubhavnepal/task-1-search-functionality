import React, { useState } from "react";
import SearchBar from "./ui/SearchBar";

const SearchFilter = ({ className }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => setQuery(event.target.value);
  return (
    <div className={`px-6 py-6 sm:py-10 mx-auto shadow-2xl ${className}`}>
      <SearchBar
        inputPlaceholder='Try "CSIT"'
        inputValue={query}
        onInputChange={handleChange}
        inputClassName="w-full px-5 py-3 sm:py-4 bg-whisper text:md sm:text-xl tracking-wide"
        buttonClassName="bg-violet-1000 hover:bg-violet-950 px-4 sm:px-8 py-3 sm:py-5 text-whisper sm:text-xl font-bold "
        buttonText="SEARCH"
        onButtonClick={() => {}}
      />
    </div>
  );
};

export default SearchFilter;
