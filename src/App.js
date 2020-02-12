import React from 'react';
import { Layout } from 'antd';
import './App.sass';

const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
    </Header>
    <Content className="content">
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
    </Content>
    <Footer className="footer">Atsushi's portfolio ©2020 Created by Atsushi</Footer>
  </Layout>
);

export default App;
