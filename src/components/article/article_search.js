import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setArticleList, getArticleSearchList } from "../actions";
import "./article.css";
import { Button, Row, Col, Table, Tag, Space, Popconfirm, Spin } from "antd";

function ArticleSearchList(props) {
  const {
    article,
    setArticleList,
    getArticleSearchList,
    article: {
      isGetArticleSearchListPending,
      searchList,
      getArticleSearchListError,
    },
  } = props;

  const [dataSource, setDataSource] = useState(null);

  if (isGetArticleSearchListPending) {
    return <Spin tip="Loading..." />;
  }

  const columns = [
    {
      title: "c",
      dataIndex: "title",
      key: "title",
      width: "266px",
      render: (text) => <a>{text}</a>,
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
  ];

  const back = () => {
    setArticleList(true);
  };

  return (
    <div id="article-search">
      <a onClick={back}>Back</a>
      {searchList?.content?.article_list.map((data, index) => (
        <Row>
          <Col span={4}>
            <h3>{data.title}</h3>
          </Col>
          <Col span={6} offset={10}>
            {data.publish_date} by {data.author}
          </Col>
        </Row>
      ))}
    </div>
  );
}
export default connect(null, { setArticleList, getArticleSearchList })(
  ArticleSearchList
);
