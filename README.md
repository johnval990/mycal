# MYCAL

Calendar application developed in React for the management of reminders.

DEMO URL: [https://mycal.johnva.dev/calendar](https://mycal.johnva.dev/calendar)

<center>
  <img src="https://mycal.johnva.dev/MYCAL.gif" width="100%" />
</center>

## Features

- Calendar view of the current month. (The current day is highlighted)
- Options to change the calendar year or month.
- Button to reset the calendar to the current month and year.
- Visualization of the reminders for each day.
- Options to create, edit and delete reminders.
- Each reminder shows the weather for the selected day and city. (Info obtained from [VisualCrossing](https://www.visualcrossing.com/ "visualcrossing"))
- Persistence of reminders created in LocalStorage.

## Installation / Configuration

### Install Dependencies

Run the following command to install all project dependencies.

```sh
npm install
// OR
npm i
```

### Weather Integration

In order to have the weather functionality it is necessary to create an account at [https://www.visualcrossing.com/weather-api](https://www.visualcrossing.com/weather-api) and obtain a key. This key must be added in the .env file

### Environment

In the root of the project create the .env file with the necessary variables, example:

```
REACT_APP_VISUAL_CROSSING_URL=https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services
REACT_APP_VISUAL_CROSSING_KEY=ACCOUNT_KEY
```

### Run Dev Server

This command runs the app in development mode. Open http://localhost:3000 to view it in the browser.

```sh
npm start
```

The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

### Build

```sh
npm run build
```

Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

## Libraries

Main libraries used in this project:

- [React](https://reactjs.org/ "React")
- [React Router](https://v5.reactrouter.com/web/guides/quick-start "React Router")
- [MUI](https://mui.com/ "MUI")
- [Redux Toolkit](https://redux-toolkit.js.org/ "Redux Toolkit")
- [Redux Persist](https://www.npmjs.com/package/redux-persist "Redux Persist")
- [date-fns](https://date-fns.org/ "date-fns")

## Author

John Valencia
