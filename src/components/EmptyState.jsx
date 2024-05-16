import React from "react";
import empty from "../assets/empty.svg";
const EmptyState = () => {
  return (
    <div className="bg-white dark:bg-cyan-600">
      <img
        className="h-auto max-w-lg rounded-lg mx-auto"
        src={empty}
        alt="image description"
      />
      <p className="font-bold text-2xl text-center mt-3">There is no list.</p>
    </div>
  );
};

export default EmptyState;
