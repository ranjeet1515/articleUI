import React, { useEffect } from "react";
import { connect } from "react-redux";
import { postArticleCreate, setArticleList } from "../actions";
import moment from "moment";
import {
  Row,
  Col,
  message,
  Form,
  Input,
  Button,
  DatePicker,
  Switch,
} from "antd";
import "./article.css";

const { TextArea } = Input;

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 16,
  },
};

function ArticleCreate(props) {
  const { postArticleCreate, article, setArticleList, login_id } = props;

  useEffect(() => {
    if (article?.newArticle?.result?.status === 200) {
      message.success("Article created successfully");
    }
  }, [article]);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const payload = {
      author: values.author,
      publish_date: moment(values.publish_date).format("YYYY-MM-DD"),
      title: values.title,
      user_login_id: login_id,
      is_published: values.is_published,
      content: values.content,
    };
    postArticleCreate(payload);
  };

  const onReset = () => {
    form.resetFields();
  };

  const back = () => {
    setArticleList(true);
  };

  return (
    <div id="article-create">
      <Row className="header">
        <Col span={4}>
          <h2>New Article</h2>
        </Col>
        <Col span={1} offset={19}>
          <a onClick={back}>Back</a>
        </Col>
      </Row>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        initialValues={{
          is_published: false,
        }}
      >
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
        <Form.Item label="Is Published" name="is_published">
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
          name="content"
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

export default connect(null, { postArticleCreate, setArticleList })(
  ArticleCreate
);
