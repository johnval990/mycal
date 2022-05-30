import { createSlice } from "@reduxjs/toolkit";
import { getReminderWeather } from "./calendar.thunks";

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
  extraReducers: (builder) => {
    builder
      .addCase(getReminderWeather.pending, (state, { meta: { arg } }) => {
        state.reminders[arg.id].weather = { loading: true };
      })
      .addCase(
        getReminderWeather.fulfilled,
        (state, { meta: { arg }, payload }) => {
          state.reminders[arg.id].weather = { loading: false, data: payload };
        }
      );
  },
});

export const { insertReminder, deleteReminder } = calendarSlice.actions;
export default calendarSlice.reducer;
