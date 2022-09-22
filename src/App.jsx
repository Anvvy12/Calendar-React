import React, { useState, useEffect } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import { months } from "./utils/dateUtils";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

const App = () => {
  const today = new Date();

  const [firstDayInWeek, setNewWeek] = useState(
    new Date(today.setDate(today.getDate()))
  );

  const [actualMonth, setActualMonth] = useState(
    months[getWeekStartDate(firstDayInWeek).getMonth()]
  );

  const showActualMonth = () => {
    const nextMonth =
      months[generateWeekRange(getWeekStartDate(firstDayInWeek))[6].getMonth()];
    let res = actualMonth;
    if (actualMonth !== nextMonth) {
      res = `${actualMonth} - ${nextMonth}`;
    }
    return res;
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
      <Header
        afterActualWeek={ShowWeekAfterActual}
        beforeActualWeek={ShowWeekBeforeActual}
        showActualWeek={showActualWeek}
        showActualMonth={showActualMonth}
      />
      <Calendar
        weekDates={generateWeekRange(getWeekStartDate(firstDayInWeek))}
      />
    </>
  );
};

export default App;
