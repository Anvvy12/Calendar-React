import React, { useState, useEffect } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import CreateTask from "./components/createTask/CreateTask.jsx";
import { months } from "./utils/dateUtils";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

const App = () => {
  const today = new Date();

  const [firstDayInWeek, setNewWeek] = useState(
    new Date(today.setDate(today.getDate()))
  );

  const showActualMonth = () => {
    const firstMonth = generateWeekRange(
      getWeekStartDate(firstDayInWeek)
    )[0].getMonth();

    const secondMonth = generateWeekRange(
      getWeekStartDate(firstDayInWeek)
    )[6].getMonth();

    return months[firstMonth] !== months[secondMonth]
      ? `${months[firstMonth]} - ${months[secondMonth]}`
      : `${months[firstMonth]}`;
  };

  const showCreateTask = () => {
    <CreateTask />;
  };

  const ShowWeekAfterActual = () =>
    setNewWeek(new Date(firstDayInWeek.setDate(firstDayInWeek.getDate() + 7)));

  const ShowWeekBeforeActual = () =>
    setNewWeek(new Date(firstDayInWeek.setDate(firstDayInWeek.getDate() - 7)));

  const showActualWeek = () => {
    setNewWeek(new Date(today.setDate(today.getDate())));
  };

  return (
    <>
      <CreateTask />
      <Header
        afterActualWeek={ShowWeekAfterActual}
        beforeActualWeek={ShowWeekBeforeActual}
        showActualWeek={showActualWeek}
        showActualMonth={showActualMonth}
        showCreateTask={showCreateTask}
      />
      <Calendar
        weekDates={generateWeekRange(getWeekStartDate(firstDayInWeek))}
      />
    </>
  );
};

export default App;
