import React from 'react';
import styles from "./styles.module.sass";

const Image = ({ src, alt }) => (
  <img
    alt={alt}
    src={src}
    className={styles.image}
  />
);

export default Image;
