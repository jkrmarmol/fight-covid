import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const body = {
  operationName: null,
  variables: {},
  query: "{\n  covidCaseStatus: covid_case_status {\n    active\n    all\n    asymptomatic\n    critical\n    died\n    mild\n    repatriate\n    recovered\n    severe\n    __typename\n  }\n  covidCaseLastUpdated: covid_case_last_updated {\n    updatedAt\n    __typename\n  }\n}\n"
}

export const getCovidData = createAsyncThunk(
  'covid/getCovidData',
  async (arg, thunkAPI) => {
    const response =  await fetch('https://covid-api-ph.herokuapp.com/');
    const json = await response.json();
    return json;
  }
);

const covidCaseSlices = createSlice({
  name: 'covid',
  initialState: {
    data: [],
    status: null
  },
  extraReducers: {
    [getCovidData.pending]: (state, action) => {
      state.status = 'loading...';
    },
    [getCovidData.fulfilled]: (state, action) => {
      state.status = 'ok';
      state.data = action.payload;
    },
    [getCovidData.rejected]: (state, action) => {
      state.status = 'failed!';
    }
  }
})

export default covidCaseSlices.reducer;
export const selectCovid = state => state.covid;