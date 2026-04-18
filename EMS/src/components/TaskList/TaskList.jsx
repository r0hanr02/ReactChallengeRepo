/* eslint-disable react/prop-types */
// import React from 'react'

import AcceptTask from "./AcceptTask";
import CompletedTask from "./CompletedTask";
import Failed from "./Failed";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  
  if (!data) {
    return <>...Loading</>;
    
  }
  const tasks = data.tasks
  console.log(tasks)
  return (
    <div
      id="tasklist"
      className="h-[40vh] flex overflow-x-auto items-center flex-nowrap gap-4 mt-10"
    >
      {tasks.map((task, id) => {
        {
          if (task.active) {
            return <AcceptTask key={id} task={task} />;
          }
          if (task.completed) {
            return <CompletedTask key={id} task={task} />;
          }
          if (task.newTask) {
            return <NewTask key={id} task={task} />;
          }
          if (task.failed) {
            return <Failed key={id} task={task} />;
          }
        }
      })}
    </div>
  );
};

export default TaskList;
