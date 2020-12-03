import React from 'react';
import styles from '../container/Container.module.css';

export function Container({ children }) {
  return <div className={styles.container}>{children}</div>
}