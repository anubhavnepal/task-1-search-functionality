import React from "react";

const Cards = () => {
  return (
    <div className="bg-white m-auto px-4 py-5 space hover:bg-salomie hover:cursor-pointer">
      <h2 className="text-violet-1000 underline underline-offset-4 font-bold sm:text-xl ">
        Bachelor's of Information And Technology
      </h2>
      <div className="course-description mt-2 mb-4 divide-x-2 divide-gray-300 flex items-center gap-x-4">
        <div className="course-type flex items-center gap-x-2 px-2">
          <img src="/icons/course.svg" className="icon size-4" alt="course" />
          <p className="course-level">Bachelor</p>
        </div>
        <div className="course-duration flex items-center gap-x-2 px-2">
          <img src="/icons/time.svg" className="icon size-4" alt="course" />
          <p className="course-duration">3 years</p>
        </div>
        <div className="course-location flex items-center gap-x-2 px-2">
          <img src="/icons/location.svg" className="icon size-4" alt="course" />
          <p className="course-place">City of Olampia, Zues</p>
        </div>
          </div>
          <div className="course-detailed-info">
              <p className="text-neutral-800">Focus on designing and constructing infrastructure to support Nepal's growing urban and rural needs.</p>
          </div>
    </div>
  );
};

export default Cards;
