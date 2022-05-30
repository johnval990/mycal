import { createAsyncThunk } from "@reduxjs/toolkit";
import { parse } from "date-fns";
import { uid } from "uid";
import { insertReminder } from ".";
import { getCityWeatherByDate } from "../../../utils/weatherApi";

export const getReminderWeather = createAsyncThunk(
  "calendar/getDateWeather",
  async (reminder) => {
    try {
      const response = await getCityWeatherByDate(reminder.city, reminder.date);
      return response;
    } catch (error) {
      return false;
    }
  }
);

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
    weather: {},
  };

  dispatch(insertReminder(reminder));
  dispatch(getReminderWeather(reminder));
};
