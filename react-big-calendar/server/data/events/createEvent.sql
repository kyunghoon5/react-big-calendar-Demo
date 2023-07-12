/****** Script for SelectTopNRows command from SSMS  ******/
INSERT INTO dbo.calendar (user_name, notes, title, start_date,end_date)
VALUES (@user_name, @notes, @title, @start_date, @end_date );


SELECT SCOPE_IDENTITY() AS eventId