import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const Lists = ({ id, jobName, isDone, deleteToDo, doneList ,updateJob}) => {
  const [edit, setEdit] = useState(false);
const [updateInput,setUpdateInput]=useState(jobName)
  const handleCheck = () => {
    doneList(id);
  };
  const handleDelete = () => {
    deleteToDo(id);
  };
  const handleEdit = () => {
    console.log("U Edit", id);
    setEdit(!edit);
  };
  const handleUpdateInput=(e) => {
    setUpdateInput(e.target.value)
  }
  const handleBlur=() => {
    console.log("You exit");
    setEdit(false)
    updateJob(id,updateInput)
  }
  return (
    <div className="flex justify-between items-center gap-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-2 group ">
      {edit ? (
        <>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            value={updateInput}
            onChange={handleUpdateInput}
            onBlur={handleBlur}
            required
          />
        </>
      ) : (
        <div className="flex gap-3 justify-start items-center">
          <input
            onChange={handleCheck}
            checked={isDone}
            type="checkbox"
            id={`list` + id}
            className="w-4 h-4"
          />
          <label htmlFor={`list` + id} className="text-sm font-medium">
            {jobName}
          </label>
        </div>
      )}
      <div className=" group-hover:opacity-100 opacity-0 group-hover:duration-200 flex items-center gap-3">
        <button
          onClick={handleEdit}
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
