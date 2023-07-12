import React from 'react';
//공부
export const CalendarEvent = ({ event }) => {
  const { title, user } = event;
  return (
    <div>
      <span>{title}</span>
      {user && <strong> - {user.name}</strong>}
    </div>
  );
};