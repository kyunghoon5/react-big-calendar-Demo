const trips = [
  {
   
    SalesmanName: 'TONY',
    start_dte: '2023-07-08T00:00:00.000Z',
    end_dte: '2023-07-30T00:00:00.000Z',
  },
  {
    SalesmanName: 'ANDREW',
    start_dte: '2023-07-05T00:00:00.000Z',
    end_dte: '2023-07-09T00:00:00.000Z',
  },
  {
    SalesmanName: 'MIKE',
    start_dte: '2023-06-23T00:00:00.000Z',
    end_dte: '2023-06-23T00:00:00.000Z',
  },
  {
    SalesmanName: 'DAVID',
    start_dte: '2023-06-10T00:00:00.000Z',
    end_dte: '2023-06-18T00:00:00.000Z',
  },
  {
    SalesmanName: 'LEE',
    start_dte: '2023-05-10T00:00:00.000Z',
    end_dte: '2023-05-21T00:00:00.000Z',
  },
  {
    SalesmanName: 'JOSE',
    start_dte: '2023-04-22T00:00:00.000Z',
    end_dte: '2023-04-30T00:00:00.000Z',
  },
  {
    SalesmanName: 'JAMES',
    start_dte: '2022-12-03T00:00:00.000Z',
    end_dte: '2022-12-11T00:00:00.000Z',
  },
  {
    SalesmanName: 'CHRIS',
    start_dte: '2022-03-04T00:00:00.000Z',
    end_dte: '2022-03-04T00:00:00.000Z',
  },
  {
    SalesmanName: 'JOHN',
    start_dte: '2022-01-06T00:00:00.000Z',
    end_dte: '2022-01-13T00:00:00.000Z',
  },
];

const receive = [
 
  {
    vendno: 'PKL',
    recdate: null,
    reqdate: '2023-07-31T00:00:00.000Z',
    shpdate: '2023-06-26T00:00:00.000Z',
    purdate: '2023-03-23T13:43:26.863Z',
    invno: 'PKL230900',
  },
  {
    vendno: 'RBI',
    recdate: null,
    reqdate: '2023-07-30T00:00:00.000Z',
    shpdate: '2023-06-22T00:00:00.000Z',
    purdate: '2023-03-29T16:41:41.097Z',
    invno: 'RBI2203A',
  },
  {
    vendno: 'JHK',
    recdate: null,
    reqdate: '2023-07-29T00:00:00.000Z',
    shpdate: '2023-06-26T00:00:00.000Z',
    purdate: '2022-12-05T11:31:32.410Z',
    invno: 'JHK2202B',
  },
  {
    vendno: 'BZ',
    recdate: null,
    reqdate: '2023-07-29T00:00:00.000Z',
    shpdate: '2023-06-26T00:00:00.000Z',
    purdate: '2023-01-06T10:33:40.037Z',
    invno: 'BZ2201a',
  },
  {
    vendno: 'PKL',
    recdate: null,
    reqdate: '2023-07-28T00:00:00.000Z',
    shpdate: '2023-06-26T00:00:00.000Z',
    purdate: '2023-06-28T15:25:48.790Z',
    invno: 'PKL092Yd0',
  },
  {
    vendno: 'PKL',
    recdate: null,
    reqdate: '2023-07-24T00:00:00.000Z',
    shpdate: '2023-06-12T00:00:00.000Z',
    purdate: '2023-03-23T11:55:41.270Z',
    invno: 'PKL23080         ',
  },
  {
    vendno: 'PKL',
    recdate: null,
    reqdate: '2023-07-24T00:00:00.000Z',
    shpdate: '2023-06-12T00:00:00.000Z',
    purdate: '2023-04-24T11:26:28.197Z',
    invno: 'PKL091Y0',
  },
  {
    vendno: 'RBI',
    recdate: null,
    reqdate: '2023-07-20T00:00:00.000Z',
    shpdate: '2023-06-19T00:00:00.000Z',
    purdate: '2023-04-17T15:45:44.570Z',
    invno: 'RBI2301',
  },
  {
    vendno: 'RBI',
    recdate: null,
    reqdate: '2023-07-19T00:00:00.000Z',
    shpdate: '2023-06-12T00:00:00.000Z',
    purdate: '2022-12-30T13:27:23.220Z',
    invno: 'RBI2204',
  },
  {
    vendno: 'PKL',
    recdate: null,
    reqdate: '2023-07-17T00:00:00.000Z',
    shpdate: '2023-06-05T00:00:00.000Z',
    purdate: '2023-03-22T13:21:40.880Z',
    invno: 'PKL23070',
  },
  {
    vendno: 'PKL',
    recdate: '2023-07-10T00:00:00.000Z',
    reqdate: '2023-07-10T00:00:00.000Z',
    shpdate: '2023-05-29T00:00:00.000Z',
    purdate: '2023-02-16T14:54:52.380Z',
    invno: 'PKL23060',
  },
  {
    vendno: 'YUI',
    recdate: '2023-07-03T00:00:00.000Z',
    reqdate: '2023-07-03T00:00:00.000Z',
    shpdate: '2023-05-20T00:00:00.000Z',
    purdate: '2023-03-23T09:15:49.623Z',
    invno: 'YUI2213A',
  },
  {
    vendno: 'PKL',
    recdate: '2023-07-03T00:00:00.000Z',
    reqdate: '2023-07-03T00:00:00.000Z',
    shpdate: '2023-05-22T00:00:00.000Z',
    purdate: '2023-02-13T17:03:34.860Z',
    invno: 'PKL23050',
  },
  
];

const mock = [
  {
    id: 50,
    title: 'event',
    notes: 'event notes',
    start: '2023-06-19T21:00:00.843Z',
    end: '2023-06-23T22:00:00.843Z',
    user: {
      name: 'JUN',
    },
  },
  {
    id: 54,
    title: 'Holiday',
    notes: '',
    start: '2023-07-04T04:00:00.000Z',
    end: '2023-07-05T04:00:00.000Z',
    user: {
      name: 'Independence Day',
    },
  },
  {
    id: 55,
    title: 'Test Title',
    notes: '',
    start: '2023-07-12T04:00:00.000Z',
    end: '2023-07-12T04:00:00.000Z',
    user: {
      name: 'Test Name',
    },
  },
];

export default {mock,receive,trips};