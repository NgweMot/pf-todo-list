import React from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const Lists = ({ id, jobName, isDone, deleteToDo, doneList }) => {
  const handleCheck = () => {
    doneList(id);
  };
  const handleDelete = () => {
    deleteToDo(id);
  };
  return (
    <div className="flex justify-between items-center gap-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-2 group ">
      <div className="flex gap-3 justify-start items-center">
        <input
          onChange={handleCheck}
          checked={isDone}
          type="checkbox"
          className="w-4 h-4"
        />
        <div className="text-sm font-medium">{jobName}</div>
      </div>
      <div className=" group-hover:opacity-100 opacity-0 group-hover:duration-200 flex items-center gap-3">
        <button
          className={`bg-cyan-600 p-1 rounded-md ${
            isDone && "bg-red-500 opacity-40 pointer-events-none"
          }`}
        >
          <MdModeEdit className="w-6 h-6" />
        </button>
        <button onClick={handleDelete} className="bg-cyan-600 p-1 rounded-md">
          <MdDelete className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Lists;
