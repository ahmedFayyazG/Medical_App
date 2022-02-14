import React, { Component, useState } from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Image,
  Typography,
  message,
  Space,
} from "antd";
import "../../../node_modules/antd/dist/antd.css";
import { loginUser } from "../../Redux/Login_Api/login_api_redux";
import { useDispatch, useSelector } from "react-redux";
import {
  loginPending,
  loginSuccess,
  loginFail,
  loginToken,
} from "./../../Redux/Login_Api/loginSlice";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

const onFinishFailed = () => {};
const onFinish = () => {};

const LoginPage = () => {
  const [state, setState] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [Token_State, setToken_State] = useState("");
  const dispatch = useDispatch();
  const { isAuth, token, isloading } = useSelector((state) => state.Login);
  const Navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
    console.log(state);
  };
  const handleLogin = async () => {
    setLoading(true);
    dispatch(loginPending());
    let loginData = await loginUser(state);
    if (loginData) {
      dispatch(loginSuccess());
      dispatch(loginToken(loginData.token));
      setToken_State(loginData.token);
      Navigate("/");
      setLoading(false);
      console.log("Logged In");
    }
    console.log(isAuth, token, isloading);
  };

  return (
    <div>
      <Row
        justify="center"
        align="middle"
        style={{ height: "100vh", backgroundColor: "rgb(140,114,172)" }}
      >
        <Col lg={{ span: 12 }}>
          <Row
            gutter={[64, 64]}
            style={{ borderRadius: "25px 0px", overflow: "hidden" }}
          >
            <Col span={12} style={{ backgroundColor: "white" }}>
              <h3>RAURAU NGAEHE</h3>
              <h5>WE CAN,I CAN</h5>,
              <Image src="/Images/medical.png" alt="my-image" preview={false} />
            </Col>
            <Col
              span={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(243,237,245)",
              }}
            >
              <Form
                style={{ width: "100%" }}
                className="flex-col-center"
                //  onFinish={handleLogin}
                onFinishFailed={onFinishFailed}
              >
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Title level={2}>Login</Title>
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your username**",
                      },
                    ]}
                  >
                    <Input
                      placeholder="UserName"
                      size="large"
                      onChange={(e) => {
                        handleInputChange("username", e.target.value);
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your password**",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Password"
                      size="large"
                      onChange={(e) => {
                        handleInputChange("password", e.target.value);
                      }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      block
                      loading={loading}
                      onClick={handleLogin}
                    >
                      Login
                    </Button>
                  </Form.Item>
                </Space>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
