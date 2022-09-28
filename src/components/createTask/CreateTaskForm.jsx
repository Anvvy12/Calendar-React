import React from "react";
import "./createTaskForm.scss";

const CreateTaskForm = ({ showCreateTask }) => {
  return (
    <div className="create-task">
      <i className="exit" onClick={showCreateTask}>
        🞪
      </i>
      <div className="title">
        <input type="text" className="title__input"></input>
      </div>
      <div className="date">
        <input type="date" className="date__day start"></input>
        <input type="time" className="date__time start"></input>
        <input type="date" className="date__day end"></input>
        <input type="time" className="date__time end"></input>
      </div>
      <div className="description">
        <textarea type="text"></textarea>
      </div>
    </div>
  );
};

export default CreateTaskForm;
