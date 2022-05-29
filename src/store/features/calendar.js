import { createSlice } from "@reduxjs/toolkit";
import { format, parse } from "date-fns";
import { uid } from "uid";

const initialState = {
  reminders: {},
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    insertReminder: (state, { payload }) => {
      // Note: Redux Toolkit allows us to write "mutating" logic in reducers.
      state.reminders[payload.id] = payload;
    },
    deleteReminder: (state, { payload }) => {
      delete state.reminders[payload];
    },
  },
});

export const { insertReminder, deleteReminder } = calendarSlice.actions;

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

export const upsertReminder = (data) => (dispatch) => {
  const dateTime = parse(
    `${data.date} ${data.time}`,
    "yyyy-MM-dd HH:mm",
    new Date()
  ).getTime();
  const reminder = {
    ...data,
    dateTime,
    id: data.id || uid(),
  };
  dispatch(insertReminder(reminder));
};

export default calendarSlice.reducer;
