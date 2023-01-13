import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCovidData = createAsyncThunk(
  'covid/getCovidData',
  async (arg, thunkAPI) => {
    const response =  await fetch('https://apicovidph.onrender.com/');
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
