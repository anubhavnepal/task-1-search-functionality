import React, { useState } from "react";
import SearchBar from "./ui/SearchBar";
import { courseItems } from "../../data";
import ListItems from "./ListItems";

const SearchFilter = ({ className }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => setQuery(event.target.value);

  const lowercaseQuery = query.trim().toLowerCase();
  const filteredItems = courseItems.filter(
    (item) =>
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery)
  );
  return (
    <>
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
      <ListItems filteredItems={filteredItems} query={query} />
    </>
  );
};

export default SearchFilter;
