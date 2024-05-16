import React from "react";

const Status = ({ toDo }) => {
  return (
    <>
      <div className="mb-4 flex justify-between items-center gap-5 text-sm rounded-lg  p-2.5 dark:bg-cyan-600 ">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          UPCOMING
        </label>
        <div className="relative me-4 text-gray-900 dark:text-white border-2 border-gray-900 rounded-2xl px-2 py-1">
          <p>
            Done{" "}
            <span className="me-2">
              {toDo.filter((el) => el.isDone === true).length} /
            </span>
            <span className="">{toDo.length}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Status;
