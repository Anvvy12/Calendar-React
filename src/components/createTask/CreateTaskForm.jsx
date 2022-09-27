import React from "react";
import "./createTaskForm.scss";

const CreateTaskForm = () => {
  return (
    <div className="create-task">
      <div className="title">
        <input type="text"></input>
      </div>
      <div className="date">
        <input type="date"></input>
        <input type="time"></input>
        <input type="date"></input>
        <input type="time"></input>
      </div>
      <div className="description">
        <textarea type="text"></textarea>
      </div>
    </div>
  );
};

export default CreateTaskForm;
