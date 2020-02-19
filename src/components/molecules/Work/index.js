import React from 'react';
import Image from '../../atoms/Image';
import { Typography } from 'antd';
import { Row, Col } from 'antd';

const { Title, Paragraph, Text } = Typography;

const List = ({ title, image, paragraphs, link }) => (
  <Row gutter={16}>
    <Col span={6}>
      <Image alt={image.alt} src={image.src} />
    </Col>
    <Col span={18}>
      <Title level={3}>{title}</Title>
      {paragraphs.map(paragraph => (
        <Paragraph>{paragraph}</Paragraph>
      ))}
      <Text underline>
        <a href={link} target="blank">more details</a>
      </Text>
    </Col>
  </Row>
);

export default List;
