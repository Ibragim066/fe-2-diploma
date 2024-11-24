async function fetchSeatsInfo(trainId, params) {
    const url = new URL(`${process.env.REACT_APP_SERVER_URL}routes/${trainId}/seats`);
    Object.entries(params).forEach((item) => url.searchParams.append(item[0], item[1]));
    const response = await fetch(url);
    if (!response.ok) {
            throw new Error(response.statusText);
        }
    //console.log(response);
    return response;
}

export async function fetchSeats(setSeatsInfo, params) {
    const {
        departureTrainId,
        arrivalTrainId,
        haveFirstClass,
        haveSecondClass,
        haveThirdClass,
        haveFourthClass,
        haveWifi,
        haveAirConditioning,
        haveExpress,
    } = params;

    const seatsParams = {};

    if (haveFirstClass) {
        seatsParams.have_first_class = true;
    }

    if (haveSecondClass) {
        seatsParams.have_second_class = true;
    }

    if (haveThirdClass) {
        seatsParams.have_third_class = true;
    }

    if (haveFourthClass) {
        seatsParams.have_fourth_class = true;
    }

    if (haveWifi) {
        seatsParams.have_wifi = true;
    }

    if (haveAirConditioning) {
        seatsParams.have_air_conditioning = true;
    }

    if (haveExpress) {
        seatsParams.is_express = true;
    }

    let response;
    let departureTrainSeats;
    let arrivalTrainSeats;

    response = await fetchSeatsInfo(departureTrainId, seatsParams);

    try {
        departureTrainSeats = await response.json();
    } catch (e) {
        console.log(e);
            return false;
      }
    
    response = await fetchSeatsInfo(arrivalTrainId, seatsParams);

    try {
        arrivalTrainSeats = await response.json();
    } catch (e) {
        console.log(e);
            return false;
      }

    const seatsInfo = {
        params,
        departureTrainSeats,
        arrivalTrainSeats,
    };

    setSeatsInfo(seatsInfo);
    localStorage.setItem('seatsInfo', JSON.stringify(seatsInfo));
    return true;
    
}