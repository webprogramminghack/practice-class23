import React from 'react';
import styles from './Item.module.scss';

type ItemProps = {
  children: React.ReactNode;
};

export const Item = ({ children }: ItemProps) => {
  return <li className={styles.item}>{children}</li>;
};
