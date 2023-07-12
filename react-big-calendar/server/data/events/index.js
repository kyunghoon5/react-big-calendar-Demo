'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEvents = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('events');
    const eventsList = await pool.request().query(sqlQueries.eventslist);

    return eventsList.recordset.map((obj) => {
      return {
        id: obj.id,
        title: obj.title,
        notes: obj.notes,
        start: obj.start_date,
        end: obj.end_date,
        user: {
          name: obj.user_name,
        },
      };
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getById = async (eventId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('events');
    const event = await pool
      .request()
      .input('eventId', sql.Int, eventId)
      .query(sqlQueries.eventbyId);
    return event.recordset;
  } catch (error) {
    return error.message;
  }
};

const creatEvent = async (eventdata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('events');
    const insertEvent = await pool
      .request()
      .input('user_name', sql.NVarChar(255), eventdata.user_name)
      .input('notes', sql.NVarChar(255), eventdata.notes)
      .input('title', sql.NVarChar(255), eventdata.title)
      .input('start_date', sql.DateTime, eventdata.start_date)
      .input('end_date', sql.DateTime, eventdata.end_date)
      .query(sqlQueries.createEvent);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const updateEvent = async (eventId, data) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('events');
    const update = await pool
      .request()
      .input('eventId', sql.Int, eventId)
      .input('user_name', sql.NVarChar(255), data.user_name)
      .input('notes', sql.NVarChar(255), data.notes)
      .input('title', sql.NVarChar(255), data.title)
      .input('start_date', sql.DateTime, data.start_date)
      .input('end_date', sql.DateTime, data.end_date)

      .query(sqlQueries.updateEvent);
    return update.recordset;
  } catch (error) {
    return error.message;
  }
};

const deleteEvent = async (eventId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('events');
    const deleteEvent = await pool
      .request()
      .input('eventId', sql.Int, eventId)
      .query(sqlQueries.deleteEvent);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getEvents,
  getById,
  creatEvent,
  updateEvent,
  deleteEvent,
};
