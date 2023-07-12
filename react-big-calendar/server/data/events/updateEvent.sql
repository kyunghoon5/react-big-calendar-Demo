UPDATE [dbo].[calendar]
SET [user_name]=@user_name,
    [notes]=@notes,
    [title]=@title,
    [start_date]=@start_date,
    [end_date]=@end_date
WHERE [id]=@eventId

SELECT [id]
      ,[user_name]
      ,[notes]
      ,[title]
      ,[start_date]
      ,[end_date]   
  FROM [dbo].[calendar]
  WHERE [id]=@eventId