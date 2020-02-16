import React from 'react';
import { Layout } from 'antd';
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import './App.sass';
import profile from './assets/images/profile.jpg';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Section = ({ children }) => <section className="section">{children}</section>;

const App = () => (
  <Layout className="layout">
    <Header className="header">
      <Title style={{ color: '#fff', lineHeight: '64px' }}>Atsushi's Portfolio</Title>
    </Header>
    <Content className="content">
      <Section>
        <Title level={2}>About Me</Title>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <img
              alt="profile"
              src={profile}
              className="image"
            />
          </Col>
          <Col className="gutter-row" span={18}>
            <Paragraph>My name is Atsushi Ito.</Paragraph>
            <Paragraph>I was born in Oslo, Norway and grew up in Tokyo, Japan.</Paragraph>
            <Paragraph>Now I'm studying Interaction Design at CIID in Costa Rica.</Paragraph>
            <Paragraph>I used to work for a startup as a software engineer and UI/UX designer.</Paragraph>
            <Paragraph>I love technology and design.</Paragraph>
            <Paragraph>contact: atsushi0623itoh@gmail.com</Paragraph>
            <Paragraph>Facebook: https://www.facebook.com/atsushi.ito.7758</Paragraph>
            <Paragraph>Github: https://github.com/atsss</Paragraph>
          </Col>
        </Row>
      </Section>
    </Content>
    <Footer className="footer">Atsushi's Portfolio ©2020 Created by Atsushi</Footer>
  </Layout>
);

export default App;
