import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { postArticleCreate, setArticleList } from "../actions";
import "./article.css";
import { Form, Input, Button, DatePicker, Switch } from "antd";

const { TextArea } = Input;

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

function ArticleCreate(props) {
  const { postArticleCreate, article, setArticleList } = props;

  useEffect(() => {
    postArticleCreate();
  }, []);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    postArticleCreate(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const back = () => {
    setArticleList(true);
  };

  return (
    <div id="article">
      <a onClick={back}>Back</a>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input title!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Author"
          name="author"
          rules={[
            {
              required: true,
              message: "Please input Author!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Is Publish">
          <Switch />
        </Form.Item>
        <Form.Item
          label="Publish Date"
          name="publish_date"
          rules={[
            {
              required: true,
              message: "Please input Date!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Content"
          name="article_content"
          rules={[
            {
              required: true,
              message: "Please input Content!",
            },
          ]}
        >
          <TextArea rows={8} />
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
    article: state.article,
  };
};

export default connect(null, { postArticleCreate, setArticleList })(
  ArticleCreate
);
