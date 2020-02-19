import React from 'react';
import styles from "./styles.module.sass";

const Section = ({ children }) => <section className={styles.section}>{children}</section>;

export default Section;
