import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const CreateList = ({ addList }) => {
  const [inputValue, setInputValue] = useState();
  const handleAddBtn = () => {
    if (inputValue) {
      const newList = {
        id: Date.now(),
        isDone: false,
        jobName: inputValue,
      };
      addList(newList);
      setInputValue("");
    }
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyup = (e) => {
    if (e.key === "Enter") {
      handleAddBtn();
    }
  };
  return (
    <div className="sm:col-span-2 dark:bg-cyan-600">
      <div className="flex justify-between items-center gap-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
        <input
          // value={inputValue}
          onChange={handleInputChange}
          onKeyUp={handleKeyup}
          type="text"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Type list name"
          required
        />
        <button onClick={handleAddBtn} className="">
          <IoMdAdd className="w-6 h-6 bg-cyan-600 " />
        </button>
      </div>
    </div>
  );
};

export default CreateList;
