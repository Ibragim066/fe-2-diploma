// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     status: "idle",
//     error: "",
//     response: {
//         status: false,
//     },
// };

export async function fetchSubscribe (email) {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}subscribe?email=${email}}`, {
                    method: "POST",
                    headers: { 
                    Accept: 'application/json', 
                    "Content-Type": "application/json" 
                    },
                    body: JSON.stringify({email}),
                });
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
}

// export const fetchSubscribe = createAsyncThunk(
//     "subscribe/fetchSubscribe",
//     async (email) => {
//         const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/subscribe?email=${email}}`, {
//             method: "POST",
//             headers: { 
//             Accept: 'application/json', 
//             "Content-Type": "application/json" 
//             },
//             body: JSON.stringify({email}),
//         });
//         if (!response.ok) {
//             throw new Error(response.statusText);
//         }
//         return response.json();
//     }
// );

// const subscribeSlice = createSlice({
//     name: "subscribe",
//     initialState,
//     reducers: {
//         subscribeSetIdle: (state) => {
//             state.status = "idle";
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//           .addCase(fetchSubscribe.pending, (state) => {
//             state.status = "pending";
//           })
//           .addCase(fetchSubscribe.fulfilled, (state, action) => {
//             state.status = "success";
//             state.response = action.payload;
//             console.log('success');
//           })
//           .addCase(fetchSubscribe.rejected, (state, action) => {
//             state.status = "error";
//             state.error = String(action.error.message);
//           });
//       },
// });

// export const {subscribeSetIdle} = subscribeSlice.actions;
// export default subscribeSlice.reducer;