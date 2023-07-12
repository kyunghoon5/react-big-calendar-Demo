import { useState,useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import mock from '../components/mock';
import '../styles/calendar.css';
import AddNewFab from '../components/ui/AddNewFab';
import DeleteEvent from '../components/ui/DeleteEvent';
import { CalendarEvent } from '../components/calendar/CalendarEvent';
// import useAPIData from '../api/API';

const localizer = momentLocalizer(moment);
const UserCalendar = () => {
    const mainDataMock = mock.mock;

  const [activeEvent, setActiveEvent] = useState(false);

  // const { mainData } = useAPIData(activeEvent);

  const convertedMainData = mainDataMock.map((obj) => {
    return {
      id: obj.id,
      title: obj.title,
      notes: obj.notes,
      start: moment.utc(obj.start).utc().toDate(),
      end: moment.utc(obj.end).utc().toDate(),
      user: obj.user,
    };
  });  
 

  
 

  const [modalIsOpen, setmodalIsOpen] = useState(false);


  const onDoubleClick = (e) => {
    setmodalIsOpen(!modalIsOpen);
  };
  const onSelectEvent = (e) => {
    setActiveEvent(e);
  };
  const onSelectSlot = (e) => {
    setActiveEvent(false);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#367cf7',
      borderRadius: '9px',
      opacity: 0.8,
      color: '#fff',
    };

    return { style };
  };

  return (
    <div>
      <div style={{ height: '100vh' }}>
        <Calendar
          events={convertedMainData}
          eventPropGetter={eventStyleGetter}
          onDoubleClickEvent={onDoubleClick}
          step={60}
          localizer={localizer}
          defaultDate={'2023-07-12'}
          selectable={true}
          onSelectEvent={onSelectEvent}
          onSelectSlot={onSelectSlot}
          components={{
            event: CalendarEvent,
          }}
        />
        <AddNewFab
          setmodalIsOpen={setmodalIsOpen}
          modalIsOpen={modalIsOpen}
          setActiveEvent={setActiveEvent}
          activeEvent={activeEvent}
        />
        {activeEvent && (
          <DeleteEvent
            activeEvent={activeEvent}
            setActiveEvent={setActiveEvent}
          />
        )}
      </div>
    </div>
  );
};

export default UserCalendar;
