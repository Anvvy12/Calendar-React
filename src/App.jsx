import React, { useState, useEffect } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import { months } from "./utils/dateUtils";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

const App = () => {
  const today = new Date();

  const [actualDay, setNewWeek] = useState(
    new Date(today.setDate(today.getDate()))
  );

  const a = () => {
    const firsDayOfWeek = months[getWeekStartDate(actualDay).getMonth()];
    const lastDayOfWeek =
      months[generateWeekRange(getWeekStartDate(actualDay))[6].getMonth()];
    let res = firsDayOfWeek;
    if (firsDayOfWeek !== lastDayOfWeek) {
      res += " - " + lastDayOfWeek;
    }
    return res;
  };

  const ShowWeekAfterActual = () =>
    setNewWeek(new Date(actualDay.setDate(actualDay.getDate() + 7)));

  const ShowWeekBeforeActual = () =>
    setNewWeek(new Date(actualDay.setDate(actualDay.getDate() - 7)));

  const showActualWeek = () => {
    setNewWeek(new Date(today.setDate(today.getDate())));
  };

  return (
    <>
      <Header
        afterActualWeek={ShowWeekAfterActual}
        beforeActualWeek={ShowWeekBeforeActual}
        showActualWeek={showActualWeek}
        a={a}
      />
      <Calendar weekDates={generateWeekRange(getWeekStartDate(actualDay))} />
    </>
  );
};

export default App;
