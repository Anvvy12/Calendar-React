import React from "react";
import "./CreateTask.scss";

const CreateTask = () => {
  return (
    <div className="create-task">
      <div className="create-task__title">
        <input type="text"></input>
      </div>
      <div className="create-task__date">
        <input type="date"></input>
        <input type="date"></input>
      </div>
      <div className="create-task__description">
        <textarea type="text"></textarea>
      </div>
    </div>
  );
};

export default CreateTask;
