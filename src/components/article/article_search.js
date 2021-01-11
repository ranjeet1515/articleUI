import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setArticleList } from "../actions";
import "./article.css";

function ArticleSearch(props) {
  const { ArticleSearch, setArticleList } = props;

  const back = () => {
    setArticleList(true);
  };

  return (
    <div id="article-search">
      <a onClick={back}>Back</a>
    </div>
  );
}
export default connect(null, { setArticleList })(ArticleSearch);
