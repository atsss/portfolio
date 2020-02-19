import React from 'react';
import About from './components/organisms/About';
import Works from './components/organisms/Works';
import { Layout } from 'antd';
import { Typography } from 'antd';
import './App.sass';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => (
  <Layout className="layout">
    <Header className="header">
      <Title style={{ color: '#fff', lineHeight: '64px' }}>Atsushi's Portfolio</Title>
    </Header>
    <Content className="content">
      <About />
      <Works />
    </Content>
    <Footer className="footer">Atsushi's Portfolio ©2020 Created by Atsushi</Footer>
  </Layout>
);

export default App;
