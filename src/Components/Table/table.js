import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./../../index.css";
import { Table, Tag, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getFormularyData } from "../../Redux/Formulary/formularySlice";

const HomeTable = () => {
  const dispatch = useDispatch();
  const [tableContent, setTableContent] = useState([]);
  const columns = [
    {
      title: "Name",
      dataIndex: "GenericName",
    },
    {
      title: "Drud ID",
      dataIndex: "DrugID",
    },

    {
      title: "InsertedAt",
      dataIndex: "InsertedAt",
    },
    {
      title: "InsertedBy",
      dataIndex: "InsertedBy",
    },
    {
      title: "NZFURL",
      dataIndex: "NZFURL",
    },
    {
      title: "NZULMId",
      dataIndex: "NZULMId",
    },
    {
      title: "Routes",
      dataIndex: "Routes",
    },
    {
      title: "IsActive",
      dataIndex: "IsActive",
    },
    {
      title: "IsSA",
      dataIndex: "IsSA",
    },
    {
      title: "IsSection29",
      dataIndex: "IsSection29",
    },
    {
      title: "IsSubsidy",
      dataIndex: "IsSubsidy",
    },

    {
      title: "Total Records",
      dataIndex: "TotalRecords",
    },
    {
      title: "Total Records",
      dataIndex: "Classification",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  useEffect(async () => {
    let tableData = await dispatch(getFormularyData());
    setTableContent(JSON.parse(JSON.parse(tableData.payload)));
    console.log("TABLE DATAAAAAAAAAAAAAAAAAAAAAAAAAAA", tableContent.payload);
  }, []);

  return (
    <Table className="table" columns={columns} dataSource={tableContent} />
  );
};

export default HomeTable;
