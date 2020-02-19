import React from 'react';
import Section from '../../atoms/Section';
import Image from '../../atoms/Image';
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import payment from '../../../assets/images/payment.jpg';
import search from '../../../assets/images/search.jpg';

const { Title, Paragraph, Text } = Typography;

const Works = () => (
  <Section>
    <Title level={2}>Works</Title>
    <ul>
      <li>
        <Row gutter={16}>
          <Col span={6}>
            <Image alt="payment" src={payment} />
          </Col>
          <Col span={18}>
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
          <Col span={6}>
            <Image alt="search" src={search} />
          </Col>
          <Col span={18}>
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
);

export default Works;
