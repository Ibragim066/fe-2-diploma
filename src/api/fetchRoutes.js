// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     status: "idle",
//     error: "",
//     data: {
//         totalCount: 0,
//         items: [],
//     },
// };

export async function fetchUrlRoutes(params) {
    const url = new URL(`${process.env.REACT_APP_SERVER_URL}routes`);
        Object.entries(params).forEach((item) => url.searchParams.append(item[0], item[1]));
        console.log(url, params);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response;
}

async function fetchLastRoutes() {
    const url = `${process.env.REACT_APP_SERVER_URL}routes/last`;
    const response = await fetch(url);
    if (!response.ok) {
            throw new Error(response.statusText);
        }
    //console.log(response);
    return response;
}
// export const fetchUrlRoutes = createAsyncThunk(
//     "url/fetchUrlRoutes",
//     async (params) => {
//         let url = new URL(`${process.env.REACT_APP_SERVER_URL}routes`);
//         Object.entries(params).forEach((item) => url.searchParams.append(item[0], item[1]));
//         console.log(url, params);
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(response.statusText);
//         }
//         console.log(response);
//         return response.json();
//     }
// );

export async function fetchRoutes(setTrainInfo, params) {
    const {
        fromCityId,
        toCityId,
        startDate,
        endDate,
        limit,
        offset,
        sort,
        haveFirstClass,
        haveSecondClass,
        haveThirdClass,
        haveFourthClass,
        haveWifi,
        haveAirConditioning,
        haveExpress,
        priceFrom,
        priceTo,
        startDepartureHourFrom,
        startDepartureHourTo,
        startArrivalHourFrom,
        startArrivalHourTo,
        endDepartureHourFrom,
        endDepartureHourTo,
        endArrivalHourFrom,
        endArrivalHourTo,
    } = params;

    const departureTrainOpt = {
        from_city_id: fromCityId,
        to_city_id: toCityId,
        //date_start: startDate,
        limit,
        offset,
        sort,   
    };
    
    const arrivalTrainOpt = {
        from_city_id: fromCityId,
        to_city_id: toCityId,
        //date_start_arrival: endDate,
        limit,
        offset,
        sort,    
    };

    //filters

    if (startDate) {
        departureTrainOpt.date_start = startDate;
    }

    if (endDate) {
        arrivalTrainOpt.date_start_arrival = endDate;
    }

    if (haveFirstClass) {
        departureTrainOpt.have_first_class = true;
        arrivalTrainOpt.have_first_class = true;
    }

    if (haveSecondClass) {
        departureTrainOpt.have_second_class = true;
        arrivalTrainOpt.have_second_class = true;
    }

    if (haveThirdClass) {
        departureTrainOpt.have_third_class = true;
        arrivalTrainOpt.have_third_class = true;
    }

    if (haveFourthClass) {
        departureTrainOpt.have_fourth_class = true;
        arrivalTrainOpt.have_fourth_class = true;
    }

    if (haveWifi) {
        departureTrainOpt.have_wifi = true;
        arrivalTrainOpt.have_wifi = true;
    }
    
    if (haveAirConditioning) {
        departureTrainOpt.have_air_conditioning = true;
        arrivalTrainOpt.have_air_conditioning= true;
    }
    
    if (haveExpress) {
        departureTrainOpt.is_express = true;
        arrivalTrainOpt.is_express = true;
    }

    if (priceFrom) {
        departureTrainOpt.price_from = priceFrom;
        arrivalTrainOpt.price_from = priceFrom;
    }

    if (priceTo) {
        departureTrainOpt.price_to = priceTo;
        arrivalTrainOpt.price_to = priceTo;
    }

    if (startDepartureHourFrom) {
        departureTrainOpt.start_departure_hour_from = startDepartureHourFrom;
        //arrivalTrainOpt.start_departure_hour_from = startDepartureHourFrom;
    }

    if (startDepartureHourTo) {
        departureTrainOpt.start_departure_hour_to = startDepartureHourTo;
        //arrivalTrainOpt.start_departure_hour_to = startDepartureHourTo;
    }

    if (startArrivalHourFrom) {
        departureTrainOpt.start_arrival_hour_from = startArrivalHourFrom;
        //arrivalTrainOpt.start_arrival_hour_from = startArrivalHourFrom;
    }

    if (startArrivalHourTo) {
        departureTrainOpt.start_arrival_hour_to = startArrivalHourTo;
        //arrivalTrainOpt.start_arrival_hour_to = startArrivalHourTo;
    }

    if (endDepartureHourFrom) {
        //departureTrainOpt.start_arrival_hour_to = endDepartureHourFrom;
        arrivalTrainOpt.end_departure_hour_from = endDepartureHourFrom;
    }

    if (endDepartureHourTo) {
        //departureTrainOpt.start_arrival_hour_to = endDepartureHourFrom;
        arrivalTrainOpt.end_departure_hour_to = endDepartureHourTo;
    }

    if (endArrivalHourFrom) {
        //departureTrainOpt.start_arrival_hour_to = endDepartureHourFrom;
        arrivalTrainOpt.end_arrival_hour_from = endArrivalHourFrom;
    }

    if (endArrivalHourTo) {
        //departureTrainOpt.start_arrival_hour_to = endDepartureHourFrom;
        arrivalTrainOpt.end_arrival_hour_to = endArrivalHourTo;
    }

    
    let response;
    let departureTrainInfo;
    let arrivalTrainInfo;
    let lastRoutes;

    response = await fetchUrlRoutes(departureTrainOpt);
    try {
        departureTrainInfo = await response.json();
        console.log(departureTrainInfo)
    } catch (e) {
        console.log(e);
            return false;
        }
    
    response = await fetchUrlRoutes(arrivalTrainOpt);
        try {
            arrivalTrainInfo = await response.json();
             console.log(arrivalTrainInfo)
        } catch (e) {
            console.log(e);
             return false;
         }

    response = await fetchLastRoutes();
        try {
         lastRoutes = await response.json();
        } catch (e) {
            return false;
        }
    
    const trainsInfo = {
            params,
            departureTrainInfo,
            arrivalTrainInfo,
            lastRoutes
        };
        
        console.log(trainsInfo);
        setTrainInfo(trainsInfo);
        return true;
}
    
        
// const fetchRoutesSlice = createSlice({
//     name: "url",
//     initialState,
//     extraReducers: (builder) => {
//         builder
//           .addCase(fetchRoutes.pending, (state) => {
//             state.status = "pending";
//           })
//           .addCase(fetchRoutes.fulfilled, (state, action) => {
//             state.status = "success";
//             state.data.totalCount = action.payload.total_count;
//             state.data.items = [...action.payload.items].map((el) => [el, el]);
//             console.log('success');
//           })
//           .addCase(fetchRoutes.rejected, (state, action) => {
//             state.status = "error";
//             state.error = String(action.error.message);
//           });
//       },
// });

// export default fetchRoutesSlice.reducer;