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
     const salesmanTripMock = mock.trips;
     const receiveEventMock = mock.receive;

  const [activeEvent, setActiveEvent] = useState(false);

  // const { mainData } = useAPIData(activeEvent);
console.log(activeEvent);
  const convertedMainData = mainDataMock.map((obj) => {
    return {
      id: obj.id,
      title: obj.title,
      notes: obj.notes,
      start: moment.utc(obj.start).utc().toDate(),
      end: moment.utc(obj.end).utc().toDate(),
      user: obj.user,
      recdate: 0,
    };
  });

  const convertedMainData2 = salesmanTripMock.map((obj) => {
    return {
      title: 'Business Trip',
      notes: obj.notes,
      start: moment(obj.start_dte).utc().add(4, 'hours').toDate(),
      end: moment(obj.end_dte).utc().add(4, 'hours').toDate(),
      allDay: true,
      user: { name: obj.SalesmanName },
      recdate: 0,
    };
  });

  const convertedMainData3 = receiveEventMock.map((obj) => {
    return {
      title: 'Shipment',
      notes: obj.notes,
      start: moment(obj.reqdate).utc().add(4, 'hours').toDate(),
      end: moment(obj.reqdate).utc().add(4, 'hours').toDate(),
      allDay: true,
      user: { name: obj.invno },
      recdate: obj.recdate,
    };
  });

  const mergedData = [
    ...convertedMainData,
    ...convertedMainData2,
    ...convertedMainData3,
  ];

  const eventStyleGetter = (event, note, start, end, allDay, user, recdate) => {
    const style = {
      backgroundColor: '#367cf7',
      borderRadius: '9px',
      opacity: 0.8,
      color: '#fff',
    };
    if (
      event.user.name === 'TONY' ||
      event.user.name === 'ANDREW' ||
      event.user.name === 'MIKE' ||
      event.user.name === 'DAVID' ||
      event.user.name === 'LEE' ||
      event.user.name === 'JOSE' ||
      event.user.name === 'JAMES' ||
      event.user.name === 'JOHN' ||
      event.user.name === 'CHRIS'
    ) {
      style.backgroundColor = '#ff9900';
    }
    if (event.title === 'Shipment') {
      style.backgroundColor = '#5beb34';
    }
    if (event.recdate == null) {
      style.backgroundColor = '#BDB889';
    }
    if (event.title == 'Holiday') {
      style.backgroundColor = '#73C1EF';
    }

    return { style };
  };
 

  
 

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



  return (
    <div>
      <div style={{ height: '100vh' }}>
        <Calendar
          events={mergedData}
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
