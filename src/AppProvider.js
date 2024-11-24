import { useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider(props) {
    const [bookingStage, setBookingStage] = useState(null);
    let trainsInfoStorage;
    let departureTrainsInfoStorage;
    let arrivalTrainsInfoStorage;
    let seatsInfoStorage;
    let orderInfoStorage;

    try {
        trainsInfoStorage = JSON.parse(localStorage.getItem("trainsInfo"));
    } catch {
        trainsInfoStorage = null;
    }

    if (!trainsInfoStorage || !trainsInfoStorage.params) {
        trainsInfoStorage = { params: {} };
    }

    const [trainsInfo, setTrainsInfo] = useState(trainsInfoStorage);

    try {
        departureTrainsInfoStorage = JSON.parse(localStorage.getItem("departureTrain"));
    } catch {
        departureTrainsInfoStorage = null;
    }

    const [departureTrain, setDepartureTrain] = useState(departureTrainsInfoStorage);

    try {
        arrivalTrainsInfoStorage = JSON.parse(localStorage.getItem("arrivalTrain"));
    } catch {
        arrivalTrainsInfoStorage = null;
    }

    const [arrivalTrain, setArrivalTrain] = useState(arrivalTrainsInfoStorage);

    try {
        seatsInfoStorage = JSON.parse(localStorage.getItem("seatsInfo"));
    } catch {
        seatsInfoStorage = null;
    }

    if (!seatsInfoStorage || !seatsInfoStorage.params) {
        seatsInfoStorage = { params: {} };
    }

    const [seatsInfo, setSeatsInfo] = useState(seatsInfoStorage);

    try {
        orderInfoStorage = JSON.parse(localStorage.getItem("orderInfo"));
    } catch {
        orderInfoStorage = {};
    }

    const [orderInfo, setOrderInfo] = useState(orderInfoStorage);

    return (
        <AppContext.Provider
          value={{
              bookingStage, setBookingStage,
              trainsInfo, setTrainsInfo,
              departureTrain, setDepartureTrain,
              arrivalTrain, setArrivalTrain,
              seatsInfo, setSeatsInfo,
              orderInfo, setOrderInfo,
          }}>
              {props.children}
          </AppContext.Provider>
    );
}