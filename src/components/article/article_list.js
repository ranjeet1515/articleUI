import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  setArticleCreate,
  setArticleShow,
  setArticleEdit,
  getArticleDetails,
  setArticleEditId,
  getArticleList,
  putArticleDelete,
  resetArticle,
} from "../actions";
import "./article.css";
import {
  Button,
  Row,
  Col,
  Table,
  Space,
  Popconfirm,
  Spin,
  message,
} from "antd";

function ArticleList(props) {
  const {
    setArticleCreate,
    setArticleShow,
    setArticleEdit,
    getArticleDetails,
    setArticleEditId,
    getArticleList,
    login_id,
    resetArticle,
    putArticleDelete,
    article: { isArticleListPending, list, deleteData },
  } = props;

  const [dataSource, setDataSource] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 8;

  useEffect(() => {
    resetArticle();
    getArticleList(login_id, pageSize, pageNumber);
  }, []);

  useEffect(() => {
    if (deleteData?.result?.status == 200) {
      message.success("Article Succesfully Deleted");
      resetArticle();
      getArticleList(login_id, pageSize, pageNumber);
    }
  }, [deleteData]);

  if (isArticleListPending && !list) {
    return <Spin tip="Loading..." />;
  }

  const getAvailableHeight = () => {
    return parseInt(window.innerHeight - 373);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "260px",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Views Count",
      dataIndex: "views_count",
      key: "views_count",
      width: "140px",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
      width: "160px",
    },
    {
      title: "Publish Date",
      dataIndex: "publish_date",
      key: "publish_date",
      width: "160px",
    },
    {
      title: "Action",
      key: "action",
      width: "220px",
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => callEditScreen(record.article_id)}> Edit</a>
          <a onClick={() => callShowScreen(record.article_id)}>Show</a>
          {list?.content?.article_list.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record.article_id)}
            >
              <a> Delete</a>
            </Popconfirm>
          ) : null}
        </Space>
      ),
    },
  ];

  const callEditScreen = (id) => {
    setArticleEdit(true);
    getArticleDetails(id);
    setArticleEditId(id);
  };

  const callShowScreen = (id) => {
    setArticleShow(true);
    getArticleDetails(id);
  };

  const handleDelete = (key) => {
    const dataSource = [...list?.content?.article_list];
    setDataSource(dataSource.filter((item) => item.article_id !== key));
    putArticleDelete(key);
  };

  const callNew = () => {
    setArticleCreate(true);
  };

  const paginationOnChange = (page, pageSize) => {
    setPageNumber(page);
    getArticleList(login_id, pageSize, page);
  };

  return (
    <div id="article-list">
      <Row className="details">
        <Col span={8}>{list?.result?.count} articles</Col>
        <Col span={2} offset={14} onClick={callNew}>
          <Button type="primary">New</Button>
        </Col>
      </Row>
      <Row className="list">
        <Table
          loading={!list?.content?.article_list}
          columns={columns}
          pagination={{
            pageSize: pageSize,
            total: list?.result?.count,
            hideOnSinglePage: true,
            onChange: paginationOnChange,
          }}
          dataSource={list?.content?.article_list}
        />
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    article: state.article,
  };
};

export default connect(mapStateToProps, {
  setArticleCreate,
  setArticleShow,
  setArticleEdit,
  getArticleDetails,
  setArticleEditId,
  getArticleList,
  putArticleDelete,
  resetArticle,
})(ArticleList);
