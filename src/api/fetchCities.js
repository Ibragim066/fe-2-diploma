// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     status: "idle",
//     error: "",
//     items: {name: '', _id: 0},
//     response: {
//         status: false,
//     },
// };

export  async function fetchCities(name) {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}routes/cities?name=${name}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
}

// export const fetchCities = createAsyncThunk(
//     "cities/fetchCities",
//     async (name) => {
//         const response = await fetch(`${process.env.REACT_APP_SERVER_URL}routes/cities?name=${name}`);
        
//         if (!response.ok) {
//             throw new Error(response.statusText);
//         }
//         const data = await response.json();
//         return data;
//         // console.log(data);
        
//     }
// );

// const fetchCitiesSlice = createSlice({
//     name: "cities",
//     initialState,
//     reducers: {
//         // getId: (state, action) => {
//         //     const city = state.items;
//         //     return state.items._id;
//         // }
//     },
//     extraReducers: (builder) => {
//         builder
//           .addCase(fetchCities.pending, (state) => {
//             state.status = "pending";
//           })
//           .addCase(fetchCities.fulfilled, (state, action) => {
//             state.status = "success";
//             state.items = action.payload;
             
//           })
//           .addCase(fetchCities.rejected, (state, action) => {
//             state.status = "error";
//             state.error = String(action.error.message);
//           });
//       },
// });

//  export const {getId} = fetchCitiesSlice.actions;
// export default fetchCitiesSlice.reducer;