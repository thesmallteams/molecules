import React, { createContext, useState } from "react";
import {
  format,
  startOfMonth,
  subMonths,
  addMonths,
  subYears,
  addYears,
  subWeeks,
  addWeeks,
  subDays,
  addDays,
} from "date-fns";

const CalendarContext = createContext();

const CalendarProvider = ({ children }) => {
  /* State for the selected date */
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log("The selected date is:", selectedDate);

  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dddd"));
  const handleSelectDate = (date) => {
    setDate(date);
  };

  /* Function to handle navigations to go to previous day.  */
  const setPreviousDay = () => {
    // Substracts 1 day from the selectedDate and stores it to previousDay
    const previousDay = subDays(selectedDate, 1);
    // Set the state of previousDay to the selectedDate
    setSelectedDate(previousDay);
    console.log("The previous day is:", previousDay);
  };

  /* Function to handle navigations to next day.  */
  const setNextDay = () => {
    // Increments the selectedDate by 1 day
    const nextDay = addDays(selectedDate, 1);
    // Set the state of nextDay to the selectedDate
    setSelectedDate(nextDay);
    console.log("The next day is:", nextDay);
  };

  /* Function to handle navigations to previous week.  */
  const setPreviousWeek = () => {
    // Decrements the selectedDate by 1 week
    const previousWeek = subWeeks(selectedDate, 1);
    // Set the state of previousWeek to the selectedDate
    setSelectedDate(previousWeek);
    console.log("The previous week is:", previousWeek);
  };

  /* Function to handle navigations to next week. */
  const setNextWeek = () => {
    // Increments the selectedDate by 1 week
    const nextWeek = addWeeks(selectedDate, 1);
    // Set the state of nextWeek to the selectedDate
    setSelectedDate(nextWeek);
    console.log("The next week is:", nextWeek);
  };

  /* Function to handle navigations to previous month. */
  const setPreviousMonth = () => {
    // Decrements the selectedDate by 1 month
    setSelectedDate(subMonths(selectedDate, 1));
  };

  /* Function to handle navigations to next month.  */
  const setNextMonth = () => {
    // Increments the selectedDate by 1 month and sets the selectedDate
    setSelectedDate(addMonths(selectedDate, 1));
  };

  /* Function to handle the state of previous year. */
  const setPreviousYear = () => {
    setSelectedDate(subYears(selectedDate, 1));
  };

  /* Function to handle the state of next year. */
  const setNextYear = () => {
    setSelectedDate(addYears(selectedDate, 1));
  };

  /* Function to handle the state of month start. */
  const setMonthStart = () => {
    setSelectedDate(startOfMonth(selectedDate));
  };

  /* Accessibility best practices:
     Hotkeys functionality for the calender component.    
  */
  const handleCalendarKeyPress = (e) => {
    const keyCode = e.keyCode;
    // Check if control key was pressed
    // const control = e.ctrlKey;
    switch (keyCode) {
      case 13: //Enter
        handleSelectDate(format(selectedDate, "yyyy-MM-dd"));
        return console.log("Enter clicked");
      /* case 27: //Esc
        closeCalendar();
        return console.log("Calender closed by keystoke."); */
      case 36: //Home
        setMonthStart();
        return;
      case 37: //Left
        setPreviousDay();
        return;
      case 38: //Up
        setPreviousWeek();
        return;
      case 39: //Right
        setNextDay();
        return;
      case 40: //Down
        setNextWeek();
        return;
      default:
        return;
    }
  };

  const handleDateSelection = (date) => {
    const dateString = format(date, "yyyy-MM-dd");
    handleSelectDate(dateString);
  };

  const handleKeyPress = (e, cb) => {
    const charCode = e.charCode;
    if (charCode === 13 || charCode === 32) {
      cb(new Error("handleKeyPress never got executed."));
      console.log("handleKeyPress got executed.");
    }
  };

  return (
    <CalendarContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        setNextDay,
        setPreviousDay,
        setNextWeek,
        setPreviousWeek,
        setNextMonth,
        setPreviousMonth,
        setMonthStart,
        setNextYear,
        setPreviousYear,
        handleCalendarKeyPress,
        handleDateSelection,
        handleKeyPress,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export { CalendarContext, CalendarProvider };
