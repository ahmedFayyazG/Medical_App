import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./../../index.css";
import { Select } from "antd";
//import "./Select.less";

const SelectDropDown = (props) => {
  //const { Option } = Select;
  const { medicine } = props;
  const medicines = medicine;
  console.log("AFTER RECIEVING PROPS", medicines);
  //   const options = [
  //     "Mango",
  //     "Tango",
  //     "Foxtrot",
  //     "Bravo",
  //     "Alpha",
  //     "Beta",
  //     "Charlie",
  //   ];

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const Purple = "#8874A9";
  return (
    <Select
      mode="multiple"
      allowClear
      style={{ width: "100%" }}
      placeholder="Please select"
      defaultValue={["FOX"]}
      onChange={handleChange}
    >
      {medicines.map((alphs, index) => {
        return (
          <Select.Option key={alphs} value={alphs}>
            {alphs}
          </Select.Option>
        );
      })}
    </Select>
  );
};

export default SelectDropDown;
