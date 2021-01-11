import React from "react";
import { connect } from "react-redux";
import "./register.css";
import { Form, Input, Button } from "antd";
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
  const { postRegister } = props;

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    postRegister(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div id="register">
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

export default {
  component: connect(null, { postRegister })(Register),
};
