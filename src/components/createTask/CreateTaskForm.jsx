import React, { useState } from "react";
import "./createTaskForm.scss";

const CreateTaskForm = ({ modalActive, closeModal }) => {
  // show the value in the input area
  // save the object of event in the array
  // delete event from array
  const clearInputs = () =>
    setTask({
      title: "",
      date: "",
      startTime: "",
      endTime: "",
      description: "",
    });

  const handleSubmit = () => {
    event.preventDefault();
    clearInputs();
    closeModal();
    console.log("++", task, "++");
  };

  const [task, setTask] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  return (
    <div className={modalActive ? "create-task active" : "create-task"}>
      <i className="exit" onClick={closeModal}>
        🞪
      </i>
      <form onSubmit={handleSubmit} className="form">
        <div className="title">
          <input
            type="text"
            className="title__input"
            name="title"
            maxLength="30"
            minLength="3"
            onChange={handleChange}
          ></input>
        </div>
        <div className="date">
          <div className="date__start">
            <input
              type="date"
              className="date__day start"
              name="date"
              onChange={handleChange}
            ></input>
            <input
              type="time"
              className="date__time start"
              name="startTime"
              onChange={handleChange}
            ></input>
          </div>
          <div className="date__end">
            <input
              type="time"
              className="date__time end"
              name="endTime"
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="description">
          <textarea
            type="text"
            className="description__area"
            name="description"
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="create-btn button" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
