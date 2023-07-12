'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/eventRoutes');
const configServer2 = require('./sqlServer2');
let mssql = require('./mssql-connection-pooling');
const utils = require('./data/utils');
const sql = require('mssql');

const app = express();

const receiveEvent = require('./routes/receiveRoutes');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api', eventRoutes.routes);
app.use('/receive',receiveEvent)


app.get('/servertwo', async (req, res)=>{
  try {
    const sqlPool2 = await mssql.GetCreateIfNotExistPool(configServer2);
    let request2 = new sql.Request(sqlPool2);
    const loadQ = await utils.loadSqlQueries('events');
    const mainInfoQuery = await loadQ.salesmanTrip.replace(
      '${req.query.descrip}',
      req.query.descrip
    );
    const result2 = await request2.query(mainInfoQuery);
    const mergedResults = [...result2.recordset];
    if (req.query.descrip) {
      const descrips = req.query.descrip;
      const result = mergedResults.filter(
        (obj) => obj.descrip?.trim().toLowerCase() === descrips
      );

      if (result) {
        res.send(result);
      } else {
        res.status(404).send('Object not found');
      }
    } else {
      res.send(mergedResults);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
})


app.listen(8085, () => {
  console.log('app listening on url http://localhost:' + 8085);
});
