// import React from "react";

import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, settaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [assignTo, setassignTo] = useState("");
  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask({
      taskTitle,
      taskDescription,
      date,
      taskCategory,
      assignTo,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });
    const data = userData;
    console.log(data);

    data.forEach(function (element) {
      if (assignTo == element.firstName) {
        element.tasks.push(newTask);
        element.taskNumbers.newTask = element.taskNumbers.newTask + 1;
      }
    });
    setUserData(data);
    console.log(data);

    setDate("");
    setTaskCategory("");
    setTaskDescription("");
    setassignTo("");
    settaskTitle("");
  };

  return (
    <div>
      <div className="bg-[#1c1c1c] p-10 mt-10 rounded-md">
        <form
          className="flex flex-wrap items-start justify-center"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div className="w-1/2">
            <h3>Task Title</h3>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
              className="w-[90%] p-2 bg-transparent border-green-400 border-2 rounded-lg m-2"
              placeholder=""
            />
            <h3>Description</h3>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              className="w-[90%] p-2 bg-transparent border-green-400 border-2 rounded-lg m-2"
            ></textarea>
          </div>
          <div className="w-1/2">
            <h3>Date</h3>
            <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              type="date"
              className="w-[90%] p-2 bg-transparent border-green-400 border-2 rounded-lg m-2"
            />
            <h3>Assign to</h3>
            <input
              value={assignTo}
              type="text"
              onChange={(e) => {
                setassignTo(e.target.value);
              }}
              className="w-[90%] p-2 bg-transparent border-green-400 border-2 rounded-lg m-2"
              placeholder="Employee Name"
            />
            <h3>Category</h3>
            <input
              type="text"
              value={taskCategory}
              onChange={(e) => {
                setTaskCategory(e.target.value);
              }}
              className="w-[90%] p-2 bg-transparent border-green-400 border-2 rounded-lg m-2"
              placeholder="design,dev,etc"
            />
          </div>
          <button className="bg-red-500 text-white px-5 py-2 rounded-md">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
