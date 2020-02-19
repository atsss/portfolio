import React from 'react';
import Section from '../../atoms/Section';
import Image from '../../atoms/Image';
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import profile from '../../../assets/images/profile.jpg';

const { Title, Paragraph } = Typography;

const About = () => (
  <Section>
    <Title level={2}>About</Title>
    <Row gutter={16}>
      <Col span={6}>
        <Image alt="profile" src={profile} />
      </Col>
      <Col span={18}>
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
);

export default About;
