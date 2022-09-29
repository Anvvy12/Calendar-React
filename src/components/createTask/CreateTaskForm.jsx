import React from "react";
import "./createTaskForm.scss";

const CreateTaskForm = ({ modalActive, setModalActive }) => {
  return (
    <div className={modalActive ? "create-task active" : "create-task"}>
      <i className="exit" onClick={() => setModalActive(false)}>
        🞪
      </i>
      <div className="title">
        <input
          type="text"
          className="title__input"
          maxLength="30"
          minLength="3"
        ></input>
      </div>
      <div className="date">
        <div className="date__start">
          <input type="date" className="date__day start"></input>
          <input type="time" className="date__time start"></input>
        </div>
        <div className="date__end">
          <input type="time" className="date__time end"></input>
        </div>
      </div>
      <div className="description">
        <textarea type="text" className="description__area"></textarea>
      </div>
      <button className="create-btn button">Save</button>
    </div>
  );
};

export default CreateTaskForm;
