import React from 'react';
import Section from '../../atoms/Section';
import Work from "../../molecules/Work";
import { Typography } from 'antd';
import works from '../../../data/works';

const { Title } = Typography;

const Works = () => (
  <Section>
    <Title level={2}>Works</Title>
    <ul>
      {works.map(work => (
        <li className="u-mt24">
          <Work {...work} />
        </li>
      ))}
    </ul>
  </Section>
);

export default Works;
