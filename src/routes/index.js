import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppTemplate from "../components/templates/AppTemplate";
import App from "../pages/Home";
import Calendar from "../pages/Calendar";

export default function RouteConfig() {
  return (
    <BrowserRouter>
      <AppTemplate>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/calendar" element={<Calendar />} />
        </Routes>
      </AppTemplate>
    </BrowserRouter>
  );
}
