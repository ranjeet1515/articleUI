import React from "react";
import { connect } from "react-redux";
import "./article.css";
import { Row, Col, Spin } from "antd";
import { setArticleList } from "../actions";

function ArticleShow(props) {
  const {
    setArticleList,
    article: { isGetArticleDetailsPending, details },
  } = props;

  if (isGetArticleDetailsPending) {
    return <Spin tip="Loading..." />;
  }

  const back = () => {
    setArticleList(true);
  };

  return (
    <div id="article-show">
      <Row className="header">
        <Col span={4}>
          <h2>Article Details</h2>
        </Col>
        <Col span={1} offset={19}>
          <a onClick={back}>Back</a>
        </Col>
      </Row>
      <div>
        <h2>{details?.content?.article?.title}</h2>
        <p>
          <span>{details?.content?.article?.publish_date}</span>
          <span> by {details?.content?.article?.author}</span>
        </p>
        <p>{details?.content?.article?.content}</p>
      </div>
    </div>
  );
}

export default connect(null, { setArticleList })(ArticleShow);
