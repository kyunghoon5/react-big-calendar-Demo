import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import '../styles/calendar.css';
// import useAPIData from '../api/API';
import mock from '../components/mock';
import { CalendarEvent } from '../components/calendar/CalendarEvent';

const localizer = momentLocalizer(moment);

const MainCalendar = () => {
  // const { mainData, salesmanTrip, receiveEvent } = useAPIData();
  const mainDataMock = mock.mock;
  const salesmanTripMock = mock.trips;
  const receiveEventMock = mock.receive;

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

  const month = (
    <div style={{ height: '100vh' }}>
      <Calendar
        events={mergedData}
        eventPropGetter={eventStyleGetter}
        step={60}
        localizer={localizer}
        defaultDate={'2023-07-12'}
        view="month"
        onView={(view) => console.log(view)}
        components={{
          event: CalendarEvent,
        }}
      />
    </div>
  );

  const week = (
    <div style={{ height: '100vh' }}>
      <Calendar
        events={mergedData}
        eventPropGetter={eventStyleGetter}
        step={60}
        localizer={localizer}
        defaultDate={'2023-07-12'}
        view="week"
        onView={(view) => console.log(view)}
        components={{
          event: CalendarEvent,
        }}
      />
    </div>
  );

  const day = (
    <div style={{ height: '100vh' }}>
      <Calendar
        events={mergedData}
        eventPropGetter={eventStyleGetter}
        step={60}
        localizer={localizer}
        defaultDate={'2023-07-12'}
        view="day"
        onView={(view) => console.log(view)}
        components={{
          event: CalendarEvent,
        }}
      />
    </div>
  );

  const agenda = (
    <div style={{ height: '100vh' }}>
      <Calendar
        events={mergedData}
        eventPropGetter={eventStyleGetter}
        step={60}
        localizer={localizer}
        defaultDate={'2023-07-12'}
        // onShowMore={(events) => this.setState({ showModal: true, events })}
        view="agenda"
        onView={(view) => console.log(view)}
        components={{
          event: CalendarEvent,
        }}
      />
    </div>
  );

  const [letter, setLetter] = useState(month);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count % 10 === 0) {
        setLetter(month);
      }
      if (count % 10 === 1) {
        setLetter(week);
      }
      if (count % 10 === 2) {
        setLetter(day);
      }
      if (count % 10 === 3) {
        setLetter(agenda);
      }
      setCount(count + 1);
    }, 3000); // set time
    return () => clearInterval(intervalId);
  }, [letter, count, month]);

  if (count === 4) {
    setCount(0);
  }

  return <div>{letter}</div>;
};

export default MainCalendar;
