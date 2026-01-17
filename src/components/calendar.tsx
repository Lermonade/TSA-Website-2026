import React, { useState } from "react";
import "./calendar.module.css";
import styles from './calendar.module.css'
import { ChevronLeft, ChevronRight } from "lucide-react";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar: React.FC = () => {
  const today = new Date();

  const [date, setDate] = useState({ month: today.getMonth(), year: today.getFullYear() }); //gets the date (month & year), and setDate function
  const [currentMonth, currentYear] = [date.month, date.year]; //gets the month and year from date object

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate(); // gets the date of the last day of the month; 0th day of the next month is last day of curr month
  };

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); //gets the first day (0-6) of curr month

  const prevMonth = () => {
    setDate(({month, year}) => {
      if (month === 0) {
        return {month: 11, year: year - 1};
      }
      return {month: month-1, year: year};
    });
  };

  const nextMonth = () => {
    setDate(({month, year}) => {
      if (month === 11) {
        return {month: 0, year: year + 1};
      }
      return {month: month+1, year: year};
    });
  };

  const days: (number | null)[] = [];

  // Fill empty slots for first week
  for (let i = 0; i < firstDayOfMonth; i++) days.push(null);

  // Fill actual days
  for (let i = 1; i <= getDaysInMonth(currentMonth, currentYear); i++) days.push(i);

  for(let i = firstDayOfMonth + getDaysInMonth(currentMonth, currentYear); i < 42; i++) days.push(null);

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.header}>
        <button className={styles.headerButton} onClick={prevMonth}><ChevronLeft size={24} strokeWidth={4}/></button>
        <h2 className={styles.headerText}>{months[currentMonth]} {currentYear}</h2>
        <button className={styles.headerButton} onClick={nextMonth}><ChevronRight size={24} strokeWidth={4}/></button>
      </div>
      <div className={styles.body}>
        {weekdays.map((day) => (
        <div key={day} className={styles.weekdays}>{day}</div>
        ))}

        {days.map((day, index) => (
        <div
            key={index}
            className={styles.days}
        >
            <div className={`${styles.dayNum} ${day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear() ? styles.today : ""}`}>{day}</div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;