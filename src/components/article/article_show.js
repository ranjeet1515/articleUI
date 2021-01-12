import React, { useState } from "react";
import { connect } from "react-redux";
import "./article.css";
import { Button, Row, Col, Table, Tag, Space, Popconfirm } from "antd";
import { setArticleList } from "../actions";

function ArticleShow(props) {
  const { setArticleList } = props;

  const back = () => {
    setArticleList(true);
  };

  return (
    <div id="article-show">
      <a onClick={back}>Back</a>
      show article
    </div>
  );
}

export default connect(null, { setArticleList })(ArticleShow);
