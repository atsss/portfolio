import payment from '../assets/images/payment.jpg';
import search from '../assets/images/search.jpg';
import presentation from '../assets/images/presentation.jpg';
import qiita from '../assets/images/qiita.png';

const works = [
  {
    title: "Tips to do both of UI design and development",
    image: { alt: "presentation", src: presentation },
    paragraphs: [
      "This is the airticle about the presentation I did.",
      "After I released Local Works Payment, I decided to share the tips to design UI with atomic design",
      "and how to code it efficiently with React.(only Japanese)"
    ],
    link: "https://logmi.jp/tech/articles/320774"
  },
  {
    title: "Local Works Payment",
    image: { alt: "payment", src: payment },
    paragraphs: [
      "Local Works Payment is a QR payment service for small and medium-sized enterprises in the Japanese",
      "construction industry. I was in charge of development and ui/ux design.",
      "I researched UX. then I did coding web/native app and UI design."
    ],
    link: "https://docs.google.com/document/d/1a9eFUsWiF2P6MPvbS-NG2DVKteF5CIzDLYXUAG-1nzA/edit?usp=sharing"
  },
  {
    title: "Tips to research UX from nothing",
    image: { alt: "presentation", src: presentation },
    paragraphs: [
      "This is the airticle about the presentation I did.",
      "After I released Local Works Search, I decided to share the tips to research UI and interview users.",
      "I shared common failures when making something new as well.(only Japanese)"
    ],
    link: "https://logmi.jp/tech/articles/320290"
  },
  {
    title: "Local Works Search",
    image: { alt: "search", src: search },
    paragraphs: [
      "Local Works Search is a job matching service for small and medium-sized enterprises in the Japanese",
      "construction industry. I was in charge of development and UI/UX design.",
      "I researched UX. Then I did coding web app and UI design."
    ],
    link: "https://docs.google.com/document/d/1sj17XyrbsAV-m15hzrt3lX7wtsEazl7t4VbVQTbIyQw/edit?usp=sharing"
  },
  {
    title: "How to do UX design for engineers",
    image: { alt: "qiita", src: qiita },
    paragraphs: [
      "I wrote the ariticle about UX design for software engineers",
      "The ariticle is a summary of the Human Centered Design class I took in AIIT",
      "and focuses on how engineers do it with developing.(only Japanese)"
    ],
    link: "https://qiita.com/Atsss/items/3b610e20fa8d5f830b40"
  },
  {
    title: "How to reduce CSS files with FLOCSS",
    image: { alt: "qiita", src: qiita },
    paragraphs: [
      "I wrote the ariticle about designing CSS with FLOCSS",
      "The ariticle tells you difficulties to design CSS",
      "and tips to reduce CSS files and manage the project.(only Japanese)"
    ],
    link: "https://qiita.com/Atsss/items/4f9d98fb1d0546539c09"
  }
];

export default works;
