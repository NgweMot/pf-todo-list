import React, { useState } from "react";
import UpcomingList from "./UpcomingList";
import FinishedList from "./FinishedList";

import Heading from "./Heading";
import CreateList from "./CreateList";

const TodoHome = () => {
  const [toDo, setTodo] = useState([
    {
      id: 1,
      jobName: "Cooking",
      isDone: false,
    },
    {
      id: 2,
      jobName: "Coding",
      isDone: true,
    },
    {
      id: 3,
      jobName: "English Practice",
      isDone: false,
    },
    {
      id: 4,
      jobName: "Learn Next JS",
      isDone: true,
    },
    {
      id: 5,
      jobName: "House Cleaning",
      isDone: false,
    },
  ]);
  const addList = (newList) => {
    setTodo([...toDo, newList]);
  };
  const deleteToDo = (id) => {
    setTodo(toDo.filter((el) => el.id != id));
  };
  const doneList = (id) => {
    setTodo(
      toDo.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };
  const updateJob = (id, newJob) => {
    setTodo(toDo.map((el) => (el.id === id ? { ...el, jobName: newJob } : el)));
  };
  return (
    <section className="bg-white dark:bg-cyan-600">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <Heading />
        <div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <CreateList addList={addList} />
            <UpcomingList
              doneList={doneList}
              deleteToDo={deleteToDo}
              toDo={toDo}
              updateJob={updateJob}
            />
            {/* <FinishedList toDo={toDo} doneList={doneList} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoHome;
