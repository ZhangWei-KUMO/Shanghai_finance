import React from "react";
import { Link } from "bisheng/router";
import zhCn from "../zh-CN";
import { Button, Row, Col } from 'antd';

export default function NotFound({ location }) {
  // eslint-disable-next-line no-console
  return (
    <div>
      <section id="screen_1">
        <Link to={zhCn.messages["app.home.url"]}>
          <img src="https://self-1253763202.cos.ap-chengdu.myqcloud.com/applications/shangcai/econemic_1.jpg" />
        </Link>
      </section>
      <section id="screen_2">
        <Row>
          <Col lg={8}>
            <img src="https://self-1253763202.cos.ap-chengdu.myqcloud.com/applications/shangcai/icon_1.jpg" />
            <div className="card">
              <h4>系统性</h4>
              <p>针对不同的学科、章节整理不同的学习笔记，方便查找复习。对于常见的校考、国考重点会进行单独的标注。</p>
            </div>
          </Col>
          <Col lg={8}>
            <img src="https://self-1253763202.cos.ap-chengdu.myqcloud.com/applications/shangcai/icon_2.jpg" />
            <div className="card">
              <h4>可视性</h4>
              <p>学习文档除支持Markdown文本编辑和LaTex数学公式编辑外，还支持XMind思维导图、Geogebra函数几何化工具。
              </p>
            </div>
          </Col>
          <Col lg={8}>
            <img src="https://self-1253763202.cos.ap-chengdu.myqcloud.com/applications/shangcai/icon_3.jpg" />
            <div className="card">
              <h4>应用性</h4>
              <p>基于实际工作案例会使用Power BI、Echarts、
                AntV等数据可视化工具和TensorFlow.js机器学习工具制作相关案例的大数据训练集。</p>
            </div>
          </Col>
        </Row>
      </section>
      {/* <section id="screen_3">
        <img src="https://self-1253763202.cos.ap-chengdu.myqcloud.com/applications/shangcai/econemic_2.jpg" width="100%" />
      </section> */}
      <section id="screen_4">
        <center>
          <h2>- 学习配套 -</h2>
          <Row>
            <Col lg={12}>
              <a href="https://login.sufe.edu.cn/cas/login" target="_blank">
                <img src="https://self-1253763202.cos.ap-chengdu.myqcloud.com/applications/shangcai/link_1.jpg" />
              </a>
            </Col>
            <Col lg={12}>
              <a href="https://echarts.apache.org" target="_blank">
                <img src="https://self-1253763202.cos.ap-chengdu.myqcloud.com/applications/shangcai/link_2.jpg" />
              </a>

            </Col>
            <Col lg={12}>
              <a href="https://www.tensorflow.org/?hl=zh-cn" target="_blank">
                <img src="https://self-1253763202.cos.ap-chengdu.myqcloud.com/applications/shangcai/link_3.jpg" />
              </a>
            </Col>
            <Col lg={12}>
              <a href="https://xueshu.soogle.top/" target="_blank">
                <img src="https://self-1253763202.cos.ap-chengdu.myqcloud.com/applications/shangcai/link_4.jpg" />
              </a>
            </Col>
            <Col lg={12}>
              <a href="#" target="_blank">
                <img src="https://self-1253763202.cos.ap-chengdu.myqcloud.com/applications/shangcai/link_5.jpg" />
              </a>
            </Col>
            <Col lg={12}>
              <a href="#" target="_blank">
                <img src="https://self-1253763202.cos.ap-chengdu.myqcloud.com/applications/shangcai/link_6.jpg" />
              </a>
            </Col>
          </Row>
        </center>
      </section>
      <style dangerouslySetInnerHTML={{ __html: "#react-content { height: 100%; background-color: #fff }" }} />
    </div>
  );
}
