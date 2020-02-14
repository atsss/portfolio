import React from 'react';
import { Layout } from 'antd';
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import './App.sass';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const Section = ({ children }) => <section className="section">{children}</section>;

const App = () => (
  <Layout className="layout">
    <Header>
      <Title style={{ color: '#fff', lineHeight: '64px' }}>Atsushi's Portfolio</Title>
    </Header>
    <Content className="content">
      <Section>
        <Title level={2}>About Me</Title>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <img
              alt="profile"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              className="image"
            />
          </Col>
          <Col className="gutter-row" span={18}>
            <div className="gutter-box">col-6</div>
          </Col>
        </Row>
      </Section>
      <Section>
        <Title level={2}>About Me</Title>
        <div>Content</div>
      </Section>
    </Content>
    <Footer className="footer">Atsushi's Portfolio ©2020 Created by Atsushi</Footer>
  </Layout>
);

export default App;
