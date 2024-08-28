import React from "react";
import Cards from "./ui/Cards";

const ListItems = ({ filteredItems, query }) => {
  const isQueryValid = query.trim().length > 0;

  return (
    <div className="px-8 mt-10">
      <div className="text-xl font-semibold tracking-wide max-sm:text-center">
        {!isQueryValid ? (
          <span className="">Suggested search</span>
        ) : (
          <span>
            {filteredItems.length} result{filteredItems.length !== 1 && "s"}{" "}
            found
          </span>
        )}
      </div>
      <ul className="mt-4 divide-y ">
        {filteredItems.length
          ? filteredItems.map((item, idx) => (
              <li key={idx} className="my-5">
                <Cards
                  query={query}
                  courseTitle={item.title}
                  courseDegree={item.degree}
                  courseDuration={item.duration}
                  courseLocation={item.location}
                  courseDescription={item.description}
                />
              </li>
            ))
          : isQueryValid && (
              <li className="mt-10 py-2 text-center space-y-4">
                <p className="text-lg text-neutral-600">
                  Try a diffrent keyword
                </p>
                <p className="text-neutral-600 font-semibold">
                  No matches found for your search term.
                </p>
              </li>
            )}
      </ul>
    </div>
  );
};

export default ListItems;
