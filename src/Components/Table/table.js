import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./../../index.css";
import { EditOutlined } from "@ant-design/icons";
import { Table, Tag, Space } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { getFormularyData } from "../../Redux/Formulary/formularySlice";
import Form from "./../../Pages/Form/Form";
import { EditForm } from "../../Pages/Form/EditForm";
const HomeTable = () => {
  const dispatch = useDispatch();
  const [tableContent, setTableContent] = useState([]);
  const [visible, setVisible] = useState(false);
  const [edit, setEdit] = useState(null);
  const onClose = () => {
    setVisible(false);
  };

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
      title: "Action",
      key: "operation",
      render: (data) => (
        <div
          onClick={() => {
            setEdit(data);
            setVisible(true);
          }}
          style={{ cursor: "pointer" }}
        >
          <EditOutlined />
        </div>
      ),
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
  ];

  useEffect(async () => {
    let tableData = await dispatch(getFormularyData());
    setTableContent(JSON.parse(JSON.parse(tableData.payload)));
    console.log("TABLE DATAAAAAAAAAAAAAAAAAAAAAAAAAAA", tableContent.payload);
  }, []);

  return (
    <>
      <Table className="table" columns={columns} dataSource={tableContent} />
      <EditForm
        visible={visible}
        data={edit}
        onClose={() => {
          setEdit(null);
          onClose();
        }}
      />
    </>
  );
};

export default HomeTable;
