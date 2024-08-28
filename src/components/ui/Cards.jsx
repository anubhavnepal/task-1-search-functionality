import React from "react";
import HighlightQuery from "./HighlightQuery";

const Cards = ({
  query,
  courseTitle,
  courseDegree,
  courseDuration,
  courseLocation,
  courseDescription,
}) => {
  return (
    <div className="bg-white m-auto px-4 py-5 space hover:bg-salomie hover:cursor-pointer">
      <h2 className="text-violet-1000 underline underline-offset-4 font-bold sm:text-xl ">
        <HighlightQuery text={courseTitle} query={query} />
      </h2>
      <div className="course-description mt-2 mb-4 flex flex-wrap items-center gap-x-4">
        <div className="course-type flex items-center gap-x-2 px-2 border-r-2 border-neutral-600 pr-4">
          <img src="/icons/course.svg" className="icon size-4" alt="degree" />
          <p className="course-level">{courseDegree}</p>
        </div>
        <div className="course-duration flex items-center gap-x-2 px-2 border-r-2 border-neutral-600 pr-4">
          <img src="/icons/time.svg" className="icon size-4" alt="duration" />
          <p className="course-duration">{courseDuration}</p>
        </div>
        <div className="course-location flex items-center gap-x-2 px-2 max-sm:mt-[10px]">
          <img src="/icons/location.svg" className="icon size-4" alt="location" />
          <p className="course-place">{courseLocation}</p>
        </div>
      </div>
      <div className="course-detailed-info">
        <p className="text-neutral-800">
          <HighlightQuery text={courseDescription} query={query} />
        </p>
      </div>
    </div>
  );
};

export default Cards;
