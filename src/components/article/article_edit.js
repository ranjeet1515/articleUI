import React, { useEffect } from "react";
import { connect } from "react-redux";
import { putArticleEdit, setArticleList } from "../actions";
import moment from "moment";
import {
  Row,
  Col,
  message,
  Spin,
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

function ArticleEdit(props) {
  const {
    putArticleEdit,
    article,
    article: { isGetArticleDetailsPending, details },
    setArticleList,
    login_id,
    articleId,
  } = props;

  useEffect(() => {
    if (article?.editArticle?.result?.status === 200) {
      message.success("Article updated successfully");
    }
  }, [article?.editArticle]);

  const [form] = Form.useForm();

  if (isGetArticleDetailsPending) {
    return <Spin tip="Loading..." />;
  }

  const onFinish = (values) => {
    const payload = {
      author: values.author,
      publish_date: moment(values.publish_date).format("YYYY-MM-DD"),
      title: values.title,
      user_login_id: login_id,
      is_published: values.is_published,
      content: values.content,
    };
    putArticleEdit(articleId, payload);
  };

  const onReset = () => {
    form.resetFields();
  };

  const back = () => {
    setArticleList(true);
  };

  return (
    <div id="article-create">
      <Row clasName="header">
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
          author: details?.content?.article?.author,
          title: details?.content?.article?.title,
          content: details?.content?.article?.content,
          is_published: details?.content?.article?.is_published,
          publish_date: moment(details?.content?.article?.publish_date),
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
          <Switch defaultChecked={details?.content?.article?.is_published} />
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

export default connect(null, { putArticleEdit, setArticleList })(ArticleEdit);
