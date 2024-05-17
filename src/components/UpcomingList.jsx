import React, { useState } from "react";

import Lists from "./Lists";
import Status from "./Status";
import EmptyState from "./EmptyState";
const UpcomingList = ({ toDo, deleteToDo, doneList ,updateJob}) => {
  return (
    <>
      <div className="sm:col-span-2 dark:bg-cyan-600">
        <Status toDo={toDo} />
        {toDo.length === 0 && <EmptyState />}
        {toDo.map(({ id, jobName, isDone }) => (
          <Lists
            deleteToDo={deleteToDo}
            doneList={doneList}
            key={id}
            id={id}
            jobName={jobName}
            isDone={isDone}
            updateJob={updateJob}
          />
        ))}
      </div>
    </>
  );
};

export default UpcomingList;
