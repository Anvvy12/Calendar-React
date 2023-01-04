import React, { useState } from 'react';
import { deleteTask } from '../../gateway/events';
import './event.scss';

const Event = ({ title, time, id, handleOnDelete, refreshPage }) => {
  const handleDelete = id => {
    deleteTask(id);
    handleOnDelete();
    refreshPage();
  };

  const [isVisible, setVisible] = useState(false);

  const showDeleteBtn = () => {
    setVisible(!isVisible);
  };

  const buttonDelete = isVisible ? 'open' : 'hidden';

  return (
    <div className="event" onClick={showDeleteBtn}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <div className={`${buttonDelete} div-delete`}>
        <button className="delete-event-btn btn" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Event;
