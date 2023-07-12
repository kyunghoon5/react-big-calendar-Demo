import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const BASE_URL = import.meta.env.VITE_DB_URL;
import '../../styles/calendar.css';
import mock from '../mock';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(0, 'hours');
const then = now.clone().add(1, 'hours');

const initialEvent = {
  title: '',
  notes: '',
  start: now.toDate(),
  end: then.toDate(),
  name: '',
};
const CalendarModal = ({
  modalIsOpen,
  setModalIsOpen,
  setActiveEvent,
  activeEvent,
}) => {
  const mainDataMock = mock.mock;
  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(then.toDate());
  const [isTitleValid, setisTitleValid] = useState(true);
  const [formValues, setFormValues] = useState(initialEvent);

  const { title, notes, start, end, name } = formValues;

  useEffect(() => {
    if (activeEvent) {
      if (activeEvent.start) {
        setDateStart(moment(activeEvent.start).toDate());
      }
      if (activeEvent.end) {
        setDateEnd(moment(activeEvent.end).toDate());
      }
      setFormValues({
        ...formValues,
        title: activeEvent.title,
        notes: activeEvent.notes,
        start: activeEvent.start,
        end: activeEvent.end,
        name: activeEvent.user.name,
      });
    } else {
      setFormValues(initialEvent);
    }
  }, [activeEvent, setFormValues, initialEvent]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleStartDateChange = (e) => {
    setDateStart(e);
    setFormValues({
      ...formValues,
      start: e,
    });
  };

  const handleEndDateChange = (e) => {
    setDateEnd(e);
    setFormValues({
      ...formValues,
      end: e,
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const momentStart = moment(start);
    const momentEnd = moment(end);
    if (momentStart.isSameOrAfter(momentEnd)) {
      return Swal.fire(
        'Error',
        'The end date must be greater than the start date.',
        'error'
      );
    }

    if (title.trim().length < 2) {
      return setisTitleValid(false);
    }

    if (activeEvent) {
      const eventData = {
        user: { name: name },
        notes: notes,
        title: title,
        start_date: start,
        end_date: end,
      };
      const index = mainDataMock.findIndex(
        (event) => event.id === activeEvent.id
      );
      if (index !== -1) {
        mainDataMock[index] = eventData;
      }
      setActiveEvent(false);
    } else {
      const eventData = {
        user: {name:name},
        notes: notes,
        title: title,
        start_date: start,
        end_date: end,
      };
      mainDataMock.push(eventData);
    }

    setisTitleValid(true);
    closeModal();
  
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setFormValues(initialEvent);
    setActiveEvent(false);
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        className="modal"
        overlayClassName="modal-fondo"
      >
        <h1>{!activeEvent ? 'Form' : 'Edit'}</h1>
        <hr />

        <form className="container" onSubmit={handleSubmitForm}>
          <div className="form-group">
            <label>Start date and time</label>
            <DateTimePicker
              className="form-control"
              onChange={handleStartDateChange}
              value={dateStart}
              format="y-MM-dd h:mm:ss a"
              amPmAriaLabel="Select AM/PM"
            />
          </div>

          <div className="form-group">
            <label>End date and time</label>
            <DateTimePicker
              className="form-control"
              onChange={handleEndDateChange}
              value={dateEnd}
              format="y-MM-dd h:mm:ss a"
              amPmAriaLabel="Select AM/PM"
              minDate={dateStart}
            />
          </div>

          <hr />

          <div className="form-group">
            <label> Title and Notes</label>
            <input
              type="text"
              className={`form-control ${!isTitleValid && 'is-invalid'}`}
              placeholder="
event title"
              name="title"
              value={title}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <small id="emailHelp" className="form-text text-muted">
              A short description
            </small>
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="note"
              rows={5}
              name="notes"
              value={notes}
              onChange={handleInputChange}
            ></textarea>
            <small id="emailHelp" className="form-text text-muted">
              Additional Information
            </small>
          </div>

          <div className="form-group">
            <input
              type="text"
              className={`form-control ${!isTitleValid && 'is-invalid'}`}
              placeholder="your name"
              name="name"
              value={name}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <small id="emailHelp" className="form-text text-muted">
              Name
            </small>
          </div>

          <button type="submit" className="btn btn-outline-primary btn-block">
            <i className="far fa-save"></i>
            <span> Submit</span>
          </button>
        </form>
      </Modal>
    </>
  );
};

export default CalendarModal;
