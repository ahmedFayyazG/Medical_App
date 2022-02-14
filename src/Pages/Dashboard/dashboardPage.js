import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeTable from "../../Components/Table/table";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const Dashboard = () => {
  const { token } = useSelector((state) => state.Login);
  const { entries } = useSelector((state) => state.Formulary);

  return (
    <div>
      <HomeTable />
    </div>
  );
};

export default Dashboard;
