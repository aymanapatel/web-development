import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";

import { apiSlice } from "../features/dogs/dogs-slice";


export const store = configureStore({
  reducer: {
    counter: counterReducer, // Automatically call combine reducers
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware); // Can cache this 
  } 
});

// Export types based on store itself
export type AppDispatch = typeof store.dispatch;

// Typescript ReturnType: Constructs a type consisting of the return type of function Type.
export type RootState = ReturnType<typeof store.getState>;
