import React from "react";
import "./header.scss";

const Header = ({
  afterActualWeek,
  beforeActualWeek,
  showActualWeek,
  showActualMonth,
  openModal,
}) => {
  return (
    <header className="header">
      <button className="button create-event-btn" onClick={openModal}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button
          className="navigation__today-btn button"
          onClick={showActualWeek}
        >
          Today
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={beforeActualWeek}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={afterActualWeek}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{showActualMonth()}</span>
      </div>
    </header>
  );
};

export default Header;
