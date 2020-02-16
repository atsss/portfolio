import React from 'react';
import { Layout } from 'antd';
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import './App.sass';
import profile from './assets/images/profile.jpg';
import payment from './assets/images/payment.jpg';
import search from './assets/images/search.jpg';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const Section = ({ children }) => <section className="section">{children}</section>;

const App = () => (
  <Layout className="layout">
    <Header className="header">
      <Title style={{ color: '#fff', lineHeight: '64px' }}>Atsushi's Portfolio</Title>
    </Header>
    <Content className="content">
      <Section>
        <Title level={2}>About</Title>
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
      <Section>
        <Title level={2}>Works</Title>
        <ul>
          <li>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <img
                  alt="payment"
                  src={payment}
                  className="image"
                />
              </Col>
              <Col className="gutter-row" span={18}>
                <Title level={3}>Local Works Payment</Title>
                <Paragraph>Local Works Payment is a QR payment service for small and medium-sized enterprises in the Japanese construction industry.</Paragraph>
                <Paragraph>I was in charge of development and UI/UX design.</Paragraph>
                <Paragraph>I researched UX. Then I did coding web/native app and UI design.</Paragraph>
                <Text underline>
                  <a href="https://docs.google.com/document/d/1a9eFUsWiF2P6MPvbS-NG2DVKteF5CIzDLYXUAG-1nzA/edit?usp=sharing" target="blank">more details</a>
                </Text>
              </Col>
            </Row>
          </li>
          <li className="u-mt24">
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <img
                  alt="search"
                  src={search}
                  className="image"
                />
              </Col>
              <Col className="gutter-row" span={18}>
                <Title level={3}>Local Works Search</Title>
                <Paragraph>Local Works Search is a job matching service for small and medium-sized enterprises in the Japanese construction industry.</Paragraph>
                <Paragraph>I was in charge of development and UI/UX design.</Paragraph>
                <Paragraph>I researched UX. Then I did coding web app and UI design.</Paragraph>
                <Text underline>
                  <a href="https://docs.google.com/document/d/1sj17XyrbsAV-m15hzrt3lX7wtsEazl7t4VbVQTbIyQw/edit?usp=sharing" target="blank">more details</a>
                </Text>
              </Col>
            </Row>
          </li>
        </ul>
      </Section>
    </Content>
    <Footer className="footer">Atsushi's Portfolio ©2020 Created by Atsushi</Footer>
  </Layout>
);

export default App;
