import React from "react";
import { Empty } from "antd";

const NotFoundPage = () => {
  return (
    <div id="common-error-handler">
      <div className="content unauth-loader-error-container">
        <Empty description={false} />
        <div className="status-code">404</div>
        <div className="description">Page not Found</div>
        <a href="/">Back Home</a>
      </div>
    </div>
  );
};

export default {
  component: NotFoundPage,
};
