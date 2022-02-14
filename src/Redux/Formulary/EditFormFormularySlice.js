import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  loadDrugByID: [],
  loadLookupsByID: [],
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (state, action) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjQ0ODI4NDI1LCJleHAiOjE2NDQ4MzAyMjUsImlhdCI6MTY0NDgyODQyNX0.qLXwVrXF4HkkZIBRiFAtPETt7xb3-6Bg4FHk4w5FHfA",
      },
    };

    let data = await fetch(
      "https://apigateway-dev.azurewebsites.net/LoadFormularyDrugs?PageNo=1&PageSize=20&MedicineName=",
      requestOptions
    );
    data = await data.text();
    // action.payload.loadDrugByID=data
    return data;
  }
);
export const loadDrugByID = createAsyncThunk(
  "counter/fetchCount",
  async (ID) => {
    console.log("statee:", ID);
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjQ0ODI4NDI1LCJleHAiOjE2NDQ4MzAyMjUsImlhdCI6MTY0NDgyODQyNX0.qLXwVrXF4HkkZIBRiFAtPETt7xb3-6Bg4FHk4w5FHfA",
      },
    };

    let data = await fetch(
      "https://apigateway-dev.azurewebsites.net/LoadFormularyDrugByID?DrugID=" +
        ID,
      requestOptions
    );
    data = await data.text();

    return data;
  }
);
export const loadLookupsByID = createAsyncThunk(
  "counter/fetchCount",
  async (ID) => {
    console.log("statee:", ID);
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjQ0ODI4NDI1LCJleHAiOjE2NDQ4MzAyMjUsImlhdCI6MTY0NDgyODQyNX0.qLXwVrXF4HkkZIBRiFAtPETt7xb3-6Bg4FHk4w5FHfA",
      },
    };

    let data = await fetch(
      "https://apigateway-dev.azurewebsites.net/LoadFormularyLookups?DrugID=" +
        ID +
        "&IsSystem=0",
      requestOptions
    );
    data = await data.text();
    return data;
  }
);
export const formularySlice = createSlice({
  name: "formulary",
  initialState,
  reducers: {
    get: async (state, action) => {
      return incrementAsync(state);
    },
  },
});

export const { get } = formularySlice.actions;

export default formularySlice.reducer;
