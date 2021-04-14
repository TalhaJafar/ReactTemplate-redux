import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        loading: false,
        isPaid: false,
        error: null
    }
});

// Action creators are generated for each case reducer function


export default paymentSlice.reducer