import React from "react";
import { connect } from "react-redux";
import { setArticleList } from "../actions";
import "./article.css";
import { Row, Col, Spin, Result } from "antd";

function ArticleSearchList(props) {
  const {
    setArticleList,
    article: {
      searchList,
      isGetArticleSearchListPending,
      getArticleSearchListError,
    },
  } = props;

  if (isGetArticleSearchListPending || getArticleSearchListError) {
    return <Spin tip="Loading..." />;
  }

  const back = () => {
    setArticleList(true);
  };

  if (searchList?.content?.article_list?.length < 1) {
    return (
      <div>
        <a onClick={back}>Back</a>
        <Result title="No Record Found" />
      </div>
    );
  }
  return (
    <div id="article-search">
      <Row className="header">
        <Col span={4}>
          <h2>Search Article</h2>
        </Col>
        <Col span={1} offset={19}>
          <a onClick={back}>Back</a>
        </Col>
      </Row>
      <div className="search-content">
        {searchList?.content?.article_list.map((data, index) => (
          <Row>
            <Col span={6} offset={4}>
              <h3>{data.title}</h3>
            </Col>
            <Col span={6} offset={4}>
              {data.publish_date} by {data.author}
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
}
export default connect(null, { setArticleList })(ArticleSearchList);
