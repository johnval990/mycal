import { format } from "date-fns";

export const countRemindersByDate = (date) => {
  const formattedDate = format(date, "yyyy-MM-dd");
  return ({ calendar }) =>
    Object.keys(calendar.reminders)
      .map((key) => {
        return calendar.reminders[key];
      })
      .filter((item) => item.date === formattedDate).length;
};

export const selectRemindersByDate = (date) => {
  const formattedDate = format(date, "yyyy-MM-dd");
  return ({ calendar }) =>
    Object.keys(calendar.reminders)
      .map((key) => {
        return calendar.reminders[key];
      })
      .filter((item) => item.date === formattedDate)
      .sort((a, b) => a.dateTime - b.dateTime);
};
