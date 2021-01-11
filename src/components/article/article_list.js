import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setArticleCreate, setArticleShow, setArticleEdit } from "../actions";
import "./article.css";
import { Button, Row, Col, Table, Tag, Space, Popconfirm, Spin } from "antd";

function ArticleList(props) {
  const {
    article,
    setArticleCreate,
    setArticleShow,
    setArticleEdit,
    article: { isArticleListPending, list, getArticleListError },
  } = props;
  const [dataSource, setDataSource] = useState(null);

  if (isArticleListPending) {
    return <Spin tip="Loading..." />;
  }

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "266px",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Views Count",
      dataIndex: "views_count",
      key: "views_count",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Publish Date",
      dataIndex: "publish_date",
      key: "publish_date",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a onClick={callEditScreen}> Edit | </a>
          <a onClick={callShowScreen}> Show | </a>
        </Space>
      ),
    },
    {
      render: (_, record) =>
        list?.content?.article_list.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.article_id)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const callEditScreen = () => {
    setArticleEdit(true);
  };

  const callShowScreen = () => {
    setArticleShow(true);
  };
  const handleDelete = (key) => {
    const dataSource = [...list?.content?.article_list];
    setDataSource(dataSource.filter((item) => item.article_id !== key));
  };

  const callNew = () => {
    setArticleCreate(true);
  };

  return (
    <div id="article-list">
      <Row className="article-details">
        <Col span={8}>{list?.result?.count} articles</Col>
        <Col span={8} offset={8} onClick={callNew}>
          New
        </Col>
      </Row>
      <Row className="article-list">
        <Table columns={columns} dataSource={list?.content?.article_list} />
      </Row>
    </div>
  );
}

export default connect(null, {
  setArticleCreate,
  setArticleShow,
  setArticleEdit,
})(ArticleList);
