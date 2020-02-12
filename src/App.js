import React from 'react';
import { Layout } from 'antd';
import { Typography } from 'antd';
import './App.sass';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => (
  <Layout className="layout">
    <Header>
      <Title style={{ color: '#fff', lineHeight: '64px' }}>Atsushi's Portfolio</Title>
    </Header>
    <Content className="content">
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
    </Content>
    <Footer className="footer">Atsushi's Portfolio ©2020 Created by Atsushi</Footer>
  </Layout>
);

export default App;
