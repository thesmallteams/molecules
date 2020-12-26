import React from "react";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Calendar.css";

const CalendarControls = ({
  setPreviousYear,
  setNextYear,
  setPreviousMonth,
  setNextMonth,
  setNextDay,
  setPreviousDay,
  prevYear,
  nextYear,
  prevMonth,
  nextMonth,
  date,
  variant,
}) => {
  return (
    <div>
      {variant === "day" ? (
        <div className="flex flex-row justify-between max-w-sm">
          <div className="flex flex-row">
            <button
              className="px-2.5"
              tabIndex="0"
              onClick={setPreviousDay}
              aria-label="Previous Day"
            >
              <FontAwesomeIcon className="text-gray-600" icon={faAngleLeft} />
            </button>
            <div className="flex flex-row">
              <button
                className="px-2.5"
                tabIndex="0"
                onClick={setNextDay}
                aria-label="Next Day"
              >
                <FontAwesomeIcon
                  className="text-gray-600"
                  icon={faAngleRight}
                />
              </button>
            </div>
            <div className="px-2 text-lg text-gray-600" role="heading">
              <b>{format(date, "MMMM yyyy")}</b>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-between max-w-sm">
          <div className="flex flex-row">
            <button
              className="px-2.5"
              tabIndex="0"
              onClick={setPreviousYear}
              onKeyPress={prevYear}
              aria-label="Previous year"
            >
              <FontAwesomeIcon
                className="text-gray-600"
                icon={faAngleDoubleLeft}
              />
            </button>
            <button
              className="px-2.5"
              tabIndex="0"
              onClick={setPreviousMonth}
              onKeyPress={prevMonth}
              aria-label="Previous month"
            >
              <FontAwesomeIcon className="text-gray-600" icon={faAngleLeft} />
            </button>
          </div>
          <div className="px-2 text-lg text-gray-600" role="heading">
            <b>{format(date, "MMMM yyyy")}</b>
          </div>
          <div className="flex flex-row">
            <button
              className="px-2.5"
              tabIndex="0"
              onClick={setNextMonth}
              onKeyPress={nextMonth}
              aria-label="Next year"
            >
              <FontAwesomeIcon className="text-gray-600" icon={faAngleRight} />
            </button>
            <button
              className="px-2.5"
              tabIndex="0"
              onClick={setNextYear}
              onKeyPress={nextYear}
              aria-label="Next year"
            >
              <FontAwesomeIcon
                className="text-gray-600"
                icon={faAngleDoubleRight}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarControls;
