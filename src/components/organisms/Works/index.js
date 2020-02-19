import React from 'react';
import Section from '../../atoms/Section';
import Work from "../../molecules/Work";
import { Typography } from 'antd';
import payment from '../../../assets/images/payment.jpg';
import search from '../../../assets/images/search.jpg';

const { Title } = Typography;

const works = [
  {
    title: "Local Works Payment",
    image: { alt: "payment", src: payment },
    paragraphs: [
      "Local Works Payment is a QR payment service for small and medium-sized enterprises in the Japanese construction industry.",
      "I was in charge of development and UI/UX design.",
      "I researched UX. Then I did coding web/native app and UI design."
    ],
    link: "https://docs.google.com/document/d/1a9eFUsWiF2P6MPvbS-NG2DVKteF5CIzDLYXUAG-1nzA/edit?usp=sharing"
  },
  {
    title: "Local Works Search",
    image: { alt: "search", src: search },
    paragraphs: [
      "Local Works Search is a job matching service for small and medium-sized enterprises in the Japanese construction industry.",
      "I was in charge of development and UI/UX design.",
      "I researched UX. Then I did coding web app and UI design."
    ],
    link: "https://docs.google.com/document/d/1sj17XyrbsAV-m15hzrt3lX7wtsEazl7t4VbVQTbIyQw/edit?usp=sharing"
  }
]

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
