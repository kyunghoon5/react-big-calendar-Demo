import React from 'react'
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_DB_URL;

import mock from '../mock';
const DeleteEvent = ({
  activeEvent,  
  setActiveEvent,  
}) => {
   const mainDataMock = mock.mock;

const handleDelete = async () => {

  try {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${activeEvent.title}" by ${activeEvent.user.name}?`
    );
    if (confirmed) {
    const index = mainDataMock.findIndex(
      (event) => event.user.name === activeEvent.user.name
    );
    if (index !== -1) {
      mainDataMock.splice(index, 1);
    }

      setActiveEvent(false);
  
    }
  } catch (error) {
    console.error(error);
  }
};
  return (
    <button
      className="btn btn-danger fab-danger"
      onClick={() => handleDelete(event)}
    >
      <i className="fas fa-trash"></i>
      <span> Delete Event </span>
    </button>
  );
};

export default DeleteEvent