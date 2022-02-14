import React, { Component } from "react";
import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./../Redux/Login_Api/loginSlice";
import FormularySlice from "./Formulary/formularySlice";
import FormularyLookupSlice from "./Formulary/formularyLookups";

const store = configureStore({
  reducer: {
    Login: loginSlice,
    Formulary: FormularySlice,
    FormularyLookups: FormularyLookupSlice,
  },
});

export default store;
