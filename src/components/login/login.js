import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./login.css";
import { Form, Input, Button, message } from "antd";
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
  const { postLogin, loginData, isPostLoginPending, postLoginError } = props;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    postLogin(values);
  };

  useEffect(() => {
    if (loginData?.result?.status == 200) {
      return props.history.push("/article");
    }
    if (loginData?.result?.status == 445) {
      message.error("This is an error message");
    }
  }, [loginData]);

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div id="login">
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
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
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loginData: state.login.data,
  };
};

export default {
  component: connect(mapStateToProps, { postLogin })(Login),
};
