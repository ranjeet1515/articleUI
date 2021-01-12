import React from "react";
import { connect } from "react-redux";
import "./article.css";
import { Row, Col, Input } from "antd";
import { setArticleSearch, getArticleSearchList } from "../actions";
import ArticleShow from "./article_show";
import ArticleList from "./article_list";
import ArticleCreate from "./article_create";
import ArticleEdit from "./article_edit";
import ArticleSearch from "./article_search";
import Logout from "../logout/logout";

const { Search } = Input;

function Article(props) {
  const { article, uiData, setArticleSearch, getArticleSearchList } = props;

  const email = localStorage.getItem("email");
  const login_id = localStorage.getItem("login_id");

  const logOut = () => {
    localStorage.removeItem("login_id");
    localStorage.removeItem("email");
  };

  if (!email || !login_id) {
    return <Logout />;
  }

  const onSearch = (value) => {
    setArticleSearch(true);
    if (value) {
      getArticleSearchList(login_id, value);
    }
  };

  return (
    <div id="article">
      <Row className="login-detail">
        <Col span={2} offset={16} onClick={logOut}>
          <a href="/login">Log Out</a>
        </Col>
        <Col span={6} className="email">
          {email}
        </Col>
      </Row>
      {(uiData.articleList || uiData.articleSearch) && (
        <Row>
          <Col span={6} offset={18}>
            <div className="article-search">
              <Search
                placeholder="Search by Title"
                onSearch={onSearch}
                enterButton
              />
            </div>
          </Col>
        </Row>
      )}
      {uiData.articleList && <ArticleList login_id={login_id} />}
      {uiData.articleCreate && (
        <ArticleCreate login_id={login_id} article={article} />
      )}
      {uiData.articleShow && <ArticleShow article={article} />}
      {uiData.articleEdit && (
        <ArticleEdit
          login_id={login_id}
          article={article}
          articleId={uiData?.editArticleId}
        />
      )}
      {uiData.articleSearch && <ArticleSearch article={article} />}
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
    setArticleSearch,
    getArticleSearchList,
  })(Article),
};
