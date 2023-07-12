// import axios from 'axios';
// import { useState, useEffect } from 'react';

// const BASE_URL = import.meta.env.VITE_DB_URL;
// const API = () => {
//   const [mainData, setMainData] = useState([]);
//   const searchMainData = () => {
//     axios
//       .get(`${BASE_URL}api/events`)
//       .then((response) => {
//         setMainData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const [salesmanTrip, setSalesmanTrip] = useState([]);
//   const salesmanTripF = () => {
//     axios
//       .get(`${BASE_URL}servertwo`)
//       .then((response) => {
//         setSalesmanTrip(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//     const [receiveEvent, setReceiveEvent] = useState([]);
//     const receiveEventF = () => {
//       axios
//         .get(`${BASE_URL}receive`)
//         .then((response) => {
//           setReceiveEvent(response.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     };

//   useEffect(() => {
//     searchMainData();
//     salesmanTripF();
//     receiveEventF()
//     const intervalId = setInterval(() => {
//       searchMainData();
//     }, 15000);
//     return () => clearInterval(intervalId);
//   }, []);

//   return { mainData, salesmanTrip,receiveEvent };
// };

// export default API;
