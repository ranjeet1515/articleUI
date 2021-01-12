import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./register.css";
import { Form, Input, Button, message } from "antd";
import { postRegister } from "../actions";

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

function Register(props) {
  const { postRegister, registerData } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    if (registerData?.result?.status === 200) {
      message.success("Registered succesfully");
      return props.history.push("/login");
    }
    if (registerData?.result?.status === 403) {
      message.error("Email Id already exist");
    }
  }, [registerData]);

  const onFinish = (values) => {
    if (values.password === values.confirm_password) {
      const payload = {
        email: values.email,
        password: values.password,
      };
      postRegister(payload);
    } else {
      message.error("password does not match");
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div id="register">
      <h2>Register</h2>
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
        <Form.Item
          label="Confirm Password"
          name="confirm_password"
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
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
    registerData: state.register.data,
  };
};

export default {
  component: connect(mapStateToProps, { postRegister })(Register),
};
