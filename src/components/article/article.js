import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./article.css";
import { Button, Row, Col, Table, Tag, Space, Popconfirm, Input } from "antd";
import { getArticleList, setArticleSearch } from "../actions";
import ArticleShow from "./article_show";
import ArticleList from "./article_list";
import ArticleCreate from "./article_create";
import ArticleEdit from "./article_edit";
import ArticleSearch from "./article_search";

const { Search } = Input;

function Article(props) {
  const {
    getArticleList,
    article,
    uiData,
    loginData,
    setArticleSearch,
  } = props;

  useEffect(() => {
    getArticleList();
  }, []);

  const logOut = () => {};

  const onSearch = (value) => {
    setArticleSearch(true);
  };
  return (
    <div id="article">
      <Row className="login-detail">
        <Col span={2} offset={16} onClick={logOut}>
          <a href="/login">Log Out</a>
        </Col>
        <Col span={6}>{loginData?.content?.email}</Col>
      </Row>

      {(uiData.articleList || uiData.articleShow || uiData.articleSearch) && (
        <div className="search">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
        </div>
      )}
      {uiData.articleList && <ArticleList article={article} />}
      {uiData.articleCreate && <ArticleCreate />}
      {uiData.articleShow && <ArticleShow />}
      {uiData.articleEdit && <ArticleEdit />}
      {uiData.articleSearch && <ArticleSearch />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    article: state.article,
    loginData: state.login.data,
    uiData: state.uiData,
  };
};

export default {
  component: connect(mapStateToProps, {
    getArticleList,
    setArticleSearch,
  })(Article),
};