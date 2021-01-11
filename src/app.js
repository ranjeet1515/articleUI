import React from "react";
import "antd/dist/antd.css";
import Helmet from "react-helmet";
import Row from "antd/lib/row";
import { renderRoutes } from "react-router-config";

function App(props) {
  return (
    <div>
      <Helmet
        titleTemplate="%s | Article"
        title="Article"
        titleAttributes={{ itemprop: "name" }}
        link={[
          {
            rel: "stylesheet",
            href:
              "https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,500,700",
          },
        ]}
        script={[]}
        meta={[
          { name: "description", content: "The article" },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
        ]}
      />
      <Row>
        <main role="main">{renderRoutes(props.route.routes)}</main>
      </Row>
    </div>
  );
}

export default {
  component: App,
};
