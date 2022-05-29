import {
  addDays,
  format,
  getDate,
  getDay,
  getDaysInMonth,
  isSameMonth,
  startOfMonth,
  subDays,
} from "date-fns";

export const getMonthCalendar = (monthDate = new Date()) => {
  const startDay = startOfMonth(monthDate);
  const weekDay = getDay(startDay);

  let currentDate = startDay;
  let amountOfDays = getDaysInMonth(monthDate);
  if (weekDay > 0) {
    currentDate = subDays(currentDate, weekDay);
    amountOfDays += weekDay;
  }

  const calendar = [];
  while (calendar.length < amountOfDays || calendar.length % 7 !== 0) {
    calendar.push({
      id: format(currentDate, "yyyy-MM-dd"),
      day: getDate(currentDate),
      date: currentDate,
      disabled: !isSameMonth(monthDate, currentDate),
    });
    currentDate = addDays(currentDate, 1);
  }

  return calendar;
};
