import React, { useState } from "react";
import { deleteTask } from "../../gateway/events";
import "./event.scss";

const Event = ({ title, time, id, handleOnDelete, refreshPage }) => {
  const handleDelete = (id) => {
    deleteTask(id);
    handleOnDelete();
    refreshPage();
  };

  const [isVisible, setVisible] = useState(false);

  const showDeleteBtn = () => {
    setVisible(true);
    const stateBtn = isVisible ? "open" : "hiden";
    return stateBtn;
  };

  return (
    <div className="event" onClick={showDeleteBtn}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <div className="hiden" onClick={handleDelete}>
        <button className="delete-form__btn">Delete</button>
      </div>
    </div>
  );
};

export default Event;
