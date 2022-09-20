import { configureStore } from "@reduxjs/toolkit";
import covidReducer from './Features/CovidCaseSlices';

export const store = configureStore({
  reducer: {
    covid: covidReducer
  }
})