import { createContext } from 'react';

const AppContext = createContext({
    bookingStage: null,
    trainsInfo: {},
    departureTrain: null,
    arrivalTrain: null,
    seatsInfo: {},
    orderInfo: {},
  });
  
  export default AppContext;