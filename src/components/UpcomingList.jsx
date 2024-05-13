import React from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const UpcomingList = () => {
  return (
    <>
      <div className="sm:col-span-2">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          UPCOMING
        </label>
        <div className="flex justify-between items-center gap-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Type product name"
            required
          />
          <button className="bg-cyan-600 p-1 rounded-md">
            <MdModeEdit className="w-6 h-6" />
          </button>
          <button className="bg-cyan-600 p-1 rounded-md">
            <MdDelete className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default UpcomingList;
