import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  entries: [],
  loading: false,
  errors: {},
};

const FORMULARY_URI =
  "https://apigateway-dev.azurewebsites.net/LoadFormularyDrugs?PageNo=1&PageSize=20&MedicineName=";

export const getFormularyData = createAsyncThunk(
  "getFormularyData",
  async (state, action) => {
    console.log("GET DATA FIRED");
    const RequestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjQ0ODI2NzY5LCJleHAiOjE2NDQ4Mjg1NjksImlhdCI6MTY0NDgyNjc2OX0.kT_DCb8jE-6T6YU70eYggWKAUFwLsPVSM2is2XeVksA",
        // + JSON.stringify(token),
        // " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjQ0NTQxNDQzLCJleHAiOjE2NDQ1NDMyNDMsImlhdCI6MTY0NDU0MTQ0M30.d9cu7U6MkcRapVaebIJAs7sxl0KLzoC7gPkX86unP3o",
      },
    };

    let response = await fetch(FORMULARY_URI, RequestOptions);
    response = await response.text();
    return response;
  }
);

export const FormularySlice = createSlice({
  name: "getFormularyData",
  initialState,
  extraReducers: {
    [getFormularyData.pending]: (state) => {
      state.loading = true;
    },
    [getFormularyData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entries = payload;
    },
    [getFormularyData.rejected]: (state) => {
      state.loading = false;
      state.errors = "Some Errors Occured Data is rejected";
    },
  },
});

export default FormularySlice.reducer;
