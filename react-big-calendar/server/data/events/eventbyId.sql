/****** Script for SelectTopNRows command from SSMS  ******/
SELECT [id]
      ,[user_name]
      ,[notes]
      ,[title]
      ,[start_date]
      ,[end_date]
  FROM [dbo].[calendar]
  where [id] = @eventId