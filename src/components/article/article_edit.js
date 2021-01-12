import React, { useState } from "react";
import { connect } from "react-redux";
import "./article.css";
import { Button, Row, Col, Table, Tag, Space, Popconfirm } from "antd";
import { setArticleList } from "../actions";

function ArticleEdit(props) {
  const { setArticleList } = props;

  const back = () => {
    setArticleList(true);
  };
  return (
    <div id="article-edit">
      <a onClick={back}>Back</a>
      edit article
    </div>
  );
}

export default connect(null, { setArticleList })(ArticleEdit);
