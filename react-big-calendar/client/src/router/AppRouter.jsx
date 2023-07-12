
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainCalendar from '../page/MainCalendar';
import UserCalendar from '../page/UserCalendar';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainCalendar />} />
          <Route path="/usercalendar" element={<UserCalendar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter