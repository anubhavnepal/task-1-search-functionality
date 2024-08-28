import React from "react";
import Cards from "./ui/Cards";

const ListItems = ({ filteredItems, query }) => {
  const isQueryValid = query.trim().length > 0;

  return (
    <div className="px-8">
      <div className="mt-6 text-xl font-semibold tracking-wide max-sm:text-center">
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
              <li
                key={idx}
                className="my-5"
              >
                <Cards
                  courseTitle={item.title}
                  courseDegree={item.degree}
                  courseDuration={item.duration}
                  courseLocation={item.location}
                  courseDescription={item.description}
                />
              </li>
            ))
          : isQueryValid && (
              <li className="py-2 text-center space-y-4">
                <p className="text-lg text-neutral-300">
                  Try a diffrent keyword
                </p>
                <p className="text-neutral-400">
                  Cannot find any matches for your search term.
                </p>
              </li>
            )}
      </ul>
    </div>
  );
};

export default ListItems;
