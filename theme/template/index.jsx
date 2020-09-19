import React from "react";
import { Link } from "bisheng/router";
import zhCn from "../zh-CN";

export default function NotFound({ location }) {
  // eslint-disable-next-line no-console
  return (
    <div id="page-404">
      <section>
        <h2>上海财经大学<br />&nbsp;&nbsp;同等学力2020级经济统计学学习笔记</h2>
        <p style={{ marginTop: 100 }}>
          <Link to={zhCn.messages["app.home.url"]}>
            点击进入
          </Link>
        </p>
      </section>
      <style dangerouslySetInnerHTML={{ __html: "#react-content { height: 100%; background-color: #fff }" }} />
    </div>
  );
}
