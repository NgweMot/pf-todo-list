import React from "react";

const FinishedList = () => {
  return (
    <>
      <div className="sm:col-span-2">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          FINISHED
        </label>
        <div className=" h-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
          <ul>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FinishedList;
