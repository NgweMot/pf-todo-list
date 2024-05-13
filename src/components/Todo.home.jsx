import React from "react";
import { IoMdAdd } from "react-icons/io";
import UpcomingList from "./UpcomingList";
import FinishedList from "./FinishedList";

const TodoHome = () => {
  return (
    <section className="bg-white dark:bg-cyan-600">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          TODO LISTS
        </h2>
        <div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <div className="flex justify-between items-center gap-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type list name"
                  required
                />
                <button className="">
                  <IoMdAdd className="w-6 h-6 bg-cyan-600 " />
                </button>
              </div>
            </div>
            <UpcomingList />
            <FinishedList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoHome;
