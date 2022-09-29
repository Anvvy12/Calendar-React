import React from "react";
import "./createTaskForm.scss";

const CreateTaskForm = ({ modalActive, closeModal, onCreate }) => {
  //show the value in the input area
  // save the object of event in the array
  //delete event from array
  return (
    <div
      className={modalActive ? "create-task active" : "create-task"}
      onInput={onCreate}
    >
      <i className="exit" onClick={closeModal}>
        🞪
      </i>
      <div className="title">
        <input
          type="text"
          className="title__input"
          maxLength="30"
          minLength="3"
          value=""
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
      <button className="create-btn button" type="submit" onClick={onCreate}>
        Save
      </button>
    </div>
  );
};

export default CreateTaskForm;
