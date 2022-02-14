import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const FORMULARY_LOOKUPS_URI =
  "https://apigateway-dev.azurewebsites.net/LoadFormularyLookups?DrugID=0";

const initialState = {
  Classification: [],
  Routes: [],
  Approved_Dosing_types: [],
  DosingTypes: [],
  loading: false,
  UOM: [],
  errors: {},
  DoseFrequency: [],
  PrescribingUnit: [],
};

export const getFormularyLookups = createAsyncThunk(
  "getFormularyLookups",
  async (state, action) => {
    console.log("LOOK UPS FIRED");

    const RequestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjQ0ODI2NzY5LCJleHAiOjE2NDQ4Mjg1NjksImlhdCI6MTY0NDgyNjc2OX0.kT_DCb8jE-6T6YU70eYggWKAUFwLsPVSM2is2XeVksA",
      },
    };

    let response = await fetch(FORMULARY_LOOKUPS_URI, RequestOptions);
    response = await response.text();
    let res = JSON.parse(JSON.parse(response));
    console.log("RESP", res);
    return res;
  }
);

export const FormularyLookupSlice = createSlice({
  name: "getFormularyLookups",
  initialState,
  extraReducers: {
    [getFormularyLookups.pending]: (state) => {
      state.loading = true;
    },
    [getFormularyLookups.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.Classification = payload.Classification;
      state.Routes = payload.Routes;
      state.DosingTypes = payload.DosingTypes;
      state.UOM = payload.UOM;
      state.DoseFrequency = payload.DoseFrequency;
      state.PrescribingUnit = payload.PrescribingUnit;
    },
    [getFormularyLookups.rejected]: (state) => {
      state.loading = false;
      state.errors = "Some Errors Occured Data is rejected";
    },
  },
});

export default FormularyLookupSlice.reducer;
