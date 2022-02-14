import "./App.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import React, { Component, useState } from "react";
import LoginPage from "./Pages/LoginPage/loginPage";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/dashboardPage";
import ProtectedRoute from "./Helpers/protectedRoutes";
import Form from "./Pages/Form/Form";
import Layoutt from "./Pages/Layout/layout";
import LayoutForm from "./Pages/Layout/layoutForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <Layoutt />
              </ProtectedRoute>
            }
          />

          <Route path="/form" element={<LayoutForm />} />

          {/* <Route
            path="*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
