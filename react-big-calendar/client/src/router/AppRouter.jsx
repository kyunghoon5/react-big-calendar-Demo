
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainCalendar from '../page/MainCalendar';
import UserCalendar from '../page/UserCalendar';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<UserCalendar />} />
          <Route path="/usercalendar" element={<MainCalendar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter