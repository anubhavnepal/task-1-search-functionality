import React from "react";

const Note = () => {
  return (
    <div className="px-6 py-4 space-y-5 bg-red-100">
      <p className="text-md text-center tracking-wide">
        <span className="font-bold">Notice: </span>
        Only <span className="italic font-semibold">Course Title</span> and{" "}
        <span className="italic font-semibold">Description</span> are
        highlighted. Highlighting{" "}
        <span className="italic font-semibold">Degree</span>,{" "}
        <span className="italic font-semibold">Duration</span>, and{" "}
        <span className="italic font-semibold">Location</span> made the design
        look unattractive.
      </p>
    </div>
  );
};

export default Note;
