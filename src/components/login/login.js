import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./login.css";
import { Form, Input, Button, message, Row, Col } from "antd";
import { postLogin } from "../actions";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};

function Login(props) {
  const { postLogin, login, postLoginError } = props;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    postLogin(values);
  };

  useEffect(() => {
    if (login?.data?.result?.status === 200) {
      localStorage.setItem("login_id", login?.data?.content?.login_id);
      localStorage.setItem("email", login?.data?.content?.email);
      return props.history.push("/article");
    }
    if (login?.data?.result?.status === 445) {
      message.error("Login Failed, Please try again later!");
    }
    if (login?.postLoginError?.response?.status) {
      message.error(login?.postLoginError?.response?.statusText);
    }
  }, [login]);

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div id="login">
      <h2>Login</h2>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
      <Row>
        <Col offset={8}>
          Don’t have an account? <a href="./register">Sign up</a>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

export default {
  component: connect(mapStateToProps, { postLogin })(Login),
};
