import React, { Component, useState, useEffect } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

class App extends Component {
  today = new Date();
  week = 7;
  state = {
    weekStartDate: new Date(this.today.setDate(this.today.getDate())),
  };
  ShowWeekAfterActual = () => {
    this.setState({
      weekStartDate: new Date(
        this.today.setDate(this.today.getDate() + this.week)
      ),
    });
  };
  ShowWeekBeforeActual = () => {
    this.setState({
      weekStartDate: new Date(
        this.today.setDate(this.today.getDate() - this.week)
      ),
    });
  };

  render() {
    const { weekStartDate } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    return (
      <>
        <Header
          afterActualWeek={this.ShowWeekAfterActual}
          beforeActualWeek={this.ShowWeekBeforeActual}
        />
        <Calendar weekDates={weekDates} />
      </>
    );
  }
}

export default App;
