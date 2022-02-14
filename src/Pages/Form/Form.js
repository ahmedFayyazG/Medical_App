import React, { Component, useEffect, useState } from "react";
import SelectDropDown from "../../Components/SelectDropDown/selectDropDown";
//import "../../../../node_modules/antd/dist/antd.css";
import "../../../node_modules/antd/dist/antd.css";

import {
  Table,
  Row,
  Col,
  Button,
  Typography,
  Radio,
  Select,
  Input,
  Card,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getFormularyLookups } from "../../Redux/Formulary/formularyLookups";
import SmallTable from "../../Components/Table/Smalltable";
const { Title } = Typography;
const { Option } = Select;
const Form = () => {
  const dispatch = useDispatch();
  const [classfication, setClassification] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [approved_Dosing_types, setApproved_Dosing_types] = useState([]);
  const [dosingTypes, setDosingTypes] = useState([]);
  const [uOM, setUOM] = useState([]);
  const [prescribingUnit, setPrescribingUnit] = useState([]);

  const {
    Classification,
    Routes,
    Approved_Dosing_types,
    DosingTypes,
    UOM,
    DoseFrequency,
    PrescribingUnit,
  } = useSelector((state) => state.FormularyLookups);

  useEffect(() => {
    dispatch(getFormularyLookups());
    setClassification(Classification);
    setRoutes(Routes);
    setApproved_Dosing_types(Approved_Dosing_types);
    setDosingTypes(DosingTypes);
    setUOM(UOM);
    setPrescribingUnit(PrescribingUnit);
  }, []);
  return (
    <div style={{ padding: "10px" }}>
      <Row gutter={[40, 2]}>
        <Col span={8}>
          <Title
            level={5}
            style={{
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "bolder",
              margin: "5px",
            }}
          >
            Generic Name
          </Title>
          <Input></Input>

          <Title
            level={5}
            style={{
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "bolder",
              margin: "5px",
            }}
          >
            Classification
          </Title>

          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            defaultValue={Classification[1]}
            // onChange={}
          >
            {Classification?.map((classi, c) => (
              <Option value={classi.ClassificationID} key={c}>
                {classi?.Classification}
              </Option>
            ))}
          </Select>
          <Title
            level={5}
            style={{
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "bolder",
              margin: "5px",
            }}
          >
            Approved Routes
          </Title>
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            defaultValue={Classification[1]}
            // onChange={}
          >
            {Routes?.map((R, c) => (
              <Option value={R.RouteID} key={c}>
                {R?.Route}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={8}>
          <Title
            level={5}
            style={{
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "bolder",
              margin: "5px",
            }}
          >
            Brand/Trade Name
          </Title>
          <Input></Input>

          <Row>
            <Col xs={24} xl={12}>
              <Title
                level={5}
                style={{
                  textAlign: "left",
                  fontSize: "14px",
                  fontWeight: "bolder",
                  margin: "5px",
                }}
              >
                Strenght
              </Title>
              <Input placeholder="Enter the medical Strenght" />
            </Col>
            <Col xs={24} xl={12}>
              <Title
                level={5}
                style={{
                  textAlign: "left",
                  fontSize: "14px",
                  fontWeight: "bolder",
                  margin: "5px",
                }}
              >
                UOM
              </Title>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Select UOM"
                defaultValue={[]}
                // onChange={}
              >
                {UOM?.map((classi, c) => (
                  <Option value={classi.UOMID} key={c}>
                    {classi?.UOM}
                  </Option>
                ))}
              </Select>
            </Col>
          </Row>
          <Title
            level={5}
            style={{
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "bolder",
              margin: "5px",
            }}
          >
            Approved Dosing/Types
          </Title>
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Select DosingType"
            defaultValue={[]}
            // onChange={}
          >
            {DosingTypes?.map((classi, c) => (
              <Option value={classi.DosingTypeID} key={c}>
                {classi?.DosingType}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={8}>
          <Title
            level={5}
            style={{
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "bolder",
              margin: "5px",
            }}
          >
            Form
          </Title>

          <Input placeholder="Tablet uncoated" />

          <div style={{ height: "20px" }}>
            <Card
              bordered={false}
              style={{ width: 150, height: "100px" }}
            ></Card>
          </div>
        </Col>
        <Col span={16}>
          <div className="toffee">
            <Radio.Group
              defaultValue="a"
              buttonStyle="solid"
              style={{ width: "100%", margin: "20px" }}
              size="large"
              className="toffee"
            >
              <Radio.Button value="a">Active</Radio.Button>
              <Radio.Button value="b">Light Sensitive</Radio.Button>
              <Radio.Button value="c">Absorb To Plastic</Radio.Button>
              <Radio.Button value="d">Cumulative Dose Tracking</Radio.Button>
            </Radio.Group>
          </div>
        </Col>
        <Col span={24}>
          <Title
            level={5}
            style={{
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "bolder",
              margin: "5px",
            }}
          >
            Maximum Dose
          </Title>
        </Col>
      </Row>
      <Row gutter={[5, 3]}>
        <Row>
          <Col md={40} xl={12} style={{ padding: "2px" }}>
            <Input placeholder="Enter the Max Dose" />
          </Col>
          <Col md={40} xl={12} style={{ padding: "2px" }}>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Select Unit"
              defaultValue={[]}
              // onChange={}
            ></Select>
          </Col>
          <Col md={30} xl={12} style={{ padding: "2px" }}>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Select Frequency"
              defaultValue={[]}
              // onChange={}
            >
              {DoseFrequency?.map((classi, c) => (
                <Option value={classi.DoseFrequencyID} key={c}>
                  {classi?.DoseFrequency}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Form;
